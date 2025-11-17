
import './styles/main.scss';


// Referencia al contenedor principal
const app = document.querySelector('#app');




// ===========================
// |  Ejercicio 3 - Flexbox  |
// ===========================

// Número de elementos a generar dinámicamente
const TOTAL_FLEX_ITEMS = 8;


// Generar los elementos de flexbox como HTML
const flexItemsHTML = Array.from({ length: TOTAL_FLEX_ITEMS }, (_, index) => {
  const itemNumber = index + 1;
  return `<div class="flex-demo__item">Elemento ${itemNumber}</div>`;
}).join('');




// =============================
// |  Render de la aplicación  |
// =============================

app.innerHTML = `

  <section class="app__section app__section--intro">
    <p>¡Bienvenido al tutorial de CSS + SASS!</p>
  </section>


  <section class="app__section app__section--box-model">
    <h2>Ejercicio 2 - Box Model</h2>

    <div class="app__box caja">
      <p>Caja</p>
    </div>

  </section>


  <section class="app__section app__section--flexbox">
    <h2>Ejercicio 3 - Flexbox básico</h2>
    <div class="flex-demo">${flexItemsHTML}</div>
  </section>


  <section class="app__section app__section--variables">
    <h2>Ejercicio 4 - Variables SASS</h2>

    <div class="variable-box">
      <p>
        Esta caja <strong>.variable-box</strong> utiliza variables
        SASS para definir colores, tipografía, bordes y sombras de
        forma consistente.
      </p>
    </div>
  </section>

`;
