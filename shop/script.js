
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const cometicSpan = document.querySelector('cape-name');

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


let skinViewer = new skinview3d.SkinViewer({
    canvas: document.getElementById("skin_container"),
    width: 350,
    height: 400
    
});


function fetchCosmetics() {
    var uuid = document.getElementById("uuidInput").value;
    skinViewer.loadSkin("https://visage.surgeplay.com/skin/"+uuid);
    fetch("http://api.glacierclient.net/user/assets/equipedCape/txt/" + uuid)
        .then(response => response.json())
        .then(data =>{ 
            cosmeticSpan.textContent = response;
        })

}
skinViewer.loadCape("../resources/capes/GlacierBlue.png");
skinViewer.fov = 65;

var uuid = "c5f74dff38cc4953994e615752bf22cd";



skinViewer.camera.rotation.z = -3.08
skinViewer.camera.rotation.y = -0.5
skinViewer.camera.rotation.x = -3.025
skinViewer.camera.position.z = -30
skinViewer.camera.position.y = 2.75
skinViewer.camera.position.x = -15

