document.addEventListener('DOMContentLoaded', init);
var myInterval = setInterval(changeSlide, 2000);

function init() {
  const frame = document.querySelector(".frame");
  const slides = frame.querySelectorAll("img");
  const caption = frame.querySelector('figcaption');

  //with JS active, hide all images
  slides.forEach((slide) => {
    slide.classList.add("hide");
  });
  
  // show the first slide
  slides[0].classList.remove("hide");

   caption.innerHTML = slides[0].alt;
}

function changeSlide(e) {
  if(e) {
    // stop link from trying to reload page
    e.preventDefault();
    clearInterval(myInterval);
  }
    
    
    //shortcut vars
    const frame = document.querySelector(".frame");
    const slides = frame.querySelectorAll("img");
    const caption = frame.querySelector('figcaption');
    let showing = document.querySelector(".current");
    let nextUp = "";
  
    if(!e || e.target.className == 'next-btn') {
      nextUp = showing.nextElementSibling;
    } else {
      nextUp = showing.previousElementSibling;
    }
    
    // deactivate current image
    showing.classList.add("hide");
    showing.classList.remove("current");
    
    //make sure next image is there
    if (!nextUp) {
      nextUp = slides[slides.length - 1];
    }
  
    if (nextUp.nodeName !== "IMG") {
      nextUp = slides[0];
    }
  
    // activate next image
    nextUp.classList.remove("hide");
    nextUp.classList.add("current");

    caption.innerHTML = nextUp.alt;

  }