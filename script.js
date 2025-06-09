// GSAP Animation
gsap.from(".box", {
    duration: 2,         // Animation duration in seconds
    x: -500,             // Start position (move from left)
    ease: "power2.out",  // Easing function for smoothness
  });  


//POP UP CODE
  window.onload = function () {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';

    // Hide after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      popup.style.display = 'none';
    }, 5000);
  };

//NAVBAR RESPONSIVE

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});



//SLDESHOW CODE
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}