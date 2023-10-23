

// const menuBtn = document.querySelector(".menu-btn");
// const navigation = document.querySelector(".navigation");

// menuBtn.addEventListener("click", () => {
//     menuBtn.classList.toggle("active");
//     navigation.classList.toggle("active");
// });

// const btns = document.querySelectorAll(".nav-btn");
// const slides = document.querySelectorAll(".img-slide");
// const contents = document.querySelectorAll(".content");

// var sliderNav = function(manual){
//     btns.forEach((btn) => {
//         btn.classList.remove("active");
//     });

//     slides.forEach((slide) => {
//         slide.classList.remove("active");
//     });

//     contents.forEach((content) => {
//         content.classList.remove("active");
//     });

//     btns[manual].classList.add("active");
//     slides[manual].classList.add("active");
//     contents[manual].classList.add("active");
// }

//     btns.forEach((btn, i) => {
//         btn.addEventListener("click", () => {
//             sliderNav(i)
//         });
//     });
const slides = document.querySelectorAll('.img-slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 4000);


const openPopup = document.getElementById("openPopup");
const videoPopup = document.getElementById("videoPopup");
const closePopup = document.getElementById("closePopup");
const youtubeVideo = document.getElementById("youtubeVideo");

openPopup.addEventListener("click", function () {
  videoPopup.style.display = "block";
});

closePopup.addEventListener("click", function () {
  videoPopup.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === videoPopup) {
    videoPopup.style.display = "none";
  }
});