/**
 * Static site generation.
 *
 * Runs after `vite build` and turns every route in src/lib/seo.ts into a real
 * HTML file with the page content already in the markup. This is what makes the
 * site crawlable without a Node server: crawlers (and users with slow or failed
 * JS) get complete HTML, while React hydrates the same markup in place so the
 * animations and interactivity are unchanged.
 *
 * Emits: dist/public/index.html, dist/public/<route>/index.html,
 *        dist/public/404.html, sitemap.xml, robots.txt
 */
import { build } from 'vite';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const clientOut = path.join(root, 'dist/public');
const serverOut = path.join(root, 'dist/server');

const SITE_URL = (process.env.VITE_SITE_URL ?? 'https://autoneural.com').replace(/\/$/, '');

/** Insert `addition` immediately before the closing tag, if present. */
function injectBefore(html, closingTag, addition) {
  const idx = html.lastIndexOf(closingTag);
  if (idx === -1) return html + addition;
  return html.slice(0, idx) + addition + html.slice(idx);
}

/**
 * Replace the content of a meta tag that the template already declares.
 * Falls back to appending when the tag is absent, so adding a route-specific
 * tag later does not require touching index.html.
 */
function setMetaContent(html, attr, key, value) {
  const pattern = new RegExp(
    `(<meta\\s+${attr}=["']${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*content=["'])[^"']*(["'])`,
    'i',
  );
  if (pattern.test(html)) return html.replace(pattern, `$1${escapeAttr(value)}$2`);
  return injectBefore(html, '</head>', `\n    <meta ${attr}="${key}" content="${escapeAttr(value)}" />`);
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function applySeo(template, route) {
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttr(route.title)}</title>`);
  html = setMetaContent(html, 'name', 'description', route.description);
  if (route.keywords) {
    html = setMetaContent(html, 'name', 'keywords', route.keywords);
  }
  html = setMetaContent(html, 'property', 'og:title', route.title);
  html = setMetaContent(html, 'property', 'og:description', route.description);
  html = setMetaContent(html, 'property', 'og:url', route.canonical);
  html = setMetaContent(html, 'name', 'twitter:title', route.title);
  html = setMetaContent(html, 'name', 'twitter:description', route.description);
  html = setMetaContent(
    html,
    'name',
    'robots',
    route.noindex
      ? 'noindex, follow'
      : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  );

  html = html.replace(
    /<link\s+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${escapeAttr(route.canonical)}" />`,
  );

  // Structured data is per-route, so drop whatever the template carries before
  // writing this route's own graph — otherwise every page would also claim the
  // home page's JSON-LD.
  html = html.replace(
    /\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
    '',
  );
  for (const block of route.jsonLd ?? []) {
    html = injectBefore(
      html,
      '</head>',
      `\n    <script type="application/ld+json">${JSON.stringify(block)}</script>\n  `,
    );
  }

  return html;
}

/**
 * Entry animations render at opacity 0 until framer-motion runs. Without this
 * the prerendered HTML would look blank to a JS-less client. Crawlers execute
 * JS so it does not affect indexing, but it makes the static output honest.
 */
const NOSCRIPT_FALLBACK = `
    <noscript>
      <style>
        [style*="opacity:0"], [style*="opacity: 0"] { opacity: 1 !important; transform: none !important; }
      </style>
    </noscript>
  `;

function sitemapXml(routes) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .filter((r) => !r.noindex)
    .map((r) => {
      const loc = r.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${r.path}`;
      const priority = r.path === '/' ? '1.0' : '0.7';
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        '    <changefreq>weekly</changefreq>',
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function robotsTxt() {
  return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Build artefacts hold no indexable content.
Disallow: /assets/

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

async function main() {
  const template = await readFile(path.join(clientOut, 'index.html'), 'utf-8');

  // Build the same app for Node so we can render it without a browser.
  await build({
    configFile: path.join(root, 'vite.config.ts'),
    logLevel: 'warn',
    build: {
      ssr: path.join(root, 'src/entry-server.tsx'),
      outDir: serverOut,
      emptyOutDir: true,
      copyPublicDir: false,
    },
  });

  const entry = await import(pathToFileURL(path.join(serverOut, 'entry-server.js')).href);
  const { render, ROUTES } = entry;

  for (const route of ROUTES) {
    const result = render(route.path);

    let html = applySeo(template, result);
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${result.html}</div>`,
    );
    html = injectBefore(html, '</head>', NOSCRIPT_FALLBACK);

    // "/" -> index.html, "/404" -> 404.html, "/foo" -> foo/index.html so the
    // URL keeps working without an extension on any static server.
    let outFile;
    if (route.path === '/') outFile = path.join(clientOut, 'index.html');
    else if (route.path === '/404') outFile = path.join(clientOut, '404.html');
    else outFile = path.join(clientOut, route.path.replace(/^\//, ''), 'index.html');

    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, html, 'utf-8');
    console.log(`  prerendered ${route.path} -> ${path.relative(root, outFile)}`);
  }

  await writeFile(path.join(clientOut, 'sitemap.xml'), sitemapXml(ROUTES), 'utf-8');
  await writeFile(path.join(clientOut, 'robots.txt'), robotsTxt(), 'utf-8');
  console.log('  wrote sitemap.xml and robots.txt');

  // The SSR bundle is a build-time tool, not part of the deployable site.
  await rm(serverOut, { recursive: true, force: true });
}

main().catch((err) => {
  console.error('\nPrerender failed:\n', err);
  process.exit(1);
});
