//         Задача #1

let arrayOne = ['Проверка', 3, 'Hello world!', 15, 7];
let arrayTwo = ['Проверка', 3, 'Hello world!', 15, 7];
function comparison(arr1, arr2) {
  let result = '';

  if (arr1.length !== arr2.length) {
    result = 'Массивы не равны по длине'
    return result;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = 'Массивы не равны';
      break;
    }
    result = 'Массивы равны';
  }
  return result;
};

console.log(comparison(arrayOne, arrayTwo));

//         Задача #2


function range(head, tail, optionalStep = 1) {
  let result = [];
  result.push(head);
  for (let i = 0; i < (tail / optionalStep) - 1; i++) {
    result.push(result[i] + optionalStep);
  }
  return result;
};
console.log(range(1, 25, 3));


//         Задача #3


let student = {
  name: 'Frank',
  surname: 'Underwood',
  age: '25',
  university: 'California Institue of Technology',
  interests: [
    'Football',
    'Politics',
    'Art',
    'Technology'
  ]
};
let {name, surname, age, university, interests} = student;

function studentInfo(std) {
  let info = '';
  for (let prop in std) {
    console.log(std[prop])
    info += prop + ': ' + String(std[prop]) + '\n';
  }
  return info;
};
console.log(studentInfo(student));


//         Задача #4


let vowels = ['a', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
let consonants = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'];

function getRandonInt(min, max) {
  return Math.floor(Math.random() * Math.floor(max - min + 1) + min);
};

function nameGenerator(minNameLength, maxNameLength) {
  let resName = '';
  let nameLength = getRandonInt(minNameLength, maxNameLength);
  let letter = getRandonInt(1, 2);
  for (let i = 0; i < nameLength; i++) {
    if (letter === 1) {
      resName += vowels[getRandonInt(0, vowels.length - 1)];
      letter = 2;
    } else {
    resName += consonants[getRandonInt(0, consonants.length - 1)];
    letter = 1;
    }
  }
  resName = resName[0].toUpperCase() + resName.substring(1);
  return resName;
};

console.log(nameGenerator(3, 5));
