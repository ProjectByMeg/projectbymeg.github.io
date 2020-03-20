const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=d406709765ef36a2535d61a592b024b7";
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