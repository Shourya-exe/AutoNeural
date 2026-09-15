-- ============================================================================
-- Autoneural — public lead capture (contact form + newsletter)
--
-- Threat model: both endpoints are unauthenticated and reachable by anyone on
-- the internet. Nothing here is writable by `anon`; every write goes through an
-- Edge Function running under the service role, which is the only identity that
-- bypasses RLS. The tables below therefore ship with RLS ON and *no* policies,
-- which is a deny-all for every non-service-role caller.
-- ============================================================================

create extension if not exists citext with schema extensions;
create extension if not exists pgcrypto with schema extensions;

-- ---------------------------------------------------------------------------
-- Enums
-- ---------------------------------------------------------------------------
do $$ begin
  create type public.contact_status as enum ('new', 'contacted', 'closed', 'spam');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.subscriber_status as enum ('subscribed', 'unsubscribed', 'spam');
exception when duplicate_object then null;
end $$;

-- ---------------------------------------------------------------------------
-- contact_submissions
-- ---------------------------------------------------------------------------
create table if not exists public.contact_submissions (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  name          text not null check (char_length(btrim(name)) between 1 and 120),
  company       text check (company is null or char_length(company) <= 160),
  email         extensions.citext not null check (email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]{2,}$'),
  phone         text not null check (char_length(btrim(phone)) between 6 and 24),
  -- Stored as the label the visitor actually picked, so the row reads the same
  -- as the form did. The CHECK mirrors the <select> options exactly.
  service       text not null check (service in (
                  'Custom AI agent or chatbot',
                  'Website development',
                  'Save time with automation',
                  'Dashboard or reports',
                  'Custom business software',
                  'Not sure yet'
                )),
  message       text not null check (char_length(btrim(message)) between 10 and 5000),
  status        public.contact_status not null default 'new',
  -- Salted SHA-256 of the client IP. Raw IPs are never stored: the hash is
  -- enough for rate limiting and abuse triage without holding personal data.
  ip_hash       text,
  user_agent    text check (user_agent is null or char_length(user_agent) <= 512),
  referer       text check (referer is null or char_length(referer) <= 512),
  notes         text
);

comment on table public.contact_submissions is
  'Consultation requests from the public contact form. Written only by the contact-submit Edge Function (service role).';
comment on column public.contact_submissions.ip_hash is
  'Salted SHA-256 of the submitter IP (see IP_HASH_SALT). Never store the raw address.';

-- Inbox ordering: newest first, and newest-first within a status filter.
create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);
create index if not exists contact_submissions_status_created_at_idx
  on public.contact_submissions (status, created_at desc);
-- Look up prior submissions from the same person during triage.
create index if not exists contact_submissions_email_idx
  on public.contact_submissions (email);

-- ---------------------------------------------------------------------------
-- newsletter_subscribers
-- ---------------------------------------------------------------------------
create table if not exists public.newsletter_subscribers (
  id                 uuid primary key default gen_random_uuid(),
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now(),
  email              extensions.citext not null unique
                       check (email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]{2,}$'),
  status             public.subscriber_status not null default 'subscribed',
  -- Opaque token so an unsubscribe link never has to expose the row id or email.
  unsubscribe_token  uuid not null default gen_random_uuid(),
  unsubscribed_at    timestamptz,
  ip_hash            text,
  user_agent         text check (user_agent is null or char_length(user_agent) <= 512),
  source             text not null default 'footer'
);

comment on table public.newsletter_subscribers is
  'Newsletter list. Written only by the newsletter-subscribe Edge Function (service role).';

create unique index if not exists newsletter_subscribers_unsubscribe_token_idx
  on public.newsletter_subscribers (unsubscribe_token);
create index if not exists newsletter_subscribers_status_created_at_idx
  on public.newsletter_subscribers (status, created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $fn$
begin
  new.updated_at := now();
  return new;
end;
$fn$;

drop trigger if exists newsletter_subscribers_set_updated_at on public.newsletter_subscribers;
create trigger newsletter_subscribers_set_updated_at
  before update on public.newsletter_subscribers
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Rate limiting
--
-- A hit log plus a SECURITY DEFINER counter. Kept in Postgres rather than in
-- Edge Function memory because functions are stateless and horizontally scaled,
-- so an in-process counter would reset on every cold start and be trivially
-- bypassed by spreading requests across instances.
-- ---------------------------------------------------------------------------
create table if not exists public.rate_limit_hits (
  id         bigint generated always as identity primary key,
  bucket     text not null,
  created_at timestamptz not null default now()
);

comment on table public.rate_limit_hits is
  'Append-only hit log backing public.check_rate_limit(). Pruned by the same function.';

create index if not exists rate_limit_hits_bucket_created_at_idx
  on public.rate_limit_hits (bucket, created_at desc);

-- Returns true when the caller is still under the limit, and records the hit.
create or replace function public.check_rate_limit(
  p_bucket          text,
  p_max_hits        integer,
  p_window_seconds  integer
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_window_start timestamptz := now() - make_interval(secs => p_window_seconds);
  v_hits         integer;
begin
  -- Opportunistic prune so the table cannot grow without bound.
  delete from public.rate_limit_hits
   where created_at < now() - interval '24 hours';

  select count(*) into v_hits
    from public.rate_limit_hits
   where bucket = p_bucket
     and created_at >= v_window_start;

  if v_hits >= p_max_hits then
    return false;
  end if;

  insert into public.rate_limit_hits (bucket) values (p_bucket);
  return true;
end;
$fn$;

-- ---------------------------------------------------------------------------
-- Least privilege
--
-- RLS on with zero policies == deny all for anon and authenticated. The service
-- role used by the Edge Functions bypasses RLS by design. Grants are revoked as
-- well as RLS enabled, so a policy added later by mistake still cannot be
-- exercised without an explicit grant.
-- ---------------------------------------------------------------------------
alter table public.contact_submissions    enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.rate_limit_hits        enable row level security;

alter table public.contact_submissions    force row level security;
alter table public.newsletter_subscribers force row level security;
alter table public.rate_limit_hits        force row level security;

revoke all on public.contact_submissions    from anon, authenticated;
revoke all on public.newsletter_subscribers from anon, authenticated;
revoke all on public.rate_limit_hits        from anon, authenticated;

revoke all on function public.check_rate_limit(text, integer, integer) from public, anon, authenticated;
revoke all on function public.set_updated_at() from public, anon, authenticated;

-- Grant the service role explicitly rather than relying on Supabase's default
-- privileges. The REVOKEs above strip the implicit PUBLIC grant, so without
-- these the Edge Functions would fail with "permission denied" at runtime.
grant select, insert, update, delete on public.contact_submissions    to service_role;
grant select, insert, update, delete on public.newsletter_subscribers to service_role;
grant select, insert, delete         on public.rate_limit_hits        to service_role;
grant execute on function public.check_rate_limit(text, integer, integer) to service_role;
grant execute on function public.set_updated_at() to service_role;

-- Nothing created later in `public` should be reachable from the browser either.
alter default privileges in schema public revoke all on tables from anon, authenticated;
alter default privileges in schema public revoke all on functions from anon, authenticated;
alter default privileges in schema public revoke all on sequences from anon, authenticated;
