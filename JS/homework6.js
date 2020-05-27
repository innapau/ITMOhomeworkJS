//         Задача #1


let a = {
    name: 'static',
    count: 0
};

function foo(obj, prop, counter) {
  let result = [];
  for (let i = 0; i < counter; i++)  {
    let newObj = {...obj};
    result.push(newObj);
    newObj[prop] = i;
  }
  return result;
}
console.log(foo(a, 'count', 10));


//         Задача #2


function randomNumberGenerator(min, max) {
  let result = 0;
  let numbers = [];
  let counter = 0;

  return function() {
    if (numbers.length === max) {
      return alert('Невозможно сгенерировать более 100 чисел');
    }
    while (counter < max) {
      let found = false;
      result = Math.floor(Math.random() * Math.floor(max - min + 1) + min);
      for (let j = 0; j < numbers.length; j++) {
        if (result === numbers[j]) {
          found = true;
          break;
        }
      }
      if (!found) {
        numbers.push(result);
        console.log(numbers);
        return result;
      }
    }
  }
};

const randomNum = randomNumberGenerator(1, 100);
console.log(randomNum());


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
let student2 = {
  name: 'Holly',
  surname: 'Holmes',
  age: '23',
  university: 'MIT',
  interests: [
    'UFC',
    'Sports'
  ]
};

function getUserData() {
  return console.log(`${this.name} ${this.surname}. ${this.age}. Interests: ${this.interests}. Studies in the ${this.university}`);
};

student.getUserData = getUserData;
student2.getUserData = getUserData;
student.getUserData();
student2.getUserData();


//         Задача #4


function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const answer = factorial(5);
console.log(answer);


//         Задача #5


let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, { 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4}];

function sortByPrice(p1, p2) {
  return p1.price - p2.price;
};

console.log(arr.sort(sortByPrice));
console.log(arr.reverse(sortByPrice));
