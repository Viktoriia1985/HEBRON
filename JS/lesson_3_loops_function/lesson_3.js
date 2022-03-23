//////////////////////////////////////////////////////////////////////////
///                      L E S S O N   3                               ///

// 00 : 02 - loop (continuation);
//     // itin  (for in)
//     // iter  (for of)
//     // itar  (for)
//
//  00:14:30 - 00:18:00
//           Object.keys()   and
// //       Object.values     and
// //        Object.entries
//
//  00:28:15 - JSON (Java Script Object Notation)
//
//



//////////////////////////////////////////////
///                 L O O P S  2

/////////////////////    FOR OF     //////////////              (1-5 minutes)

// let names = ['Maks', 'Vova', 'Nik', 'Igor'];
//
// names[99] = 'Vasyl';
//
// for (const name of names) {
//     console.log(name);
// }


////////////////////   FOR  IN     /////////////////             (5-14 minutes)
/// Єдиний цикл, що вміє ходити і по об'єктам, і по масивам!!!

// let names2 = ['Maks', 'Vova', 'Nik', 'Igor'];
//
// names2[99] = 'Vasyl';
//
// for (const name in names2) {
//    console.log(name);      // 0, 1, 2, 3, 99
// }
// console.log('*************************');

// const user = {
//     name: 'Vova',
//     age: 44,
//     car: true
// };
//
// for (const key in user) {
//     console.log(key);  // name, age, car
//     console.log(user[key]);  // Vova, 44, true
//     console.log('-----------------------------')
// }
//
// console.log(user["name"]); // Vova
// console.log(user["age"]);  // 44
// console.log(user["car"]);  // true

// console.log('*******************');

// let variable = 'name';
// let variable2 = 'age';
// let variable3 = 'car';

// console.log(user[variable]);
// console.log(user[variable2]);
// console.log(user[variable3]);


// user[variable] = 20;
// console.log(user[variable]);

///

// console.log('***************');
// const user1 = {
//       name: 'Vika',
//       age: 25,
//       car: true
//    };

//    for (const key in user1) {
//      console.log(key);
//      console.log(user1[key]);
//      console.log('***************');
//    }

// itin  (for in)
// iter  (for of)
// itar  (for)

//////////

/////////////   Object.keys() and
//               Object.values     and
//               Object.entries          ///// 14:30-18:00 minute


// const user = {
//    name: 'Vova',
//    age: 44,
//    car: true
// };
//
// let keys = (Object.keys(user));
// console.log(keys);
//
// let values = (Object.values(user));
// console.log(values);
//
// let entries = (Object.entries(user));
// console.log(entries);

////////////////////////////////

// const name2 = 'Vasyl';

// for (const nameElement of name2) {
//    console.log(nameElement);
// }

// if (Object.values(user).length) {
//    console.log('NOT EMPTY');
// }


//////////////////////           20:00  - 27:00            //////////////////
///////////////////          " TRUTHLY // FALSY  "          ////////////////

//           FALSY:
// *  false
// *   0
// *  -0
// *  ''
// *  null
// *  undefind
// *  NaN
//
//  All other values are considered TRUTHLY!


// const emptyStr = '';
//
// console.log(emptyStr);
// console.log(!!emptyStr);   // false
//
// console.log('________________________');
//
// const emptyStr1 = ' ';
//
// console.log(emptyStr1);
// console.log(!!emptyStr1);  // true

// console.log('________________________');

// const emptyStr2 = 10;
//
// if (emptyStr2) {
//    console.log('TRUE');  // true
// } else {
//    console.log('FALSE');
// }


////////             JSON       (28:15)          //
//                Java Script Object Notation
// призваний для спрощенного спілкування елементів між собою

// let obj = {
//    name: 'Vova',
//    age: 20,
//    payment: NaN,
//    girl: undefined,
//    job: null
// };
//
// console.log(obj);
//
// const jsonObj = JSON.stringify(obj);
//
// console.log(jsonObj);
// console.log(typeof jsonObj);
//
//
// const parsedObj = JSON.parse(jsonObj);
//
// console.log(parsedObj);
// console.log(typeof parsedObj);
//
// console.log(obj.age);
// console.log(parsedObj.age);
//
//
// const parsedObjNew = JSON.parse(JSON.stringify(obj));
// console.log(parsedObjNew);

// let arrOfObj = [{
//    name: 'Vova',
//    age: 20,
//    payment: NaN,
//    girl: undefined,
//    job: null
// }, {
//    name: 'Vasya',
//    age: 23,
//    payment: undefined,
//    girl: NaN,
//    job: null
// }];
//
//
// const parsedArrOfObj = JSON.parse(JSON.stringify(arrOfObj));
//
// console.log(parsedArrOfObj);

// ////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////// //

///           F U N C T I O N      (49:30 - to the end of lesson)  ///

// ////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////// //

// Функції - це просто поведінка чогось, яку можна перевикористовувати
// стільки раз, скільки необхідно


// function sendSMS(phoneUser = '+380', userName = 'user') {
//     userName = userName || 'user';
//     console.log('Hello', phoneUser, userName, '.Ваш запит в обробці');
// }

// sendSMS('+380674308888', 'Vova');
// sendSMS('+380668008080', 'Olga');
// sendSMS('+380672000200');
// sendSMS('+38067', 'Olga');
// sendSMS();
//
// console.log('*****************************');


// function sendSMS2(userObject, carObject) {
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
// sendSMS2(user1, car2);
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

// function processOrder(orderInfo = {}) {
//     console.log(orderInfo);
//
//     if (!orderInfo.phone || !orderInfo.items.length) {
//         console.log('Order is not completed');
//     } else {
//         sendSMS(orderInfo.phone, orderInfo.name);
//     }
// }
//
// const order1 = {
//     phone: '+3806644466600',
//     name: 'Kate',
//     items: ['Headphones', 'Beer', 'TicTac', 'Bread'],
//     address: ''
// };
//
// const order2 = {
//     phone: '+38066',
//     name: '',
//     items: ['Headphones', 'Beer'],
//     address: ''
// };
//
// processOrder(order1);
// processOrder(order2);


// let arr = [132, 76, 'true', -34, 333];
//
// for (const key in arr) {
//     console.log(key);  // індекс
//     console.log(arr[key]);  //значення
// }


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


// function showElementOfArray(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }

// showElementOfArray([10, 34, 'hello', undefined, true, -177, null, '100']);


// console.log('**********************');


// function showIndexOfArray(arr) {
//     for (const arrIndex in arr) {
//        console.log(arrIndex);
//     }
// }

// showIndexOfArray([10, 34, 'hello', true, undefined, null, 23]);


// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.


// function arrRandom(length, min, max) {

//     array = [];
//     for (let i = 0; i < length; i++) {

//         array.push(Math.floor(Math.random() * (max - min)) + min);
//         console.log(array[i]);
//     }
//     return array;
// }

// let newArray = arrRandom(5, -20, 10);
// console.log(newArray);


// console.log('****************************');


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// 5) створити функцію яка повертає найбільше число з масиву
// 6) створити функцію яка повертає найменьше число з масиву
// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// =========================

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// =================================
// Тут потрібно гуглити. Ми цього не розглядали.
// Для тих, хто не боїться пошукової строки

// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'






