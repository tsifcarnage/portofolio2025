const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.getElementById("menu");
const feedback = document.getElementById("feedback-form");

nav.style.backgroundColor = "transparent";
burger.addEventListener("click", () => {
  nav.style.backgroundColor = "black";
  //menu.style.display = "flex";
  //Pour afficher menu nav en responsive
  console.log("active");
  menu.classList.toggle("active");
  function masquerLien() {
    // Masque le lien
    nav.style.backgroundColor = "transparent";
    menu.style.display = "none";
  }
});

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

feedback.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value; //value pour form, et textContent html
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const capitName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  const message = `Bonjour <b>${capitName}</b>, ton email: <b>${email.toLowerCase()}</b> et ton numéro de téléphone <b>${phone}</b> sont bien envoyés.`;
  document.getElementById("feedback-message").style.display = "block";
  document.getElementById("confirmation-message").innerHTML = message;
  document.getElementById("feedback-form").reset();
});
