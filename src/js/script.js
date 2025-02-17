const burger = document.querySelector(".burger");
const menu = document.getElementById("menu");
burger.addEventListener("click",()=>{
    console.log("active");
    menu.classList.toggle("active");
});  

