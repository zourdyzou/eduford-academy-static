const mobileBtn = document.querySelector(".navigation__mobile--menu");
const closeBtn = document.querySelector(".close__button");
const navigationMobile = document.querySelector(".navigation__mobile");

mobileBtn.addEventListener("click", () => {
  navigationMobile.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  navigationMobile.classList.add("hidden");
});
