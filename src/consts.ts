// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'CódigoFP';
export const SITE_DESCRIPTION =
	'Cada martes, un correo sobre programación didáctica, normativa, la oposición y la vida del opositor. Para que la respuesta sea tuya.';

// MailerLite form that receives every subscription (home embed and the landings' own forms).
export const MAILERLITE_FORM_ACTION =
	'https://assets.mailerlite.com/jsonp/2764417/forms/203087644014413512/subscribe';

// The 2025 result, worded the same on every page (PRODUCT.md, «Evidence on Hand»): the 9,6 is the
// defence score, best of the tribunal and of the whole specialty; the 4.º is the full concurso-oposición.
export const PROOF_2025 = {
	score: '9,6',
	what: 'en la defensa de la programación didáctica',
	best: 'la mejor nota de mi tribunal y de mi especialidad',
	rank: 'Cuarto puesto en el concurso-oposición completo',
} as const;

// What happened after 2025 (given by Ginés): third row of the TrackRecord card.
export const PROOF_SINCE = {
	label: 'Desde entonces',
	count: '5',
	text: 'personas con plaza, de 3 especialidades distintas.',
	// Longer wording for /landing-meta (approved by Ginés), same count, with the specialties.
	detail:
		'personas a las que ayudé sacaron plaza: Procesos Comerciales, OGC y ADE. Cambia la normativa de cada comunidad. El orden es el mismo.',
} as const;

// One description of the newsletter for every page (PRODUCT.md, «Alcance temático»).
export const NEWSLETTER_TOPICS = 'programación didáctica, normativa, la oposición y la vida del opositor';
export const NEWSLETTER_SCOPE = `Cada martes, un correo sobre ${NEWSLETTER_TOPICS}.`;
export const NEWSLETTER_EXCLUSION = 'Nunca trata del tema escrito ni del supuesto práctico.';

// The lead magnet sent after confirming the email. Same names on every page.
export const LEAD_MAGNET = [
	{ tag: 'Vídeo · 6 min', name: 'El orden, parte por parte' },
	{ tag: 'PDF · 20 min', name: 'El autodiagnóstico' },
	{ tag: 'PDF · 1 página', name: 'El mapa del orden' },
] as const;

// Blog topics: the four pillars of the newsletter (PRODUCT.md, «Alcance temático»). The slug is the
// URL (/blog/tema/<slug>/) and the value stored in each post's `category`.
export const BLOG_CATEGORIES = [
	{ slug: 'programacion-didactica', name: 'Programación didáctica', text: 'Estructura, evaluación por RA y CE y defensa oral.' },
	{ slug: 'normativa', name: 'Normativa', text: 'Leer e interpretar la ley y los decretos de FP.' },
	{ slug: 'oposicion', name: 'La oposición', text: 'El baremo, cómo leer una convocatoria y los anuncios de plazas.' },
	{ slug: 'vida-opositor', name: 'Vida del opositor', text: 'Cómo organizarte, cómo te sientes y lo que se vive durante el proceso.' },
] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number]['slug'];
