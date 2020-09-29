var b1 = document.getElementById("menu-b1");
var b2 = document.getElementById("menu-b2");
var b3 = document.getElementById("menu-b3");
var b4 = document.getElementById("menu-b4");
var b5 = document.getElementById("menu-b5");
var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
var slider3 = document.getElementById("slider3");
var slider4 = document.getElementById("slider4");
var slider5 = document.getElementById("slider5");

var menuList2 = document.getElementById(".menu-list2");
var menuList3 = document.getElementById(".menu-list3");
var menuList4 = document.getElementById(".menu-list4");
var menuList5 = document.getElementById(".menu-list5");

b1.addEventListener("scroll", () => {
  console.log("Scrolled in b1");
  slider1.style.opacity = "0";
  slider2.style.opacity = "1";
  slider3.style.opacity = "0";
  slider4.style.opacity = "0";
  slider5.style.opacity = "0";
});

b1.addEventListener("click", () => {
  console.log("presionaste b1");
  slider1.style.opacity = "1";
  slider2.style.opacity = "0";
  slider3.style.opacity = "0";
  slider4.style.opacity = "0";
  slider5.style.opacity = "0";
});
b2.addEventListener("click", () => {
  console.log("presionaste b2");
  slider2.style.opacity = "0";
  slider2.style.opacity = "1";
  slider3.style.opacity = "0";
  slider4.style.opacity = "0";
  slider5.style.opacity = "0";
});
b3.addEventListener("click", () => {
  console.log("presionaste b3");
  slider3.style.opacity = "0";
  slider2.style.opacity = "0";
  slider3.style.opacity = "1";
  slider4.style.opacity = "0";
  slider5.style.opacity = "0";
});
b4.addEventListener("click", () => {
  console.log("presionaste b4");
  slider4.style.opacity = "0";
  slider2.style.opacity = "0";
  slider3.style.opacity = "0";
  slider4.style.opacity = "1";
  slider5.style.opacity = "0";
});
b5.addEventListener("click", () => {
  console.log("presionaste b5");
  slider5.style.opacity = "0";
  slider2.style.opacity = "0";
  slider3.style.opacity = "0";
  slider4.style.opacity = "0";
  slider5.style.opacity = "1";
});

/* 
var dias = ["lunes", "martes"];
 */
/* for (i = 0; i <= dias.length - 1; i++) {
  console.log(dias[i]);
} */
/* 
function addDay(d) {
  dias.unshift(d);
}
addDay("Primer");

console.log(dias); */
