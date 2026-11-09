# DESIGN BRIEF — Boulevard (astro-v2)

**Issue:** GEN-8 · **Estado:** dirección aprobada por el usuario («Boulevard urbano cálido»)
**Alcance de este documento:** dirección artística, tokens, HOME, reglas responsive y brief fotográfico. No implementa código ni incluye assets: eso son PR posteriores según el orden fijado en `ROADMAP.md`.
**Fecha:** 2026-11-09

---

## 0. Estado de las decisiones

**Aprobadas por el usuario (no se reabren):** estilo **urbano cálido**, editorial contemporáneo y cercano, con fotografía real protagonista (descartada la exploración de tres estilos); estructura de la HOME en 8 partes; dos modos de producción visual (real frente a conceptual); sitio Eatbu solo como referencia a contrastar; paleta y tipografía **iniciales de trabajo** (revisables tras ver las fotos reales; sin abrir un nuevo concurso de estilos).

**Pendientes de validar con el titular** (irán marcadas `TODO(VERIFICAR)` aquí y en código futuro): logo/marca auténtica (por ahora la marca es texto), dirección exacta, teléfono, horarios, carta y precios, testimonios/reseñas, textos definitivos, titular definitivo del hero, CTAs finales, ubicación Pamplona·Rochapea como contexto del hero, permisos y derechos de uso de las fotografías aportadas, forma de trato (tuteo/usted) del tono verbal.

**Registro de skills (requerido por la issue):** las skills `frontend-design` y `ui-ux-pro-max` **no se han verificado como instaladas** en el entorno local de este agente (no están disponibles). Los criterios aprobados de esta issue prevalecen sobre cualquier skill; no se instala ninguna skill ni dependencia por iniciativa del agente.

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
- Respeto estricto de `prefers-reduced-motion: reduce` (sin parallax ni transformaciones visibles).
- Foco siempre visible (`:focus-visible`), navegación completa por teclado, orden de tabulación natural y `alt` realista en toda imagen (los alt de §5 son orientativos; se reescriben al integrar cada foto real).

---

## 3. HOME — estructura en 8 partes (wireframe textual)

Orden fijo, mobile-first. Marcas: ✔ = estructura/propósito **aprobados**; ⏳ = contenido **pendiente de validar** con el titular.

1. **Header simple** ✔ · ⏳ datos: marca textual «Boulevard» hasta que exista logo auténtico `TODO(VERIFICAR)`; navegación `Inicio · Carta · El local · Contacto`; versión móvil accesible. Acciones de llamada o llegar solo con datos confirmados `TODO(VERIFICAR)` teléfono y dirección exacta.
2. **Hero fotográfico** ✔ · ⏳ foto y copy definitivos: fotografía auténtica del interior o barra (16:9 desktop / 4:5 móvil, assets `hero-desktop`/`hero-mobile` de §5), titular **provisional** «Un lugar para cada momento» `TODO(VERIFICAR)`, contexto `Pamplona · Rochapea` `TODO(VERIFICAR)` ubicación, una frase corta de propósito y dos CTAs propuestos: `Ver la carta` y `Cómo llegar`. Sin reserva online ni call-to-action falsos; «Ver la carta» apunta a la carta real cuando esté validada.
3. **Franja de tres momentos/servicios** ✔ · ⏳ oferta: desayunos/pintxos · comida/carta · visita/contacto, alineada con los servicios realmente confirmados `TODO(VERIFICAR)`. Sin tarjetas repetitivas ni claims sin comprobar. Eatbu menciona terraza, para llevar y eventos privados: ninguna de esas capacidades se publica sin confirmación del titular.
4. **«Así es Boulevard»** ✔ · ⏳ texto: presentación editorial de cercanía con fotografía real de barra/interior y un texto breve **verificado** con el titular. Foto: asset `interior` o `barra-principal`.
5. **«Nuestra oferta» / carta** ✔ · ⏳ contenido: selección visual de platos reales + CTA a la carta actual vigente. Los elementos que Eatbu menciona (Hamburguesa Mexicana, Sartén cojonuda, Plato infantil, Hamburguesa completa, Bocadillo Boulevard, Ensalada César) quedan como `TODO(VERIFICAR)`: nombres, vigencia, precios y fotos reales. Ningún precio se publica sin validación de vigencia.
6. **Galería** ✔: fotografías del local y de la comida con ritmo editorial (grid asimétrico controlado), siempre del local real; sin mockups de espacios inexistentes.
7. **Visítanos** ✔ · ⏳ datos: `TODO(VERIFICAR)` dirección exacta, horarios reales (incluidos festivos/cierres temporales), teléfono, mapa o enlace; un CTA claro. Nada se publica antes de la validación.
8. **Footer** ✔: marca, navegación, contacto validado e información legal verificada (aviso legal y privacidad, a definir cuando toque).

**Excluido de la HOME (decisión aprobada):** panel o registro de usuario, reservas/pagos online, slider automático en el hero, falso ranking o reseñas, megamenús, librerías React sin necesidad.

**Sitemap propuesto (orientativo):** `/` (HOME compuesta, única por ahora); páginas futuras desde la navegación: `/carta`, `/el-local`, `/contacto`. El header funciona igual con la HOME de una sola página.

---

## 4. Reglas responsive y metas de calidad

- **Hero:** desktop panorámica **16:9**; móvil vertical **4:5**, descrita como recorte o variación fiel del **mismo lugar** (no reorganiza la escena; ver §5). La composición reserva espacio negativo para el titular. En móvil, texto sobre imagen con scrim de contraste válido o bloque texto+foto apilado; nunca superposiciones con contraste insuficiente.
- **Áreas seguras móvil:** respetar `env(safe-area-inset-*)` en header, CTAs y footer; objetivos de toque ≥44×44 px; nada crítico pegado a los bordes.
- **Navegación y lectura móvil:** header simple que no invada el hero, menú accesible sin megamenu, cuerpo ≥16 px, jerarquía visible sin depender solo del color.
- **Contraste WCAG 2.2 AA como mínimo en todo entregable** (texto 4.5:1; gráficos, iconos y foco 3:1), soportado por la matriz de §2.1.
- **Performance como meta:** LCP < 2.5 s en móvil (red simulada), CLS ≈ 0 (fallback de fuentes con métricas), imágenes optimizadas con el pipeline de Astro (formatos modernos y `<Image>` en su fase) y cero JS cliente por defecto, coherente con la decisión de GEN-5 en `docs/ARCHITECTURE.md` (salida estática).

---

## 5. Brief fotográfico — 10 assets prioritarios

El usuario aportará las fotografías reales en otro chat: **el brief no queda bloqueado por su ausencia**. La integración de archivos aprobados y optimizados en Astro es una fase/PR posterior (ver ROADMAP). Convenciones: capturas a la máxima resolución disponible, luz natural siempre que sea posible; si la variante móvil/desktop sale de recortar una sola toma, el recorte es fiel sin alterar arquitectura, rotulación ni productos.

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

---

## 6. Dos modos de producción visual

1. **Con referencia real aportada:** edición **fiel** de la fotografía: color, luz, perspectiva, reducción de ruido, nitidez y recorte. Se conserva sin manipulación la distribución del local, los materiales, la comida y la rotulación. No se inventan elementos ni se presenta como real nada generado.
2. **Sin referencia:** únicamente imagen **conceptual/ilustrativa** de ambiente o comida, identificada siempre como tal (pie tipo «imagen ilustrativa»), jamás como fotografía documental del Boulevard. No se generan fachadas, locales, salas, productos concretos, señalética ni logotipos supuestamente reales.

Cada pieza publicada declara en este brief si es fotografía real aprobada o elemento ilustrativo; la web no debe inducir nunca a confusión entre ambas.

---

## 7. Nota sobre el sitio Eatbu

El sitio Eatbu (<https://cafeteria-boulevard.eatbu.com/?lang=es>) se usa **solo como referencia informativa a contrastar** con el titular: indica la orientación de la oferta (carta con, entre otros elementos, Hamburguesa Mexicana, Sartén cojonuda, Plato infantil, Hamburguesa completa, Bocadillo Boulevard y Ensalada César; anuncia terraza, para llevar y eventos privados).

- **Nunca se descargan ni copian sus imágenes ni sus datos** para la nueva web sin derechos de uso comprobados.
- No se inventan horarios, carta, precios ni testimonios; todo dato comercial visto en Eatbu se registra como `TODO(VERIFICAR)` y solo entra tras la validación del titular.
- Se mantiene siempre la distinción explícita entre fotografía real del local (aprobada y cedida) e imagen conceptual (marcada como ilustrativa), sin construcciones engañosas.

---

## 8. Cierre de fase

- [x] Dirección única documentada (urbano cálido) con razones.
- [x] Paleta de 5 tonos con roles, matriz de contraste y tipografía verificadas.
- [x] HOME en 8 partes con CTAs, separando aprobado y pendiente de validar.
- [x] Reglas responsive (hero 16:9/4:5, áreas seguras, foco, WCAG 2.2 AA y metas de performance).
- [x] Inventario de 10 assets con destino, captura, variantes, orientación, alt orientativo, derechos, fuente, estado y ruta prevista.
- [x] Modos real frente a conceptual y nota Eatbu, sin migrar datos ni fotos sin derechos.
- [ ] Actualizar estados de assets y secciones cuando lleguen las fotos reales (fase posterior del roadmap).
