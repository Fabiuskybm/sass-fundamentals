
import './styles/main.scss';


// =======================
// |  Elementos del DOM  |
// =======================

const header = document.querySelector('#header');
const app = document.querySelector('#app');
const footer = document.querySelector('#footer');




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





// ===============================
// |  Ejercicio 5 - Anidamiento  |
// ===============================

// Datos del menú
const NAV_ITEMS = [
  { id: 'intro', label: 'Inicio' },
  { id: 'ejercicio-2', label: 'Box Model' },
  { id: 'ejercicio-3', label: 'Flexbox' },
  { id: 'ejercicio-4', label: 'Variables SASS' },
  { id: 'ejercicio-6', label: 'Mixins' },
];


const navbarHTML = `
  <nav class="nav">
    <ul class="nav__list">

      ${NAV_ITEMS.map(item => `
        <li class="nav__item">
          <a class="nav__link" href="#${item.id}">${item.label}</a>
        </li>
      `).join('')}

    </ul>
  </nav>
`;




// =============================
// |  Render de la aplicación  |
// =============================

header.innerHTML = `
  <h1>Aprendiendo CSS y SASS</h1>
  ${navbarHTML}
`;


app.innerHTML = `

  <section id="intro" class="app__section app__section--intro">
    <p>¡Bienvenido al tutorial de CSS + SASS!</p>
  </section>


  <section id="ejercicio-2" class="app__section app__section--box-model">
    <h2>Ejercicio 2 - Box Model</h2>

    <div class="app__box caja">
      <p>Caja</p>
    </div>

  </section>


  <section id="ejercicio-3" class="app__section app__section--flexbox">
    <h2>Ejercicio 3 - Flexbox básico</h2>
    <div class="flex-demo">${flexItemsHTML}</div>
  </section>


  <section id="ejercicio-4" class="app__section app__section--variables">
    <h2>Ejercicio 4 - Variables SASS</h2>

    <div class="variable-box">
      <p>
        Esta caja <strong>.variable-box</strong> utiliza variables
        SASS para definir colores, tipografía, bordes y sombras de
        forma consistente.
      </p>
    </div>
  </section>


  <section id="ejercicio-6" class="app__section app__section--mixins">
    <h2>Ejercicio 6 - Mixins</h2>
    
    <button class="btn-primario">Botón Primario</button>
    <button class="btn-peligro">Botón Peligro</button>
  </section>

`;


footer.innerHTML = `
  <p>Actividad realizada por Fabio Benítez - 2ºDAW</p>
`;




// =============================
// |  Eventos e interacciones  |
// =============================

// Cuando se hace clic en un enlace del navbar:
// 1. Detecta la sección correspondiente
// 2. Busca su <h2>
// 3. Le añade la clase .highlight durante 1 segundo (efecto glow)
header.addEventListener('click', (event) => {

  const link = event.target.closest('.nav__link');
  if (!link) return;

  const targetId = link.getAttribute('href').slice(1);
  const section = document.getElementById(targetId);
  if (!section) return;

  const heading = section.querySelector('h2');
  if (!heading) return;

  heading.classList.add('highlight');

  setTimeout(() => {
    heading.classList.remove('highlight');
  }, 1000);

});