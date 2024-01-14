const slider = document.querySelector(".slider");
const sliderLine = document.querySelector(".slider-line");
const images = document.querySelectorAll(".slider .slider-line img");
const btnPrevious = document.querySelector(".slider-previous");
const btnNext = document.querySelector(".slider-next");
let count = 0;
let width;

function init() {
  console.log("resize");
  width = slider.offsetWidth;
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}
window.addEventListener("resize", init);
init();

btnPrevious.addEventListener("click", function () {
    count--;
    if (count < 0) {
      count = 0;
    }
    rollSlider();
  });
btnNext.addEventListener("click", function () {
  count++;
  if (count >= images.length) {
    count = images.length-1;
  }
  rollSlider();
});
function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}
