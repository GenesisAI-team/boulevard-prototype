# ROADMAP — Boulevard Prototype (astro-v2)

Fases orientativas de la reconstrucción. Cada fase se materializa en issues Linear (equipo Genesis, prefijos `feat|fix|chore/GEN-ID-...`).

## Fase 1 — Infraestructura (actual, GEN-5)

- [x] Astro 7 + TypeScript strictest + Tailwind 4 configurados
- [x] Vitest + Playwright funcionales
- [x] Lint + typecheck + CI básico (Node 22.16.0)
- [x] README / ROADMAP / ARCHITECTURE / AGENTS

## Fase 2 — Diseño y contenido

- Identidad visual definitiva (branding, paleta, tipografía) sobre los tokens de `global.css`
- Sistema de layout para la landing comercial (hero, carta, contacto, horarios)
- Datos de negocio: **solo con datos verificados y confirmados por el cliente**; ver inventario pendiente
- Contenido: textos reales, fotografías propias. Prohibido importar automáticamente textos/fotos/reseñas del prototipo React anterior

## Fase 3 — Testing refinado

- Cobertura unitaria de utilidades reales
- E2E de flujos de usuario una vez existan (no antes)
- Visual regression si se estima útil

## Fase 4 — SEO local, acceso, rendimiento

- HTML estático indexable: title/description por página, canonical (con dominio real), sitemap.xml, robots.txt
- `schema.org/Restaurant` **solo con datos verificados** (dirección, teléfono, horarios, coordenadas)
- Imágenes: formatos modernos, optimizadas, mobile-first
- Accesibilidad: contraste, navegación por teclado, landmarks y focus
- Rendimiento: presupuesto básico (LCP/warning en Lighthouse)

## Fase 5 — Lanzamiento (requiere autorización)

- [ ] Revisión completa: CI verde, SEO, contenido, funcionamiento, look final
- [ ] **Un único PR de `rewrite/astro-v2` hacia `main`**
- [ ] No merge sin autorización expresa del usuario; el despliegue a producción pasa por `main` (Vercel)
