const $menuMobile = document.querySelector(".menu");

var $slider1 = document.getElementById("slider1");
var $slider2 = document.getElementById("slider2");
var $slider3 = document.getElementById("slider3");
var $slider4 = document.getElementById("slider4");
var $slider5 = document.getElementById("slider5");

$menuMobile.addEventListener("click", function delegacion(e) {
  /*  console.log(e.target.classList[0]); */
  const mostrarSlider = e.target.classList[0];
  switch (mostrarSlider) {
    case "menu-list1":
      $slider1.style.opacity = "1";
      $slider2.style.opacity = "0";
      $slider3.style.opacity = "0";
      $slider4.style.opacity = "0";
      $slider5.style.opacity = "0";
      break;
    case "menu-list2":
      $slider1.style.opacity = "0";
      $slider2.style.opacity = "1";
      $slider3.style.opacity = "0";
      $slider4.style.opacity = "0";
      $slider5.style.opacity = "0";
      break;
    case "menu-list3":
      $slider1.style.opacity = "0";
      $slider2.style.opacity = "0";
      $slider3.style.opacity = "1";
      $slider4.style.opacity = "0";
      $slider5.style.opacity = "0";
      break;
    case "menu-list4":
      $slider1.style.opacity = "0";
      $slider2.style.opacity = "0";
      $slider3.style.opacity = "0";
      $slider4.style.opacity = "1";
      $slider5.style.opacity = "0";
      break;
    case "menu-list5":
      $slider1.style.opacity = "0";
      $slider2.style.opacity = "0";
      $slider3.style.opacity = "0";
      $slider4.style.opacity = "0";
      $slider5.style.opacity = "1";
      break;
  }
});
