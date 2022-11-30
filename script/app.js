function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

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
