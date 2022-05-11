
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

window.onload = function () {
        md = document.createElement("zero-md")
        md.setAttribute("src", "https://raw.githubusercontent.com/Glacier-Client/GLC-Global/main/CHANGELOG.md")
        md.setAttribute("no-shadow", "")
        document.getElementById("mdcontainer").append(md)
    }
