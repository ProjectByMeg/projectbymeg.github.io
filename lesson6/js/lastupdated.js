function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

let d = new Date();
let day = d.getDay();
if (day == 5) {
        document.getElementById("banner")[0].style.display("block");
    }

let year = d.getFullYear();
document.getElementById("currentyear").textContent = year;

let lastUpdated = document.lastModified;
document.getElementById("lastupdated").textContent = lastUpdated;