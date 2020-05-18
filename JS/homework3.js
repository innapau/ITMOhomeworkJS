//         Задача #1


const A = [12, 4, 3, 10, 1, 20];
const B = [-3, -7, -100, -33];

const arrayPlace = (arr1, arr2) => {
  let concatArr = arr1.concat(arr2);
  return concatArr;
};

const D = arrayPlace(B, A);
const C = arrayPlace(A, B);
console.log(D);
console.log(C);

//         Задача #2


let gameArr = [1, null, 0, null, 1, null, null, null, null];
let gameField = '<div class="grid">';

for (let i = 0; i < gameArr.length; i++) {
  if (gameArr[i] === 1) {
    gameField += '\n<div class="cell">X</div>';
  } else if (gameArr[i] === 0) {
    gameField += '\n<div class="cell">O</div>';
  } else if (gameArr[i] === null) {
    gameField += '\n<div class="cell">&nbsp;</div>';
  } else if (i === gameArr.length) {
    gameField += '\n</div>';
  }
};
document.write(gameField);


//         Задача #3

let numbers = [12, 4, 3, 10, 1, 20];
let min = numbers[0], max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];

  if (element > max) {
    max = element;
  } else if (element < min) {
    min = element;
  }
};

let resultArr = [];

for (let i = 0; i < numbers.length - 2; i++) {
  const element = numbers[i];
  if (element === min || element === max) {
    continue;
  }
  resultArr.push(element);
}
console.log(resultArr);

//         Задача #4

let ticket = prompt('Задача 4. Введите номер билета');

function isLucky(numStr) {
  let balance = 0;

  if (numStr.length === 5) {
    numStr = '0' + numStr;
  } else if (numStr.length === 4) {
    numStr = '00' + numStr;
  } else if (numStr.length === 3) {
    numStr = '000' + numStr;
  } else if (numStr.length === 2) {
    numStr = '0000' + numStr;
  } else if (numStr.length === 1) {
    numStr = '00000' + numStr;
  }

  for (let i = 0, j = numStr.length - 1; i < j; i += 1, j -= 1) {
    balance += +numStr[i] - +numStr[j];
  }
  return balance === 0;
};

console.log(isLucky(ticket));

let luckyTicketCount = 0;
for (let i = 1000; i < 1000000; i++) {
  if (isLucky(String(i))) {
    luckyTicketCount += 1;
  }
};
console.log(luckyTicketCount);
