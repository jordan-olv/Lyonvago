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
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}


let x = document.getElementById("FT");
let y = document.getElementById("avis");

function showFT(){
    x.style.display = "block";
    y.style.display = "none";
  } 
function showavis(){
    x.style.display = "none";
    y.style.display = "block";
  } 

/* 















*/

function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

// //SLIDER SPONSOR
// let slideIndex2 = 1;
// showSlides2(slideIndex);

// // Next/previous controls
// function plusSlides2(n) {
//   showSlides2((slideIndex2 += n));
// }

// // Thumbnail image controls
// function currentSlide2(n) {
//   showSlides2((slideIndex2 = n));
// }

// function showSlides2(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex2 = 1;
//   }
//   if (n < 1) {
//     slideIndex2 = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex2 - 1].style.display = "block";
//   dots[slideIndex2 - 1].className += " active";
// }
