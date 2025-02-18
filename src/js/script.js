const burger = document.querySelector(".burger");
const menu = document.getElementById("menu");
burger.addEventListener("click",()=>{//Pour afficher menu nav en responsive
    console.log("active");
    menu.classList.toggle("active");
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
