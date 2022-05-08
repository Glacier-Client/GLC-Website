
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




let  form = document.forms['fixScript'];
let menu = form.option;
let options = form.option.options;

document.getElementById("2").disabled = true; 
document.getElementById("3").disabled = true; 
document.getElementById("4").disabled = true; 

const btn = document.querySelector('#btn');
btn.onclick = (event) => {
    event.preventDefault();
    let optionValue = this.option.value;
    console.log(optionValue);
    if (optionValue == 1) {
        location.href="./GLC_Fix_Script.exe"
    } 
    if (optionValue == 2) {
        location.href="https://www.glacierclient.net"
    } 
     if (optionValue == 3) {
        location.href="https://www.glacierclient.net"
    } 
     if (optionValue == 4) {
        location.href="https://www.glacierclient.net"
        } 

};

