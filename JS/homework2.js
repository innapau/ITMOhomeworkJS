//         Задача #1


let month = prompt('Задача 1. Укажите порядковый номер месяца от  1 до 12');

const season = num => {
  let result = '';

  if (num >= 1 && num <= 2 || num == 12) {
    result = 'Зима';
    return alert(`Время года: ${result}`);
  } else if (num >= 3 && num <= 5) {
    result = 'Весна';
    return alert(`Время года: ${result}`);
  } else if (num >= 6 && num <= 8) {
    result = 'Лето';
    return alert(`Время года: ${result}`);
  } else if (num >= 9 && num <= 11) {
    result = 'Осень';
    return alert(`Время года: ${result}`);
  } else {
    return alert('В году всего 12 месяцев');
  }
};

console.log(`Время года: ${season(month)}`);

//          Задача #2


let unit = prompt('Задача 2. Укажите цифрой нужную единицу длины\n1 - Дециметр\n2 - Километр\n3 - Метр\n4 - Миллиметр\n5 - Сантиметр');
let segment = prompt('Задача 2. Укажите длину отрезка в указанных ранее единицах');

const segmentMeters = (units, length) => {
  let result;

  if (units == 1) {
    result = length / 10;   //дм в м
    return alert(`Длина отрезка: ${parseFloat(result)}м`);
  } else if (units == 2) {
    result = length * 1000; //км в м
    return alert(`Длина отрезка: ${parseFloat(result)}м`);
  } else if (units == 3) {
    result = length;        //м
    return alert(`Длина отрезка: ${parseFloat(result)}м`);
  } else if (units == 4) {
    result = length / 1000; //мм в м
    return alert(`Длина отрезка: ${parseFloat(result)}м`);
  } else if (units == 5) {
    result = length / 100;  //см в м
    return alert(`Длина отрезка: ${parseFloat(result)}м`);
  }
  return alert(`Неверно указаны единицы измерения`);
};

console.log(`Длина отрезка: ${segmentMeters(unit, segment)}м`);

//          Задача #3


let number = parseFloat(prompt('Задача 3. Введите число в диапазоне от -999 до 999'));

const numToStr = num => {
  let result = '';

  if (Number.isInteger(num) === false) {
    result = `Введите целое число`;
  } else if (num == 0) {
    result = 'Нулевое число';
  } else if (num > 0 ) {
      if (num < 10) {
        result = 'Положительное однозначное число';
      } else if (num < 100) {
        result = 'Положительное двузначное число';
      } else if (num < 1000) {
        result = 'Положительное трехзначное число';
      } else {
        result = 'Введите число в указанном диапазоне';
      }
  } else if (num < 0) {
      if (num > -10) {
        result = 'Отрицательное однозначное число';
      } else if (num > -100) {
        result = 'Отрицательное двузначное число';
      } else if (num > -1000) {
        result = 'Отрицательное трехзначное число';
      } else {
        result = 'Введите число в указанном диапазоне';
      }
  }
  return alert(result);
};

console.log(numToStr(number));

//          Задача #4


for (let i = 1; i <= 100; i++) {
  if (!(i % 3) && (i % 5)) {
    console.log('Three');
    continue;
  } else if ((i % 3) && !(i % 5)) {
    console.log('Five');
    continue;
  } else if (!(i % 3) && !(i % 5)) {
    console.log('ThreeFive');
    continue;
  }
  console.log(i);
};

//          Задача #5


let year = parseInt(prompt('Задача 5. Введите год'));

const leapYear = yr => {
  let result = '';

  if (!(yr % 4) && (yr % 100)) {
    result = `${yr} год - високосный`;
  } else if (!(yr % 4) && !(yr % 100) && !(yr % 400)) {
    result = `${yr} год - високосный`;
  } else {
    result = `${yr} год - не високосный`;
  }
  return result;
};

console.log(leapYear(year));
alert(leapYear(year));

//          Задача #6


let plates = parseInt(prompt('Задача 6. Введите количество тарелок'));
let cleanser = parseFloat(prompt('Задача 6. Введите количество моющего средства в мл'));

for (let i = plates, j = cleanser; i >= 0 && j >= 0; i-- , j -= 0.5) {
  console.log(i, j);
  let result = ``;
  if (i === 0) {
    result = `${j} мл моющего средства осталось после мыться всех тарелок`;
  } else if (j >= 0 && j < 0.5) {
    result = `${i} тарелок осталось, когда кончилось моющее средство`;
  }
  console.log(result);
};
