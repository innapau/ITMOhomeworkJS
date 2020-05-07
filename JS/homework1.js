//          Задача #1

let givenArea;
let gardenBedLength;
let gardenBedWidth;

givenArea = prompt('Задача 1. Сколько соток участок?');
gardenBedLength = prompt('Задача 1. Какова длина грядки в метрах?');
gardenBedWidth = prompt('Задача 1. Какова ширина грядки в метрах?');

let gardenArea = 100 * parseInt(givenArea);
let gardenBedArea = parseInt(gardenBedLength) * parseInt(gardenBedWidth);

//Реализация результата формулой
let res = gardenArea - (parseInt(gardenArea / gardenBedArea) * gardenBedArea);
console.log(`На участе осталось не занято: ${res} м2`);
alert(`На участе осталось не занято: ${res} м2`);

//Рекурсивная реализация
const answer = (area, bedArea) => {
  let result = area - bedArea;
  if (result >= bedArea) {
    return answer(result, bedArea);
  }
  return result;
}
console.log(`На участе осталось не занято: ${answer(gardenArea, gardenBedArea)} м2`);


//          Задача #2

let originElipseAreaDm;
let carvedElipseArea;

originElipseAreaDm = prompt('Задача 2. Площадь изначального овала в дм2');
carvedElipseArea = prompt('Задача 2. Площадь вырезанного овала в см2');

let originElipseAreaCm = originElipseAreaDm * 100;

//Реализация результата формулой
let resCm = originElipseAreaCm - parseInt(carvedElipseArea);
let resDm = (originElipseAreaCm - parseInt(carvedElipseArea)) / 100;
console.log(`Площадь овального кольца: ${resCm} см2 или ${resDm} дм2`);
alert(`Площадь овального кольца: ${resCm} см2 или ${resDm} дм2`);

//          Задача #3

let num1;
let num2;
let num3;
let leastNum;

num1 = prompt('Задача 3. Задайте первое число');
num2 = prompt('Задача 3. Задайте второе число');
num3 = prompt('Задача 3. Задайте третье число');

leastNum = (num1 <= num2) ? num1 : num2;
leastNum = (leastNum >= num3) ? num3 : leastNum;

console.log(`Наименьшее число из трех: ${leastNum}`);
alert(`Наименьшее число из трех: ${leastNum}`);

//          Задача #4

const mid = 10;
let m;
let n;
let closest;

m = prompt('Задача 4. Задайте первое число');
n = prompt('Задача 4. Задайте второе число');

let diffM = mid - m;
let diffN = mid - n;
let positiveM = (diffM > 0) ? diffM : diffM * -1;
let positiveN = (diffN > 0) ? diffN : diffN * -1;

closest = (positiveM < positiveN) ? parseFloat(m) : parseFloat(n);

console.log(`Ближайшее число к 10: ${closest}`);
alert(`Ближайшее число к 10: ${closest}`);

//          Задача #5

//Вершина A
let ax = prompt('Задача 5. Укажите координату X точки A');
let ay = prompt('Задача 5. Укажите координату Y точки A');
let az = prompt('Задача 5. Укажите координату Z точки A');

//Вершина B
let bx = prompt('Задача 5. Укажите координату X точки B');
let by = prompt('Задача 5. Укажите координату Y точки B');
let bz = prompt('Задача 5. Укажите координату Z точки B');

//Вершина C
let cx = prompt('Задача 5. Указиже координату X точки C');
let cy = prompt('Задача 5. Укажите координату Y точки C');
let cz = prompt('Задача 5. Укажите координату Z точки C');

const lineSegment = (x1, y1, z1, x2, y2, z2) => {
  return (x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2;
}

const AB = lineSegment(parseInt(ax), parseInt(ay), parseInt(az), parseInt(bx), parseInt(by), parseInt(bz));
const AC = lineSegment(parseInt(ax), parseInt(ay), parseInt(az), parseInt(cx), parseInt(cy), parseInt(cz));
const BC = lineSegment(parseInt(bx), parseInt(by), parseInt(bz), parseInt(cx), parseInt(cy), parseInt(cz));

console.log(AB, AC, BC);

const answer5 = (segmentA, segmentB, segmentC) => {
  return (segmentA === segmentB + segmentC) ? true :
  (segmentB === segmentA + segmentC) ? true :
  (segmentC === segmentA + segmentB) ? true : false;
}

console.log(`Треугольник является прямоугольным: ${answer5(AB, AC, BC)}`);
alert(`Треугольник является прямоугольным: ${answer5(AB, AC, BC)}`);
