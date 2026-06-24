import type { APIRoute } from 'astro'

const routes: { path: string; changefreq: string }[] = [
  { path: '', changefreq: 'monthly' },
  { path: 'en/', changefreq: 'monthly' },
  { path: 'privacidad', changefreq: 'yearly' },
  { path: 'aviso-legal', changefreq: 'yearly' },
  { path: 'en/privacy', changefreq: 'yearly' },
  { path: 'en/legal-notice', changefreq: 'yearly' },
]

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://anthonyeca.dev')).href
  const lastmod = new Date().toISOString().split('T')[0]

  const urls = routes
    .map(
      ({ path, changefreq }) =>
        `  <url>\n    <loc>${base}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n  </url>`,
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
