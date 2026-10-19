# Architecture Decision Record: Astro como base de la web pública

**Fecha:** 2026-10-16
**Issue:** GEN-5 · **Estado:** Aceptada
**Decisión tomada en:** Linear GEN-5 (descripción de la issue)

## Contexto

La web pública previa de Boulevard (rama `main`) es una landing React 19 + Vite con CSS tradicional y contenido provisional. Se decide reconstruir el prototipo desde cero para la próxima versión pública, sin reutilizar diseño ni contenido, y el framework se fija por decisión directa del usuario.

## Decisión

**Astro 7 + TypeScript (strictest) + Tailwind CSS 4**, salida **estática/prerenderizada** por defecto.

## Por qué

1. **Contenido público indexable**: HTML estático de serie -> SEO local sólido (uno de los requisitos futuros clave para un restaurante).
2. **Cero JS cliente por defecto**: mejor performance/LCP en móvil, donde vive el tráfico de POS local.
3. **Evolutivo sin deuda**: si una funcionalidad real lo exige (interactividad concreta), se pueden añadir islas o SSR por página, sin rehacer la base.
4. **Sin React como dependencia base**: React/Testing Library solo entran si una isla real lo justifica (decisión explícita de la issue).

## Alternativas descartadas

- **Mantener/migrar React (Next.js/SPA)**: reutiliza la base antigua que se quiere descartar; SEO/rendimiento por defecto peores sin trabajo extra.
- **Comparar frameworks a fondo**: la decisión ya fue tomada por el usuario; se registró sin proceso formal.

## Configuración

| Ajuste | Valor | Razón |
| --- | --- | --- |
| `output` | `'static'` | Contenido público prerenderizado por defecto |
| Tailwind | `@tailwindcss/vite` + `@import "tailwindcss"` | Integración Tailwind 4 recomendada por Tailwind/Astro |
| Tokens de diseño | `@theme` en `src/styles/global.css` | Preparados, **sin branding final** (fase 2 del roadmap) |
| `site` (base URL) | Sin definir | TODO: fijar cuando exista dominio real + canonical |
| `<meta robots>` | `noindex` mientras sea placeholder | Evita indexar contenido provisional |

## Estructura

```
src/
  layouts/       Layout.astro (head común: title/description/viewport/robots)
  pages/         solo index.astro por ahora
  components/    (fase de diseño)
  lib/           utilidades TS testeadas con Vitest (meta.ts)
  styles/        global.css con tokens @theme
public/          favicon.svg (neutral)
tests/
  unit/          Vitest
  e2e/           Playwright (desktop + móvil, webServer sobre preview/4321)
docs/            este documento
.github/workflows/ci.yml
```

Principio: no crear directorios vacíos ni abstracción por adelantado; nuevos directorios entran con su primera pieza real.

## Reglas de convivencia con producción

- `main` = producción Vercel (React), intacta durante la reconstrucción, salvo hotfix puntuales evaluados manualmente.
- `rewrite/astro-v2` = integración de la nueva web; PRs de issue apuntan a ella.
- Lanzamiento futuro = un único PR `rewrite/astro-v2 -> main`, **solo con autorización expresa del usuario**.

## Datos comerciales pendientes de verificar (inventario)

No se publica ningún dato comercial como hecho. A confirmar con el cliente antes de la fase 2/4:

- [ ] Identidad comercial definitiva (nombre, marca, wording legal)
- [ ] Dirección física exacta (Pamplona) y coordenadas
- [ ] Teléfono(s) de contacto / WhatsApp
- [ ] Horarios (incl. festivos/cierres temporales)
- [ ] Carta, precios y alérgenos
- [ ] Fotografías propias de local, platos y equipo
- [ ] Reseñas / valoraciones externas (fuente verificable y con consentimiento de muestra)
- [ ] Servicios extra (reservas, pedidos, delivery, parking, etc.)
- [ ] Dominio real (para `site`, canonical, sitemap, `schema.org`)

> Referencia previa que debe revisarse caso a caso, nunca migrarse por defecto: la landing React en `main` muestra teléfono/datos provisionales (ver commits de `main`). No confiar en su exactitud sin confirmación del cliente.
