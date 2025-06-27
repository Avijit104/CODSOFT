// catagory menu display and hide functionality
const category = document.getElementById("categoryBtn");
const menu = document.getElementById("menu");
let catFlag = false;
category.addEventListener("click", function () {
  if (catFlag === false) {
    menu.style.display = "block";
    catFlag = true;
  } else {
    menu.style.display = "none";
    catFlag = false;
  }
});
category.addEventListener("blur", function () {
  menu.style.display = "none";
  catFlag = false;
});

// search bar focus and blur functionality
const search = document.getElementById("search");
const searchContainer = document.getElementById("serachContainer");
search.addEventListener("focus", function () {
  searchContainer.style.border = "2px solid var(--accent)";
});
search.addEventListener("blur", function () {
  searchContainer.style.border = "";
});

// slider functuionality
const sliderContainer = document.getElementById("slider");
const slides = sliderContainer.querySelectorAll(".slider-content");
const totalSlides = slides.length;
let currentSlide = 1;
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);
sliderContainer.appendChild(firstClone);
sliderContainer.insertBefore(lastClone, slides[0]);
console.log(totalSlides);
sliderContainer.style.left = `-${95 * currentSlide}vw`;
sliderContainer.style.transition = "left 1s ease-in-out";
function moveToSlide(index) {
  sliderContainer.style.transition = "left 1s ease-in-out";
  sliderContainer.style.left = `-${95 * index}vw`;
}
function jumpToSlide(index) {
  sliderContainer.style.transition = "none";
  sliderContainer.style.left = `-${95 * index}vw`;
}
setInterval(() => {
  currentSlide++;
  moveToSlide(currentSlide);
  setTimeout(() => {
    if (currentSlide === totalSlides + 1) {
      console.log(currentSlide);
      currentSlide = 1;
      jumpToSlide(currentSlide);
    }
  }, 1000);
}, 3000);

const git = document.getElementById("github");
git.addEventListener("click", function () {
  window.open("https://github.com/Avijit104", "_blank");
});

const insta = document.getElementById("instagram");
insta.addEventListener("click", function () {
  window.open("https://www.instagram.com/raj_ash_244/", "_blank");
});

const tw = document.getElementById("twiter");
tw.addEventListener("click", function () {
  window.open("https://x.com/avijitash358269", "_blank");
});
