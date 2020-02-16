let tempF = parseInt(document.getElementById("high").innerText);
let speed = parseInt(document.getElementById("windspeed").innerText);


if (tempF <= 50 && speed >= 3) {
    let windchill = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);

    document.getElementById("windchill").innerHTML = windchill.toFixed(2);
} 
else {
    document.getElementById("windchill").innerText = "N/A"
}