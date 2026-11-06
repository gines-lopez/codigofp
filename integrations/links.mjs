// Writes Links.md at the project root after every `astro build`: an inventory of every CódigoFP
// page, grouped by purpose, with its production and local URL, <title> and whether search engines
// may index it. Links.md is git-ignored; it is a personal control sheet, regenerated from dist/.
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const GROUPS = [
	['Captación (anuncios)', (p) => p.startsWith('/landing')],
	['Suscripción', (p) => ['/gracias/', '/confirmacion-suscripcion/', '/dentro-claustro/'].includes(p)],
	['Sitio', (p) => ['/', '/sobre-mi/', '/404.html'].includes(p)],
	['Guías (pilares)', (p, html) => html.includes('"@type":"Article"')],
	['Blog: listados', (p) => p === '/blog/' || p.startsWith('/blog/tema/') || p.startsWith('/blog/pagina/')],
	['Blog: artículos', (p) => p.startsWith('/blog/')],
	['Legal', (p) => ['/aviso-legal/', '/politica-privacidad/'].includes(p)],
];

const decode = (s) =>
	s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

export default function links() {
	let site = '';
	let root;
	let configRedirects = {};
	return {
		name: 'codigofp-links',
		hooks: {
			'astro:config:done': ({ config }) => {
				site = (config.site ?? '').replace(/\/$/, '');
				root = config.root;
				configRedirects = config.redirects ?? {};
			},
			'astro:build:done': async ({ dir, pages, logger }) => {
				const rows = [];
				const redirects = [];
				for (const { pathname } of pages) {
					const clean = pathname.replace(/^\/|\/$/g, '');
					const is404 = clean === '404';
					const path = clean === '' ? '/' : is404 ? '/404.html' : `/${clean}/`;
					const file = is404 ? '404.html' : `${path.slice(1)}index.html`;
					let html = '';
					try {
						html = await readFile(new URL(file, dir), 'utf8');
					} catch {
						continue; // rss.xml and other non-HTML endpoints
					}
					const refresh = html.match(/http-equiv="refresh" content="0;url=([^"]+)"/);
					if (refresh) {
						redirects.push({ path, to: refresh[1] });
						continue;
					}
					const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '').trim();
					const noindex = /<meta name="robots" content="[^"]*noindex/.test(html);
					const group = GROUPS.find(([, test]) => test(path, html))?.[0] ?? 'Otras';
					rows.push({ path, title, noindex, group });
				}
				for (const [from, to] of Object.entries(configRedirects)) {
					const path = `/${from.replace(/^\/|\/$/g, '')}/`;
					if (!redirects.some((r) => r.path === path)) redirects.push({ path, to: typeof to === 'string' ? to : to.destination });
				}
				rows.sort((a, b) => a.path.localeCompare(b.path));

				const now = new Date().toLocaleString('es-ES', { dateStyle: 'long', timeStyle: 'short', timeZone: 'Europe/Madrid' });
				const indexed = rows.filter((r) => !r.noindex).length;
				let md = `# Páginas de CódigoFP\n\n`;
				md += `Generado automáticamente en cada \`astro build\` (integrations/links.mjs). No lo edites a mano: se sobrescribe. Está fuera de git.\n\n`;
				md += `Última actualización: ${now} · ${rows.length} páginas · ${indexed} indexables · ${rows.length - indexed} con noindex.\n\n`;
				md += `Los borradores (\`draft: true\`) no aparecen: solo existen en local con \`astro dev\`.\n`;
				for (const [name] of [...GROUPS, ['Otras']]) {
					const group = rows.filter((r) => r.group === name);
					if (!group.length) continue;
					md += `\n## ${name}\n\n| Página | Título | Google | Local |\n|---|---|---|---|\n`;
					for (const r of group) {
						const live = `${site}${r.path}`;
						md += `| [${r.path}](${live}) | ${r.title.replace(/\|/g, '\\|')} | ${r.noindex ? 'noindex' : 'indexable'} | [abrir](http://localhost:4321${r.path}) |\n`;
					}
				}
				if (redirects.length) {
					md += `\n## Redirecciones\n\n| Desde | Hacia |\n|---|---|\n`;
					for (const r of redirects) md += `| ${r.path} | ${r.to} |\n`;
				}
				await writeFile(new URL('Links.md', root), md);
				logger.info(`Links.md actualizado (${rows.length} páginas)`);
			},
		},
	};
}
