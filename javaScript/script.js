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


// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ 

const hamburger = 3;
const fries = 3;
const cola = 0; 
const nuggets = 2;

if (hamburger === 3 && (cola === 2 || fries === 3) && nuggets) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим!');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);

console.log( NaN || 2 || undefined );
// ответ 2
// Когда вы используете оператор "или" || в JavaScript, он возвращает первое истинное значение из списка операндов или последний операнд, если ни один из них не является истинным.

console.log( NaN && 2 && undefined );
// ответ NaN
// В этом выражении используется оператор "и" && в JavaScript. Он возвращает первое ложное значение из списка операндов или последний операнд, если все операнды истинные.

console.log( 1 && 2 && 3 ); 
// ответ 3
console.log( !1 && 2 || !3 );
// ответ !1
console.log( 25 || null && !3 );
// ответ  25
console.log( NaN || null || !3 || undefined || 5);
// ответ 5 
console.log( NaN || null && !3 && undefined || 5);
// ответ 5 
console.log( 5 === 5 && 3 > 1 || 5);
// ответ true

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
//done


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}
//done

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
// false
