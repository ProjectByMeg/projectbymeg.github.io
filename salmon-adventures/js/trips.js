const requestURL = 'http://projectbymeg.github.io/json/trips.json';
fetch(requestURL)
    .then(function (response) {
        //console.log(response);
        return response.json();
    })

    .then(function (jsonObject) {
        //console.table(jsonObject);
        const trips = jsonObject['trips'];
        for (let i = 0; i < trips.length; i++) {
                let article = document.createElement('section');
                let info = document.createElement('div');
                let townname = document.createElement('h3');
                let image = document.createElement('img');
                let motto = document.createElement('h4');
                let founded = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');

                townname.textContent = trips[i].name;
                image.setAttribute('src', 'img/' + trips[i].photo);
                image.setAttribute('alt', trips[i].name)
                motto.textContent = trips[i].motto;
                founded.textContent = 'Year Founded:' + ' ' + trips[i].yearFounded;
                rainfall.textContent = 'Annual Rainfall:' + ' ' + trips[i].averageRainfall;
                population.textContent = 'Population:' + ' ' + trips[i].currentPopulation;

                article.appendChild(info);
                info.appendChild(townname);
                info.appendChild(motto);
                info.appendChild(founded);
                info.appendChild(population);
                info.appendChild(rainfall);
                article.appendChild(image);

                document.querySelector('.trips').appendChild(article);
            }
        }
    });