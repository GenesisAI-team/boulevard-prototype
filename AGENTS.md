# AGENTS.md — Boulevard Prototype

Guía para agentes de código (OpenCode, Codex, etc.) trabajando en este repositorio. **Regla absoluta: la issue de Linear es la fuente de verdad de cada tarea.** No se trabaja sin issue; no se avanza más allá del alcance definido en la issue.

## Jerarquía de fuentes

1. **Issue Linear (GEN-ID)** — alcance, criterios de aceptación y validaciones.
2. Especificación de este repo (README/ROADMAP/docs) si la issue remite a ella.
3. Criterio propio del agente solo para decisiones mecánicas de implementación; registrar decisiones no triviales como comentarios en la issue o como ADR en `docs/`.

## Estrategia de ramas (obligatoria)

```
main                      # producción Vercel (web actual React). INTACTO.
└── rewrite/astro-v2      # rama de integración de la nueva web Astro
    └── feat|fix|chore/GEN-ID-descripcion   # una rama por issue, derivada de astro-v2
```

- Nunca editar `main` desde aquí, salvo hotfix explícitamente aprobado y con evaluación manual de si aplica también a Astro (o viceversa): no mezclar bases.
- Todas las ramas de la nueva web **se crean desde `rewrite/astro-v2`**; sus PR **siempre apuntan a `rewrite/astro-v2`**, nunca a `main`.
- Frases fijas: `feat/`, `fix/`, `chore/` + ID Linear + descripción corta en kebab-case. Ej: `chore/GEN-5-reinicio-astro-boulevard`.
- Evitar varias ramas/issues activas simultáneamente por el mismo agente (riesgo de conflicto/rebase).
- **El PR final `rewrite/astro-v2 -> main` solo se ejecutará con autorización expresa del usuario.** Nunca fusionar ni desplegar a producción por iniciativa propia.
- Despliegue: la preview/staging de Astro (si se configura) usa `rewrite/astro-v2` o sus PRs con URL independiente; producción sigue ligada a `main` (Vercel).

## Flujo de trabajo con Linear

1. Antes de empezar: mover issue a **In Progress** (`linear_save_issue state=In Progress`).
2. Durante: comentarios de avance por fases en la issue.
3. Al cerrar: push de la rama, PR con base `rewrite/astro-v2`, adjuntar PR a la issue, comentario final con resultados de validación.
4. El estado final de la issue lo revisa el humano al cerrar el PR.

## Validaciones mínimas antes de PR

```bash
npm ci
npm run typecheck   # astro check
npm run lint
npm run test:run
npm run test:e2e    # requiere chromium instalado con npx playwright install
npm run build
```

Todas en verde, sin warnings ignorados, PR listo. El CI de GitHub revalida sobre Node 22.22.2 (22.x LTS; Astro 7 exige ≥22.22.0).

## Reglas de contenido (críticas)

- **Nada de datos comerciales no verificados**: dirección, teléfono, horarios, carta, precios, reseñas, fotos. Solo entran tras confirmación del humano; se marcan `TODO(VERIFICAR)` en código y se registran en `docs/ARCHITECTURE.md > inventario`.
- No migrar automáticamente textos/imágenes/datos del prototipo React antiguo (activa en `main`). Revisar cada elemento caso por caso si se solicita explícitamente.
- Mientras sea placeholder: `<meta robots noindex>` y la página base actuales se mantienen hasta la fase de diseño/lanzamiento, si la issue no indica lo contrario.
- `schema.org/Restaurant`: solo con datos verificados (ver ROADMAP fase 4).

## Convenciones técnicas

- Astro + TS strictest; sin JS cliente salvo isla justificada en la issue (React incidental solo si se aprueba explícitamente).
- Tailwind 4 vía `@tailwindcss/vite`; tokens de diseño en `@theme` de `src/styles/global.css`, sin branding final en esta fase.
- Directorios `src/components`, `src/content`, etc. **solo entran cuando exista su primer archivo real** (no vacíos).
- Comentarios de código solo cuando expliquen algo no obvio; nada de comentarios de sección decorativos.
- Estructura: `src/{layouts,pages,components,lib,styles}`, `tests/{unit,e2e}`, `docs/`, `public/`.
- No sobreingeniería: una utilidad entra con su test; un componente entra con su uso.

## Prohibiciones

- Toque `main`, producción o merge a `main` sin autorización expresa.
- Push a ramas protegidas sin revisión/CI verde.
- Publicar/leak ningún dato comercial provisional como si fuera verificado.
- Borrar el historial Git del repositorio (el reinicio se hace respetando el repo y su historia).
