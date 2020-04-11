const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83549,us&units=imperial&APPID=d406709765ef36a2535d61a592b024b7";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('condition').textContent = jsObject.weather[0].description;
        document.getElementById('current').textContent = Math.round(jsObject.main.temp);
        document.getElementById('high').textContent = Math.round(jsObject.main.temp_max);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('windspeed').textContent = jsObject.wind.speed;
    });

let tempF = parseInt(document.getElementById("high").innerText);
let speed = parseInt(document.getElementById("windspeed").innerText);


if (tempF <= 50 && speed >= 3) {
    let windchill = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);

    document.getElementById("windchill").innerHTML = windchill.toFixed(2);
} else {
    document.getElementById("windchill").innerText = "N/A"
}