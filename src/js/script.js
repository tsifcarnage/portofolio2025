const burger = document.querySelector(".burger");
const menu = document.getElementById("menu");
burger.addEventListener("click",()=>{
    console.log("active");
    menu.classList.toggle("active");
}); 

let scrollUp = document.querySelector(".up");
let lastScroll = 0;
window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;
    
    if (currentScroll > 100) { 
        scrollUp.classList.add("show"); // Affiche le bouton après 200px de scroll
    } 
    
    if (currentScroll < lastScroll) { 
        scrollUp.classList.remove("show"); // Cache si on remonte de 50px
    }

    lastScroll = currentScroll; 
});
