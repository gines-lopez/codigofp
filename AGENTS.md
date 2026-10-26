## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Visual system (mandatory)

Every page and component follows the CódigoFP visual system. Ask before deviating.

- **Brand name**: always «CódigoFP» (`SITE_TITLE` in `src/consts.ts`), never «códigoFP».
- **Logo**: text wordmark in `src/components/Header.astro`, never an image: `&lt;Código` in ink and `FP&gt;` in cobalt, Inter 700, -0.02em, 22–24px, `aria-label="CódigoFP, inicio"`.
- **Colors**: only the `--brand-*` tokens in `src/styles/global.css`; no loose hex in components. Hueso `--brand-light` background, tinta `--brand-dark` text and footer, grafito `--brand-graphite` secondary text, niebla `--brand-line` borders, cobalto `--brand-accent` for accent/buttons/links (under 10% of the page). `--brand-accent-on-dark` only on ink. No gradients, no shadows (only the focus ring), no green/red/purple/pink/yellow, no pure `#fff`/`#000`.
- **Fonts**: Inter (400–700, `--font-inter`) and JetBrains Mono (400–500, `--font-mono`), self-hosted with Astro's fonts API. No serif, no uppercase headlines, no decorative italics.
- **Type scale** (mobile → desktop): H1 32→48/700/-0.02em/1.12 · H2 24→32/600/-0.015em/1.2 · subtitle 20→26/400/-0.01em/1.35 · body 17/400/1.6 · label JetBrains Mono 13→14 · input/button Inter 16/500 · footer 13→14/500/0.01em/1.5.
- **Shared classes**: `.brand-label` (eyebrow: mono, lowercase, grafito, `// ` prefix), `.brand-input`, `.brand-button`. The Kit embed is restyled in `SubscribeForm.astro`; never change form logic.
- **Layout**: 8px spacing scale (8, 16, 24, 32, 48, 64, 96), 8px radius on inputs, buttons and cards, 1px borders in niebla, separate sections with space rather than lines, reading width max 720px, 16px mobile gutter, no horizontal scroll.
- **Exceptions**: `/landing-meta-libreta` keeps its red pen, grid paper, Kalam font and drawing animations. `/landing-meta` keeps its two-column hero.
