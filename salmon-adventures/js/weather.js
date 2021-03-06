const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83549,us&units=imperial&APPID=d406709765ef36a2535d61a592b024b7";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('condition').textContent = jsObject.weather[0].description;
        document.getElementById('current').textContent = Math.round(jsObject.main.temp);
        document.getElementById('high').textContent = Math.round(jsObject.main.temp_max);
    });