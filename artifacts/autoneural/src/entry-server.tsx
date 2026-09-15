/**
 * SSG entry point.
 *
 * Consumed by scripts/prerender.mjs at build time to turn each route into
 * static HTML. It is never shipped to the browser and never runs as a live
 * server — the output is plain files that any web server can serve.
 */
import { renderToString } from 'react-dom/server';

import App from './App';
import { canonicalFor, jsonLdFor, seoFor } from './lib/seo';

export type PrerenderedRoute = {
  html: string;
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  noindex: boolean;
  jsonLd: Record<string, unknown>[];
};

export function render(path: string): PrerenderedRoute {
  const seo = seoFor(path);
  return {
    html: renderToString(<App ssrPath={path} />),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords ?? '',
    canonical: canonicalFor(seo.path),
    noindex: Boolean(seo.noindex),
    jsonLd: jsonLdFor(path),
  };
}

export { ROUTES } from './lib/seo';
