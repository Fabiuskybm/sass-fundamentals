
# Tutorial de CSS y SASS — Proyecto con Webpack y ES Modules

Bienvenido al proyecto de aprendizaje **CSS + SASS**.  
El objetivo es aprender paso a paso los fundamentos de **CSS moderno** y las herramientas avanzadas que ofrece **SASS**, dentro de un entorno real usando **Webpack** y **ES Modules**.

Este README sirve como guía completa del proyecto, incluyendo:
- Explicación del entorno de trabajo
- Estructura del proyecto
- Archivos incluidos
- Cómo ejecutar el proyecto
- Ejercicios guiados con explicación y propósito

---

# 1. Estructura de carpetas del proyecto

Esta es la estructura inicial del proyecto. Todo lo que aparece aquí está incluido en el scaffolding excepto `main.scss`, que lo debe ir construyendo el alumno:

```plaintext
css-sass-tutorial/
│
├── package.json
├── package-lock.json (generado automáticamente)
├── webpack.config.js
├── README.md
├── /src
│   ├── index.js
│   ├── index.html
│   ├── styles
│   │   ├── main.css (generado automáticamente por webpack)
│   │   └── main.scss (lo crea el alumno)
│   └── assets/
│       └── ejemplo.png
└── /dist (generado por webpack)
```

---

# 2. Explicación del entorno

## ¿Qué es Webpack?
Webpack es un empaquetador de módulos. En este proyecto:
- Permite importar SCSS desde JavaScript.
- Compila SASS → CSS automáticamente.
- Recarga la página cuando cambias un archivo (`hot reload`).
- Genera la versión final del proyecto en `/dist`.

## ¿Por qué ES Modules?
Porque son el estándar actual en JavaScript moderno.  
Ejemplo:
```js
import './styles/main.scss';
```

## ¿Por qué usar SASS?
SASS te permite escribir CSS más potente y organizado:
- Variables
- Anidamiento
- Mixins
- Extends
- Partials e imports

---

# 3. Instalación y ejecución del proyecto

1. Instala las dependencias:

```bash
npm install
```

2. Inicia el servidor de desarrollo:

```bash
npm run dev
```

3. Abre el navegador en caso de que no se abra solo:  
`http://localhost:8080` (o el puerto asignado).

Para generar la versión final:

```bash
npm run build
```

---

# 4. Tutorial paso a paso — Ejercicios guiados

A continuación se enumeran los ejercicios que debes completar en orden.  
Cada ejercicio tiene una **explicación**, un **objetivo** y unas **tareas**.

---

## Ejercicio 1 — Selectores básicos (≈10 min)

### Explicación
En CSS, los selectores permiten aplicar estilos a elementos HTML.  
Aprender los selectores esenciales es la base del lenguaje.

### Objetivo
- Usar selectores de etiqueta, clase e ID.
- Aplicar propiedades básicas como `color`, `background`, `padding`, `margin`.

### Tareas
1. Edita `main.scss` y añade estilos básicos para `body`, `h1` e `#app`.
2. Observa la recarga automática en el navegador.

---

## Ejercicio 2 — Box Model (≈10 min)

### Explicación
El box model define cómo se comporta el espacio:  
`width`, `height`, `padding`, `border` y `margin`.

### Objetivo
Aprender a crear cajas y controlar sus dimensiones.

### Tareas
1. Crea una clase `.caja` con ancho, alto, fondo y borde.
2. Inserta la caja desde `index.js` para visualizarla.

---

## Ejercicio 3 — Flexbox básico (≈10 min)

### Explicación
Flexbox permite alinear y distribuir elementos de forma sencilla.

### Objetivo
Entender `display: flex`, el espaciado, y la distribución básica.

### Tareas
1. Crear un contenedor `.flex-demo` y varios elementos dentro.
2. Probar cambios en `gap`, `justify-content`, `align-items`.

---

## Ejercicio 4 — Variables en SASS (≈10 min)

### Explicación
Las variables permiten reutilizar valores y mantener consistencia.

### Objetivo
Crear variables para colores y tamaños.

### Tareas
1. Define al menos dos variables.
2. Úsalas en una clase `.variable-box`.

---

## Ejercicio 5 — Anidamiento (≈10 min)

### Explicación
SASS permite anidar selectores dentro de otros para mayor legibilidad.

### Objetivo
Crear una estructura `.navbar` realista.

### Tareas
1. Crea una barra de navegación con estilos para `ul` y `li`.
2. Usa `&:hover`.

---

## Ejercicio 6 — Mixins (≈15 min)

### Explicación
Los mixins permiten definir bloques reutilizables de estilos.

### Objetivo
Crear componentes consistentes (botones en este caso).

### Tareas
1. Define un mixin `boton`.
2. Crea `.btn-primario` y `.btn-peligro`.

---

## Ejercicio 7 — Extends (≈10 min)

### Explicación
`@extend` permite compartir un bloque base de estilos.

### Objetivo
Crear variaciones de tarjetas (`cards`).

### Tareas
1. Crear `.base-card`.
2. Extenderla para `.card-info` y `.card-alert`.

---

## Ejercicio 8 — Partials e Imports (≈15 min)

### Explicación
Una buena estructura SCSS separa estilos en archivos parciales.

### Objetivo
Crear carpetas y reorganizar el proyecto.

### Tareas
1. Crear la estructura:

```
src/styles/
│── main.scss
│── _variables.scss
│── _mixins.scss
│── components/
│     ├── _cards.scss
│     └── _navbar.scss
```

2. Usar:

```scss
@import 'variables';
@import 'mixins';
@import 'components/cards';
@import 'components/navbar';
```

---

# 5. Resultado esperado

Tras completar este tutorial, el alumno deberá:

- Dominar los fundamentos de CSS moderno.
- Comprender cómo SASS mejora la productividad.
- Organizar estilos de forma modular y escalable.
- Entender el flujo real de trabajo con Webpack.
- Ser capaz de extender el proyecto por sí mismo.

---
