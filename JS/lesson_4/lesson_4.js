//
//         L E S S O N    3 - 4

// ////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////// //

///           F U N C T I O N      (49:30 - to the end of lesson)  ///

// ////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////// //

// Функції - це просто поведінка чогось, яку можна перевикористовувати
// стільки раз, скільки необхідно


// function sendSMS(phoneUser, userName, address) {
//     userName = userName || 'user';
//     address = address || 'Ukraine' ;

//     console.log('Hello,',  phoneUser, userName , 'from', address,  '.Ваш запит в обробці');
// }

// sendSMS('+380674308888', 'Vova', 'Harkiv');
// sendSMS('+380668008080', 'Olga');
// sendSMS('+380672000200');
// sendSMS('+38067', 'Olga');

// console.log('*****************************');


// function sendSMS2(userObject, carObject) {
//     console.log('Hello', userObject.name, 'age:', userObject.age,
//         'phone:', userObject.phone, ', car:', carObject.model, carObject.year);
// }
//
// let user1 = {
//     name: 'Vika',
//     age: 33,
//     phone: '+380667007080'
// };
//
//
// let user2 = {
//     name: 'Olga',
//     age: 54,
//     phone: '+380666669977'
// };
//
// let user3 = {
//     name: 'Katya',
//     age: 28,
//     phone: '+380674005009'
// };
//
//
// let car1 = {
//     model: 'BMW',
//     year: 2020
// };
//
// let car2 = {
//     model: 'Mazda',
//     year: 2016
// };
//
// sendSMS2(user1, car1);
// sendSMS2(user2, car2);
// sendSMS2(user3, car1);

///////////////////////////////

// function sendSMS2(userObject, carObject =
//     { model: 'NO', year: 'CAR' }) {
//     console.log('Hello', userObject.name, 'age:', userObject.age,
//         'phone:', userObject.phone, ', car:', carObject.model, carObject.year);
// }
// let user1 = {
//     name: 'Vika',
//     age: 33,
//     phone: '+380667007080'
// };
// let user2 = {
//     name: 'Olga',
//     age: 54,
//     phone: '+380666669977'
// };
// let user3 = {
//     name: 'Katya',
//     age: 28,
//     phone: '+380674005009'
// };
// let car1 = {
//     model: 'BMW',
//     year: 2020
// };
// let car2 = {
//     model: 'Mazda',
//     year: 2016
// };
//
// sendSMS2(user1);
// sendSMS2(user2, car2);
// sendSMS2(user3, car1);

////////////////////////


//
// function processOrder(orderInfo = {}) {
//     // console.log(orderInfo);
// console.log(orderInfo.name);
//     if (!orderInfo.phone || !orderInfo.items.length) {
//         console.log('Order is not completed');
//     } else {
//         sendSMS( orderInfo.name, orderInfo.phone, orderInfo.address);
//     }
// }

// const order1 = {
//     phone: '+3806644466600',
//     name: 'Ira',
//     items: ['Headphones', 'Beer'],
//     address: 'Kyiv'
// };

// const order2 = {
//     phone: '+38066',
//     name: 'Vlad',
//     items: ['Headphones ', 'Beer'],
//     address: 'Odessa'
// };


// processOrder(order1);
// processOrder(order2);
// processOrder();


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//////////////////              H O M E W O R K            ////////////////////

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


// 1) створити функцію яка приймає масив та виводить його


// function showIndexOfArray(arr) {
//     for (const arrIndex in arr) {
//        console.log(arrIndex);
//     }
// }

// showIndexOfArray([10, 34, 'hello', true, undefined, null, 23]);
//  console.log('***************************');

// function showArrayElements(arr, a) {
//     console.log(arr);
//     console.log(a);

// }

// showArrayElements([4, 6, -2000, 6656, 0, -3333], 'second arg');

// 2) створити функцію яка заповнює масив рандомними числами та виводить його.
// Для виведення використати попередню функцію.

// console.log('***************************');

// function arrRandom(length, min, min) {
//     array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * (min - min)) + min);
//     }
//     return array;
// }

// let newArray = arrRandom(5, 10, 35);
// console.log(newArray);
// showArrayElements(newArray, 'hello, array!');


// 3) створити функцію яка приймає три числа та виводить найменьше.
//(Без Math.min!)


//      First
//
// function minNumber(a, b, c) {
//     let array = [a, b, c];
//     let min = a;
//     for (const arrayElement of array) {
//         if (min > arrayElement) {
//             min = arrayElement
//         }
//     }
//     console.log(min);
// }

// minNumber(100, 30000, 500);

//      Second

// function minNumber2(a, b, c) {
//     let min;
//     if (a <= b && a <= c) min = a;
//     if (b <= a && b <= c) min = b;
//     if (c <= a && c <= b) min = c;

//     console.log(min, 'is min');
//     return min;
// }

// let minNumber = minNumber2(10, 200, 3333);

//   THIRD

// function minNumber3(a, b, c) {
//     let max;
//     a < b ? min = a : min = b;
//     min > c ? min = c : false;

//     console.log(min, 'is min');
//     return max;
// }

// let max = minNumber3(10, 200, 49999);



// 4) створити функцію яка приймає три числа та виводить найбільше.
// (Без Math.min!)
// console.log('********************************');

//   FIRST

// function maxNumber(a, b, c) {
//     let arr = [a, b, c];
//     let max = a;
//     for (const arrElement of arr) {
//         if (max < arrElement) {
//             max = arrElement;
//         }
//     }
//     console.log(max);
// }

// maxNumber(444, 5, 2222222);


//      SECOND

// function maxNumber2(a, b, c) {
//     let max;
//     if (a >= b && a >= c) max = a;
//     if (b >= a && b >= c) max = b;
//     if (c >= a && c >= b) max = c;

//     console.log(max, 'is max');
//     return max;
// }

// let maxNumber = maxNumber2(10, 200, 3333);

//     THIRD

// function maxNumber3(a, b, c) {
//     let max;
//     a > b ? max = a : max = b;
//     max < c ? max = c : false;

//     console.log(max, 'is max');
//     return max;
// }

// let max = maxNumber3(10, 200, 4);



// 5) створити функцію яка повертає найбільше число з масиву

// function maxNumber(a, b, c, d, e) {
//     let array = [a, b, c, d, e];
//     let max = d;
//     for (const arrElement of array) {
//         if (max < arrElement)
//             max = arrElement;

//     }
//     return max;
// }

// let maxNumber1 = maxNumber(100, 20, 30, 40, 9);
// console.log(maxNumber1);

// console.log('*******************************');


//                OR

// const findMax = (array) => {
//     let max = array[0];
//     for (const itemOfArray of array) {
//         if (max < itemOfArray)
//             max = itemOfArray;
//     }
//     return max;
// };

// let maxNum = findMax([100, 20, 30, 40, 9, 88, 888000888, 99]);
// console.log(maxNum);


// 6) створити функцію яка повертає найменьше число з масиву

// const findMin = (array) => {
//     let min = array[0];
//     for (const itemArrat of array) {
//         if (min > itemArrat)
//             min = itemArrat
//     }
//     return min;
// }

// let minNumber = findMin([11, 20, 33, 16, 444]);
// console.log(minNumber);


// 7) створити функцію яка приймає масив чисел, сумує значення елементів
//масиву та повертає його.


// const sumNumbersOfArray = (array) => {
//     let sum = 0;
//     //console.log(sum);

//     for (const arrayElement of array) {
//         sum = sum + arrayElement;
//     }
//     return sum;
// };

// let result = sumNumbersOfArray([2, 4, 10, 20, 10]);
// console.log(result);

// 8) створити функцію яка приймає масив чисел та повертає
//середнє арифметичне його значень.


// const arrAverage = (array) => {
//     let sum = 0;
//     for (const itemOfArray of array) {
//         sum += itemOfArray;
//     }
//     return sum / array.length;
// }

// let result = arrAverage([1, 2, 3, 4, 5, 12]);
// console.log(result);

// console.log('***********************');

// const arrAverage1 = (array) => {
//     if (array.length === 0)
//         return 0;

//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//         //console.log(array[i]);
//     }
//     return sum / array.length;
// };

// let result1 = arrAverage1([1, 2, 3, 4, 5, 12]);
// console.log(result1);


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає
//масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let arrOfObjects = [{
//         name: 'Dima',
//         age: 13
//     },
//     {
//         model: 'Camry',
//         year: 2020
//     }
// ];

// const findKeys = (array) => {
//     let result = [];
//     for (const object of array) {
//         for (const key in object)
//             result.push(key);
//     }
//     return result;
// }

// console.log(findKeys(arrOfObjects));

// console.log('*******************************');

// 10) Створити функцію яка приймає масив будь яких объектів, т
//а повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let arrOfObjects1 = [{
//         name: 'Dima',
//         age: 13
//     },
//     {
//         model: 'Camry',
//         year: 2020
//     }
// ];

// const findKeys1 = (array) => {
//     let result1 = [];
//     for (const object of array) {
//         for (const key in object)
//             result1.push(object[key]);
//     }
//     return result1;
// }

// console.log(findKeys1(arrOfObjects1));

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// =========================
// =========================

// let arr = [1, 2, 3, 4, 5, 5, 4, 3, 1, 2, 11];

// function f(x) {
//     return x.reduce((acc, cur) => acc ^ cur);
// }

// console.log(f(arr));

// let arr = [1, 2, 3, 4, 5, 5, 4, 3, 1, 2, 11];

// function f(x) {
//     let result = [];

//     for (let i = 0; i < x.length; i++) {
//         let count = 0;


//         for (let j = 0; j < x.length; j++) {
//             if (x[i] === x[j]) {
//                 count++;
//             }

//         }
//         if (count % 2 !== 0) result.push(x[i]);
//     }
//     return  result.join('');
// }


// console.log(f([1,1,2,2,3]));

// console.log('********************************');

// let arr2 = [1,2,3,4,5,6,7,8];

// function f1(x) {
//     let a =  x.filter(el => el % 2 === 0);
//     let b =  x.filter(el => el % 2 !== 0);

//     return b;
// }

// console.log(f1(arr2));

// =========================
// =========================


// - створити функцію яка приймає будь-яку кількість чисел,
// повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function num(x) {

//     let y = x.sort((q,w) => w - q)
//     let a = y[0]
//     let b = y[x.length-1]
//     console.log(a);
//     return b;
// }

// console.log(num([12,1,2,34,4,5]));

// function f1(x) {

//     let res = 5;
//     let min =5;

//     for (let i = 0; i < x.length; i++) {
//         if (x[i] > res) {
//             res = x[i];
//             console.log(res, 'res');
//         }

//         if (min > x[i]) {
//             min = x[i];
//             console.log(min, '***');
//         }

//     }
//     console.log(min, 'min');
//     return res;
// }

// console.log(f1([5,77,3, 55, 7, 6666666, 600, 1, 0]));


// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Щоб я міг сам вибрати повернути мені масив ключів чи масив значень.

// let arr1 = [{
//     name: 'Dima',
//     age: 13
// },
// {
//     model: 'Camry',
//     year: 2020
// }
// ];


// function f(x, y) {
//     switch (y) {
//         case 'key':
//             let result = [];
//             for (const object of x) {
//                 for (const key in object)
//                     result.push(key);
//             }
//             return result;
//             break;

//         case 'value':
//             let result1 = [];
//             for (const object of x) {
//                 for (const key in object)
//                     result1.push(object[key]);
//             }
//             return result1;
//             break;

//             default: return;
//     }
// }

// console.log(f(arr1, 'value'));


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться
//в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// function f(x, y) {
//     const a = x[y]
//     const b = x[y + 1]
//     x[y] = b;
//     x[y + 1] = a;
//     // for (let i = y; i < y + 1; i++) {
//     //     x[y] = x[y + 1];
//     //     x[y + 1] = x[y];

//     // }
//     return x;
// }

// console.log(f([9, 8, 0, 4], 1));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function f(x) {
//     return x.filter(el => el).concat(x.filter(el => el === 0))
// }


// const f = (x) => [...x.filter(el => el), ...x.filter(el => el === 0)]


// console.log(f([0,1,2, undefined,3,4, false, null, NaN, true]));


//
//     TASK from VityaTasks
//
//
//  Cоздать функцию которая принимает число и возвращает  текст как в примере:
//  3275  —>  "3000 + 200 + 70 +5"
//
//



// Створити функцію яка буде переносити елементи зі значенням 0 у кінець
// масиву, зберігаючи при цьому порядок не нульових значень.
// Довжина масиву від 2 до 100
//

// const array = [0, 2, 6, 9, 18, 6, 0, 0, 8, 4, 94];
//const arrayExit = [2, 6, 9, 18, 6, 8, 4, 94, 0, 0, 0];



// const zeros = [];
// const result = [];

// for (const number of array) {
//     if (number === 0) {
//         zeros.push(number)
//     } else {
//         result.push(number)
//     }
// }

// console.log(result);
// console.log(zeros);
// result.push(...zeros);
// console.log(result);


// console.log('***************************');
// console.log('***************************');


// const zeros1 = [];
// const result1 = [];

// for (const number of array) {
//     console.log(number);
//     console.log('---------------------');
//     if (number === 0) {
//         zeros1.push(number)
//     } else {
//         result1.push(number)
//     }
// }

// console.log(result1);
// console.log(zeros1);

// for (const zero of zeros1) {
//     result1.push(zero);
// }

// console.log(result1);


// console.log('***************************************');
// console.log('***************************************');


// function zerosToEnd(arr = []) {
//     if (!Array.isArray(arr)) {
//         console.log('This is not array');
//         return;
//     }
//     let zerosCount = 0;
//     const result1 = [];

//     for (const number of arr) {

//         if (number === 0) {
//             zerosCount++;
//         } else {
//             result1.push(number);
//         }
//     }

//     console.log(zerosCount);

//     for (let i = 0; i < zerosCount; i++) {
//         result1.push(0);

//     }

//     console.log(result1);

// }

// const array1 = [0, 2, 6, 9, 18, 6, 0, 0, 8, 4, 94];
// zerosToEnd(array1);

// console.log('***************************************');
// console.log('***************************************');


// =================================
// Тут потрібно гуглити. Ми цього не розглядали.
// Для тих, хто не боїться пошукової строки

// // - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// // Написати функцію, яка приймає будь яке не валідне імя,
// //та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'

// function f(x) {
//     return x.split(' ')
//     .filter(el => el !== '').join(' ');
// }

// console.log(n1);
// console.log(f(n1));
// console.log(f(n2));
// console.log(f(n3));


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

///                                          L E S S O N    4                                        ///

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

//////                           F U N C T I O N      (continuation/continuance)                                          //////


///
// time code   0:04:00  RETURN
// time code  13:40 lexical environment
// time code  19:45 hoisting (всплиття)
// time code  39:45 Early Return Pattern
// time code  53:45 Expression function declaration
// time code  1:11:10 NO Arguments in expression function
// time code  1:22 continue break



// !!!  return, що у блоці виконання функції, приймає і повертає щось одне.
// !!!  Якщо необхідно повернути більше лдного значення, необхідно
// !!!  повернути return об'єкта, масива або - масива об'єктів



function buyCar(carPrice) {
    let money = 5000;

    if (carPrice < money) {
        console.log('Вітаємо з покупкою');
        money = money - carPrice;
        console.log('У вас залишилось', money);

        return money;    // повертає щось одне
    } else {
        console.log('У вас не вистачає грошей');
        console.log(carPrice - money, 'не вистачає');
    }
}

const change = buyCar(4800);
const решта = buyCar(2000);


console.log(change, 'change');
console.log(решта, 'решта');



// function buyCar(carPrice) {
//     let money = 5000;

//     if (carPrice < money) {
//         console.log('Вітаємо з покупкою');
//         money = money - carPrice;
//         console.log('У вас залишилось', money);

//         return {
//             money,
//             car: true
//         } // якщо необхідно повернути більше ОДНОГО значення
//     } else {
//         console.log('У вас не вистачає грошей');
//         console.log(carPrice - money, 'не вистачає');
//     }
// }

// const change = buyCar(4800);

// console.log(change);




//**********************************************************************//
//**********************************************************************//
//**********************************************************************//


// {
//     let a = 20;
//     const b = 20;
//     var c = 20;

//     if (a > 30) {

//     }
// }

// //console.log(x);  // Uncaught ReferenceError:
// //  Cannot access 'x' before initialization
// let x = 10;
// console.log(x);


// // var має hoisting (всплиття), let i const - не має hoisting
// console.log(z); // undefined
// var z = 45;
// console.log(z); // 45

// console.log('*******************************');


// _helloLoger(); // всі функції ВСПЛИВАЮТЬ (є HOISTING) !!!
// // тобто, вони можуть викликатись до того, як вони оголошені.

// /**
//  *  _helloLoger - private function
//  *
//  */

// function _helloLoger(price = 0) {
//     console.log('TEST TEST TEST');
// }



// const dollarsAfterChange = dollarChanger(29, 5000);
// console.log(dollarsAfterChange);

// function dollarChanger(kurs, uah) {
//     console.log('welcome to E-market');
//     console.log('Ви принесли', uah);

//     const dollars = uah / kurs;
//     console.log('Ось ваші', dollars);

//     // console.log('Ось ваші', Math.floor(uah / kurs), '$');
//     return dollars;
// }


//**********************************************************************//
//**********************************************************************//

//   Early Return Pattern


// function buyCar(carPrice) {
//     let money = 5000;

//     if (carPrice > money) {
//         console.log('У вас не вистачає грошей');
//         console.log(carPrice - money, '$ не вистачає');

//         return;
//     }

//     console.log('Вітаємо з покупкою');
//     money = money - carPrice;
//     console.log('У вас залишилось', money, '$');

//     return money; // повертає щось одне

// }

// buyCar(3400);

// console.log('----------');

// let number = buyCar(3400);
// console.log(number);


//**********************************************************************//
//**********************************************************************//

// declaration();
// //expression();

// function declaration() {
//     console.log('function declaration');
// }

// const expression = () => {
//     console.log('NO HOISTING');
//     console.log('THIS Reference');
//     console.log('No ARGUMENTS');
//     console.log('SHORT RETURN');
//     console.log('function expression');
// };



// function sumator(a, b) {
//     return a + b;
// }

// let sumator1 = sumator(2, 2);
// console.log(sumator1);


// console.log('****************');



// const sumatorExp1 = (x, y) => {
//     return x + y;
// };

// const sumatorExp2 = (x, y) => x + y;

// let result1 = sumatorExp1(5, 5);
// let result2 = sumatorExp2(5, 5);

// console.log(result1);
// console.log(result2);


//   В function declaration Є ARGUMENTS

// function argLogger() {
//     //console.log(arguments);
//     // console.log('TEST');
//     console.log(arguments);     // псевдо масив
//     console.log('TEST');

//     for (const argument of arguments) {  //псевдо масив можна проітерувати
//         console.log(argument);          // for, for of, for in & while.
//     }

// console.log('-------------------------------');

//     // ARRAY FROM ARGUMENTS
//       let from1 = Array.from(arguments);    // 1й варіант
//     //              OR
//     // let from1 = new Array(...arguments);  // 2й варіант
//     //              OR
//     // let from1 = [...arguments];           // 3й варіант


//     from1.push('Hello Array');
//     from1.push('555');

//     return from1;
// }

// let newArray = argLogger(2, [], 6556, 44, false, 77677);

// console.log(newArray);

// console.log('*******************************8');

// //  В function expression НЕМАЄ ARGUMENTS

// const func = () => {
//     console.log(arguments);  // Uncaught ReferenceError:
//     // arguments is not defined at func
// };

// func(5443, 56, 1000);


// CONTINUE (зупиняє цикл, пропускає одну ітерацію і йде далі);
//  BREAK  (вбиває цикл);


// let names = ['Maks', 'Nata', 'Vova', 'Karina', 'Nik', 'Inessa'];



// for (const name of names) {
// if (name.length >= 5) {
//     continue;
// }

//     console.log(name);   //  Maks, Nata,  Vova, Nik
// }



// for (const name of names) {
// if (name.length >= 5) {
//     break;
// }

//     console.log(name);   // Maks, Nata, Vova
// }