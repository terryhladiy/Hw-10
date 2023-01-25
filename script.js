// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
const sum = [];
for (let i = 20; i <= 30; i += 0.5) {
  sum.push(i);
}

console.log(sum.join(' '));

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
for (let i = 10; i <= 100; i += 10) {
  console.log(`${i} доларів це ${i * 27} грн.`);
}
// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
const number = 100;
const newArr = [];
for (let i = 1; i <= 100; i += 1) {
  if (i * i <= number) {
    newArr.push(i);
  }
}
console.log(newArr);
// eslint-disable-next-line max-len
// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе)
const num = 97;
let resalt = '';
for (let i = 2; i < num; i += 1) {
  if (!(num % i)) {
    resalt = 'Не просте';
    break;
  } else {
    resalt = 'Просте';
  }
}
console.log(resalt);
// eslint-disable-next-line max-len
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
const newNum = 90;
let resalt2 = '';
for (let i = 1; i < newNum; i += 1) {
  if (3 ** i === newNum) {
    resalt2 = 'Можна';
    break;
  } else {
    resalt2 = 'Не можна';
  }
}
console.log(resalt2);
