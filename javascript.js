var Inicio =$(window).load(function() {
     $(".LoadingGif").fadeOut("slow")
     $(".Pagina").fadeIn("slow")
     $(".FondoLoading").fadeOut("slow")
     $(".Pagina").fadeIn("slow")
    });

var Hero =setTimeout(function() {
    $(".Hero").fadeIn("slow")
    }, 1000);


var Calavera  =setTimeout(function() {
    $(".calavera").fadeIn("slow")
    }, 1500);

var Proyectos  =setTimeout(function() {
    $(".proyectos").fadeIn("slow")
    }, 2000);

var Imagen1 =setTimeout(function() {
    $(".imagenjoyeria").fadeIn("slow")
    }, 2500);

var Imagen2 =setTimeout(function() {
    $(".imagenalejo").fadeIn("slow")
    },3000);

var Imagen3 =setTimeout(function() {
    $(".imagenfirebase").fadeIn("slow")
    }, 3500);

var Boton =setTimeout(function(){
    $(".botonclick").fadeIn("slow")
},4000)
   

  const pagina = document.querySelector(".Pagina");
  const btn = document.querySelector("button");
  const imagenoculta= document.querySelector(".imagenoculta");
  const imagen3= document.querySelector(".imagenfirebase");
  const lorem= document.querySelector(".lorem");
  const textomedio= document.querySelector(".proyectos");

  btn.addEventListener("click", function(){
    imagenoculta.style.display= "block";
  });

  imagen3.addEventListener("mouseover", function(){
    pagina.style.opacity= "0.2";
    lorem.style.display= "block"
   
  })

  textomedio.addEventListener("mouseover",function(){
    window.open("https://www.omfgdogs.com","https://www.omfgdogs.com","https://www.omfgdogs.com","https://www.omfgdogs.com","https://www.omfgdogs.com","https://www.omfgdogs.com")
  })





