# TO-DO · Landing de captación (`/landing/`)

Pendientes de los cambios de la rama `landing-cambios-captacion`.

## Legal

- [ ] **Revisar la primera capa RGPD.** El texto es: «Responsable: CódigoFP. Finalidad: enviarte este material, la newsletter y, a veces, información de mis programas.» Ya está en el código, pero oculto.
  - Para publicarla, cambia `SHOW_LEGAL_LAYER = false` a `true` en `src/pages/landing.astro`.
  - Mientras siga oculta, el enlace a la política de privacidad va al final de la microcopia.
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
- [ ] **Revisar la página en un móvil real.** En headless, la parte inferior del botón queda en el píxel 662 de 812.

## Descartado

- Fase 5 (test A/B): `/landing/` se sustituye directamente.
