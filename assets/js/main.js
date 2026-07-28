const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");

if(menuButton){

    menuButton.addEventListener("click",()=>{

        menu.classList.toggle("active");

    });

}

const darkButton = document.getElementById("darkMode");

darkButton?.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

});