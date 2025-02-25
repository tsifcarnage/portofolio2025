const burger = document.querySelector(".burger");
const menu = document.getElementById("menu");
const nav = document.querySelector("nav");
nav.style.backgroundColor = "transparent";
burger.addEventListener("click", () => {
  nav.style.backgroundColor = "black";
  menu.style.display = "flex";
  //Pour afficher menu nav en responsive
  console.log("active");
  menu.classList.toggle("active");
});

function masquerLien() {
  // Masque le lien
  nav.style.backgroundColor = "transparent";
  menu.style.display = "none";
}
let scrollUp = document.querySelector(".up");
let lastScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll > 100) {
    scrollUp.classList.add("show"); // Affiche le bouton après 100px de scroll
  }

  if (currentScroll < lastScroll) {
    scrollUp.classList.remove("show"); // Cache le bouton si on remonte
  }

  lastScroll = currentScroll;
});
