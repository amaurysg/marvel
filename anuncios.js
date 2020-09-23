//1- Creamos elemento
var anuncio = document.createElement("div");
//2 - Creamos nodo
var contenido = document.createTextNode("Hola");
//3- añadimos el nodo de texto al anuncio
anuncio.appendChild(contenido);
//4- Agregamos atributos
anuncio.setAttribute("align", "center");
//5-Agrego anuncio al documento
/* document.getElementById("anuncio1").appendChild(anuncio); */

window.addEventListener("load", showAd);

function showAd() {
  setTimeout(() => {
    document.getElementById("anuncio1").appendChild(anuncio);
    console.log("debería mostrar");
  }, 20000);
}
