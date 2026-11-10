# ROADMAP — Boulevard Prototype (astro-v2)

Fases orientativas de la reconstrucción. Cada fase se materializa en issues Linear (equipo Genesis, prefijos `feat|fix|chore/GEN-ID-...`).

## Fase 1 — Infraestructura (actual, GEN-5)

- [x] Astro 7 + TypeScript strictest + Tailwind 4 configurados
- [x] Vitest + Playwright funcionales
- [x] Lint + typecheck + CI básico (Node 22.22.2, fijado en `.node-version` y `package.json > engines`)
- [x] README / ROADMAP / ARCHITECTURE / AGENTS

## Fase 2 — Diseño y contenido (en curso, GEN-8)

Orden incremental de PR (cada rama y PR sale y apunta a `rewrite/astro-v2`; nunca a `main`). Cada paso de implementación es una issue/PR posterior aprobada, no parte de GEN-8:

1. **Brief + Motion Direction (GEN-8, esta PR):** `docs/DESIGN_BRIEF.md` con la dirección aprobada «Boulevard urbano cálido» (tokens con verificación de contraste, HOME en 8 partes, reglas responsive) y el apartado **Motion Direction / Scroll Experience** aprobado (principios, hero cinematográfico, scroll storytelling, galería interactiva y bloque carbón, ritmo por secciones, storyboard de 4 momentos, matriz de efectos/fallback, tecnologías con límites y riesgos).
2. **Producción y aprobación de assets:** el titular aporta las fotografías — **4 variantes independientes por cada uno de los 10 assets** (nunca collages), originales de alta resolución con encuadre amplio y zonas seguras, interiores/barra/fachada/terraza sin personas; edición fiel según el brief; registro del estado de cada asset en `docs/DESIGN_BRIEF.md`. No bloquea la fase siguiente al llegar de forma parcial.
3. **Sistema visual y layout/header:** tokens `@theme` en `src/styles/global.css`, tipografías Fraunces + DM Sans autogestionadas y estructura de layout del header y la HOME.
4. **Hero cinematográfico:** hero fotográfico responsive (16:9 desktop / 4:5 móvil) con entrada suave del titular y CTAs `Ver la carta` / `Cómo llegar`; vídeo ambiental solo futuro si hay material y aprobación.
5. **Sección piloto de scroll storytelling:** única sección narrativa (desayuno → barra/pintxos → comida/ambiente) según el storyboard del brief; GSAP+ScrollTrigger/Lenis solo si se aprueban en su issue y aportan; alternativa móvil y `prefers-reduced-motion` desde el diseño.
6. **Galería interactiva y sección carbón:** galería con táctil + teclado + controles visibles y bloque carbón de contraste con foto real en expand/reveal.
7. **Resto de secciones:** franja de tres momentos, «Así es Boulevard», «Nuestra oferta», «Visítanos» y footer, dato a dato conforme se valide.
8. **SEO, accesibilidad y QA:** SEO local, accesibilidad WCAG 2.2 AA, rendimiento (LCP/CLS/INP en móvil de gama media) y QA completo (detalle en fase 4).
9. **Lanzamiento:** fase 5 (requiere autorización).

- Datos de negocio: **solo con datos verificados y confirmados por el cliente**; ver inventario pendiente
- Contenido: textos reales, fotografías propias. Prohibido importar automáticamente textos/fotos/reseñas del prototipo React anterior

### Decidido/aprobado vs pendiente de validar

**Aprobado por el usuario:**

- Dirección «urbano cálido, editorial contemporáneo y cercano» con fotografía real protagonista (descartada la alternativa de alta cocina/noir).
- Motion Direction / Scroll Experience (10/11/2026): narrativa cinematográfica basada en scroll y fotografía documentada en el brief (hero cinematográfico, scroll storytelling, galería interactiva, bloque carbón, storyboard y matriz de efectos/fallback); la web no se convierte en 3D (Three.js/WebGL/OGL, shaders y Blender solo como experimentos en issues futuras) y GSAP+ScrollTrigger/Lenis son candidatos para PR futuras; cero dependencias nuevas en GEN-8.
- Estructura de la HOME en 8 partes y sus CTAs propuestos (titular provisional «Un lugar para cada momento»; «Ver la carta» y «Cómo llegar»).
- Paleta y tipografías iniciales (crema, carbón, granate, caramelo, blanco roto; Fraunces + DM Sans), revisables tras ver las fotos reales.
- Arquitectura técnica Astro (GEN-5): salida estática, Tailwind 4, cero JS cliente por defecto.

**Pendiente de validar con el titular** (nada se publica como hecho hasta su confirmación; se registra en `docs/DESIGN_BRIEF.md` y se marca `TODO(VERIFICAR)` en código):

- [ ] Logo/marca auténtica (la marca es texto provisional)
- [ ] Dirección exacta, teléfono y horarios
- [ ] Carta final, precios y disponibilidad
- [ ] Testimonios/reseñas (si los hay, con fuente y consentimiento)
- [ ] Textos definitivos, titular definitivo del hero y CTAs finales
- [ ] Contexto de ubicación del hero (Pamplona·Rochapea a confirmar)
- [ ] Fotografías definitivas (10 assets con 4 variantes independientes cada uno, sin personas en interiores/barra/fachada/terraza) y sus permisos de uso
- [ ] Vídeo ambiental del local, si existe material auténtico y se aprueba (opcional y posterior, no bloquea los assets)
- [ ] Servicios anunciados (terraza, para llevar, eventos privados) y cualquier dato de la referencia Eatbu

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
