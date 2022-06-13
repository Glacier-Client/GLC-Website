let CartArray =  []
let finalCost = []
let totalCost = 0;
//import { lodash } from 'lodash';

const staffRoles = document.getElementById("staff-roles")
const lgTitle = document.getElementById("lgTitle")
const usernameInput = document.getElementById("usernameInput") // <-- Lg = Login
const lgInput1 = document.getElementById("lgInput1")
const login = document.getElementById("login")

const cosmetic = document.getElementById("profile-container");
const cosmeticName = document.getElementById("username");
const cosmeticType = document.getElementById("type");
const cosmeticCost = document.getElementById("cost");

const notification = document.getElementById("notification");
const notiCont = document.getElementById("notiCont");

const ArrayOut = document.getElementById("ArrayOut");
const checkout = document.getElementById("checkOut");
const total  = document.getElementById("total")

function hideLogin() {
    console.log("hideLogin")
    login.style.display = "none"
}

function showMainPage() {
    staffRoles.style.display = "block"
    
}

/*
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    
    staffRoles.style.display = "none"
    
    document.getElementById("login").style.display = "block"
    CartArray =  []
    
}
*/

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



function cosmeticsConstructor(_CosmName, _CosmType, _CosmCost, _CosmID) { 

    //openModal()
    
   
/*
    cosmeticName.textContent = _CosmName;
    cosmeticType.textContent = _CosmType;
    cosmeticCost.textContent = _CosmCost;
    
*/
    notification.style.display = "inline-block";
    notification.style.animationName = "fromRight"
    notification.style.animationDuration = "1s"

    
    setTimeout( () => {
        notification.style.animationName = "toRight"
        notification.style.animationDuration = "1s"
        console.log(CartArray.join(","))
        setTimeout(() => { notification.style.display = "none" }, 1000);
        
    },2250)//http://127.0.0.1:3000/shop/

    notiCont.innerText = `${_CosmName} Have/Has been added to your cart`
    CartArray.push(_CosmID); // <---- x = Cloaks | y = Wings ~~ Starts from 0
                             // ^^^^^^^^^^^^^^^^^^^  IMPORTANT  ^^^^^^^^^^^^^^^^

    
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
            console.log(
                response
            )
            if(username.length < 2) {
                if(response.status == 404) {
                    lgTitle.innerText = "Username is empty / Dosnt exist";
                    setTimeout(() => {
                        location.reload();
                    }, 2000);
                }
                else{
                
                    lgTitle.innerText = username + " is too short"
                    setTimeout(() => {
                        location.reload();
                    }, 2000);
                }
                    
            }
            else if(username.length > 16) {
                lgTitle.innerText = username + " is too long"
                setTimeout(() => {
                    location.reload();
                }, 2000);
                    
            }
            else {
                setTimeout(function(){
                    showMainPage();
                    hideLogin()
                }, 2000);
                lgTitle.innerText = "Logged in as " + username
            }

            return response.json();
        }
    )
    .then(
        data => {
            const uuid = data.UUID;
            console.log(
                uuid,
                username,
            );
            return uuid
        }
    );
    
   
}

function notiUndo(ComsName) {
    notiCont.innerHTML = "Item Was Removed from the Cart";
    setTimeout(() => {
        notification.style.display = "inline-block";
        notification.style.animationName = "fromRight"
        notification.style.animationDuration = "1s"
    
        setTimeout(() => {
            notiCont.innerHTML = "Item Was Removed from the Cart";
            notification.style.animationName = "toRight"
            notification.style.animationDuration = "1s"

            setTimeout(() => { notification.style.display = "none" }, 1000);

            CartArray.pop();        
            console.log(CartArray.join(","))
        },2250)
    },3000)
}

function getNameFromID(ID) {
    if(ID.toLowerCase().includes("x")){
        switch(ID.toLowerCase()) {
            case "x0":
                return "Galaxy Wings"
        }
    }
}

function getCostFromID(ID) {
    if(ID.toLowerCase().includes("x")){
        switch(ID.toLowerCase()) {
            case "x0":
                return "5"
        }
    }
}   

function pushToCart() {
    if(CartArray.length > 5){
        notiCont.innerText = "You can only have 5 items in your cart"
        
            notification.style.display = "inline-block";
            notification.style.animationName = "fromRight"
            notification.style.animationDuration = "1s"
        
            setTimeout(() => {
                notification.style.animationName = "toRight"
                notification.style.animationDuration = "1s"
                setTimeout(() => { notification.style.display = "none" }, 1000);
            },2250)

        for (let i = 0; i = CartArray.length - 5; i++) {
            CartArray.pop();
        }
        console.log("Test 1: Intializing Cart Array\n")
        let pushableFinalArray = [];
        let finalCost = []

        for( let i = 0; i < CartArray.length; i++) {
            console.log("Test 2: Pushing to Cart Array\n")
            let Cost = getCostFromID(CartArray[i]);
            let Name = getNameFromID(CartArray[i]);

            let finalArray = `${Name} - ${Cost}`;
            pushableFinalArray.push(finalArray);

            finalCost.push(parseInt(Cost));
        }
        

        console.log("Test 3: Pushed to Cart Array")
        ArrayOut.innerHTML = pushableFinalArray.join("<br><br>");
        
    }
    else{
        
        let pushableFinalArray = [];
        

        for( let i = 0; i < CartArray.length; i++) {
            
            let Cost = getCostFromID(CartArray[i]);
            let Name = getNameFromID(CartArray[i]);

            let finalArray = `${Name} - $${Cost}`;
            pushableFinalArray.push(`${finalArray}`);

            finalCost.push(parseInt(Cost));
        }
    
        ArrayOut.innerHTML = pushableFinalArray.join("<br><br>");
    }
}
function checkOut() {
    pushToCart();
    console.log(finalCost)
    for (let i = 0; i < finalCost.length; i++) {
        totalCost += finalCost[i];
    }
    document.getElementById("total").innerHTML = "<br> $"+`${totalCost}`;
}

