//          Задание №1

const hours = document.getElementById('h');
hours.style.color = '#A5FEE9';

const minutes = document.getElementById('m');
minutes.style.color = '#B4FEA5';

const seconds = document.getElementById('s');
seconds.style.color = '#EBFEA5';

function clock(h, m, s) {
    let date = new Date();

    h.innerHTML = (date.getHours() < 10) ? '0' + date.getHours() + ':' : date.getHours() + ':';
    m.innerHTML = (date.getMinutes() < 10) ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
    s.innerHTML = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
}
setInterval(clock, 1000, hours, minutes, seconds);
clock(hours, minutes, seconds);


//          Задание №2

let goods = [{
    title: 'Nike Air Max 720',
    img: 'airmax-270.jpg',
    art: 'CV1633-001',
    color: 'Pure Platinum/Hyper Crimson',
    price: '15790'
}, {
    title: 'Nike Air Max 95 Lv8',
    img: 'airmax-95lv8.jpg',
    art: 'AO2450-101',
    color: 'White/Court Purple-Emerald Green',
    price: '15450'
}, {
    title: 'Nike Air Force One Lv8',
    img: 'airforce-1lv8.jpg',
    art: 'CK4363-100',
    color: 'White/White-Cool Grey-Pure Platinum',
    price: '8990'
}, {
    title: 'adidas Originals LXCON 94',
    img: 'lxcon-94.jpg',
    art: 'EF4471',
    color: 'Cloud White/Gold/Mystery Ruby',
    price: '9990'
}, ];

function showGoods(arr) {
    let tagGoods = document.getElementById('goods');
    tagGoods.style.display = 'flex';

    for (let i = 0; i < arr.length; i++) {
        let image = document.createElement('img');
        image.setAttribute('src', 'img/goods/' + arr[i].img);

        let title = document.createElement('h2');
        title.innerText = arr[i].title;

        let article = document.createElement('p');
        article.innerText = 'Артикул: ' + arr[i].art;

        let color = document.createElement('p');
        color.innerText = 'Цвет: ' + arr[i].color;

        let price = document.createElement('p');
        price.innerText = 'Цена: ' + arr[i].price + ' rub';
        price.style.fontWeight = '900';
        price.style.fontSize = '1.5em';

        let container = document.createElement('div');
        container.style.width = '48%';
        container.style.border = '1px solid #DFDFDF';
        container.style.display = 'inline-flex';
        container.style.margin = '2px auto';

        let imgDiv = document.createElement('div');
        imgDiv.style.maxWidth = '400px';
        let infoDiv = document.createElement('div');
        infoDiv.style.padding = '10px'

        imgDiv.appendChild(image);
        infoDiv.appendChild(title);
        infoDiv.appendChild(article);
        infoDiv.appendChild(color);
        infoDiv.appendChild(price);

        container.appendChild(imgDiv);
        container.appendChild(infoDiv);

        tagGoods.appendChild(container);
    }
};
showGoods(goods);

//          Задание №3

let trafficForm = document.getElementById('trafficLights');

function lightSwitch() {
    let redLight = document.getElementById('red');
    let yellowLight = document.getElementById('yellow');
    let greenLight = document.getElementById('green');
    let counter = 0;

    setInterval(function() {
        if (document.querySelector('.active').getAttribute('id') === 'red') {
            redLight.classList.remove('active');
            yellowLight.classList.add('active');
            counter = 1;
        } else if (document.querySelector('.active').getAttribute('id') === 'green') {
            greenLight.classList.remove('active');
            yellowLight.classList.add('active');
            counter = 3;
        } else if (document.querySelector('.active').getAttribute('id') === 'yellow' && counter === 1) {
            yellowLight.classList.remove('active');
            greenLight.classList.add('active');
        } else if (document.querySelector('.active').getAttribute('id') === 'yellow' && counter === 3) {
            yellowLight.classList.remove('active');
            redLight.classList.add('active');
        }
    }, 2000);
}
let run = lightSwitch();
run;

//          Задание №4


function declension(num, titles) {
    num = num % 100;
    let num1 = num % 10;
    if (num > 10 && num < 20) {
        return titles[1];
    }
    if (num1 > 1 && num1 < 5) {
        return titles[2];
    }
    if (num1 === 1) {
        return titles[0];
    }
    return titles[1];
};

function newYearCounter() {
    let p = document.querySelector('.newYearText');
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let targetDate = new Date(currentYear + 1, 0, 1);
    let result = (targetDate - currentDate);
    let titlesDays = ['день', 'дней', 'дня'];
    let titlesHours = ['час', 'часов', 'часа'];
    let titlesMinutes = ['минута', 'минут', 'минуты'];
    let days = Math.floor(result / 1000 / 60 / 60 / 24);
    let hours = Math.floor((result / 1000 / 60 / 60) % 24);
    let minutes = Math.floor((result / 1000 / 60) % 60);

    if (result <= 0) {
        return p.innerHTML = 'С новым годом!!!'
    }
    return p.innerHTML = `До нового года осталось: ${days} ${declension(days, titlesDays)} ${hours} ${declension(hours, titlesHours)} ${minutes} ${declension(minutes, titlesMinutes)}`;
};


newYearCounter();
setInterval(newYearCounter, 10000);
