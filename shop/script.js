
const staffRoles = document.getElementById("staff-roles")
const lgTitle = document.getElementById("lgTitle")
const usernameInput = document.getElementById("usernameInput") // <-- Lg = Login
const lgInput1 = document.getElementById("lgInput1")
const login = document.getElementById("login")

function hideLogin() {
    login.style.display = "none"
}

function showMainPage() {
    staffRoles.style.display = "block"
    
}


if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    
    staffRoles.style.display = "none"
    
    document.getElementById("login").style.display = "block"
    
}


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


function cosmeticsConstructor(_CosmName, _CosmType, _CosmCost) {

    openModal()
    
    const cosmetic = document.getElementById("profile-container");
    const cosmeticName = document.getElementById("username");
    const cosmeticType = document.getElementById("type");
    const cosmeticCost = document.getElementById("cost");

    cosmeticName.textContent = _CosmName;
    cosmeticType.textContent = _CosmType;
    cosmeticCost.textContent = _CosmCost;
    console.log("clicked")
}

function closeModal() {
    document.getElementById("profile-modal").style.display="none";
}

function openModal() {
    document.getElementById("profile-modal").style.display="inline-block";
}


function fetchAndLogin() {
    username = usernameInput.value;
	fetch("https://api.glacierclient.net/user/playerUUID/"+username)
    .then(
        response => {
            return response.json();
        }
    )
    .then(
        data => {
            const uuid= data.UUID;
            console.log(
                uuid,
                username
            );
        }
    );
    if(!username){
        alert("username not not vaild or or not found")
        location.reload();
    }
    else {
        setTimeout(function(){
            showMainPage();
            hideLogin()
        }, 1000);
        lgTitle.innerText = "logged in as " + username
    }
}