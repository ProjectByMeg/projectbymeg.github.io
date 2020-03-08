const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        //console.log(response);
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                let article = document.createElement('section');
                let townname = document.createElement('h3');
                let image = document.createElement('img');
                let motto = document.createElement('h4');
                let founded = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');

                townname.textContent = towns[i].name;
                image.setAttribute('src', 'img/' + towns[i].photo);
                image.setAttribute('alt', towns[i].name)
                motto.textContent = towns[i].motto;
                founded.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
                rainfall.textContent = 'Annual Rainfall:' + ' ' + towns[i].averageRainfall;
                population.textContent = 'Population:' + ' ' + towns[i].currentPopulation;

                article.appendChild(townname);
                article.appendChild(motto);
                article.appendChild(founded);
                article.appendChild(population);
                article.appendChild(rainfall);
                article.appendChild(image);

                document.querySelector('.town-data').appendChild(article);
            }
        }
    });