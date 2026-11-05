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
- [ ] **Foto para la línea de prueba de `/landing-meta`** (solo móvil, 40×40, radio 8 px). Misma foto que la de la tarjeta: impórtala en `src/pages/landing-meta.astro` y asígnala a `const photo`.
- [ ] **Testimonios reales.** Rellena el array `testimonials` en `src/pages/landing.astro`. Con la lista vacía, el bloque no se muestra.
  - Formato: «[Frase literal]» — [Nombre], [especialidad], [comunidad], plaza en [año]

## Comprobación

- [ ] **Probar el formulario de principio a fin con un email de prueba**: envío, email de confirmación y correo de bienvenida. Falta decidir qué dirección de prueba se usa.
- [ ] **Revisar la página en un móvil real.** En headless, la parte inferior del botón queda en el píxel 693 de 812; hay que confirmar que se ve entero con las barras de Safari.

## Descartado

- Fase 5 (test A/B): `/landing/` se sustituye directamente.
