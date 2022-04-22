const heroBtnEle = document.querySelector(".header__link");
const moonEle = document.querySelector(".moon");
const sunEle = document.querySelector(".sunny");
const bodyEle = document.querySelector("body");
const imgEle = document.querySelector(".benefits__main-box--img");

// Toggle Light and Dark theme
heroBtnEle.addEventListener("click", function () {
  bodyEle.classList.toggle("light-theme");
  bodyEle.classList.toggle("dark-theme");
  sunEle.classList.toggle("hidden");
  moonEle.classList.toggle("hidden");

  // Invert img color
  imgEle.classList.toggle("invert_img");
});

// Showing the benefits
const benefitButton = document.querySelector(".benefits__main-box--text--2");
const benefitList = document.querySelector(".benefits__list");

benefitButton.addEventListener("click", function () {
  benefitList.classList.toggle("hidden");
  benefitList.classList.toggle("show_benefits");
});
