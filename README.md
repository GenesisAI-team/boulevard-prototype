# Boulevard Prototype — astro-v2

Web pública del Bar Restaurante Boulevard (Pamplona), en reconstrucción total desde cero con Astro. **La versión en producción sigue siendo la de `main` (React/Vite); esta base es la futura astro-v2 y todavía no se despliega a producción**

## Requisitos

- **Node.js 22.x LTS** (≥ 22.22.0: Astro 7 lo exige; probado con `22.22.2`, fijado en `.node-version` y `package.json > engines`).
- npm 10+ (incluido con Node 22).

## Stack

| Herramienta | Versión | Uso |
| --- | --- | --- |
| Astro | 7.x | Render estático/prerenderizado por defecto |
| TypeScript | 5.x (config `strictest` de Astro) | Tipado estricto |
| Tailwind CSS | 4.x (`@tailwindcss/vite`) | Estilos; tokens semánticos neutrales pendientes de diseño |
| Vitest | 5.x | Tests unitarios (tests/unit/) |
| Playwright | 1.x | Smoke tests E2E escritorio + móvil (tests/e2e/) |
| ESLint | 10.x | Lint TS/.astro (eslint.config.mjs) |
| @astrojs/check | 0.9.x | `astro check` para typecheck |

## Comandos

```bash
npm ci          # instalación reproducible con lockfile
npm run dev     # servidor de desarrollo
npm run build   # astro check && astro build (falla si hay errores de tipos)
npm run preview # sirve el build en http://localhost:4321
npm run typecheck
npm run lint
npm run test        # vitest en watch
npm run test:run    # vitest una pasada
npm run test:e2e    # playwright: build previo no incluido, usa preview si está activo
```

Nota: `test:e2e` espera el `preview` en el puerto 4321. Si no está activo, arráncalo con `npm run build && npm run preview` en otra terminal (o deja que Playwright lo lance con su `webServer`).

## Despliegue

- **Producción sigue en `main`** (Vercel). No tocar durante la reconstrucción.
- Branch base para todo el trabajo Astro: `rewrite/astro-v2` (rama de integración).
- Preview Vercel potencial (futuro): apuntada a `rewrite/astro-v2` o sus PRs, con URL independiente; nunca sustituye la web pública.
- **El PR final `rewrite/astro-v2 -> main` requiere autorización expresa del usuario.**

Ver `AGENTS.md` para la estrategia de ramas completa y las reglas para agentes (OpenCode/Codex).

## Estado

Esqueleto técnico neutro/placeholder. No existe todavía: contenido comercial verificado, diseño final, reservas online, CMS, backend ni despliegue de astro-v2. Roadmap y datos pendientes de verificar: ver `ROADMAP.md` y `docs/ARCHITECTURE.md`.
