//         Задача #1


let strNum = prompt('Задача 1. Введите число');

function sumOfDigits(str) {
  let result = 0;
  let reg = /\d/;
  for (let i = 0; i < str.length; i++) {
    if (reg.test(str[i])) {
      result += Number(str[i]);
    }
  }
  return result;
};

console.log(sumOfDigits(strNum));

//         Задача #2


let userStr = prompt('Задача 2. Введите любую строку');
let userChar = prompt('Задача 2. Введите символ, вхождение которого хотите удвоить');

function doubleChar(str, char) {
  let resultStr = '';
  for (let i = 0; i < str.length; i++) {
    if (char === str[i]) {
      resultStr += str[i];
    }
    resultStr += str[i];
  }
  return resultStr;
};
console.log(doubleChar(userStr, userChar));

//         Задача #3


let userPass = prompt('Задача 3. Введите пароль\nДлина пароля должна быть от 9 символов\nПароль должен содержать минимум 2 цифры\nПароль должен содержать минимум 1 заглавную и 1 строчную буквы латинского алфавита\nПароль должен содержать минимум один из символов: !@#$%^&*');

let regLength = /^.{9,}$/ig; //Длина от 9 символов
let regLetters = /(?=.*[A-Z])(?=.*[a-z]).*/g; //Содержит английские буквы верхнего и нижнего регистра
let regNumbers = /\d+.*\d+.*\d+/g; //Содержит минимум 2 цифры
let regSymbol = /[!@#$%^&*]/g; //Содержит символы !@#$%^&*

function passwordCheck(pwd) {
  let result = '';
  if (!regLength.test(pwd)) {
    result = 'Пароль должен содержать от 9 символов';
    return alert(result);
  } else if (!regLetters.test(pwd)) {
    result = 'Пароль должен английские буквы верхнего и нижнего регистра';
    return alert(result);
  } else if (!regNumbers.test(pwd)) {
    result = 'Пароль должен содержать  более';
    return alert(result);
  } else if (!regSymbol.test(pwd)) {
    result = 'Пароль должен содержать минимум 1 символ из набора !@#$%^&*';
    return alert(result);
  }
  result = 'Пароль принят';
  return alert(result);
};

console.log(passwordCheck(userPass));

//         Задача #4


// let dictionary = 'Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье';
//
// const strToArray = (str) => str.split(' ');
// console.log(strToArray(dictionary));
//
// function fuzzySearch(word, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < word.length; j++) {
//
//     }
//   }
// };
