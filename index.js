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

const newFlecha = document.querySelector(".svg-arrow");
newFlecha.addEventListener("click", abrirDerecha);

/* ABRIR MENU VIDEOS */
const der1 = document.querySelector(".menu-der1");
function abrirDerecha() {
  der1.classList.add("is-active");
}
/* CERRAR MENU VIDEOS */
const closeMenuSecond = document.getElementById("menu-der1-title");
closeMenuSecond.addEventListener("click", closeMenuSecundarios);

function closeMenuSecundarios() {
  der1.classList.remove("is-active");
}

/* ABRIR MENU CHARACTERS */
const der2 = document.getElementById("characters");
der2.addEventListener("click", abrirCharacters);

const menuCharacters = document.querySelector(".menu-der2");
function abrirCharacters() {
  menuCharacters.classList.add("is-active");
}
/* CERRAR MENU CHARACTERS */

const $menuCharacters = document.getElementById("menu-der2-title");
$menuCharacters.addEventListener("click", closeMenuCharacters);

function closeMenuCharacters() {
  menuCharacters.classList.remove("is-active");
}

/* ABRIR MENU COMICS */
const der3 = document.getElementById("comics");
der3.addEventListener("click", abrirComics);

const menuComics = document.querySelector(".menu-der3");
function abrirComics() {
  menuComics.classList.add("is-active");
}

/* CERRAR MENU COMICS */

const $menuComics = document.getElementById("menu-der3-title");
$menuComics.addEventListener("click", closeMenuComics);

function closeMenuComics() {
  menuComics.classList.remove("is-active");
}

/* ABRIR MENU MOVIES */
const der4 = document.getElementById("movies");
der4.addEventListener("click", abrirMovies);

const menuMovies = document.querySelector(".menu-der4");
function abrirMovies() {
  menuMovies.classList.add("is-active");
}

/* CERRAR MENU MOVIES */
const $menuMovies = document.getElementById("menu-der4-title");
$menuMovies.addEventListener("click", closeMenuMovies);

function closeMenuMovies() {
  menuMovies.classList.remove("is-active");
}

/* ABRIR MENU MOVIES */
const der5 = document.getElementById("tv");
der5.addEventListener("click", abrirTv);

const menuTv = document.querySelector(".menu-der5");
function abrirTv() {
  menuTv.classList.add("is-active");
}

/* CERRAR MENU TV SHOWS */
const $menuTv = document.getElementById("menu-der5-title");
$menuTv.addEventListener("click", closeMenuTv);

function closeMenuTv() {
  menuTv.classList.remove("is-active");
}

/* ABRIR MENU GAMES */
const der6 = document.getElementById("games");
der6.addEventListener("click", abrirGames);

const menuGames = document.querySelector(".menu-der6");
function abrirGames() {
  menuGames.classList.add("is-active");
}

/* CERRAR MENU GAMES */
const $menuGames = document.getElementById("menu-der6-title");
$menuGames.addEventListener("click", closeMenuGames);

function closeMenuGames() {
  menuGames.classList.remove("is-active");
}

/* ABRIR MENU NEWS */
const der7 = document.getElementById("news");
der7.addEventListener("click", abrirNews);

const menuNews = document.querySelector(".menu-der7");
function abrirNews() {
  menuNews.classList.add("is-active");
}

/* CERRAR MENU NEWS */
const $menuNews = document.getElementById("menu-der7-title");
$menuNews.addEventListener("click", closeMenuNews);

function closeMenuNews() {
  menuNews.classList.remove("is-active");
}

//FUNCION DE TESTE
function teste() {
  alert("Función teste");
}
