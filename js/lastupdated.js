let d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").textContent = year;

let lastUpdated = document.lastModified;
document.getElementById("lastupdated").textContent = lastUpdated;