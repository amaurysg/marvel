const $menuMobile = document.querySelector(".menu");
const $menuDesktop = document.querySelector(".main-container-list");

var $slider1 = document.getElementById("slider1");
var $slider2 = document.getElementById("slider2");
var $slider3 = document.getElementById("slider3");
var $slider4 = document.getElementById("slider4");
var $slider5 = document.getElementById("slider5");
var $main1 = document.getElementById("main1");
var $main2 = document.getElementById("main2");
var $main3 = document.getElementById("main3");
var $main4 = document.getElementById("main4");
var $main5 = document.getElementById("main5");

$menuDesktop.addEventListener("click", function delegarDesktop(evento) {
  const mostrarSliderDesktop = evento.target.classList[1];
  switch (mostrarSliderDesktop) {
    case "main-menu-container-button1":
      evento.preventDefault();
      console.log("clic en menu1");
      $main1.style.opacity = "1";
      $main2.style.opacity = "0";
      $main3.style.opacity = "0";
      $main4.style.opacity = "0";
      $main5.style.opacity = "0";
      break;
    case "main-menu-container-button2":
      evento.preventDefault();
      $main1.style.opacity = "0";
      $main2.style.opacity = "1";
      $main3.style.opacity = "0";
      $main4.style.opacity = "0";
      $main5.style.opacity = "0";
      break;
    case "main-menu-container-button3":
      evento.preventDefault();
      $main1.style.opacity = "0";
      $main2.style.opacity = "0";
      $main3.style.opacity = "1";
      $main4.style.opacity = "0";
      $main5.style.opacity = "0";
      break;
    case "main-menu-container-button4":
      evento.preventDefault();
      $main1.style.opacity = "0";
      $main2.style.opacity = "0";
      $main3.style.opacity = "0";
      $main4.style.opacity = "1";
      $main5.style.opacity = "0";
      break;
    case "main-menu-container-button5":
      evento.preventDefault();
      $main1.style.opacity = "0";
      $main2.style.opacity = "0";
      $main3.style.opacity = "0";
      $main4.style.opacity = "0";
      $main5.style.opacity = "1";
      break;
  }
});

$menuMobile.addEventListener("click", function delegacion(e) {
  /*  console.log(e.target.classList[0]); */
  const mostrarSlider = e.target.classList[1];
  switch (mostrarSlider) {
    case "menu-list1":
      e.preventDefault();
      $slider1.style.opacity = "1";
      $slider2.style.opacity = "0";
      $slider3.style.opacity = "0";
      $slider4.style.opacity = "0";
      $slider5.style.opacity = "0";
      break;
    case "menu-list2":
      e.preventDefault();
      $slider1.style.opacity = "0";
      $slider2.style.opacity = "1";
      $slider3.style.opacity = "0";
      $slider4.style.opacity = "0";
      $slider5.style.opacity = "0";
      break;
    case "menu-list3":
      e.preventDefault();
      $slider1.style.opacity = "0";
      $slider2.style.opacity = "0";
      $slider3.style.opacity = "1";
      $slider4.style.opacity = "0";
      $slider5.style.opacity = "0";
      break;
    case "menu-list4":
      e.preventDefault();
      $slider1.style.opacity = "0";
      $slider2.style.opacity = "0";
      $slider3.style.opacity = "0";
      $slider4.style.opacity = "1";
      $slider5.style.opacity = "0";
      break;
    case "menu-list5":
      e.preventDefault();
      $slider1.style.opacity = "0";
      $slider2.style.opacity = "0";
      $slider3.style.opacity = "0";
      $slider4.style.opacity = "0";
      $slider5.style.opacity = "1";
      break;
  }
});
