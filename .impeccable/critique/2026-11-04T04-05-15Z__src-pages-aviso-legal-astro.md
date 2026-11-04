---
target: "critique (rerun): aviso-legal"
total_score: 23
max_score: 36
na_heuristics: 9
p0_count: 0
p1_count: 1
target_identity: "file:/Users/gines/Documents/dev/codigofp/astro/src/pages/aviso-legal.astro"
target_fingerprint: "sha256:ae66228b45f26342810bf7bff0101bdbf5302b5883498ffbf8e18236def4a8b8"
target_path: /Users/gines/Documents/dev/codigofp/astro/src/pages/aviso-legal.astro
timestamp: 2026-11-04T04-05-15Z
slug: src-pages-aviso-legal-astro
---
/aviso-legal [Read] 23/36 (n/a 9). Known pending: holder name/NIF/address. Priority: [P1] section 7 forbids linking without permission (lines 203, 213) (clarify; not legal advice). [P2] company language ('la empresa', 'la sociedad', 'domicilio social', passwords) (clarify). [P3] Title Case title; index labels differ from H2s (polish).

Cross-site (2026-11-04 re-critique, 10 pages): [P1] 9,6 described three ways (home 'en programación didáctica y defensa', meta landings 'en la defensa', TrackRecord unqualified next to 'Cuarto puesto') -> one PROOF_2025 constant. [P1] embed label '¿A qué correo te lo mando?' vs button 'Suscribirme'/placeholder 'Tu mejor email' (landings: 'Mándamelo', 'tucorreo@ejemplo.com'). [P2] input focus indicator weak (1px border 3.0:1, halo 1.38:1). [P3] delay promises differ (1/5/10 min). Detector: 1 real low finding (global.css:122 blockquote 4px side-tab, not on these pages); no overflow, no console errors, AA contrast, unique ids, no heading skips. Known pending (owner): YouTube ID, aviso-legal holder data, home photo.
