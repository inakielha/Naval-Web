// BUSCADOR DIPLAY
const button = document.getElementsByClassName("nav_infoContainer");
const lupaWeb = document.getElementsByClassName("buscadorContainer_border");
const searchLupa = document.getElementsByClassName("lupa_input");
const inputContainer = document.querySelector(".nav_input");
const inputContainerWeb = document.querySelector(".nav_buscadorContainer .nav_input");
const logo = document.querySelector("nav .nav_logo_container");
const pantallaAncho = window.innerWidth;
const closeInput = document.querySelector("nav .closeInputMobileContainer");
const input = document.querySelector("nav .inputMobileContainer");
let estiloButton = window.getComputedStyle(inputContainer)
estiloButton = estiloButton.getPropertyValue("display")

if (pantallaAncho > 640) {
  // console.log("mas de 600 px");

  button[0].addEventListener("click", () => {
    inputContainerWeb.classList.add("nav_input_visible");
    lupaWeb[0].classList.add("buscadorContainer_invisible");
  });

} else {
  button[0].addEventListener("click", () => {
// console.log("entree")

    button[0].classList.toggle("buscadorContainer_invisible");
    logo.classList.toggle("buscadorContainer_invisible");
    input.classList.toggle("inputMobileContainerVisible");
    closeInput.classList.toggle("inputMobileContainerVisible");
  });
  
  closeInput.addEventListener("click", () => {
    button[0].classList.toggle("buscadorContainer_invisible");
    logo.classList.toggle("buscadorContainer_invisible");
    input.classList.toggle("inputMobileContainerVisible");
    closeInput.classList.toggle("inputMobileContainerVisible");
  });
}



document.querySelector(".hamburger").addEventListener("click", () => {

  if(button[0].classList.contains("buscadorContainer_invisible")){
    button[0].classList.toggle("buscadorContainer_invisible");
    logo.classList.toggle("buscadorContainer_invisible");
    input.classList.toggle("inputMobileContainerVisible");
    closeInput.classList.toggle("inputMobileContainerVisible");
  }
  document.querySelector(".nav_mobile").classList.toggle("show");
});

document.querySelector(".closeContainer").addEventListener("click", () => {
  document.querySelector(".nav_mobile").classList.toggle("show");
  button[0].classList.toggle("buscadorContainer_invisible");
  logo.classList.toggle("buscadorContainer_invisible");
  input.classList.toggle("inputMobileContainerVisible");
  closeInput.classList.toggle("inputMobileContainerVisible");
});

const aElements = document.querySelectorAll(".nav_mobile li a");
aElements.forEach((a) => {
  a.addEventListener("click", () => {
    document.querySelector(".nav_mobile").classList.toggle("show");
  });
});

window.addEventListener("scroll", function () {
  // Calcula la posición del fondo de la ventana del navegador
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;
  var scrolled = window.scrollY;
  var bottomOfPage = windowHeight + scrolled >= documentHeight;

  // Si se ha llegado al final de la página, cambia la clase del elemento
  if (bottomOfPage) {
    var element = document.querySelector(".whsContainerFixed");
    element.classList.add("wspHidden");
  } else {
    // var element = document.getElementById("wspMobile");
    // element.classList.toggle('whsContainerFixed');
    document.getElementById("wspMobile").classList.remove("wspHidden");
  }
});

// CARRUSEL
const carouselSlide = document.querySelector(".carruselContainer");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const images = document.querySelectorAll(
  ".carruselContainer .carruselContainerTest"
);

let counter = 0;
const size = images[0].clientWidth;

carouselSlide.style.transform = `translateX(-${size * counter}px)`;

nextBtn.addEventListener("click", () => {
  if (counter >= images.length - 1) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  carouselSlide.style.transform = `translateX(-${size * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  carouselSlide.style.transform = `translateX(-${size * counter}px)`;
});

carouselSlide.addEventListener("transitionend", () => {
  if (images[counter].id === "last-clone") {
    carouselSlide.style.transition = "none";
    counter = images.length - 2;
    carouselSlide.style.transform = `translateX(-${size * counter}px)`;
  }
  if (images[counter].id === "first-clone") {
    carouselSlide.style.transition = "none";
    counter = images.length - counter;
    carouselSlide.style.transform = `translateX(-${size * counter}px)`;
  }
});

// CARRUSEL SOLUCIONES
const carouselSoluciones = document.querySelector(
  "#soluciones .carruselSoluciones"
);
const btnAnt = document.querySelector("#btnPrev");
const btnPost = document.querySelector("#btnNext");
const imagenes = document.querySelectorAll(
  "#soluciones .carruselSoluciones .soluciones_textContainer"
);

let contador = 0;
const screenWidth = window.screen.width;
const tamano = imagenes[0].clientWidth;

btnPost.addEventListener("click", () => {
  if (contador >= imagenes.length - 1) return;
  carouselSoluciones.style.transition = "transform 0.5s ease-in-out";
  contador++;
  carouselSoluciones.style.transform = `translateX(-${12.5 * contador}%)`;
});

btnAnt.addEventListener("click", () => {
  if (contador <= 0) return;
  carouselSoluciones.style.transition = "transform 0.5s ease-in-out";
  contador--;
  carouselSoluciones.style.transform = `translateX(-${12.5 * contador}%)`;
});

// CARRUSEL SOLUCIONES MOBILE
const carouselSolucionesMob = document.querySelector(".mobilejs");
const btnAntMob = document.querySelector("#btnPrevMob");
const btnPostMob = document.querySelector("#btnNextMob");
const imagenesMob = document.querySelectorAll(
  ".mobilejs .soluciones_textContainer"
);
const texto = document.querySelector(
  "#solucionesMobile .mobileDescription span"
);
// texto.textContent = 'Este es el nuevo texto';

let todosTextos = [
  "Naval 14, construcción de patrulla costera",
  "Embarcaciones de rescate de personas",
  "Asalto e intercepción anti-drogas",
  "Vehículos de aplicaciones especiales",
  "Búsqueda y rescate oceánico",
  "Patrullas de vehículos eléctricos",
  "Batallón de Ingenieros Anfibios",
  "Polaris Militar",
];

let contadorMob = 0;

let numeroPixelesVivo = 0;

// CLONAR LOS PRIMEROS Y ULTIMOS ELEMENTOS
// const firstClone = imagenesMob[0].cloneNode(true);
// const lastClone = imagenesMob[imagenesMob.length - 1].cloneNode(true);
// carouselSolucionesMob.appendChild(firstClone);
// carouselSolucionesMob.insertBefore(lastClone, imagenesMob[0]);

// TOUCH

carouselSolucionesMob.addEventListener("touchstart", (e) => {
  // console.log("touchStart")
  posicionInicial = e.touches[0].clientX;
});

carouselSolucionesMob.addEventListener("touchmove", (e) => {
  // console.log("touchMove")
  desplazamiento = e.touches[0].clientX - posicionInicial;
});

carouselSolucionesMob.addEventListener("touchend", (e) => {
  if (desplazamiento > 50) {
    btnAntMob.click();
  } else if (desplazamiento < -50) {
    btnPostMob.click();
  }
  // carruselItems.style.transform = 'translateX(0)';
  posicionInicial = 0;
  desplazamiento = 0;
});
// TOUCH END

btnPostMob.addEventListener("click", () => {
  if (contadorMob >= imagenesMob.length - 1) return;
  contadorMob++;

  if (contadorMob === 1) {
    carouselSolucionesMob.style.transform = `translateX(-${
      12.5 * contadorMob
    }%)`;
    numeroPixelesVivo = 66;
  } else {
    numeroPixelesVivo += 66;
    // carouselSolucionesMob.style.transform = `translateX(-${numeroPixelesVivo }vw)`;
    carouselSolucionesMob.style.transform = `translateX(-${
      12.5 * contadorMob
    }%)`;
  }
  texto.classList.add("animacionTexto");
  setTimeout(function () {
    texto.textContent = todosTextos[contadorMob];
    // parrafo.textContent = "Texto cambiado";
    texto.classList.remove("animacionTexto");
    // parrafo.classList.add
  }, 500);
  // console.log(numeroPixelesVivo)
});

btnAntMob.addEventListener("click", () => {
  if (contadorMob <= 0) return;
  contadorMob--;
  numeroPixelesVivo = numeroPixelesVivo - 66;
  carouselSolucionesMob.style.transform = `translateX(-${12.5 * contadorMob}%)`;
  texto.classList.add("animacionTexto");
  setTimeout(function () {
    texto.textContent = todosTextos[contadorMob];
    // parrafo.textContent = "Texto cambiado";
    texto.classList.remove("animacionTexto");
    // parrafo.classList.add
  }, 500);
  // console.log(numeroPixelesVivo)
});

// CARRUSEL NOVEDADES MOBILE
const carouselNovedadesMob = document.querySelector(".novedadjs");
const novBtnAntMob = document.querySelector("#novedPrevMob");
const novBtnPostMob = document.querySelector("#novedNextMob");
const novImagenesMob = document.querySelectorAll(
  ".novedadjs .soluciones_textContainer"
);
const novTexto = document.querySelector(
  "#novedadesMob .mobileDescription span"
);

let todosTextosNovedades = [
  "Ara Bouchard",
  "Nuevo Concesionario Polaris Córdoba",
  "Top Sales Awards Latinoamerica",
  "Ara Bouchard",
  "Nuevo Concesionario Polaris Córdoba",
  "Top Sales Awards Latinoamerica",
  "imagen test",
  "imagen test",
];

let novContadorMob = 0;
let novNumeroPixelesVivo = 0;

// TOUCH

carouselNovedadesMob.addEventListener("touchstart", (e) => {
  posicionInicial = e.touches[0].clientX;
});

carouselNovedadesMob.addEventListener("touchmove", (e) => {
  desplazamiento = e.touches[0].clientX - posicionInicial;
});

carouselNovedadesMob.addEventListener("touchend", (e) => {
  if (desplazamiento > 50) {
    novBtnAntMob.click();
  } else if (desplazamiento < -50) {
    novBtnPostMob.click();
  }
  posicionInicial = 0;
  desplazamiento = 0;
});
// TOUCH END

novBtnPostMob.addEventListener("click", () => {
  if (novContadorMob >= novImagenesMob.length - 1) return;
  novContadorMob++;

  if (novContadorMob === 1) {
    // carouselNovedadesMob.style.transform = `translateX(-${66 * novContadorMob}vw)`;
    carouselNovedadesMob.style.transform = `translateX(-${
      12.5 * novContadorMob
    }%)`;

    novNumeroPixelesVivo = 66;
  } else {
    novNumeroPixelesVivo += 66;
    // carouselNovedadesMob.style.transform = `translateX(-${novNumeroPixelesVivo }vw)`;
    carouselNovedadesMob.style.transform = `translateX(-${
      12.5 * novContadorMob
    }%)`;
  }
  novTexto.classList.add("animacionTexto");
  setTimeout(function () {
    novTexto.textContent = todosTextosNovedades[novContadorMob];
    // parrafo.textContent = "Texto cambiado";
    novTexto.classList.remove("animacionTexto");
    // parrafo.classList.add
  }, 500);
  // console.log(numeroPixelesVivo)
});

novBtnAntMob.addEventListener("click", () => {
  if (novContadorMob <= 0) return;
  novContadorMob--;
  novNumeroPixelesVivo = novNumeroPixelesVivo - 66;
  carouselNovedadesMob.style.transform = `translateX(-${
    12.5 * novContadorMob
  }%)`;
  novTexto.classList.add("animacionTexto");
  setTimeout(function () {
    novTexto.textContent = todosTextosNovedades[novContadorMob];
    // parrafo.textContent = "Texto cambiado";
    novTexto.classList.remove("animacionTexto");
    // parrafo.classList.add
  }, 500);
  // console.log(numeroPixelesVivo)
});

