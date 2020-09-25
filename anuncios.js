//1- Creamos elemento
var anuncio = document.createElement("div");
//2 - Creamos nodo
var contenido = document.createTextNode("Hola");
//3- añadimos el nodo de texto al anuncio
anuncio.appendChild(contenido);
//4- Agregamos atributos
// "class", nombre clase // OJOOO !!
anuncio.setAttribute("align", "center");
//5-Agrego anuncio al documento
/* document.getElementById("anuncio1").appendChild(anuncio); */

var closeAnu = document.getElementById("close-svg-anuncio");
closeAnu.addEventListener("click", () => {
  anu.classList.remove("is-active");
});

window.addEventListener("load", showAd);
window.addEventListener("load", hiddenAd);
const anu = document.querySelector(".anuncio");
function showAd() {
  setTimeout(() => {
    anu.classList.add("is-active");
    /* 
    document.getElementById("anuncio1").appendChild(anuncio); */

    console.log("debería mostrar");
  }, 5000);
}
function hiddenAd() {
  setTimeout(() => {
    anu.classList.remove("is-active");

    /* document.getElementById("anuncio1").removeChild(anuncio); */

    console.log("debería ocultar");
  }, 10000);
}
setInterval(showAd, 5000);
setInterval(hiddenAd, 10000);
