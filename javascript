let slideIndex = 0;
let autoSlideTimer;

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }    
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";

  // Change image every 4 seconds (4000ms)
  autoSlideTimer = setTimeout(showSlides, 4000); 
}

// Manual Controls (Next/Previous)
function moveSlide(n) {
  clearTimeout(autoSlideTimer);
  let slides = document.getElementsByClassName("carousel-slide");
  slideIndex += n - 1;
  
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides();
}

// Direct Dot Jump
function currentSlide(n) {
  clearTimeout(autoSlideTimer);
  slideIndex = n - 1;
  showSlides();
}
