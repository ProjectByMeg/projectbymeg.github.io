function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function displayBanner() {
    document.getElementById("banner")[0].style.display("block");
}

let d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").textContent = year;

let lastUpdated = document.lastModified;
document.getElementById("lastupdated").textContent = lastUpdated;