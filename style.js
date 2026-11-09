const button = document.getElementById("button");
const navMenu = document.getElementById("nav-menus");
const close = document.getElementById("close");


button.addEventListener("click", ()=>{
    navMenu.classList.add("show")
})
close.addEventListener("click",()=>{
    navMenu.classList.remove("show")
})