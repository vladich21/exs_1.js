"use strict";

if (4 == 9) {
    console.log('OK!');
} else {
    console.log('Error!');
}
const num = 50;
if (num < 49) {
    console.log('Error!');

} else if (num > 100){
    console.log('Много!');

}else {
    console.log('ОК!');
}

// Тернарный оператор 

(num === 50) ? console.log('Ok!') : console.log('Error!');

// switch

const num = 50;
switch (num) {
    case 49:
      console.log('Неверно!');
      break;
    case 100:
      console.log('Неверно!');
      break;
    case 50:
        console.log('В точку!');
        break;
    default: 
        console.log('Не в этот раз!');
    break;
}

// Логические операторы 

const hamburger = true;
const fries = true; /*or false*/

if (hamburger && fries) {
    console.log('Я сыт!');
}
console.log(hamburger && fries);


// ИЛИ и И

// const hamburger = 3;
// const fries = 1;
// const cola = 0; 

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'afasfsqevsd ');





// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим!');
// }




const hamburger = 3;
const fries = 3;
const cola = 0; 
const nuggets = 2;

if (hamburger === 3 && cola ===2 || fries === 3 && nuggets) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим!');
}

console.log(hamburger === 3 && cola ===2 || fries === 3 && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);