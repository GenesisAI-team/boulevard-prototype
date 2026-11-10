# DESIGN BRIEF — Boulevard (astro-v2)

**Issue:** GEN-8 · **Estado:** dirección aprobada por el usuario («Boulevard urbano cálido») y Motion Direction / Scroll Experience aprobada (10/11/2026)
**Alcance de este documento:** dirección artística, tokens, HOME, dirección de movimiento (Motion Direction / Scroll Experience), reglas responsive y brief fotográfico. No implementa código ni incluye assets: eso son PR posteriores según el orden fijado en `ROADMAP.md`.
**Fecha:** 2026-11-09 · **Ampliación Motion Direction:** 2026-11-10

---

## 0. Estado de las decisiones

**Aprobadas por el usuario (no se reabren):** estilo **urbano cálido**, editorial contemporáneo y cercano, con fotografía real protagonista (descartada la exploración de tres estilos); estructura de la HOME en 8 partes; dos modos de producción visual (real frente a conceptual); sitio Eatbu solo como referencia a contrastar; paleta y tipografía **iniciales de trabajo** (revisables tras ver las fotos reales; sin abrir un nuevo concurso de estilos).

**Pendientes de validar con el titular** (irán marcadas `TODO(VERIFICAR)` aquí y en código futuro): logo/marca auténtica (por ahora la marca es texto), dirección exacta, teléfono, horarios, carta y precios, testimonios/reseñas, textos definitivos, titular definitivo del hero, CTAs finales, ubicación Pamplona·Rochapea como contexto del hero, permisos y derechos de uso de las fotografías aportadas, forma de trato (tuteo/usted) del tono verbal.

**Registro de skills (requerido por la issue; verificado localmente el 10/11/2026):** se ha comprobado la disponibilidad real de las skills en los entornos locales de este agente (directorios `.agents/skills`, `.claude/skills`, `.codex/skills`, `.cursor`, `.gemini` y `.opencode` del usuario): `frontend-design`, `ui-ux-pro-max`, `GSAP Official Skills` (`greensock/gsap-skills`) y `Awwwards/Jury` (`juliobsz/skills`) **no están disponibles** (verificadas: no). `GOATED UI` tampoco está presente; la issue la define solo como repertorio experimental de ideas, no requisito. Los criterios aprobados de esta issue prevalecen sobre cualquier skill; no se instala ninguna skill ni dependencia por iniciativa del agente.

**Ampliación aprobada hoy (10/11/2026, valores añadidos en esta revisión):** dirección de movimiento «Motion Direction / Scroll Experience» documentada en §4 (principios, hero cinematográfico, scroll storytelling, galería interactiva, sección carbón de contraste, ritmo por secciones, storyboard de 4 momentos, matriz sección/asset/efecto/interacción/fallback, tecnologías con límites y riesgos); ampliado el brief fotográfico para motion (§6.1) manteniendo los 10 assets con 4 variantes independientes por asset. Lo no reescrito en esta revisión (dirección visual, tokens, HOME, responsive e inventario) permanece aprobado tal como estaba.

---

## 1. Dirección y personalidad

**Boulevard urbano cálido.** El local es el protagonista y la web se comporta como una buena edición editorial de barrio: tipografía con carácter, espacios claros y amplios, fotografía real de alta calidad y detalles gráficos sobrios. Presenta el negocio tal como es: no recrea una identidad de restaurante de lujo que no corresponde al local.

**Razones de la decisión (aprobadas):**

1. Refleja el carácter real del negocio (cafetería/bar de barrio en Pamplona-Rochapea) mejor que una identidad de alta cocina, que sería difícil de sostener con fotografía real.
2. Responde al requisito más fuerte de la issue, «fotografía real protagonista»: este estilo maximiza el valor de las fotos documentales en lugar de competir con ellas.
3. El aire editorial da jerarquía y ritmo (titulares grandes, composición limpia) sin caer en el genérico de las plantillas de restaurantes.
4. Cercanía y accesibilidad van de la mano: contraste alto, textos cortos y navegación simple corresponden al uso real de la web (mirar la carta, saber cómo llegar).

**Es / no es:**

| Sí es | No es |
| --- | --- |
| Urbano, cálido, gastronómico, auténtico, cercano, accesible | Alta cocina, exclusividad, lujo dorado |
| Fotografía editorial documental del local real | Estética noir global ni dorados de lujo |
| Frases sobrias y verificables | Claims de marketing no comprobados («el mejor…», reseñas inventadas) |
| Diseño pensado primero para móvil | Recorte de una maqueta desktop |

**Tono verbal (orientación):** frases cortas, español natural con sabor local, cero jerga de hostelería y cero superlativos; cada bloque funciona como título → propósito → acción. `TODO(VERIFICAR)`: forma de trato (tuteo/usted) y redacción definitiva de los textos con el titular.

---

## 2. Tokens de diseño (iniciales; revisables tras las fotos reales)

Se materializarán en el bloque `@theme` de `src/styles/global.css` en la PR del sistema visual, no en esta issue (prohibido tocar `src/`).

### 2.1 Paleta con roles

Roles de superficie, texto, CTA, focus y estados según el esquema luminoso con una sección carbón de contraste. Ratios calculados con luminancia relativa WCAG (≥4.5:1 texto normal AA; ≥3:1 gráficos y focus AA):

| Token | Valor | Rol | Uso seguro (verificado) |
| --- | --- | --- | --- |
| `--color-crema` | `#F6F1E8` | Superficie general de la página | Fondo dominante; texto carbón encima (14.1:1) |
| `--color-carbon` | `#24221E` | Texto principal y fondo de la sección oscura | Texto sobre crema (14.1:1) y sobre blanco roto (15.4:1); sección carbón con texto crema (14.1:1) o blanco roto (15.4:1) |
| `--color-granate` | `#922E31` | Acento y CTA principal | Botón CTA con texto blanco roto (7.6:1) o crema (7.0:1); enlaces y detalles gráficos sobre superficies claras (7.0–7.6:1) |
| `--color-caramelo` | `#B9825E` | Apoyo: detalles gráficos, bordes, fondos suaves | **No como texto sobre superficies claras** (2.9–3.2:1, suspende AA). Sobre carbón alcanza 4.9:1 (AA) y sirve de acento en la sección oscura |
| `--color-blanco-roto` | `#FDFBF6` | Superficie clara secundaria y texto sobre granate/carbón | Tarjetas, estados hover, texto de CTA |

**Matriz de contraste (calculada, luminancia relativa WCAG 2.x):**

| Par (texto/fondo) | Ratio | Veredicto |
| --- | --- | --- |
| carbón / crema · carbón / blanco roto | 14.1 – 15.4 | AAA |
| blanco roto / carbón · crema / carbón | 15.4 – 14.1 | AAA (sección oscura) |
| granate / crema · granate / blanco roto | 7.0 – 7.6 | AAA incluso como texto normal |
| blanco roto / granate · crema / granate (texto de CTA) | 7.6 – 7.0 | AA con holgura |
| caramelo / carbón | 4.9 | AA texto normal (no AAA): solo acentos, no texto pequeño crítico |
| caramelo / crema · caramelo / blanco roto | 3.0 – 3.2 | ✗ texto; válido como gráfico/borde (≥3:1) |
| carbón / granate · granate / caramelo | 2.0 – 2.4 | ✗ prohibido |

**Estados:** hover del CTA = granate ligeramente más profundo (sin invertir a caramelo); **focus visible** = anillo carbón sobre superficies claras, blanco roto o caramelo sobre la sección carbón (siempre ≥3:1 con ambas zonas adyacentes); enlaces sobre claro = granate subrayado; sobre sección oscura = blanco roto/caramelo subrayado; estados disabled con carbón al 40 % sobre crema y sin bloquear acciones de navegación.

### 2.2 Tipografía

| Fuente | Uso | Verificación |
| --- | --- | --- |
| **Fraunces** (variable: `wght` 100–900, `opsz` 9–144 + ejes `SOFT`/`WONK`) | Titulares expresivos, marca textual, frases grandes de hero | Licencia **OFL** (repo oficial google/fonts, `ofl/fraunces`), subsets `latin` + `latin-ext` → cubre los caracteres españoles (á é í ó ú ñ ü ¿ ¡) |
| **DM Sans** (variable: `wght` 100–1000, `opsz` 9–40) | Cuerpo, navegación, botones, formularios y UI | Licencia **OFL** (repo oficial google/fonts, `ofl/dmsans`), subsets `latin` + `latin-ext` |

- **Carga (meta de implementación):** self-hosted en `woff2` variable subseteado (`latin` + `latin-ext`), solo las variantes realmente usadas, `font-display: swap` y métricas de fallback ajustadas (`size-adjust`/`ascent-override`) para evitar saltos de layout. La imagen del hero va primero (`fetchpriority="high"`); las fuentes después. Dos familias en total: no se añadirá ninguna tercera.
- **Escala:** tipografía fluida con `clamp()` mobile-first (hero orientativo ~2.6rem → 4.5rem, a validar en maqueta real); ancho de lectura de 60–65ch; `line-height` ≥1.5 en cuerpo y ≥1.2 en titulares grandes.
- **Fallbacks:** pila de sistema (serif genérica para Fraunces, sans genérica para DM Sans) solo como plan B de rendimiento; documentadas y cerradas, no se abre un segundo concurso de estilos.

### 2.3 Movimiento e interacción

- Transiciones discretas y opcionales: ningún elemento se anima de forma permanente y el hero nunca lleva slider automático.
- Respeto estricto de `prefers-reduced-motion: reduce` (sin parallax ni transformaciones visibles), aquí y en toda la dirección de movimiento de §4.
- Foco siempre visible (`:focus-visible`), navegación completa por teclado, orden de tabulación natural y `alt` realista en toda imagen (los alt de §6 son orientativos; se reescriben al integrar cada foto real).
- La dirección de movimiento completa (principios, storyboard, matriz de efectos y límites) se documenta en §4; **nada de ella se implementa en esta issue**.

---

## 3. HOME — estructura en 8 partes (wireframe textual)

Orden fijo, mobile-first. Marcas: ✔ = estructura/propósito **aprobados**; ⏳ = contenido **pendiente de validar** con el titular.

1. **Header simple** ✔ · ⏳ datos: marca textual «Boulevard» hasta que exista logo auténtico `TODO(VERIFICAR)`; navegación `Inicio · Carta · El local · Contacto`; versión móvil accesible. Acciones de llamada o llegar solo con datos confirmados `TODO(VERIFICAR)` teléfono y dirección exacta.
2. **Hero fotográfico** ✔ · ⏳ foto y copy definitivos: fotografía auténtica del interior o barra (16:9 desktop / 4:5 móvil, assets `hero-desktop`/`hero-mobile` de §6), titular **provisional** «Un lugar para cada momento» `TODO(VERIFICAR)`, contexto `Pamplona · Rochapea` `TODO(VERIFICAR)` ubicación, una frase corta de propósito y dos CTAs propuestos: `Ver la carta` y `Cómo llegar`. Sin reserva online ni call-to-action falsos; «Ver la carta» apunta a la carta real cuando esté validada.
3. **Franja de tres momentos/servicios** ✔ · ⏳ oferta: desayunos/pintxos · comida/carta · visita/contacto, alineada con los servicios realmente confirmados `TODO(VERIFICAR)`. Sin tarjetas repetitivas ni claims sin comprobar. Eatbu menciona terraza, para llevar y eventos privados: ninguna de esas capacidades se publica sin confirmación del titular.
4. **«Así es Boulevard»** ✔ · ⏳ texto: presentación editorial de cercanía con fotografía real de barra/interior y un texto breve **verificado** con el titular. Foto: asset `interior` o `barra-principal`.
5. **«Nuestra oferta» / carta** ✔ · ⏳ contenido: selección visual de platos reales + CTA a la carta actual vigente. Los elementos que Eatbu menciona (Hamburguesa Mexicana, Sartén cojonuda, Plato infantil, Hamburguesa completa, Bocadillo Boulevard, Ensalada César) quedan como `TODO(VERIFICAR)`: nombres, vigencia, precios y fotos reales. Ningún precio se publica sin validación de vigencia.
6. **Galería** ✔: fotografías del local y de la comida con ritmo editorial (grid asimétrico controlado), siempre del local real; sin mockups de espacios inexistentes.
7. **Visítanos** ✔ · ⏳ datos: `TODO(VERIFICAR)` dirección exacta, horarios reales (incluidos festivos/cierres temporales), teléfono, mapa o enlace; un CTA claro. Nada se publica antes de la validación.
8. **Footer** ✔: marca, navegación, contacto validado e información legal verificada (aviso legal y privacidad, a definir cuando toque).

**Excluido de la HOME (decisión aprobada):** panel o registro de usuario, reservas/pagos online, slider automático en el hero, falso ranking o reseñas, megamenús, librerías React sin necesidad.

**Sitemap propuesto (orientativo):** `/` (HOME compuesta, única por ahora); páginas futuras desde la navegación: `/carta`, `/el-local`, `/contacto`. El header funciona igual con la HOME de una sola página.

---

## 4. Motion Direction / Scroll Experience (aprobada como ampliación el 10/11/2026)

Evolución del «urbano cálido» hacia una **experiencia con narrativa cinematográfica basada en scroll y fotografía**: el movimiento existe para servir a la fotografía real del local y al recorrido del usuario, nunca como demostración técnica. Este apartado es **solo documental** (no se implementa en GEN-8 ni en esta PR): cada efecto real se aprueba e implementa en su propia issue/PR posterior, empezando por el hero y la sección piloto de scroll storytelling (ver orden en `ROADMAP.md`).

Escenas base: hero cinematográfico (§4.2), scroll storytelling (§4.3), galería interactiva (§4.4) y sección carbón de contraste (§4.5) · principios en §4.1 · ritmo por secciones en §4.6 · storyboard en §4.7 · matriz de efectos/fallback en §4.8 · tecnologías y límites en §4.9 · accesibilidad y rendimiento en §4.10 · referencias y riesgos en §4.11.

### 4.1 Principios de dirección de movimiento

1. **Fotografía primero, movimiento con propósito.** Un único efecto protagonista de alto impacto y transiciones secundarias discretas. La experiencia comunica el ambiente real del local, facilita descubrir la oferta y orienta hacia carta/visita. Nada se anima de forma permanente ni «por contener algo»: sin parallax repetido, sin movimientos interminables, sin cursores decorativos y sin efectos sobre todo elemento visible.
2. **Todo parte de fotografía real aprobada.** Las escenas se construyen sobre los assets reales del inventario (§6); no se inventa material ni se sustituyen las fotos por gráficos sintéticos.
3. **Contenido siempre accesible.** Contenido, CTAs y navegación se leen y operan con JS desactivado, aunque la animación no haya terminado o no exista.
4. **Simplicidad móvil.** Cada efecto tiene variante propia en móvil (más corta o estática); móvil no hereda tal cual la experiencia de escritorio.

### 4.2 Hero cinematográfico

- Apertura sobre **foto real del interior/barra** (16:9 desktop / 4:5 móvil, §5) con **una sola técnica de entrada suave del titular**, elegida en la PR del hero entre máscara, cambio de escala o revelado fotográfico.
- **CTAs permanentes:** «Ver la carta» y «Cómo llegar» (§3.2) son comprensibles y operables desde el primer frame, con foco funcional; el movimiento no los oculta ni les retrasa la comprensión.
- **Vídeo ambiental breve: solo alternativa futura**, si existe material auténtico y se aprueba: poster estático, carga diferida, pausa/parada y fallback a la foto aprobada. Nunca bloquea la primera carga ni sustituye a la fotografía como principal.
- Sin slider automático (decisión aprobada, §2.3).

### 4.3 Scroll storytelling — momento protagonista

- **Una única sección narrativa** en toda la web, propuesta sobre la franja de tres momentos (§3.3; si la PR piloto decidiera una sección dedicada, se documentaría aquí antes de programar): recorrido **desayuno → barra/pintxos → comida/ambiente** con fotografía anclada temporalmente, revelados, escalados y texto sincronizado.
- El scroll sigue siendo nativo y del usuario: la narrativa se lee con el scroll normal (reveals y escalados que acompañan al desplazamiento), **sin pin prolongado y sin scroll-jacking** (nada secuestra, bloquea ni sustituye el gesto). Un pin corto tipo `sticky` solo como escena de composición en desktop.
- Las **escenas, puntos de entrada/salida y la alternativa móvil se diseñan y aprueban antes de programar**: esta dirección y el storyboard de §4.7 son la referencia; la implementación es la sección piloto del roadmap (PR posterior).

### 4.4 Galería fotográfica interactiva

- Composición editorial de imágenes reales sobre el grid asimétrico controlado de §3.6, con opción de **carrusel/drag o ampliación** mediante transiciones.
- **Tres vías siempre activas:** táctil (drag/swipe), teclado (flechas y Tab) y controles visibles (botones ≥44×44 px con etiquetas e indicadores de posición). La interacción no depende exclusivamente de gestos y el scroll vertical de la página no se ve interferido.
- La ampliación (si existe) se cierra con `Esc` o botón visible, con el foco devuelto y estados de foco dentro del carrusel/lightbox.

### 4.5 Sección carbón de contraste

- Bloque de fondo carbón (§2.1) con **fotografía real del local que se expande o revela durante el scroll** (escala moderada ~1.05–1.15 o revelado tipo máscara), sin reorganizar la escena fotografiada.
- Coherencia con la paleta: texto sobre carbón = crema o blanco roto (14.1–15.4:1 verificados en §2.1), caramelo solo como acento, y las reglas de foco y enlaces sobre fondo oscuro ya definidas (§2.1).
- Legibilidad permanente durante todo el efecto, con estado final estático. La colocación del bloque dentro de la HOME se decide en la PR correspondiente (candidato natural: «Nuestra oferta» o entre galería y «Visítanos»).

### 4.6 Ritmo y jerarquía por las 8 secciones

Escala de prioridad: **alta** = efecto protagonista con PR propia · **media** = efecto simple CSS dentro de la PR de la sección · **baja** = micro-interacciones · **cero** = estático.

| # | Sección (§3) | Se mueve | Queda quieto | Ritmo orientativo | Prioridad | Simplificación móvil |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Header | Nada (solo hover/focus de enlaces) | Todo el header (sticky opcional que nunca tapa contenido) | ≤200 ms | Baja | Idéntica |
| 2 | Hero | Titular e imagen en su entrada única al cargar | CTAs y composición base | Máscara/escala/revelado, 600–900 ms | Alta (PR del hero) | Reveal más corto sobre `hero-mobile` |
| 3 | Franja de momentos (escena de scroll storytelling) | Foto anclada y texto sincronizado por escenas | Estructura y scroll nativo | Reveals de 300–500 ms por escena; pin corto solo desktop | Alta (PR piloto de storytelling) | Secuencia en bloques apilados sin pin |
| 4 | «Así es Boulevard» | Reveal único de la foto | Texto | 400–600 ms | Baja | Idéntica, estática tras el reveal |
| 5 | «Nuestra oferta» | Hover sutil (escala ≤1.02) en la selección visual | Texto y CTA | ≤200 ms | Baja | Sin hover (estado normal suficiente) |
| 6 | Galería | Carrusel/drag y zoom, solo por acción del usuario | Resto del grid y scroll de la página | Según el input del usuario | Alta (PR de galería + carbón) | Carrusel táctil ligero + botones |
| 7 | «Visítanos» | Nada | Todo (datos `TODO(VERIFICAR)`) | — | Cero | — |
| 8 | Footer | Nada | Todo | — | Cero | — |
| + | Bloque carbón de contraste (colocación por definir en PR) | Expand/reveal de la foto real al scrollear | Textos crema sobre carbón | Expand/reveal de 800–1200 ms | Alta (PR de galería + carbón) | Reveal simple o estático |

### 4.7 Mini-storyboard — 4 momentos

Las cuatro escenas se **diseñan y aprueban (escenas, entradas/salidas y alternativa móvil) antes de programar**; su implementación llega en las PR del orden del roadmap.

1. **M1 · Apertura — hero cinematográfico.** La foto real (`hero-desktop`/`hero-mobile`) está presente desde el primer frame; el titular entra una vez (máscara, escala o revelado, 600–900 ms) y los CTAs permanecen visibles y operables antes, durante y después. Estado final estable, sin repetición. *Móvil/reduced-motion: composición estática ya visible (mismo contenido, sin entrada).*
2. **M2 · Recorrido — scroll storytelling de la oferta.** Con scroll nativo, la sección narrativa avanza **desayuno (`desayuno-cafe`) → barra/pintxos (`pintxo-tortilla`) → comida/ambiente (`plato-destacado`, más `barra-principal`/`interior`)** con texto sincronizado y reveals de 300–500 ms por escena; pin corto solo en desktop. *Móvil/reduced-motion: los mismos tres momentos como bloques estáticos apilados (foto arriba, texto debajo), sin pin y sin anclaje.*
3. **M3 · Exploración — galería interactiva.** El usuario arrastra, desliza o navega con teclado y botones; la ampliación abre con zoom suave (≤300 ms) y se cierra con `Esc` o botón, devolviendo el foco. *Móvil/reduced-motion: grid estático y lightbox sin animación, operable por completo con teclado.*
4. **M4 · Contraste — bloque carbón.** Al entrar en el bloque carbón, la fotografía real se expande o revela (800–1200 ms, escala ≤1.15) con texto crema sobre carbón; después todo queda estático. *Móvil/reduced-motion: foto estática dentro del bloque.*

Los assets concretos de cada escena se confirman con las fotos aprobadas (§6.1); ninguna escena usa material no aprobado.

### 4.8 Matriz sección / asset / efecto / interacción / fallback

| Sección | Asset(s) de §6 | Efecto propuesto | Interacción requerida | Fallback móvil / reduced-motion |
| --- | --- | --- | --- | --- |
| Header | — | Micro-transiciones en hover/focus de enlaces y CTA | Teclado (Tab), clic/tap | Sin efecto |
| Hero | `hero-desktop`, `hero-mobile` | Entrada única del titular (máscara, escala o revelado) | Ninguna (solo lectura) | Composición estática ya visible |
| Franja de momentos (storytelling) | `desayuno-cafe`, `pintxo-tortilla`, `plato-destacado`, `barra-principal` o `interior` | Foto anclada con reveals y escalados, texto sincronizado; pin corto solo desktop | Scroll nativo, no interceptable | Bloques estáticos apilados, sin pin |
| «Así es Boulevard» | `barra-principal` o `interior` | Reveal único de la foto | Ninguna | Foto estática |
| «Nuestra oferta» | `plato-destacado` | Hover sutil (escala ≤1.02) | Hover (desktop) | Sin hover; estado normal suficiente |
| Galería | `detalle-ambiente`, `fachada`, `terraza` (si existe y se aprueba) | Carrusel/drag o ampliación con zoom suave | Táctil, teclado (flechas/Esc) y botones ≥44×44 px | Grid estático + lightbox sin animación, operable por teclado |
| Bloque carbón | `barra-principal`, `interior` o `detalle-ambiente` | Expand/reveal de la fotografía durante el scroll (escala 1.05–1.15) | Scroll nativo | Foto estática dentro del bloque |
| «Visítanos» / footer | — | Ningún movimiento | — | Idéntico |

### 4.9 Tecnologías: base, candidatos y límites expresos

- **Base ya adoptada (GEN-5):** Astro + Tailwind 4, cero JS cliente por defecto.
- **Efectos sencillos (primera opción):** CSS transitions y CSS scroll-driven animations **con degradación progresiva** (alternativa estática equivalente), solo cuando el soporte de navegador y la accesibilidad lo permitan.
- **GSAP + ScrollTrigger y Lenis: solo candidatos para PR futuras** (no se instalan ni implementan en GEN-8). Lenis únicamente si aporta suavidad real, integrándose con ScrollTrigger: un único control de actualización, limpieza de instancias al navegar y evitar el doble smooth-scroll.
- **Transiciones de vista de Astro:** valoradas únicamente si se añaden rutas multipágina (`/carta`, `/el-local`, `/contacto`) y sin romper el ciclo de vida de las animaciones.
- **Dependencias nuevas:** cero en esta issue; cada efecto o librería futura entra con su issue aprobada y su justificación visual.
- **Límite 3D expreso: la web no se convierte en 3D.** Three.js/WebGL/OGL, shaders y Blender quedan como **experimentos opcionales en issues futuras**, solo con justificación visual y prueba aislada. Los 10 assets fotográficos reales no se sustituyen por demos de 3D o vídeo.

### 4.10 Accesibilidad y rendimiento obligatorios (desde el diseño)

- `prefers-reduced-motion: reduce` exige **alternativa estática real y completa por escena** (no solo ralentizar animaciones): la misma información, sin movimiento.
- **Scroll nativo y página funcionando sin JS:** ninguna escena secuestra el scroll, bloquea el foco o crea trampas de teclado; el pin, si existe, es corto y solo desktop.
- **Foco y teclado funcionales en escenas y anclajes:** estados de foco visibles en carrusel, lightbox, botones y CTAs; el contenido animado permanece alcanzable y operable.
- **Contraste permanente durante todo el movimiento:** scrims/superposiciones verificados con la matriz de §2.1; CTAs y textos nunca pierden legibilidad, también en el bloque carbón.
- **Sin mareo, secuestro ni flashes:** nada parpadea, ningún efecto automático interminable, sin parallax repetido ni cursores decorativos; la estética nunca justifica bloquear contenido, acciones ni navegación.
- **Se anima preferentemente `transform` y `opacity`** (propiedades compositables); nada de animaciones que repinten el layout constantemente.
- **Recursos:** imágenes responsivas; si llega vídeo ambiental, va comprimido, con `poster` estático, pausa y fallback a la foto aprobada; un `iframe` de vídeo (si algún día se usa) carga diferido con `poster` y fallback, y nunca compite con el LCP; la imagen del hero conserva `fetchpriority="high"` (§2.2); todo recurso que no sea LCP se difiere.
- **Metas medibles en móvil de gama media, a medir en las PR que implementen efectos:** LCP < 2.5 s, CLS < 0.1, INP < 200 ms y fluidez estable en el scroll nativo (sin saltos de frame apreciables).

### 4.11 Referencias de ritmo y riesgos técnicos

**Referencias aprobadas (solo estudio de ritmo):** [zrk.technology](https://www.zrk.technology/) y [jjettas.com](https://jjettas.com/) sirven para estudiar **ritmo visual, transiciones y recorrido**. No se copia nada: ni diseños, ni código, ni imágenes, ni animaciones exactas, ni su estética oscura ajena a Boulevard (la identidad sigue siendo «urbano cálido», luminosa, con carbón solo como contrapunto puntual).

| Riesgo | Impacto | Mitigación |
| --- | --- | --- |
| Copiar la estética de las referencias (oscuridad, ritmo ajeno) | Pérdida de la identidad «urbano cálido» | Referencias solo para ritmo; carbón puntual con contraste verificado (§2.1, §4.5) |
| Scroll-jacking o pin prolongado | Frustración, accesibilidad y abandono | Escenas diseñadas antes de programar (§4.3, §4.7); scroll nativo; pin corto solo desktop; alternativa móvil |
| Doble smooth-scroll (Lenis + ScrollTrigger mal integrados) | Jank y comportamiento errático | Lenis solo si aporta; un único control de actualización y limpieza al navegar (§4.9) |
| Soporte desigual de las CSS scroll-driven animations | Efectos ausentes en parte de los usuarios | Degradación progresiva y alternativa estática (§4.9, §4.10) |
| Impacto en LCP/CLS/INP en gama media | Web lenta, layout inestable | Animar `transform`/`opacity`; recursos no LCP diferidos; metas medibles (§4.10) |
| Sobreuso de efectos («todo se mueve») | Ruido, lentitud y abandono | Un efecto protagonista + transiciones discretas (§4.1); jerarquía por secciones (§4.6) |
| Vídeo ambiental pesado | Coste de red y LCP | Opcional y posterior; poster, compresión, fallback, sin bloqueo (§4.2, §4.10) |
| Implementar efectos sin escenas aprobadas | PR improvisadas fuera del alcance | Storyboard (§4.7) y matriz (§4.8) como referencia; cada efecto entra con su issue aprobada |

## 5. Reglas responsive y metas de calidad

- **Hero:** desktop panorámica **16:9**; móvil vertical **4:5**, descrita como recorte o variación fiel del **mismo lugar** (no reorganiza la escena; ver §6). La composición reserva espacio negativo para el titular. En móvil, texto sobre imagen con scrim de contraste válido o bloque texto+foto apilado; nunca superposiciones con contraste insuficiente.
- **Áreas seguras móvil:** respetar `env(safe-area-inset-*)` en header, CTAs y footer; objetivos de toque ≥44×44 px; nada crítico pegado a los bordes.
- **Navegación y lectura móvil:** header simple que no invada el hero, menú accesible sin megamenu, cuerpo ≥16 px, jerarquía visible sin depender solo del color.
- **Contraste WCAG 2.2 AA como mínimo en todo entregable** (texto 4.5:1; gráficos, iconos y foco 3:1), soportado por la matriz de §2.1.
- **Performance como meta:** LCP < 2.5 s en móvil (red simulada), CLS ≈ 0 (fallback de fuentes con métricas), imágenes optimizadas con el pipeline de Astro (formatos modernos y `<Image>` en su fase) y cero JS cliente por defecto, coherente con la decisión de GEN-5 en `docs/ARCHITECTURE.md` (salida estática).

---

## 6. Brief fotográfico — 10 assets prioritarios

El usuario aportará las fotografías reales en otro chat: **el brief no queda bloqueado por su ausencia**. La integración de archivos aprobados y optimizados en Astro es una fase/PR posterior (ver ROADMAP). Convenciones: capturas a la máxima resolución disponible, luz natural siempre que sea posible; si la variante móvil/desktop sale de recortar una sola toma, el recorte es fiel sin alterar arquitectura, rotulación ni productos. Los originales se piden conforme a la ampliación para motion (§6.1): alta resolución, encuadres amplios con zonas seguras y 4 variantes independientes por asset.

| # | Asset | Destino en HOME | Tipo de captura | Variante móvil/desktop | Orientación | Alt orientativo (hasta foto real) | Derecho de uso | Fuente | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `hero-desktop` | Hero (§3.2) | Escena documental del local real: barra o interior reconocible, con espacio negativo para el titular | Desktop nativa | 16:9, ≥1920 px de ancho | «Interior de la cafetería Boulevard con la barra al fondo» | Cedida por el titular con permiso de uso web `TODO(VERIFICAR)` | Fotografía aportada por el usuario | Pendiente de aportar y aprobar |
| 2 | `hero-mobile` | Hero móvil | Recorte o variación fiel del mismo lugar del `hero-desktop` | Móvil nativa o recorte fiel de la #1 | 4:5, ≥1080 px ancho | «Vista vertical del mostrador del local» | Mismo acuerdo que `hero-desktop` | Fotografía aportada | Pendiente |
| 3 | `fachada` | «Así es Boulevard» / galería / visítanos | Fachada y entrada reales a pie de calle, luz del día | Única; recorte responsable en móvil | 3:2, ≥1600 px | «Entrada principal del Boulevard a la calle» | Cedida por el titular `TODO(VERIFICAR)` | Fotografía aportada | Pendiente |
| 4 | `barra-principal` | «Así es Boulevard» | Barra auténtica en servicio, sin estilización ni rótulos añadidos | Única; recorte en móvil | 3:2, ≥1600 px | «La barra principal del local con el café en servicio» | Cedida por el titular `TODO(VERIFICAR)` | Fotografía aportada | Pendiente |
| 5 | `interior` | «Así es Boulevard» + galería | Perspectiva real del comedor o interior | Única; recorte en móvil | 4:3, ≥1600 px | «Vista del interior del local con mesas y ventanal» | Cedida por el titular `TODO(VERIFICAR)` | Fotografía aportada | Pendiente |
| 6 | `terraza` | Franja de momentos / galería | Terraza auténtica **solo si existe**, con referencia reciente y permiso; si no aplica, se sustituye por una segunda toma de interior (nunca se inventa) | Única; recorte en móvil | 3:2, ≥1600 px | «Terraza exterior del Boulevard con algunas mesas» | Permiso del titular `TODO(VERIFICAR)` | Fotografía aportada | Condicional |
| 7 | `desayuno-cafe` | Franja (desayunos/pintxos) | Café o desayuno real servido por el local, en mesa o barra | Móvil preferente | 4:5, ≥1200 px | «Café con leche y desayuno servidos en el Boulevard» | Cedida por el titular `TODO(VERIFICAR)` | Fotografía aportada | Pendiente |
| 8 | `pintxo-tortilla` | Franja (desayunos/pintxos) | Pintxo o tortilla real del establecimiento sobre la barra | Móvil preferente | 4:5, ≥1200 px | «Tortilla de patata servida sobre la barra» | Cedida por el titular `TODO(VERIFICAR)` | Fotografía aportada | Pendiente |
| 9 | `plato-destacado` | «Nuestra oferta» | Plato fotografiado en el local, preferentemente de una referencia ya validada de la carta `TODO(VERIFICAR)` | Móvil preferente | 4:5, ≥1200 px | «Plato servido del Boulevard» (nombre al validar) | Cedida por el titular `TODO(VERIFICAR)` | Fotografía aportada | Pendiente |
| 10 | `detalle-ambiente` | Galería / «Así es Boulevard» | Detalle real de decoración, mesa o servicio (servilletas, rótulo, disposición de mesa) | Móvil preferente | 1:1 o 4:5, ≥1200 px | «Detalle del ambiente del Boulevard» | Cedida por el titular `TODO(VERIFICAR)` | Fotografía aportada | Pendiente |

**Rutas previstas de integración (PR futura):** `src/assets/images/<asset>.<ext>`; el pipeline de imágenes de Astro (ver <https://docs.astro.build/en/guides/images/>) permitirá optimización y formatos modernos. El estado de cada asset se actualiza aquí al aprobarse el archivo.

### 6.1 Ampliación fotográfica para la dirección de motion (aprobada el 10/11/2026)

- El inventario **se mantiene en sus 10 assets** con sus destinos: no se sustituye ninguno y no se amplía el número.
- **4 variantes independientes por asset:** capturas o versiones separadas, cada una utilizable por sí sola; **nunca collages ni cuadrículas combinadas**. Se seleccionará una o más variantes aprobadas según necesidades y disponibilidad. Orientativo de variación: encuadre (amplio/medio/detalle) u orientación, a criterio de quien fotografía.
- **Originales de alta resolución con encuadre amplio** (aire alrededor del sujeto) y **zonas seguras** para las máscaras, escalados y reencuadres de las escenas de §4, sin perder contenido al recortar.
- **Interiores, barra, fachada y terraza sin personas** en las imágenes finales, aun si la referencia visual incluye clientes o empleados; limpiar reflejos y siluetas cuando corresponda, **sin inventar la arquitectura tapada** y sin presentar reconstrucciones inciertas como fotografía documental.
- **Continuidad del hero:** `hero-desktop` y `hero-mobile` comparten lugar, momento y luz (misma escena del local), para que el cambio de viewport no haga saltar el contexto espacial.
- **Vídeo ambiental: opcional y posterior** (§4.2); no bloquea los 10 assets ni esta issue.
- **Estado de validación:** siguen aprobadas la dirección visual, la estructura de la HOME y la dirección de movimiento (§4); siguen **pendientes de validación humana** las fotos definitivas con sus 4 variantes por asset, los permisos y derechos de uso, y los datos marcados `TODO(VERIFICAR)` en §0 (logo, dirección, teléfono, horarios, carta, titular y CTAs definitivos).

---

## 7. Dos modos de producción visual

1. **Con referencia real aportada:** edición **fiel** de la fotografía: color, luz, perspectiva, reducción de ruido, nitidez y recorte. Se conserva sin manipulación la distribución del local, los materiales, la comida y la rotulación. No se inventan elementos ni se presenta como real nada generado.
2. **Sin referencia:** únicamente imagen **conceptual/ilustrativa** de ambiente o comida, identificada siempre como tal (pie tipo «imagen ilustrativa»), jamás como fotografía documental del Boulevard. No se generan fachadas, locales, salas, productos concretos, señalética ni logotipos supuestamente reales.

Cada pieza publicada declara en este brief si es fotografía real aprobada o elemento ilustrativo; la web no debe inducir nunca a confusión entre ambas.

---

## 8. Nota sobre el sitio Eatbu

El sitio Eatbu (<https://cafeteria-boulevard.eatbu.com/?lang=es>) se usa **solo como referencia informativa a contrastar** con el titular: indica la orientación de la oferta (carta con, entre otros elementos, Hamburguesa Mexicana, Sartén cojonuda, Plato infantil, Hamburguesa completa, Bocadillo Boulevard y Ensalada César; anuncia terraza, para llevar y eventos privados).

- **Nunca se descargan ni copian sus imágenes ni sus datos** para la nueva web sin derechos de uso comprobados.
- No se inventan horarios, carta, precios ni testimonios; todo dato comercial visto en Eatbu se registra como `TODO(VERIFICAR)` y solo entra tras la validación del titular.
- Se mantiene siempre la distinción explícita entre fotografía real del local (aprobada y cedida) e imagen conceptual (marcada como ilustrativa), sin construcciones engañosas.

---

## 9. Cierre de fase

- [x] Dirección única documentada (urbano cálido) con razones.
- [x] Paleta de 5 tonos con roles, matriz de contraste y tipografía verificadas.
- [x] HOME en 8 partes con CTAs, separando aprobado y pendiente de validar.
- [x] Reglas responsive (hero 16:9/4:5, áreas seguras, foco, WCAG 2.2 AA y metas de performance).
- [x] Inventario de 10 assets con destino, captura, variantes, orientación, alt orientativo, derechos, fuente, estado y ruta prevista.
- [x] Modos real frente a conceptual y nota Eatbu, sin migrar datos ni fotos sin derechos.
- [x] Motion Direction / Scroll Experience documentada: principios, hero cinematográfico, scroll storytelling, galería interactiva y bloque carbón, ritmo por secciones, storyboard de 4 momentos, matriz de efectos/fallback, tecnologías con límites y riesgos (§4).
- [x] Ampliación fotográfica para motion (§6.1): 4 variantes independientes por asset, interiores sin personas, originales de alta resolución con zonas seguras, continuidad del hero; skills locales verificadas (§0).
- [ ] Actualizar estados de assets y secciones cuando lleguen las fotos reales (4 variantes por asset) y el vídeo ambiental si se aprueba (fase posterior del roadmap).
