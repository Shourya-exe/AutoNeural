import { useEffect } from 'react';
import { useLocation } from 'wouter';

import { canonicalFor, seoFor } from '@/lib/seo';

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Keeps <head> correct across client-side navigation.
 *
 * The prerendered HTML already carries the right tags for the initial load —
 * this only matters once wouter swaps routes without a document reload, which
 * crawlers never see but users and link-preview scrapers-after-share do.
 */
export function Seo() {
  const [location] = useLocation();

  useEffect(() => {
    const seo = seoFor(location);
    const canonical = canonicalFor(seo.path);

    document.title = seo.title;
    setMeta('meta[name="description"]', 'name', 'description', seo.description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', seo.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', seo.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);
    setMeta(
      'meta[name="robots"]',
      'name',
      'robots',
      seo.noindex
        ? 'noindex, follow'
        : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    );

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [location]);

  return null;
}
