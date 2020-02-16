function windchill() {
    let temperature = parseInt(document.getElementById("high").innerText);
    let windspeed = parseInt(document.getElementById("windspeed").innerText);
    let result = windChill(temperature, windspeed)
    document.getElementById("windchill").innerText = result; 
}

function windChill(tempF, speed) {
   let wind = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
   return wind;
}