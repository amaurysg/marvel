/* 
A manera de pruebas decídí hacer este codigo asignando manualmente las propiedas, tambien lo puedo hacer cambiando clases */
var lastScrollTop = 0;
var logo1 = document.getElementById("logo1mobile");

window.addEventListener("scroll", () => {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    logo1.src = "./images/logo-marvel-M.png";
    logo1.style.width = "52px";
    logo1.style.position = "absolute";
    logo1.style.left = "39px";
  } else {
    logo1.src = "./images/MarvelLogo.svg";
    logo1.style.width = "130px";
    logo1.style.position = "absolute";
    logo1.style.left = "0";
  }
  lastScrollTop = scrollTop;
});

/* const datoFuera = 9; 

(function hagaAlgo(e) {
  console.log(e)
  const primerVar = 0; 
  console.log("Hola");
}) 
();  */
