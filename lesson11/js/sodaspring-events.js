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
            if (towns[i].name == "Soda Springs") {
                let article = document.createElement('section');
                let header = document.createElement('h3');
                let events0 = document.createElement('p');
                let events1 = document.createElement('p');
                let events2 = document.createElement('p');

                header.textContent = 'Events';
                events0.textContent = towns[i].events[0];
                events1.textContent = towns[i].events[1];
                events2.textContent = towns[i].events[2];

                article.appendChild(header);
                article.appendChild(events0);
                article.appendChild(events1);
                article.appendChild(events2);

                document.querySelector('.events').appendChild(article);
            }
        }
    });