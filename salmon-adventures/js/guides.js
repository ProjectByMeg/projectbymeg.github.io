const requestURL = 'https://projectbymeg.github.io/salmon-adventures/json/guides.json';
fetch(requestURL)
    .then(function (response) {
        //console.log(response);
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);
        const guides = jsonObject['guides'];
        for (let i = 0; i < guides.length; i++) {
                let article = document.createElement('section');
                let info = document.createElement('div');
                let guidename = document.createElement('h3');
                let image = document.createElement('img');
                let level = document.createElement('p');
                let year = document.createElement('p');
                let email = document.createElement('p');
                let bio = document.createElement('p');

                guidename.textContent = guides[i].name;
                image.setAttribute('src', 'img/' + guides[i].photo);
                image.setAttribute('alt', guides[i].name)
                level.textContent = 'Certification Level:' + ' ' + guides[i].certLevel;
                year.textContent = 'Years of experience:' + ' ' + guides[i].yearExp;
                email.textContent = 'E-mail:' + ' ' + guides[i].email;
                bio.textContent = guides[i].bio;

                article.appendChild(info);
                info.appendChild(guidename);
                info.appendChild(level);
                info.appendChild(year);
                info.appendChild(email);
                info.appendChild(bio);
                article.appendChild(image);

                document.querySelector('.guides').appendChild(article);
        }
    });