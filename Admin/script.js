
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
function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="AdminUser"&& password=="TestAdmin")
        {
            alert("Login Successfull");
            window.open("https://glacierclient.net/Home/");
            return false;
        
        }
    else{
        alert("Login Denied");
        window.open("https://glacierclient.net/Home/");
        return false;
        
    }
}
