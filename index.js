const ipad = window.matchMedia("screen and (max-width: 767px)");
const menu = document.getElementById("menuLeft");
const burgerButton = document.getElementById("burger-menu");

ipad.addListener(validation);
//VALIDACION DE MEDIAQUERY
function validation(evento) {
  if (evento.matches) {
    /*  console.log(evento); */
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

//OCULTAR HEADER SCROLL //

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
  menuNews.classList.toggle("is-active");
}

/* CERRAR MENU NEWS */
const $menuNews = document.getElementById("menu-der7-title");
$menuNews.addEventListener("click", closeMenuNews);

function closeMenuNews() {
  menuNews.classList.toggle("is-active");
}

//FUNCION DE TESTE
function teste() {
  alert("Función teste");
}

//<<<<---- SUBMENUS ---->>>> //

var ListSubMenu = document.querySelectorAll(".nav2-list-item");

ListSubMenu.forEach((event) => {
  event.addEventListener("mouseenter", () => {
    event.classList.toggle("is-active");
    event.children[1].classList.toggle("is-active");
  });
  event.addEventListener("mouseleave", () => {
    event.classList.toggle("is-active");
    event.children[1].classList.toggle("is-active");
  });
});

/*   event.addEventListener("mouseenter", () => {
    event.classList.toggle("is-active"); */

/*  event.addEventListener("mouseleave", () => {
    event.classList.toggle("is-active");
  }); */

/* var $submenuMovies = document.querySelector(".nav2-list-item-a"); */

/* $submenuComics.addEventListener("click", openSubmenuComics);
$submenuMovies.addEventListener("click", openSubmenuMovies);

var $classSubmenuComics = document.querySelector(".submenuComics");
var $classSubmenuMovies = document.querySelector(".submenuMovies");

function openSubmenuComics() {
  $classSubmenuComics.classList.add("is-active");
}
function openSubmenuMovies() {
  $classSubmenuMovies.classList.add("is-active"); */

const $botonSignIn = document.getElementById("sign-in");
const $botonJoin = document.getElementById("join");
const $botonCloseSign = document.getElementById("boton-sign-close");

$botonSignIn.addEventListener("click", openCloseSign);
$botonJoin.addEventListener("click", openCloseJoin);
$botonCloseSign.addEventListener("click", closeSign);

const $classJoinFirst = document.querySelector(".join-first");
const $classJoinModal = document.querySelector(".join-first.is-active");

function openCloseJoin() {
  $classJoinFirst.classList.toggle("is-active");
  $classJoinFirst.addEventListener("click", () => {
    $classJoinFirst.classList.remove("is-active");
  });
}

const $classModalSign = document.getElementById("modal-sign");
function openCloseSign() {
  $classModalSign.classList.toggle("is-active");
}

function closeSign() {
  $classModalSign.classList.remove("is-active");
}

/* MODAL CREATE USER  */

const $botonOpenModalCreate = document.getElementById("open-modal-create");
const $classModalCreate = document.getElementById("modal-create");
const $botonModalCreateClose = document.getElementById("modalCreate-close");
const $botonJoinCreate = document.getElementById("boton-join-create");

$botonOpenModalCreate.addEventListener("click", () => {
  $classModalCreate.classList.add("is-active");
  closeSign();
});

$botonModalCreateClose.addEventListener("click", () => {
  $classModalCreate.classList.remove("is-active");
});

$botonJoinCreate.addEventListener("click", () => {
  $classModalCreate.classList.add("is-active");
});

//ESCONDER MENU SCROLL//
var lastScrollTop = 0;
var hea = document.getElementById("headerd");
window.addEventListener("scroll", () => {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    hea.style.display = "none";
  } else {
    hea.style.display = "block";
  }
  lastScrollTop = scrollTop;
});

/* let ubicacionActual = window.pageYOffset; //0

function menuHiddenShow() {
  let desplazamiento = window.pageYOffset;
  if (desplazamiento >= ubicacionActual) {
    document.getElementById("headers").style.top = "500px";
    console.log("se e");
  } else {
    document.getElementById("headerd").style.top = "-200px";
    console.log("se escondió");
  }
  ubicacionActual = desplazamiento;
}
 */
