//         Задача #1

let boxesContainer = document.getElementById('boxes');
boxesContainer.addEventListener('click', changeColor, false);

function changeColor(element) {
    let clicked = element.target;

    if (clicked.classList.contains('greenbox')) {
        clicked.classList.remove('greenbox');
    } else {
        clicked.classList.add('greenbox');
    }
};


//         Задача #2

let counterButton = document.getElementById('counter');

function declension(num, titles) {
    num = num % 100;
    let num1 = num % 10;
    if (num > 10 && num < 20) {
        return titles[0];
    }
    if (num1 > 1 && num1 < 5) {
        return titles[1];
    }
    if (num1 === 1) {
        return titles[0];
    }
    return titles[0];
};

function clickCounter(element) {
    let acc = 0;
    let titlesTimes = ['раз', 'раза'];
    return function() {
        acc += 1;
        return element.innerText = `Нажата ${acc} ${declension(acc, titlesTimes)}`;
    }
};
let counter = clickCounter(counterButton);
counterButton.addEventListener('click', counter, false);

//         Задача #3

let commentsField = document.getElementById('comment-field');
let commentsSubmit = document.getElementById('comment-submit');
let commentsText = document.getElementById('comment-textarea');

commentsSubmit.addEventListener('click', commentComposer, false);

function commentComposer() {
    // Общий контейнер всех комментариев
    let section = document.getElementById('comment-section');

    // Поле одного комментария
    let container = document.createElement('div');

    // Блок с аватаром пользователя
    let pic = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', 'img/profile_pictures/avatar1.jpg');

    // Блок с именем пользователя и датой
    let rightSection = document.createElement('div');
    let info = document.createElement('div');
    let username = document.createElement('p');
    let date = document.createElement('p');

    // Блок с текстом комментария
    let textBlock = document.createElement('div');
    let text = document.getElementById('text').value;
    if (text !== '') {
        // Добавляем коммент
        container.classList.add('comment');
        section.appendChild(container);

        //Добавляем аватар
        pic.classList.add('picture-container');
        container.appendChild(pic);
        img.classList.add('profile-pic');
        pic.appendChild(img);

        // Добавляем контейнер для юзеринфо и текста коммента
        rightSection.classList.add('right-section');
        container.appendChild(rightSection);

        // Добавляем юзеринфо
        info.classList.add('user-info');
        rightSection.appendChild(info);
        username.classList.add('name');
        username.innerHTML = 'Frank Underwood';
        date.classList.add('date');
        date.innerHTML = new Date().toLocaleString();
        info.appendChild(username);
        info.appendChild(date);

        // Добавляем текст комментария
        textBlock.classList.add('comment-text');
        textBlock.innerHTML = text;
        rightSection.appendChild(textBlock);
    } else {
        alert('Введите текст комментария');
    }

};

//         Задача #4

let books = [{
    img: 'horde1.jpg',
    title: 'World of Warcraft: Рождение Орды',
    art: 'CGW-001',
    author: 'Кристи Голден',
    desription: 'Хотя молодой вождь Тралл и покончил с проклятием демона, которое многие поколения оскверняло его народ, орки все еще пытаются побороть грехи своего кровавого прошлого. Будучи неистовой Ордой, они провели несколько разрушительных войн со своим извечным врагом — Альянсом. Ярость и кровожадность, заставлявшие орков уничтожать все на своем пути, почти полностью поглотили их.'
}, {
    img: 'horde2.jpg',
    title: 'World of Warcraft: Последний Страж',
    art: 'GGW-001',
    author: 'Джефф Грабб',
    desription: 'В окутанном туманом прошлом, задолго до времен, описанных в первых летописях, существовал мир, зовущийся Азеротом. Всевозможные волшебные существа делили эти земли с племенами людей, и повсюду царил мир. Но однажды ужасные демоны Пылающего Легиона вместе со своим губительным повелителем Саргерасом, темным богом магии хаоса, вторглись в Азерот. Под влиянием сил зла, драконы, дворфы, эльфы, гоблины, люди и орки вступили в борьбу за власть над разрозненными королевствами.'
}, {
    img: 'horde3.jpg',
    title: 'World of Warcraft: Повелитель кланов',
    art: 'CGW-002',
    author: 'Кристи Голден',
    desription: 'В окутанном туманом прошлом мир, зовущийся Азеротом, изобиловал всевозможными удивительными созданиями. Загадочные эльфы и выносливые дворфы делили эти земли с племенами людей, и повсюду царили мир и гармония, но прибытие демонической армии, известной как Пылающий Легион, навсегда лишило Азерот покоя. Под влиянием сил зла орки, драконы, гоблины и тролли вступили в борьбу за власть над разрозненными королевствами. Раб. Гладиатор. Шаман. Военный вождь. Таинственный орк по имени Тралл был каждым из них. Взращенный с младенчества жестокими людьми, желающими превратить его в свою идеальную пешку, со свирепостью в сердце и перенятой от своих хозяев хитростью он идет навстречу судьбе, которую только начинает понимать: порвать рабские цепи и заново открыть древние традиции своего народа. Пришла пора поведать вам историю его бурной жизни — сагу о чести, ненависти и надежде...'
}, {
    img: 'horde4.jpg',
    title: 'World of Warcraft. Иллидан',
    art: 'WKW-001',
    author: 'Уильям Кинг',
    desription: 'Иллидан Ярость Бури. Великий чародей. Великий воин. Великий предатель. Десять тысяч лет, проведенных в тюрьме, когда лишь ненависть и жажда мести позволяют сохранить рассудок… И позволяют ли? Долгожданная свобода. Новый мир, новая армия, новые планы. Еще более амбициозные и непонятные для всех прочих. Что это — жажда реванша или стремление к безграничной власти? И какова будет цена победы? Ведь все больше врагов стягивают кольцо вокруг владыки Запределья, а от союзников в любой момент можно ждать удара в спину. Слишком многие хотят видеть Иллидана в цепях… или в могиле!'
}, ];


function tableBooks(arr) {
    let tagBooks = document.getElementById('books');
    let table = document.createElement('table');
    table.classList.add('table');
    let tr = document.createElement('tr');

    for(let prop in arr[0]) {
        let th = document.createElement('th');
        th.classList.add('table-cell');
        if (prop === 'img') {
            th.innerHTML = '<h4>Изображение</h4>';
            tr.appendChild(th);
        } else if (prop === 'title') {
            th.innerHTML = '<h4>Название</h4>';
            tr.appendChild(th);
        } else if (prop === 'art') {
            th.innerHTML = '<h4>Артикул</h4>';
            tr.appendChild(th);
        } else if (prop === 'author') {
            th.innerHTML = '<h4>Автор</h4>';
            tr.appendChild(th);
        } else if (prop === 'desription') {
            th.innerHTML = '<h4>Аннотация</h4>';
            tr.appendChild(th);
        }
        table.appendChild(tr);
    }

    for (let i = 0; i < arr.length; i++) {
        tr = document.createElement('tr');

        for (let key in arr[i]) {
            let td = document.createElement('td');
            td.classList.add('table-cell');
            if (key == 'img') {
                let image = document.createElement('img');
                image.setAttribute('src', 'img/books/' + arr[i][key]);
                image.style.maxWidth = '120px';
                td.appendChild(image);
                tr.appendChild(td);
            } else {
                td.innerHTML = arr[i][key];
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }
    tagBooks.appendChild(table);
};
tableBooks(books);
