//SLIDES MOBILE AUTOMATICO
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
  setTimeout(showSlides, 3000);
}
//SLIDES DESKTOP AUTOMATICO
var slideIndexD = 0;
window.addEventListener("load", showSlidesDesktop);

function showSlidesDesktop() {
  var i;
  var slidesListD = document.querySelectorAll(".slidersCollectionsD");
  for (i = 0; i < slidesListD.length; i++) {
    slidesListD[i].style.opacity = "0";
  }
  slideIndexD++;
  if (slideIndexD > slidesListD.length) {
    slideIndexD = 1;
  }
  slidesListD[slideIndexD - 1].style.opacity = "1";
  setTimeout(showSlidesDesktop, 3000);
}

//MENU MOBILE AUTOMATICO//
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
  setTimeout(showMenuLoad, 3000);
}
//MENU DESKTOP AUTOMATICO//
var menuIndexD = 0;
window.addEventListener("load", showMenuLoadD);

function showMenuLoadD() {
  var m;
  var menuListD = document.querySelectorAll(".main-menu-container-button");
  for (m = 0; m < menuListD.length; m++) {
    menuListD[m].style.color = "black";
    menuListD[m].classList.remove("is-active");
  }
  menuIndexD++;
  if (menuIndexD > menuListD.length) {
    menuIndexD = 1;
  }

  menuListD[menuIndexD - 1].style.color = "#e62429";
  menuListD[menuIndexD - 1].classList.toggle("is-active");

  setTimeout(showMenuLoadD, 3000);
}

var botonesMenu = document.querySelector(".main-container-list");
botonesMenu.addEventListener("click", function delegationMenu(evento) {
  const botonesM = evento.target.classList[1];

  switch (botonesM) {
    case "main-menu-container-button1":
      menuIndex = 0;
      break;
    case "main-menu-container-button2":
      console.log("boton2");
      break;
    case "main-menu-container-button3":
      console.log("termine función");
      break;

    case "main-menu-container-button4":
      console.log("boton4");

      break;
    case "main-menu-container-button5":
      console.log("boton5");
      break;
  }
});
