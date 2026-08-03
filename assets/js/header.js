const menu=document.getElementById("menu");
const btn=document.getElementById("menuBtn");

btn.onclick=()=>{

    menu.classList.toggle("active");
    btn.classList.toggle("active");

};

window.addEventListener("scroll",()=>{

    document.getElementById("header")
    .classList.toggle("scrolled",window.scrollY>40);

});