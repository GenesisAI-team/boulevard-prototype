# Fusión 20 — MVP web

Prototipo responsive para el Bar Restaurante Fusión 20 de Sangüesa (Navarra).

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Ejecutar en local

```bash
npm install
npm run dev
```

Vite mostrará la URL local, normalmente `http://localhost:5173`.

## Comprobar y generar producción

```bash
npm run lint
npm run build
npm run preview
```

La compilación optimizada se genera en `dist/`.

## Estructura

```text
Fusion20-MVP/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── eslint.config.js
```

## Personalización recomendada

1. Sustituir las fotografías de demostración de Unsplash por imágenes propias.
2. Añadir el logotipo oficial.
3. Revisar la carta, servicios y datos públicos antes de publicar.
4. Añadir las redes sociales oficiales cuando se confirmen sus URLs.
5. Sustituir la nota “Propuesta web demostrativa” al convertirlo en la web definitiva.

## Despliegue

El proyecto puede desplegarse en Vercel, Netlify, Cloudflare Pages o cualquier
servidor capaz de servir el contenido estático de `dist/`.

- Comando de build: `npm run build`
- Directorio de salida: `dist`

