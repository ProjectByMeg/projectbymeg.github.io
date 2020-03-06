const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
        //console.log(response);
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let image = document.createElement('img');
            let birthday = document.createElement('span');
            let birthplace = document.createElement('p');


            let fullname = prophets[i].name + ' ' + prophets[i].lastname;

            h2.textContent = fullname;
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', fullname + ' - ' + [i] + 1);

            birthday.textContent = 'Date of Birth:' + ' ' + prophets[i].birthdate;

            birthplace.textContent = 'Place of Birth:' + ' ' + prophets[i].birthplace;


            card.appendChild(h2);
            card.appendChild(birthday);
            card.appendChild(birthplace);
            card.appendChild(image);

            document.querySelector('.cards').appendChild(card);
        };
    });