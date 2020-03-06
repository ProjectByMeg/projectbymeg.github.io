const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        //console.log(response);
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);
        const towns = jsonObject['towns'];
        let weather = towns.slice(1, 6);
        for (let i = 0; i < weather.length; i++) {
            let article = document.createElement('section');
            let townname = document.createElement('h3');
            let image = document.createElement('img');
            let motto = document.createElement('p');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');

            townname.textContent = weather[i].name;

            image.setAttribute('src', weather[i].photo);

            motto.textContent = weather[i].motto;

            founded.textContent = 'Year Founded:' + ' ' + weather[i].yearFounded;

            rainfall.textContent = 'Annual Rainfall:' + ' ' + weather[i].averageRainfall;

            population.textContent = 'Population:' + ' ' + weather[i].currentPopulation;
    

            article.appendChild(townname);
            article.appendChild(motto);
            article.appendChild(founded);
            article.appendChild(population);
            article.appendChild(rainfall);
            article.appendChild(image);

            document.querySelector('.town-data').appendChild(article);
        };
    });