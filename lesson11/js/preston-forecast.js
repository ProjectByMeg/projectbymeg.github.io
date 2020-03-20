const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=d406709765ef36a2535d61a592b024b7';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(fivedayforecast);

        for (let i = 0; i < fivedayforecast.length; i++) {
            document.getElementById(`forecast${i+1}`).textContent = fivedayforecast[i].main.temp;
        }

    });