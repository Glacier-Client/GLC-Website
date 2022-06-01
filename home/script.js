
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const getOnlineCounter = document.getElementById("OnlineCounter");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

let players = fetch("https://api.glacierclient.net/stats/currentlyOnline", {method : "GET", headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin" : "*", "Access-Control-Allow-Credentials": true,},});
players.then(response => {return response.json();}).then(data => {const number = data.Online; getOnlineCounter.textContent = number;});
    
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



