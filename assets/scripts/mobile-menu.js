const hamburger = document.querySelector(".mobile-menu");
const nav = document.querySelector(".links");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active")
});