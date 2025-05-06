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