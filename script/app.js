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
//SLIDER SPONSOR
let slideIndexJo = 1;
showSlidesJo(slideIndexJo);

// Next/previous controls
function plusSlidesJo(n) {
  showSlidesJo((slideIndexJo += n));
}

// Thumbnail image controls
function currentSlideJo(n) {
  showSlidesJo((slideIndexJo = n));
}

function showSlidesJo(n) {
  let i;
  let slidesJo = document.getElementsByClassName("mySlidesJo");
  if (n > slidesJo.length) {
    slideIndexJo = 1;
  }
  if (n < 1) {
    slideIndexJo = slidesJo.length;
  }
  for (i = 0; i < slidesJo.length; i++) {
    slidesJo[i].style.display = "none";
  }
  slidesJo[slideIndexJo - 1].style.display = "block";
}
