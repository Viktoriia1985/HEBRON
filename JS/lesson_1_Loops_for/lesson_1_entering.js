
//                        L E S S O N   1

// let name = 'Victor';
// let age = 26;
// let hasWife = false;
//
// // console.log(name)
// //
// // name = 20;
// // console.log(name)
// //
// // name = false
// //
// // console.log(name)
// // alert(name)
// // document.write(name)
//
// // console.log(2 + 2);
// // console.log(2 - 2);
// // console.log(2 * 2);
// // console.log(2 / 2);
//
// // console.log(10 % 2)
//
// // console.log(
// //   (22 + 2) * (3 / 2)
// // )
//
// // > < >= <= == != === !==
//
// // console.log(2 > 3)
// // console.log(5 > 3)
//
// // console.log(2 == '2')
// // console.log(2 === '2')
//
// console.log('2' + 2)
// console.log('2' * 2)
// console.log('2' / 2)
// console.log('2' - 2)
// console.log('_________')
// console.log('2a' - 2)
// console.log('2a' / 2)
// console.log('2a' * 2)
//
// console.log(typeof NaN)
//
// // 'HELLO'= str
// // 2 = number
// // BigInt
// // true = boolean
//
// // undefined
// // null
//
// // Symbol
// // object
//
// let s = Symbol('ip');
// let sCopy = Symbol('ip');
//
// console.log(s === sCopy);
//
// let is_user_in_black_list = 'snake_case';
// let isUserInBlackList = 'camelCase';

//////////////////////////////////////////////////////////////////////////////////////


// let user = {
//     name: 'admin',
//     age: 19,
//     hasWife: false,
//     job: {
//         title: 'Senior',
//         payment: 9999999999
//     }
// }
//
// user.age = 22;
// user.car = true;
// user.job.team = {
//   name: 'Vova'
// }
//
// delete user.hasWife
// delete user.age
//
// console.log(user);
//
// let car = 'Yamaha';
//
// delete car;
//
// console.log(car);
//
// console.log(user.job.payment);
// console.log(user.job.company);

// if (user.age > 18) {
//   console.log('WELOCME')
// } else {
//   if (user.name === 'admin') {
//     console.log('WELOCME a')
//   } else {
//     console.log('Too youg')
//   }
// }

// if (user.age > 18) {
//   console.log('WELOCME')
// } else if (user.name === 'admin') {
//   console.log('WELOCME')
// } else {
//   console.log('Too youg')
// }

// || - OR
// && - AND

// const isAdultAdmin = user.age > 18 && user.name === 'admin';
// const hasWifeAndMoney = user.hasWife && user.job.payment > 6789876;
//
// if (isAdultAdmin || hasWifeAndMoney) {
//   console.log('WELOCME')
// } else {
//   console.log('Too youg')
// }

// const name = 'Ivan';
//
// switch (name) {
//     case "Karina":
//         console.log('Hello darling');
//         break;
//     case 'Bogdan':
//         console.log('YO man');
//         break;
//     case 'Anna':
//         console.log('Hey baby')
//         break;
//     default:
//         console.log('I dont know you')
// }

//                   H O M E W O R K   1


// 1.  Написати програму яка знаходить найбільше з двох чисел
// Функция parseInt преобразует строку в целое число

// const x = parseInt(prompt('number x'));
// const y = parseInt(prompt('number y'));
//
// if (x > y) {
//     console.log(x);
// } else {
//     console.log(y);
// }


// 2. Знаходить найбліьше з трьох чисел.

// const a = parseInt(prompt('number a'));
// const b = parseInt(prompt('number b'));
// const c = parseInt(prompt('number c'));
//
// if (a > b && a > c) {
//     if (b > c) {
//         console.log(c, b, a);
//     } else {
//         console.log (b, c, a);
//     }
// }
// if (b > a && b > c) {
//     if (a > c) {
//         console.log(c, a, b);
//     } else {
//         console.log (a, c, b);
//     }
// }
// if (c > a && c > b) {
//     if (a > b) {
//         console.log(b, a, c);
//     } else {
//         console.log (a, b, c);
//     }
// }


// 3. Перевірити чи рік є високосним.

// let year = +prompt('Write the number of the year');

// if (year % 4 == 0) {
//     console.log('Leap Year');
// } else {
//     console.log('NOT Leap Year');
// }


// 4. Ввести номер дня, а отримати день стрічкою.

// let day = prompt('write the day of the week');
//
// if (day === '1') {
//     console.log('Monday');
// } else if (day === '2') {
//     console.log('Tuesaaday');
// } else if (day === '3') {
//     console.log('Wednesday')
// } else if (day === '4') {
//     console.log('Thursday')
// } else if (day === '5') {
//     console.log('Friday')
// } else if (day === '6') {
//     console.log('Saturday')
// } else if (day === '7') {
//     console.log('Sunday')
// }


// 5. Ввести колір світлофіора.
//    Якщо колір зелений, тоді виводимо "йди".
//    Якщо жовтий - чекай.
//    Червоний стій.

// let color = prompt('write the color of traffic lights');
//
// if (color === 'green') {
//     console.log('Go!');
// } else if (color === 'yellow') {
//     console.log('Plese, wait');
// } else if (color === 'red') {
//     console.log('STOP!!!');
// }


// 5.1
//  Додати автомобіль до умови. Якщо автомобіль не зупиняється, то ми стоїмо.
// Якщо автомобіль зупинився, тоді перевіряємо сигнал світлофора.
//    Example:
//    Зелений, машина їде - стоїмо
//    Зелений, машина стоїть - йдемо
//    Чевоний машина їде - стоїмо
//    Червони, машни їде - стоїмо всеондл (бо ж червоний)


//  Всі данні можуть бути введені з клавіатури через prompt (Google it), або ж можна
//  прсото зробити змінну

//  Example: let color = 'green';

///////////////////             first                             ///////////////////////////


// let isCarComing = confirm('Is car coming?');
// let carStop = confirm('Does car stop?');
// let color = prompt('what is a color of traffic lights?');

// switch (color) {
//     case 'green':
//         switch (carStop) {
//             case true:
//                 console.log("йдемо");
//                 break;
//             case false:
//                 console.log("пагади немнога");
//                 break;
//         }
//         break;
//     case 'yellow':
//         console.log('WAIT');
//         break;
//     case 'red':
//         carStop ? console.log('стоїмо всеодно (бо ж червоний)') : console.log('Stop');
// }


////////////////////          second                       ///////////////////////////////////

// let isCar = confirm('Is car coming?');
// let color = prompt('what is a color of traffic lights?');

// if (isCar) {
//     if (confirm('Does car stop?')) {
//         switch (color) {
//             case 'green':
//                 console.log('G0');
//                 break;
//             case 'yellow':
//                 console.log('WAIT');
//                 break;
//             case 'red':
//                 console.log('стоїмо всеондл (бо ж червоний)');
//                 break;
//         }
//     } else {
//         console.log('Stop');
//     }

// } else {
//     switch (color) {
//         case 'green':
//             console.log('Go');
//             break;
//         case 'yellow':
//             console.log('WAIT');
//             break;
//         case 'red':
//             console.log('стоїмо всеондл (бо ж червоний)');
//             break;
//     }
// }
//

