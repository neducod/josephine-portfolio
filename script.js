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




/*
let slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes 
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




let slideIndex3 = 0;
showSlides3(slideIndex3);

function plusSlides(n) {
  showSlides3(slideIndex3 += n);
}

function showSlides3(n) {
  let slides = document.getElementsByClassName("mySlides3");
  if (n >= slides.length) slideIndex3 = 0;
  if (n < 0) slideIndex3 = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex3].style.display = "block";
}
*/

let slideIndices = [0,0,0];

function plusSlides(n, slideshowIndex) {
  showSlides(slideIndices[slideshowIndex] += n, slideshowIndex);
}

function showSlides(n, slideshowIndex) {
  const slideClassNames = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"];
  const slides = document.getElementsByClassName(slideClassNames[slideshowIndex]);

  if (n >= slides.length) slideIndices[slideshowIndex] = 0;
  if (n < 0) slideIndices[slideshowIndex] = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndices[slideshowIndex]].style.display = "block";
}


showSlides(0, 0);
showSlides(0, 1);
showSlides(0, 2);





//CODE FOR TOGGLE SWITCH

//FIRST OFF YOU SAVE DARKMODE LOCALLY
let darkmode = localStorage.getItem('darkmode');

//THEN YOU CALL THE THEME SWITCH BUTTON
const themeswitch = document.getElementById("theme-switch");

//NEXT WE WOULD DEFINE BOTH FUNCTIONS
const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', 'null');
}

//This will enable the darktheme if it is stored in the local storage
if(darkmode === "active") enableDarkmode()


//YOU GIVE IT AN EVENT LISTENER
themeswitch.addEventListener("click", () => {
   /* if(darkmode != "active"){
    enableDarkmode();
    else{
       disableDarkmode() 
    }
   } you would then use an if statement */

   //But we also need to get the info form inside the event listener
   darkmode = localStorage.getItem('darkmode')
   darkmode !== "active" ? enableDarkmode() : disableDarkmode()

   //NEXT WE WOULD DEFINE BOTH FUNCTIONS

});