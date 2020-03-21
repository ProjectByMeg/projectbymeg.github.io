const apiURL1 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=d406709765ef36a2535d61a592b024b7';
fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        for (let i = 0; i < fivedayforecast.length; i++) {
          let d = new Date(fivedayforecast[i].dt_txt);
          let dayName = days[d.getDay()];
          document.getElementById("day" + i).textContent = dayName;
          document.getElementById("forecast" + i).innerHTML = parseFloat(fivedayforecast[i].main.temp).toFixed(0) + "&#8457;";
          document.getElementById("icon" + i).setAttribute("src", `https://openweathermap.org/img/w/${fivedayforecast[i].weather[0].icon}.png`);
          document.getElementById("icon" + i).setAttribute("alt", fivedayforecast[i].weather[0].description);
        }
      });