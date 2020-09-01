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
/* const close = document.getElementById("close-svg");
close.addEventListener("click", closeMenu); */

var mySVG = document.querySelector(".close-svg");
var svgDoc;
mySVG.addEventListener("click", function () {
  svgDoc = mySVG.contentDocument;
  menu.classList.remove("is-active");
});

/* 
function closeMenu(e) {
  alert("Hola");
  menu.classList.remove("is-active");

} */
/* 
const svgObject = document.getElementById("close-svg").contentDocument; */

/*  const menul = document.getElementById("menu-left");
   menul.addEventListener("click", function () {
     const menuDesple = document.getElementById("menu-desple");
     if (menuDesple.style.display == "none") {
       menuDesple.style.display = "block";
       menuDesple.style.left = "0";
     } else {
       menuDesple.style.display = "none"

     }

   });

   const botonCerrar = document.getElementById("cerrar");
   botonCerrar.addEventListener("click", () => {
     menuDesple.style.display = "block"
   }
   ) */
