# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Opositores a profesor de Formación Profesional, de cualquier especialidad de FP y de cualquier comunidad autónoma. El caso típico ya tiene la Programación Didáctica hecha, o a medias, y «cumple con todo»: tiene resultados de aprendizaje, criterios, unidades y atención a la diversidad. Aun así hay apartados que no sabría explicar si el tribunal le pregunta por qué. Cuando le preguntan, contesta citando la normativa.

Su tarea es conseguir una programación que pueda defender ante el tribunal, y que no se le caiga en la defensa oral.

## Product Purpose

CódigoFP enseña a construir y defender la Programación Didáctica de FP. Hoy el producto es una newsletter gratuita que sale cada martes y alterna cuatro pilares (ver «Alcance temático»). Para captar suscriptores hay un lead magnet que se envía al confirmar el email: un vídeo de 6 minutos, un autodiagnóstico de 20 minutos y un mapa del orden de decisiones en una página para imprimir.

Las landings de pre-lanzamiento (`/landing`, `/landing-meta`, `/landing-meta-libreta`) y la home captan suscriptores. `/gracias` gestiona la confirmación del email.

Hay éxito cuando un opositor se suscribe, confirma el email y llega a defender su programación con respuestas propias, no con artículos de la normativa.

## Positioning

El método se basa en el orden en que se toman las decisiones de la programación, no en cómo se redacta. Por ejemplo, la introducción y la justificación se escriben al final. Cada fase tiene que aguantar la pregunta del tribunal que le corresponde.

Se contrapone de forma explícita a las academias que dan una programación tipo para rellenar y a la IA que escribe 60 páginas en una tarde. Ninguna de las dos te da lo que contestar cuando el tribunal pregunta por qué.

Lo sostiene la trayectoria real de Ginés: en 2023 se quedó a 0,13 de la plaza con una programación que cumplía con todo. En 2025 sacó un 9,6 en la defensa, la mejor nota de su especialidad, cambiando el orden de trabajo, no estudiando más.

## Operating Context

- El visitante suele llegar desde anuncios de Meta o redes sociales a una landing, a menudo desde el móvil.
- La suscripción se hace con MailerLite, con doble opt-in. Después viene `/gracias`, con accesos directos a Gmail y Outlook y ayuda para encontrar el correo en spam o en Promociones.
- La newsletter sale un correo por semana, los martes, y se puede cancelar con un clic.
- Contexto de la oposición: tribunal, defensa oral de la programación, evaluación por RA y CE, baremo y concurso-oposición.

## Capabilities and Constraints

- Sitio Astro estático con MDX, RSS y sitemap.
- Todas las suscripciones van al mismo formulario de MailerLite (`MAILERLITE_FORM_ACTION` en `src/consts.ts`): la home y la 404 usan el embed (`SubscribeFormMailerLite.astro` + `mailerlite-form.html`), y las landings envían sus formularios `.brand-optin` con `src/scripts/mailerlite-optin.ts`. Al cambiar estilos nunca se toca la lógica de los formularios. La integración antigua de Kit (`SubscribeForm.astro`, `kit-form.html`, `optin-pending.ts`) se conserva inactiva por si se vuelve a Kit.
- Páginas legales: `/aviso-legal` y `/politica-privacidad`.
- Alcance temático, en cuatro pilares:
  - **Programación didáctica**: estructura, evaluación por RA y CE, defensa oral.
  - **Normativa**: leer e interpretar la ley y los decretos de FP.
  - **La oposición**: baremo, cómo leer una convocatoria, anuncios de plazas.
  - **Vida del opositor**: cómo organizarte, cómo te sientes y lo que se vive durante el proceso.
  - **Nunca** trata del tema escrito ni del supuesto práctico, tampoco dentro de «la oposición».
- **Decisión abierta:** habrá un producto de pago (curso, mentoría u otro) que aún no está definido. No se inventan nombre, precio, formato ni promesas.
- **Pendiente:** el blog (`/blog`) se usará más adelante con contenido real. Hoy tiene el contenido de ejemplo de Astro (lorem ipsum), no es relevante ni sirve como evidencia. Para trabajar en él, hay que pedir la información a Ginés.
- `/sobre-mi/` cuenta la historia de Ginés para quien ya recibe la newsletter (`/about` redirige allí). El texto sale de la versión larga de `12_historia_autor.md`. El enlace «Sobre mí» va en el pie (`<Footer showAbout />`), salvo en las landings de anuncios.

## Brand Commitments

- El nombre siempre se escribe «CódigoFP», nunca «códigoFP».
- El logo es un wordmark de texto (`<Código` + `FP>`), nunca una imagen.
- Lo escribe Ginés en primera persona: docente de FP y funcionario de carrera. El tono es directo y concreto, con cifras y anécdotas reales (la noche de las 13 centésimas y las cinco hojas de Excel), sin humo.
- Lema en el pie de los correos: «Una programación didáctica que entiendes tú primero.»
- Firma de las páginas en primera persona (`/gracias`, `/confirmacion-suscripcion`, `/dentro-claustro`, `/sobre-mi`): siempre la misma, nunca solo «Ginés». Va en `<p class="signature">`: «Ginés» en `<strong>` (tinta, 17px) y debajo, en grafito a 14px/500, «CódigoFP — Una programación didáctica que entiendes tú primero.»
- El sistema visual vinculante está en `AGENTS.md` (sección «Visual system»), con sus excepciones para `/landing-meta-libreta` y `/landing-meta`.

## Evidence on Hand

- Trayectoria de Ginés (componente `TrackRecord.astro`): especialidad de Informática, Comunitat Valenciana. En 2023 se quedó a 0,13 de la plaza. En 2025 sacó un 9,6, la mejor nota de su especialidad, con el cuarto puesto en el concurso-oposición.
- La pregunta real del tribunal en 2025 sobre unidades de programación y unidades de trabajo.
- Contenido del lead magnet: vídeo de 6 min, autodiagnóstico y mapa del orden.
- Precisión de las cifras de 2025: el 9,6 es la nota de la defensa y fue la mejor de su tribunal y de toda su especialidad; el 4.º es el puesto en el concurso-oposición completo (tema, práctico, defensa y méritos).
- Biografía verificada (fuente: `12_historia_autor.md` del proyecto de marca): más de 10 años como desarrollador web, terminó DAW a los 32, dejó el desarrollo a los 37 para ser docente de FP de Informática (2022), hijo de padres docentes, tras 2023 hizo un máster para subir baremo y cambió de preparadores, ha ayudado a una decena de compañeros a preparar su defensa (la cifra de «30 defensas» **no** se usa).
- Desde 2025: 5 personas con plaza, de 3 especialidades distintas de FP: Procesos Comerciales, OGC y ADE (dato dado por Ginés; `PROOF_SINCE` en `src/consts.ts`, fila «Desde entonces» de `TrackRecord.astro`). Son personas a las que Ginés ayudó. `/landing/` usa la versión corta («5 personas con plaza, de 3 especialidades distintas.») y `/landing-meta/` la larga (`PROOF_SINCE.detail`, con las especialidades). Se usa con esa redacción, sin redondear, ampliar ni convertir en porcentaje. Sin nombres, frases, número por especialidad ni comunidades. No se cuenta una sexta plaza de Valenciano porque no es una especialidad de FP.
- **No existen** y no se deben fabricar: testimonios de suscriptores o alumnos, número de suscriptores, tasas de aprobado, logos de prensa, precios ni otros casos de éxito ajenos aparte del dato anterior.

## Product Principles

1. Defender el porqué vale más que cumplir la normativa. Cada pieza ayuda a que el opositor tenga una respuesta propia.
2. El orden importa más que la redacción: el valor está en la secuencia de decisiones.
3. Solo se cuentan pruebas reales. La autoridad sale de la experiencia verificable de Ginés, nunca de afirmaciones infladas.
4. Sin presión ni humo: un correo a la semana, baja con un clic y promesas acotadas al alcance real.
5. El alcance es estrecho a propósito: la programación didáctica y su defensa, nada más.

## Accessibility & Inclusion

Público adulto, en su mayoría docentes, que lee a menudo desde el móvil. El sitio está en español. Hay que mantener la legibilidad del cuerpo a 17px, el contraste de los tokens de marca y unos formularios accesibles (etiquetas, foco visible y mensajes claros).
