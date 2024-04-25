function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var desktopNav = document.getElementById("desktop-nav");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    desktopNav.style.backgroundColor = "#333";
  } else {
    desktopNav.style.backgroundColor = "transparent";
  }
}

var slideIndex = 0;
var slideTimer;

showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";

  // Automatyczne przewijanie
  slideTimer = setTimeout(function() {
    slideIndex++;
    showSlides();
  }, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex += n);
}

function manualSlide(n) {
  clearTimeout(slideTimer);
  slideIndex = n;
  showSlides();
}

// // Obsługa kliknięć na kropki
// var dots = document.getElementsByClassName("dot");
// for (var i = 0; i < dots.length; i++) {
//   dots[i].addEventListener("click", function() {
//     var dotIndex = parseInt(this.getAttribute("data-index"));
//     clearTimeout(slideTimer); // Zatrzymaj automatyczne przewijanie
//     manualSlide(dotIndex); // Ustaw odpowiedni indeks slajdu
//     slideTimer = setTimeout(function() { // Uruchom ponownie automatyczne przewijanie
//       slideIndex++;
//       showSlides();
//     }, 5000);
//   });
//}
