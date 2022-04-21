const heroBtnEle = document.querySelector(".header__link");
const moonEle = document.querySelector(".moon");
const sunEle = document.querySelector(".sunny");
const bodyEle = document.querySelector("body");

heroBtnEle.addEventListener("click", function () {
  bodyEle.classList.toggle("light-theme");
  bodyEle.classList.toggle("dark-theme");
  sunEle.classList.toggle("hidden");
  moonEle.classList.toggle("hidden");
});

// btn ele animation
