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

window.addEventListener("load", showAd);
window.addEventListener("load", hiddenAd);

function showAd() {
  setTimeout(() => {
    document.getElementById("anuncio1").appendChild(anuncio);

    console.log("debería mostrar");
  }, 2000);
}
function hiddenAd() {
  setTimeout(() => {
    document.getElementById("anuncio1").removeChild(anuncio);

    console.log("debería ocultar");
  }, 5000);
}
setInterval(showAd, 5000);
setInterval(hiddenAd, 10000);
