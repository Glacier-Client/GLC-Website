
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



function closeModal() {
    document.getElementById("profile-modal").style.display="none";
}


function myYugo(){
    document.getElementById("profile-modal").style.display="block";
    document.getElementById("username").innerHTML = "Yugo"
    document.getElementById("role").innerHTML = "Owner"
    document.getElementById("discord").innerHTML = "Discord: Yugo#9897"
    document.getElementById("email").innerHTML = "Email: yugo@glacierclient.net"
    document.getElementById("quote").innerHTML = '"I found this client, I win"'
    document.getElementById("picture").src="https://api.glacierclient.net/assets/discord/pfp/840004980517896242";

}
function mySpy(){
    document.getElementById("profile-modal").style.display="block";
    document.getElementById("username").innerHTML = "SpyMiner"
    document.getElementById("role").innerHTML = "Owner/Developer"
    document.getElementById("discord").innerHTML = "Discord: SpyMiner#0001"
    document.getElementById("email").innerHTML = "Email: spyminer@glacierclient.net"
    document.getElementById("quote").innerHTML = '"I may be drunk, Miss, but in the morning I will be sober and you will still be ugly."'
    document.getElementById("picture").src="https://api.glacierclient.net/assets/discord/pfp/418323201811152897";
}
function mySun(){
    document.getElementById("profile-modal").style.display="block";
    document.getElementById("username").innerHTML = "iBrokenSun"
    document.getElementById("role").innerHTML = "Senior Manager"
    document.getElementById("discord").innerHTML = "Discord: iBrokenSun#7381"
    document.getElementById("email").innerHTML = "Email: contact@glacierclient.net"
    document.getElementById("quote").innerHTML = '"Person with a weird pfp"'
    document.getElementById("picture").src="https://api.glacierclient.net/assets/discord/pfp/652858814009442335";
}

function myKrezio(){
    document.getElementById("profile-modal").style.display="block";
    document.getElementById("username").innerHTML = "Krezio"
    document.getElementById("role").innerHTML = "Manager"
    document.getElementById("discord").innerHTML = "Discord: Krezio#3320"
    document.getElementById("email").innerHTML = "Email: contact@glacierclient.net"
    document.getElementById("quote").innerHTML = '"A Frog"'
    document.getElementById("picture").src="https://api.glacierclient.net/assets/discord/pfp/775986083871064075";
    console.log('test')
}

function myFelix(){
    document.getElementById("profile-modal").style.display="block";
    document.getElementById("username").innerHTML = "Felix"
    document.getElementById("role").innerHTML = "Developer"
    document.getElementById("discord").innerHTML = "Discord: Felixmax_#6450"
    document.getElementById("email").innerHTML = "Email: felix@glacierclient.net"
    document.getElementById("quote").innerHTML = '"The guy who makes the wierd starty thing"'
    document.getElementById("picture").src="https://api.glacierclient.net/assets/discord/pfp/460470667696013312";
}
function myDuke(){
    document.getElementById("profile-modal").style.display="block";
    document.getElementById("username").innerHTML = "Duke"
    document.getElementById("role").innerHTML = "Developer"
    document.getElementById("discord").innerHTML = "Discord: Duke#6377"
    document.getElementById("email").innerHTML = "Email: contact@glacierclient.net"
    document.getElementById("quote").innerHTML = '"Someone who made what you are looking at right now 👀"'
    document.getElementById("picture").src="https://api.glacierclient.net/assets/discord/pfp/835806614141141001";
}
function myMoon(){
    document.getElementById("profile-modal").style.display="block";
    document.getElementById("username").innerHTML = "MoonStyle"
    document.getElementById("role").innerHTML = "Designer"
    document.getElementById("discord").innerHTML = "Discord: BrokenMoon#2002    "
    document.getElementById("email").innerHTML = "Email: contact@glacierclient.net"
    document.getElementById("quote").innerHTML = '"Designs stuff"'
    document.getElementById("picture").src="https://api.glacierclient.net/assets/discord/pfp/466862322581897226";

}
function myLumina(){
    document.getElementById("profile-modal").style.display="block";
    document.getElementById("username").innerHTML = "Lumina"
    document.getElementById("role").innerHTML = "Developer"
    document.getElementById("discord").innerHTML = "Discord: Lumina#3384"
    document.getElementById("email").innerHTML = "Email: Lumina@glacierclient.net"
    document.getElementById("quote").innerHTML = '"Dont you ever say anything about my babe JS"'
    document.getElementById("picture").src="https://api.glacierclient.net/assets/discord/pfp/741623363612704789";

}
function myAustin(){
    document.getElementById("profile-modal").style.display="block";
    document.getElementById("username").innerHTML = "AustinFRG"
    document.getElementById("role").innerHTML = "Support"
    document.getElementById("discord").innerHTML = "Discord: AustinFRG#0001"
    document.getElementById("email").innerHTML = "Email: contact@glacierclient.net"
    document.getElementById("quote").innerHTML = '"Talks I guess."'
    document.getElementById("picture").src="https://api.glacierclient.net/assets/discord/pfp/298226178576220170";
}
function myCreeper(){
    document.getElementById("profile-modal").style.display="block";
    document.getElementById("username").innerHTML = "thedcreeper"
    document.getElementById("role").innerHTML = "Support"
    document.getElementById("discord").innerHTML = "Discord: thedrcreeper#9892"
    document.getElementById("email").innerHTML = "Email: contact@glacierclient.net"
    document.getElementById("quote").innerHTML = '"N/A"'
    document.getElementById("picture").src="https://cdn.discordapp.com/avatars/794279247396864000/09cdde75cfa885559d275a20d0c28b8a.png?size=2048";
}

function myGrilla(){
    document.getElementById("profile-modal").style.display="block";
    document.getElementById("username").innerHTML = "perionaa"
    document.getElementById("role").innerHTML = "Support"
    document.getElementById("discord").innerHTML = "Discord: Grilla#9143"
    document.getElementById("email").innerHTML = "Email: contact@glacierclient.net"
    document.getElementById("quote").innerHTML = '"N/A"'
    document.getElementById("picture").src="https://cdn.discordapp.com/avatars/858336884312768512/1107fc4a0f3bde5efa7359867c08662a.png?size=2048";
}
/* test | will remain there cuz im lazy wont harm*/

const Lumina = document.getElementById("Lumina");
Lumina.addEventListener("click", myLumina);


/*
function userConstructer(username, role, discord, email, quote, picture) {
    
    if(username || role || discord || email || quote || picture === null || NaN){
        throw new Error("Missing argument");
    }   


    document.getElementById("profile-modal").style.display="block";
    document.getElementById("username").innerHTML = username
    document.getElementById("role").innerHTML = "Role: " + role
    document.getElementById("discord").innerHTML = "Discord: " + discord
    document.getElementById("email").innerHTML = "Email: " +email
    document.getElementById("quote").innerHTML = '"${quote}"'
    document.getElementById("picture").src=picture;


}
*/

//TODO: implementation of userConstructer








