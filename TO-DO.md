# TO-DO · Landing de captación (`/landing/`)

Pendientes de los cambios de la landing (ya en `main`).

## Legal

- [ ] **Revisar la primera capa RGPD.** El texto es: «Responsable: CódigoFP. Finalidad: enviarte este material, la newsletter y, a veces, información de mis programas.» Ya está en el código, pero oculto.
  - Para publicarla, cambia `SHOW_LEGAL_LAYER = false` a `true` en `src/pages/landing.astro`.
  - Mientras siga oculta, el enlace a la política de privacidad va al final de la microcopia.
- [ ] **Acompañamiento en la política de privacidad.** Si quieres avisar en el email de bienvenida (o en la landing) de que a veces hablarás de tu acompañamiento, antes hay que añadirlo a `/politica-privacidad/` (secciones 4 y 9): ahora dice que el email solo sirve para el material y el correo de los martes, «nada más».
- [ ] **Datos del titular en el aviso legal.** Nombre y NIF están vacíos en `src/pages/aviso-legal.astro`.

## Prueba humana

- [ ] **Foto de Ginés para la tarjeta del 9,6.** Que sea real, no de stock ni generada.
  1. Guarda el archivo en `src/assets/`.
  2. Impórtalo en `src/pages/landing.astro`.
  3. Asígnalo a `const photo`.
- [ ] **Testimonios reales.** Rellena el array `testimonials` en `src/pages/landing.astro`. Con la lista vacía, el bloque no se muestra.
  - Formato: «[Frase literal]» — [Nombre], [especialidad], [comunidad], plaza en [año]

## Comprobación

- [ ] **Probar el formulario de principio a fin con un email de prueba**: envío, email de confirmación y correo de bienvenida. Falta decidir qué dirección de prueba se usa.
- [ ] **Revisar la página en un móvil real.** En headless, la parte inferior del botón queda en el píxel 693 de 812; hay que confirmar que se ve entero con las barras de Safari.

## Sobre mí (`/sobre-mi/`)

- [ ] **Revisar el copy.** Sale de la versión larga de `12_historia_autor.md`, con estos cambios:
  - Quitado lo de escribir temas en condiciones de examen y el esquema del práctico, porque CódigoFP nunca trata el tema ni el supuesto práctico.
  - «La que después sería mi mujer» (la fuente dice «futura mujer»).
  - Frases reescritas: «Me fui del desarrollo porque la vocación acabó saliendo, no por cansancio» y «…sin estudiar más que en 2023, y esta vez saqué plaza».
  - Tras la crítica del 2026-11-05:
    - Nuevos títulos: «Dos cursos con otro sistema» y «Plaza, con la programación en otro orden».
    - El bambú vuelve en 2025 («llevaba dos cursos echando raíces sin que se viera nada»).
    - Menos frases con dos puntos.
    - DAW desarrollado.
    - «El Plan» explicado como «dos cursos de preparación individual».
- [ ] **Foto de Ginés.** La misma foto real de la landing. Impórtala en `src/pages/sobre-mi.astro` y pásala como `photo={…}` a `<TrackRecord>`.
- [ ] **Comprobar la redirección `/about` → `/sobre-mi/` en producción.** Ahora es una página estática con meta refresh (`redirects` en `astro.config.mjs`). Si el hosting admite redirecciones 301, conviene pasarla allí.
- [ ] **Firma en un componente (opcional).** La firma está copiada en `/gracias`, `/confirmacion-suscripcion`, `/dentro-claustro` y `/sobre-mi`, cada una con su propio CSS. Si se cambia, hay que tocar las cuatro.

## Pilar «Cómo hacer una programación didáctica de FP»

Borrador: `~/Downloads/como-hacer-programacion-didactica-fp.md` (unas 5.500 palabras, 10 clusters).

Decisiones (2026-11-06):
- **URL en la raíz** (`/como-hacer-programacion-didactica-fp/`). Colección nueva `guias`, aparte del blog. Los clusters van en la misma colección.
- **Newsletter:** «la newsletter de CódigoFP», cada martes, sin hora ni nombre propio.
- **Lead magnet en las CTA:** los tres materiales, con los nombres de `LEAD_MAGNET`.
- **Normativa estatal:** la verifica Claude en el BOE y entrega una tabla de citas. Lo autonómico pasa a «compruébalo en tu convocatoria».

Pasos:
- [x] Colección `guias`, plantilla de lectura (índice, firma, fechas, «Resumen rápido»), componentes «norma / recomendación» y «Cómo lo aplico yo», tabla de errores y FAQ. JSON-LD `Article` + `BreadcrumbList`.
- [x] Diagramas sin Mermaid, como componentes de marca:
  - Cadena de normas.
  - Las cinco fases.
  - Diálogo tribunal 2023 / 2025.
  - Meses.
  - Cuadrante 2×2, o quitarlo.
  - El mapa mental se quita.
- [x] Suscripción: dos `OptinForm` (uno a media página y uno al final). Se quita la CTA del principio.
- [x] Enlaces a clusters sin publicar: se muestran como texto hasta que exista la página.
- [x] Correcciones de copy:
  - Precisión del 9,6 (`PROOF_2025`).
  - Lead magnet: «El mapa del orden», no «El orden de una programación defendible».
  - Quitar la mención a los temas.
  - Añadir `PROOF_SINCE`.
  - Repaso anti-IA (fórmulas repetidas en las 12 secciones).
- [x] Verificar en el BOE los `[VERIFICAR]` estatales y entregar tabla con artículo y enlace.
- [ ] `[COMPLETAR]` de Ginés (en `Contestar.md`): anécdota de revisión, contextualización 2025, matriz RA–UT, reparto de horas, metodología concreta, alumnado y medidas de diversidad, si partió de un modelo, plan de 6 meses, tiempo dentro de «El Plan», cómo ensayó la defensa. Lo que no se cuente, se quita (no se inventa).
- [ ] Escribir los clusters de normativa y calendario (2026-11-07 y 2026-11-08). Los clusters son artículos del blog (`/blog/<slug>/`).
- [x] Publicado en local en `/como-hacer-programacion-didactica-fp/`, con «Hacer PD» y «Blog» en el menú.
- [ ] Crítica y pulido en móvil y escritorio.
- [ ] El índice de `/blog/` sigue con los artículos de ejemplo de Astro y ya está enlazado desde el menú.
- [ ] Normativa sin artículo confirmado: lo de no suprimir RA en las adaptaciones (se cita sin artículo).

## Descartado

- Fase 5 (test A/B): `/landing/` se sustituye directamente.
