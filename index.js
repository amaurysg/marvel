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


//MENUS LEFT NEW //
//SELECTORES MENU LEFT//
const Menu = document.querySelector(".Menu");
const menuButton = document.querySelector(".icon-menu");
const menuCloseButton = document.querySelector(".Menu-close");
const subMenuLinks = document.querySelectorAll(".Submenu-open");
const subMenuBackLinks = document.querySelectorAll(".Submenu-back");

//SELECTORES SUBMENUS HEADER//
const menuDesktopLinks = document.querySelectorAll(".Menu-link");

menuDesktopLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    setTimeout(() => {
      //link.preventDefault()
      link.classList.toggle("isActive");
      link.children[1].classList.toggle("isActive");
    }, 250);
  });
  link.addEventListener("mouseleave", () => {
    //link.preventDefault()
    link.classList.toggle("isActive");
    link.children[1].classList.toggle("isActive");
  });
});


//ABRIR MENU//
menuButton.addEventListener("click", (event) => {
  event.preventDefault();
  Menu.classList.toggle("isActive");
});
//CERRAR MENU//
menuCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  Menu.classList.toggle("isActive");
});

//ABRIR SUB MENUS DERECHA A IZQUIERDA//
subMenuLinks.forEach((submenu) => {
  submenu.addEventListener("click", (event) => {
    event.preventDefault();
    submenu.nextElementSibling.classList.toggle("isActive");
  });
});
//CERRAR SUB MENUS IZQUIERDA A DERECHA//
subMenuBackLinks.forEach((backLink) => {
  backLink.addEventListener("click", (event) => {
    event.preventDefault();
    backLink.parentElement.classList.toggle("isActive");
  });
});


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
