const requestURL = 'http://projectbymeg.github.io/salmon-adventures/json/trips.json';
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
                let tripname = document.createElement('h3');
                let image = document.createElement('img');
                let length = document.createElement('p');
                let cost = document.createElement('p');

                tripname.textContent = trips[i].name;
                image.setAttribute('src', 'img/' + trips[i].photo);
                image.setAttribute('alt', trips[i].name)
                length.textContent = 'Year Founded:' + ' ' + trips[i].length;
                level.textContent = 'Annual Rainfall:' + ' ' + trips[i].skillLevel;
                cost.textContent = 'Population:' + ' ' + trips[i].cost;

                article.appendChild(info);
                info.appendChild(tripname);
                info.appendChild(length);
                info.appendChild(level);
                info.appendChild(cost);
                article.appendChild(image);

                document.querySelector('.trips').appendChild(article);
        }
    });