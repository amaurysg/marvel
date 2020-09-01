const ipad = window.matchMedia("screen and (max-width: 767px)");
const menu = document.getElementById("menuLeft");
const burgerButton = document.getElementById("burger-menu");

ipad.addListener(validation);

function validation(evento) {
  if (evento.matches) {
    burgerButton.addEventListener("click", hideShow);
  } else burgerButton.removeEventListener("click", hideShow);
  console.log(evento.matches);
}
validation(ipad);

function hideShow() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
  }
}
//CERRAR MENÚ//
const mySVG = document.querySelector(".close-svg");
mySVG.addEventListener("click", closeMenu);

function closeMenu() {
  menu.classList.remove("is-active");
}

//PROBANDO ARROW //

/* const flecha1 = document.getElementById("svg-arrow");
flecha1.addEventListener("click", teste); */

const newFlecha = document.querySelector(".svg-arrow");
newFlecha.addEventListener("click", abrirDerecha);

const der1 = document.querySelector(".menu-der1");
function abrirDerecha() {
  der1.classList.add("is-active");
}

const closeMenuSecond = document.getElementById("menu-der1-title");
closeMenuSecond.addEventListener("click", closeMenuSecundarios);

function closeMenuSecundarios() {
  der1.classList.remove("is-active");
}

//FUNCION DE TESTE
function teste() {
  alert("Función teste");
}
