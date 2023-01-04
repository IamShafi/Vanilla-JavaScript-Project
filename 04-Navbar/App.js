const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", ()=>{
    links.classList.toggle("show-links");
    //if(links.classList.contains("show-links")) links.classList.remove("show-links") else ... add()
})