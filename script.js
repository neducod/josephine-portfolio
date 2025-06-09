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


let slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}