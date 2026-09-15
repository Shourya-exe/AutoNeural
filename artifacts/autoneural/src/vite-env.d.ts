/// <reference types="vite/client" />

/**
 * Only `VITE_`-prefixed variables are exposed to the browser bundle. Anything
 * secret (service-role key, database URL, IP hash salt) must stay out of this
 * list and live in the Edge Function environment instead.
 */
interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_ANON_KEY?: string;
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
