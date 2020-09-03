var slideIndex = 0;
window.addEventListener("load", showSlides);

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

var menuIndex = 0;
window.addEventListener("load", showMenuLoad);

function showMenuLoad() {
  var m;
  var menuList = document.querySelectorAll(".menu-list");
  for (m = 0; m < menuList.length; m++) {
    menuList[m].style.borderBottom = "3px solid white";
  }
  menuIndex++;
  if (menuIndex > menuList.length) {
    menuIndex = 1;
  }
  menuList[menuIndex - 1].style.borderBottom = "3px solid #e62429";
  setTimeout(showMenuLoad, 5000);
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
