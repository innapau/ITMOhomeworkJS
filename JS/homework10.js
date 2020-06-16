//              Задание №1

function Product (name, price){
    this.name = name;
    this.price = price;
}

let prod1 = new Product('iPhone', 1100);
let prod2 = new Product('Samsung Galaxy', 950);
let prod3 = new Product('Huawei P30', 700);
let prod4 = new Product('Xiaomi Pocophone', 450);


function Cart() {
    let goods = [];
    let goodsAmount = 0;
    let goodsSum = 0;

    this.addProduct = function(product) {
        goods.push(product);
    }

    this.getSum = function() {
        goodsSum = 0;
        for (let i = 0; i < goods.length; i++) {
            goodsSum += goods[i].price;
        }
        return goodsSum;
    }

    this.getGoodsAmount = function() {
        goodsAmount = goods.length;
        return goodsAmount;
    }
}

let phones = new Cart();

phones.addProduct(prod1);
phones.addProduct(prod2);
phones.addProduct(prod3);
phones.addProduct(prod4);

console.log(phones.getSum());
console.log(phones.getGoodsAmount());

//          Задание №2


function Person(name, age, sex, interests) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.interests = interests;

    this.toString = function() {
        return `Человек: ${this.name}. Возраст: ${this.age} лет. Пол: ${this.sex}. Интересы: ${this.interests}.`;
    }
}

function Student(university, name, age, sex, interests) {
    Person.call(this, name, age, sex, interests);
    this.university = university;

    this.toString = function() {
        return `Студент: ${this.name}. Возраст: ${this.age} лет. Пол: ${this.sex}. Интересы: ${this.interests}. Обучается в ${this.university}`;
    }
}

let student = new Student('ИТМО', 'Денис', '27', 'м', 'Программирование, технологии, компьютерные игры');
console.log(student.toString());

//          Задание №3

function User(name = "Аноним", age) {
    this.name = name;
    this.age = age;

    this.toString = function() {
        if (age) {
            return `Имя пользователя: ${this.name}. Возраст: ${age}`;
        } else {
            return `Имя пользователя: ${this.name}.`;
        }
    }
}

User.createUser = function(name, age){
    return new User(name, age);
}

User.createAnonUser = function(){
    return new User();
}

let namedUser = User.createUser('Денис', '27');
let anonUser = User.createAnonUser();

console.log(namedUser.toString());
console.log(anonUser.toString());

//          Задание №4

// 1. window.crypto - дает доступ к интерфейсу Crypto. Этот интерфейс предоставляет веб-странице доступ к встроенным в браузер возможностям криптографии.

// 2. window.history - является свойством только для чтения, ссылающимся на объект History, который предоставляет интерфейс для манипулирования историей сессии браузера (страницы, посещенные в текущей вкладке или фрейме, который был загружен на текущей странице).

// 3. window.sessionStorage -  позволяет получить доступ к объекту Storage текущей сессии. Свойство sessionStorage очень похоже на свойство Window.localStorage, единственное различие заключается в том, что все данные, сохраненные в localStorage не имеют определенного времени жизни, а данные в sessionStorage очищаются в момент окончания сессии текущий страницы.

// 4. window.trustedTypes - позволяет современным веб-приложениям защитить свой фронтенд от Межсайтового скриптинга (XSS), а конкретнее — от JavaScript инъекций в DOM (DOM-Based Cross Site Scripting).

// 5. window.audioContext - представляет собой некий аудио обрабатывающий объект, сооруженный из аудио модулей связаных вместе, где каждый является экземпляром класса AudioNode. AudioContext управляет созданием узлов, содержащихся в нём и выполняет обработку или декодирование аудио данных.

// 6. window.navigator - содержит информацию браузера пользователя, например название браузера, версия,.... Вы можете получить доступ к объектам  navigator без необходимости использования префикса  window.

// 7. window.postMessage - этот метод позволяет безопасно отправлять кроссдоменные запросы. Обычно сценариям на разных страницах разрешен доступ друг к другу только если страницы, которые их выполняли, передаются по одному  протоколу (обычно это https), номер порта (443 — по умолчанию для https) и хост (modulo Document.domain установленный страницами на одно и тоже значение). window.postMessage() предоставляет контролируемый механизм, чтобы обойти это ограничение способом, который безопасен при правильном использовании.

// 8. window.requestIdleCallback - ставит в очередь функцию, которая будет вызываться во время периодов простоя браузера. Это позволяет разработчикам выполнять фоновую и низкоприоритетную работу в цикле основного события, без воздействия такими критично долгими событиями, как анимация и обработка ввода.

// 9. window.cancelAnimationFrame - останавливает анимацию, запланированную с помощью window.requestAnimationFrame.

// 10. window.requestAnimationFrame - указывает браузеру на то, что вы хотите произвести анимацию, и просит его запланировать перерисовку на следующем кадре анимации. В качестве параметра метод получает функцию, которая будет вызвана перед перерисовкой.
