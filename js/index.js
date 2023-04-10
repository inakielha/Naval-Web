document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav_mobile").classList.toggle("show");
})

document.querySelector(".closeContainer").addEventListener("click", () => {
    // setTimeout(()=>{ document.querySelector(".nav_mobile").classList.toggle("show");},200)
    document.querySelector(".nav_mobile").classList.toggle("show")
})

// document.querySelectorAll("a").addEventListener("click", () => {
//   console.log("q c yo")
//   document.querySelector(".nav_mobile").classList.toggle("show")
// })
const aElements = document.querySelectorAll(".nav_mobile li a")
aElements.forEach((a) => {
  a.addEventListener("click", () => {
    document.querySelector(".nav_mobile").classList.toggle("show");
  });
});

window.addEventListener('scroll', function () {
    // Calcula la posición del fondo de la ventana del navegador
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
    var scrolled = window.scrollY;
    var bottomOfPage = windowHeight + scrolled >= documentHeight;

    // Si se ha llegado al final de la página, cambia la clase del elemento
    if (bottomOfPage) {
        var element = document.querySelector(".whsContainerFixed");
        element.classList.add('wspHidden');
    } else {
        // var element = document.getElementById("wspMobile");
        // element.classList.toggle('whsContainerFixed');
        document.getElementById("wspMobile").classList.remove('wspHidden');
    }
});


// CARRUSEL
const carouselSlide = document.querySelector(".carruselContainer");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = document.querySelectorAll(".carruselContainer .carruselContainerTest");

let counter = 0;
const size = images[0].clientWidth;

carouselSlide.style.transform = `translateX(-${size * counter}px)`;

nextBtn.addEventListener("click", () => {
    // console.log(size)
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