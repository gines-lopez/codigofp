# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Opositores a profesor de Formación Profesional, de cualquier especialidad de FP y de cualquier comunidad autónoma. El caso típico ya tiene la Programación Didáctica hecha, o a medias, y «cumple con todo»: tiene resultados de aprendizaje, criterios, unidades y atención a la diversidad. Aun así hay apartados que no sabría explicar si el tribunal le pregunta por qué. Cuando le preguntan, contesta citando la normativa.

Su tarea es conseguir una programación que pueda defender ante el tribunal, y que no se le caiga en la defensa oral.

## Product Purpose

CódigoFP enseña a construir y defender la Programación Didáctica de FP. Hoy el producto es una newsletter gratuita en Kit que sale cada martes y trata una decisión de la programación a fondo. Para captar suscriptores hay un lead magnet que se envía al confirmar el email: un vídeo de 6 minutos, un autodiagnóstico de 20 minutos y un mapa del orden de decisiones en una página para imprimir.

Las landings de pre-lanzamiento (`/landing`, `/landing-meta`, `/landing-meta-libreta`) y la home captan suscriptores. `/gracias` gestiona la confirmación del email.

Hay éxito cuando un opositor se suscribe, confirma el email y llega a defender su programación con respuestas propias, no con artículos de la normativa.

## Positioning

El método se basa en el orden en que se toman las decisiones de la programación, no en cómo se redacta. Por ejemplo, la introducción y la justificación se escriben al final. Cada fase tiene que aguantar la pregunta del tribunal que le corresponde.

Se contrapone de forma explícita a las academias que dan una programación tipo para rellenar y a la IA que escribe 60 páginas en una tarde. Ninguna de las dos te da lo que contestar cuando el tribunal pregunta por qué.

Lo sostiene la trayectoria real de Ginés: en 2023 se quedó a 0,13 de la plaza con una programación que cumplía con todo. En 2025 sacó un 9,6 en la defensa, la mejor nota de su especialidad, cambiando el orden de trabajo, no estudiando más.

## Operating Context

- El visitante suele llegar desde anuncios de Meta o redes sociales a una landing, a menudo desde el móvil.
- La suscripción se hace con formularios de Kit, que piden doble opt-in. Después viene `/gracias`, con accesos directos a Gmail y Outlook y ayuda para encontrar el correo en spam o en Promociones.
- La newsletter sale un correo por semana, los martes, y se puede cancelar con un clic.
- Contexto de la oposición: tribunal, defensa oral de la programación, evaluación por RA y CE, baremo y concurso-oposición.

## Capabilities and Constraints

- Sitio Astro estático con MDX, RSS y sitemap.
- Hay una integración de formularios de Kit (`SubscribeForm.astro`, `kit-form.html` y el formulario de `/landing`, id `9943840`). Al cambiar estilos nunca se toca la lógica de los formularios.
- Páginas legales: `/aviso-legal` y `/politica-privacidad`.
- Alcance temático: estructura de la programación, evaluación por RA y CE, defensa oral y baremo. **No** trata del tema escrito ni del supuesto práctico.
- **Decisión abierta:** habrá un producto de pago (curso, mentoría u otro) que aún no está definido. No se inventan nombre, precio, formato ni promesas.
- **Pendiente:** el blog (`/blog`) y `/about` se usarán más adelante con contenido real. Hoy tienen el contenido de ejemplo de Astro (lorem ipsum) y no son relevantes ni sirven como evidencia. Para trabajar en ellos, hay que pedir la información a Ginés.

## Brand Commitments

- El nombre siempre se escribe «CódigoFP», nunca «códigoFP».
- El logo es un wordmark de texto (`<Código` + `FP>`), nunca una imagen.
- Lo escribe Ginés en primera persona: docente de FP y funcionario de carrera. El tono es directo y concreto, con cifras y anécdotas reales (la noche de las 13 centésimas y las cinco hojas de Excel), sin humo.
- Lema en el pie de los correos: «Una programación didáctica que entiendes tú primero.»
- El sistema visual vinculante está en `AGENTS.md` (sección «Visual system»), con sus excepciones para `/landing-meta-libreta` y `/landing-meta`.

## Evidence on Hand

- Trayectoria de Ginés (componente `TrackRecord.astro`): especialidad de Informática, Comunitat Valenciana. En 2023 se quedó a 0,13 de la plaza. En 2025 sacó un 9,6, la mejor nota de su especialidad, con el cuarto puesto en el concurso-oposición.
- La pregunta real del tribunal en 2025 sobre unidades de programación y unidades de trabajo.
- Contenido del lead magnet: vídeo de 6 min, autodiagnóstico y mapa del orden.
- **No existen** y no se deben fabricar: testimonios de suscriptores o alumnos, número de suscriptores, tasas de aprobado, logos de prensa, precios ni casos de éxito ajenos.

## Product Principles

1. Defender el porqué vale más que cumplir la normativa. Cada pieza ayuda a que el opositor tenga una respuesta propia.
2. El orden importa más que la redacción: el valor está en la secuencia de decisiones.
3. Solo se cuentan pruebas reales. La autoridad sale de la experiencia verificable de Ginés, nunca de afirmaciones infladas.
4. Sin presión ni humo: un correo a la semana, baja con un clic y promesas acotadas al alcance real.
5. El alcance es estrecho a propósito: la programación didáctica y su defensa, nada más.

## Accessibility & Inclusion

Público adulto, en su mayoría docentes, que lee a menudo desde el móvil. El sitio está en español. Hay que mantener la legibilidad del cuerpo a 17px, el contraste de los tokens de marca y unos formularios accesibles (etiquetas, foco visible y mensajes claros).
