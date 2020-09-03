var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slidesList = document.querySelectorAll(".slidersCollections");
  for (i = 0; i < slidesList.length; i++) {
    slidesList[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > slidesList.length) {
    slideIndex = 1;
  }
  slidesList[slideIndex - 1].style.opacity = "1";
  setTimeout(showSlides, 5000);
}

/* const boton = document.querySelector(".icon-search");
const sliderFive = document.getElementById("slider5");
const sliderFour = document.getElementById("slider4");

window.addEventListener("load", cargaSlider4);

function cargaSlider5() {
  setTimeout(() => {
    sliderFive.style.opacity = "1";
  }, 5000);
}

function cargaSlider4() {
  setTimeout(() => {
    sliderFour.style.opacity = "1";
  }, 3000);
}

function testes() {
  console.log("testes");
} */

/* sliderFive.style.opacity = "1";
console.log("teste botón"); */
