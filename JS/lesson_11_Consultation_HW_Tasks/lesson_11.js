// Посортувати по алфавіту УКРАЇНСЬКІ імена
// let words = [
//     'АННА',
//     'СОФІЯ',
//     'МАРІЯ',
//     'ВЕРОНІКА',
//     'ВІКТОРІЯ',
//     'АНАСТАСІЯ',
//     'ЯНА',
//     'ЄВА',
//     'МАРТА',
//     'ЗЛАТА',
//     'СОЛОМІЯ',
//     'МЕЛАНІЯ',
//     'ДАРИНА',
//     'МІЛАНА',
//     'АНГЕЛІНА'
// ];

// words.sort((a, b) => {
// return a[0].localeCompare(b[0])
// })

// console.log(words);



//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
///                                                           ///
///                       CALL BACK                           ///
///                                                           ///

// function orderTour(money, callback) {

//     setTimeout(() => {
//         if (money > 500) {
//             return callback(null, {
//                 country: 'Єгипет',
//                 change: money - 500
//             })
//         }
//         callback('Нема грошей')
//     }, 1000)
// }

// function prepareTour() {
//     setTimeout(() => {
//         console.log('Давай, збирайся');
//     }, 500)
// }




// BASIC USAGE

// orderTour(2000, (err, data) => {

//     console.log('-------result-------');
//     console.log('err', err);
//     console.log('data', data);
//     console.log('-------result-------');

//     console.log('DONE')
// })


// orderTour(600, (err, data) => {
//     if (err) {
//         console.error('Errored with:', err);
//     } else {
//         console.log('Ура, ми летимо в ', data.country);
//         prepareTour((err, data) => {
//             if (err) {
//                 console.log('Errored with:', err);
//             } else {
//                 goToKyuiv((err, data) => {
//                     console.log(data);
//                 });
//             }
//         })
//     }
// });

// function prepareTour(cb) {
//     setTimeout(() => {
//         console.log('prepare');
//         cb(null, 'Давай збирайся')
//     }, 500)
// }

// function goToKyuiv() {
//     setTimeout(() => {
//         console.log('GO TO KYIV');
//     }, 200)
// }



////////////////////////////////////////////////////////////////////////
///                            Map Set                               ///

// const someSet = new Set();

// someSet.add('Monday');
// someSet.add('Friday');
// someSet.add('Friday');

// console.log(someSet);

///////////////////////////////////////////////////////////

// let words1 = [
//     'АННА',
//     'СОФІЯ',
//     'МАРІЯ',
//     'ВЕРОНІКА',
//     'ВІКТОРІЯ',
//     'АНАСТАСІЯ',
//     'ЯНА',
//     'ЄВА',
//     'МАРТА',
//     'ЗЛАТА',
//     'СОЛОМІЯ',
//     'МЕЛАНІЯ',
//     'ДАРИНА',
//     'МІЛАНА',
//     'АНГЕЛІНА',
//     'ЗЛАТА',
//     'ЗЛАТА',
//     'ЗЛАТА'
// ];

// const someSet1 = new Set(words1)

// let a = someSet1.has('АНАСТАСІЯ')  // true
// let b = someSet1.has('АНІТА')      // false

// console.log(a);
// console.log(b);

// console.log(someSet1);

// console.log('*****************************************************');

// // -------------------------------------------------------

// const arrFromSet = [...someSet1]
// console.log(arrFromSet);

// arrFromSet.push('GaLLLLLA');
// console.log(arrFromSet)

// //    АБО

// const arrFromSet2 = Array.from(someSet1)
// console.log(arrFromSet2);

// arrFromSet2.push('GaLLLLLA');
// console.log(arrFromSet2)


// console.log('*****************************************************');
// console.log('*****************************************************');
// console.log('*****************************************************');


// const x = '2863.83'

// const xNumbr = +x
// const xNumbr2 = Number(x);

// console.log(xNumbr);
// console.log(xNumbr2);

// const parseIntR = parseInt(x);
// const parseFloatR = parseFloat(x);

// console.log(parseIntR);
// console.log(parseFloatR);
// console.log(x);


// const numb = 3.364455

// let s = numb.toFixed(2)
// let s1 = +numb.toFixed(2)
// console.log(s);
// console.log(s1);

// console.log('*****************************************************');
// console.log('*****************************************************');


/////////////////////////////////////////////////////////////////////
/////////                    M A P                         //////////


// const map = new Map();

// const age29 = {age: 29}


// map.set('name', 'Viktor')
// map.set(age29, ['Natasha', 'Dima'])
// map.set(true, 'HELLO TRUE')
// map.set(false, true)


// let name1 = map.get('name')
// let natashaDima = map.get(age29)
// let b = map.get(true)
// let b1 = map.get(false)

// console.log(name1);
// console.log(natashaDima);
// console.log(b);  // HELLO TRUE
// console.log(b1);  // true

// console.log(map);

// console.log('***************************************************');

// ///////////////////////////////////////////////////////////////////////
// //       obtional chaining
// //

// const obj = {
//     user: {
//         name: 'Dima',
//         wife: {
//             age: 33
//         }
//     }
// }


// console.log(obj?.user?.car?.speed);

// console.log(obj && obj.user && obj.user.car && obj.user.car.speed);



//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////                       H O M E W O R K                          /////
//

//
// НАПИСАТИ  АНАГРАМУ

// наприклад:
//
// let word1 = 'ivan'
// let word2 = 'vain'
// // видасть  true

// let newWord = 'Victor'
// let newWord1 = 'Rocivz'
// // видасть false

//            RESOLVE 1

// function  checkAnagram (arr) {
//      if(!arr || arr.length <= 1) return false;

//      console.log(arr);
//      console.log(arr.length);

//      let word1= arr[0].toUpperCase().split('').sort().join('');

//      for (let i = 0; i < arr.length; i++) {

//          if(arr[i].toUpperCase().split('').sort().join('')!= word1) {
//             return false
//          }
//      }
//      return true
// }

// console.log(checkAnagram(['Ivana', 'AVain', 'niava', 'AVANI']));
// console.log('------------------');
// console.log(checkAnagram(['ViCtor', 'RocivZ']));
// console.log('------------------');
// console.log(checkAnagram(['Vova', 'oVVa', 'vVoa']));


//          RESOLVE 2
//

// function anagram(name1, name2) {
//     let arr1 = name1.toLowerCase().split('').sort();
//     let arr2 = name2.toLowerCase().split('').sort();
//     console.log(arr1.length);
//     console.log(arr2.length);
//     console.log('---------------------');
//     if (arr1.length !== arr2.length) {
//         console.log('Не анаграмма');
//         return;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         console.log(arr1[i]);
//         console.log(arr2[i]);
//         console.log('---------------------');

//         if (arr1[i] !== arr2[i]) {
//             console.log('NO Анаграмма');
//             return;
//         }
//     }
//     console.log('Анаграмма');
// }

// anagram('Vikaz', 'azKiV')


//        RESOLVE 3

// function isAnagram(word1 = '', word2 = '') {
//     console.log(word1);
//     console.log(word2);
//     console.log('*******************');

//     word1 = word1.toLowerCase();
//     word2 = word2.toLowerCase();

//     lettersObject = {};

//     if (word1.length !== word2.length) {
//         console.log(false);
//         return;
//     }

//     for (const letter of word1) {

//         if (letter in lettersObject) {
//             lettersObject[letter]++;
//         } else {
//             lettersObject[letter] = 1;
//         }
//         console.log(letter);
//         console.log(lettersObject[letter]);

//     }
//     console.log("Ім'я. Заповнений об'єкт: ", lettersObject);
//     console.log('-----------------------------------');

//     for (const letter of word2) {

//         console.log('Буква, з якою наразі працюю:', letter);
//         console.log('Кількість букв:', lettersObject[letter]);

//         if (lettersObject[letter] > 0) {
//             console.log('Букву', letter, 'знайдено');
//             lettersObject[letter]--;
//         } else {
//             console.log('Буква',letter, 'зайва' );
//             console.log(false);
//         }
//         console.log('----------------------------------');
//     }


// }

// isAnagram('Kater yna', 'KYtaar en');





///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////            C O N S U L T A T I O N - Lesson 11           ////

// //                          TASK 1
// // Необхідно реалізувати користувачів за тим, на який курс вони записанію

// const list = [{
//         name: 'Vika',
//         course: 'REACT'
//     },
//     {
//         name: 'Nastya',
//         course: 'JS'
//     },
//     {
//         name: 'Maks',
//         course: 'REACT'
//     },
//     {
//         name: 'Tamara',
//         course: 'JAVA'
//     },
//     {
//         name: 'Volodymyr',
//         course: 'JS'
//     },
//     {
//         name: 'Maks',
//         course: 'JS'
//     },
//     {
//         name: 'Alina',
//         course: 'REACT'
//     },
//     {
//         name: 'Olena',
//         course: 'JS'
//     },
//     {
//         name: 'HP',
//         course: 'KH'
//     },
//     {
//         name: 'Dima',
//         course: 'JAVA'
//     },
// ];

// console.log(list);

// //               RESOLVE 1

// const newList = list.reduce((acc, user) => {

//     if (!acc[user.course]) {
//         acc[user.course] = []
//     }
//     acc[user.course].push(user)

//     return acc

// }, {})

// console.log(newList);


// //                RESOLVE 2

// console.log('----------------------------');

// const reduce1 = list.reduce((acc, student) => {
//     const {
//         name,
//         course
//     } = student;

//     // console.log(acc);
//     // console.log(course);
//     // console.log(acc[course]);
//     // console.log('----------------');


//     if (acc[course]) {
//         acc[course].push(name);
//     } else {
//         acc[course] = [name];
//     }

//     return acc;

// }, {})

// console.log(reduce1);


// //              RESOLVE 3

// console.log('----------------------------');

// const result = list.reduce((acc, student) => {

//     const {
//         name,
//         course
//     } = student;

//     console.log(acc);
//     console.log(course);
//     console.log(course in acc);
//     console.log('----------------------');


//     if (!(course in acc)) {
//         acc[course] = [];
//     }

//     acc[course].push(name);

//     return acc;

// }, {})

// console.log(result);



// // //              RESOLVE 4

// // // map
// // // Array without mutation

// // console.log('----------------------------');
// // let newList1 = JSON.parse(JSON.stringify(list)).map(user => user.age = Math.round(Math.random() * 40));
// // console.log(newList1);

// // const a = list.map(user => ({...user, age: Math.round(Math.random() * 40)}));
// // console.log(a);
// // //
// // // mutation

// // console.log('----------------------------');
// // const b = list.map(user => user.age = Math.round(Math.random() * 40));
// // console.log(b);

// // // filter

// // console.log(list.filter(user => user.course === 'JS'));

//               FINISHED TASK 1


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// отримання з об'єкта в масивному cтилі інформації по ключу

// let user ={
//     name: 'Viktor',
//     age: 33,
//     wife: false,
//     car: 'Lacetti'
// }

// // console.log(user.name);     //  Viktor
// // console.log(user['name']);  //  Viktor

// function getValueByKey(key) {
//     console.log(key);
//     console.log(user[key]);
//     console.log('-------------------');
// }

// getValueByKey('name')
// getValueByKey('car')
// getValueByKey('wife')

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


//                          TASK 2
// // Написати анаграму

// let word1 = 'ivan'
// let word2 = 'vain'
// // видасть  true

// let newWord = 'Victor'
// let newWord1 = 'Rocivz'
// // видасть false

//                 RESOLVE 1

// function  checkAnagram (arr) {
//      if(!arr || arr.length <= 1) return false;

//      let word1= arr[0].toUpperCase().split('').sort().join('');

//      for (let i = 0; i < arr.length; i++) {

//          if(arr[i].toUpperCase().split('').sort().join('')!= word1) {
//             return false
//          }
//      }
//      return true
// }


// console.log(checkAnagram(['Ivana', 'AVain', 'niava', 'AVANI']));
// console.log(checkAnagram(['ViCtor', 'RocivZ']));


//                RESOLVE 2

// function isAnagram(word1 = '', word2 = '') {
//     console.log(word1);
//     console.log(word2);
//     console.log('*******************');

//     word1 = word1.toLowerCase();
//     word2 = word2.toLowerCase();

//     lettersObject = {};

//     if (word1.length !== word2.length) {
//         console.log(false);
//         return;
//     }

//     for (const letter of word1) {

//         if (letter in lettersObject) {
//             lettersObject[letter]++;
//         } else {
//             lettersObject[letter] = 1;
//         }
//         console.log(letter);
//         console.log(lettersObject[letter]);

//     }
//     console.log("Ім'я. Заповнений об'єкт: ", lettersObject);
//     console.log('-----------------------------------');

//     for (const letter of word2) {

//         console.log('Буква, з якою наразі працюю:', letter);
//         console.log('Кількість букв:', lettersObject[letter]);

//         if (lettersObject[letter] > 0) {
//             console.log('Букву', letter, 'знайдено');
//             lettersObject[letter]--;
//         } else {
//             console.log('Буква',letter, 'зайва' );
//             console.log(false);
//         }
//         console.log('----------------------------------');
//     }


// }

// isAnagram('Kater yna', 'KYtaar en');

//                RESOLVE 2.1

// function isAnagram(word1 = '', word2 = '') {

//     word1 = word1.toLowerCase();
//     word2 = word2.toLowerCase();

//     lettersObject = {};

//     if (word1.length !== word2.length) {
//         console.log(false);
//         return;
//     }

//     for (const letter of word1) {
//         if (letter in lettersObject) {
//             lettersObject[letter]++;
//         } else {
//             lettersObject[letter] = 1;
//         }
//     }

//     console.table(lettersObject);

//     for (const letter of word2) {
//         if (!lettersObject[letter]) {
//             return false;
//         }
//         lettersObject[letter]--;
//     }
//     return true;
// }

// console.log(isAnagram('Kateryna', 'Kytaaren'));


//          RESOLVE 3
//

// function anagram(name1, name2) {
//     let arr1 = name1.toLowerCase().split('').sort();
//     let arr2 = name2.toLowerCase().split('').sort();
//     console.log(arr1.length);
//     console.log(arr2.length);
//     console.log('---------------------');
//     if (arr1.length !== arr2.length) {
//         console.log('Не анаграмма');
//         return;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         console.log(arr1[i]);
//         console.log(arr2[i]);
//         console.log('---------------------');

//         if (arr1[i] !== arr2[i]) {
//             console.log('NO Анаграмма');
//             return;
//         }
//     }
//     console.log('Анаграмма');
// }

// anagram('Vikaz', 'azKiV')


//          RESOLVE 4

// function newAnagram(word1 = '', word2 = '') {
//     const normalized1 = word1
//         .toLowerCase()
//         .split('')
//         .sort()
//         .join('')

//     const normalized2 = word2
//         .toLowerCase()
//         .split('')
//         .sort()
//         .join('')

//     return normalized1 === normalized2
// }

// console.time('My')
// console.log(newAnagram('Vova', 'avOv'));
// console.timeEnd('My')











// Відтворити роботу годинника, відрахувавши 2 хвилини
//(2 цикли! 1й - хвилини, 2й - секунди)
// Відтворити роботу годинника, відрахувавши  2 години 20 хвилини
//(3 цикли! 1й - години, 2й - хвилини, 3й - секунди)















// __________________________________________________________
// TASK *

// Дано відсортований масив (мінімум 10 елементів)
// Необхідно модифікувати масив так, щоб дублікати зустрічалися
// не більше 2х разів підряд.

// Example:
// [1, 1, 1, 2, 3, 3, 3, 3] -> [ 1, 1, 2, 3, 3, 1, 3, 3]

// [0, 0, 1, 1, 1, 2, 2] -> [0, 0, 1, 1, 2, 2, 1]

//   RESOLVE

// const arr = [1, 1, 1, 2, 3, 3, 3, 3, 3, 3];

// for (let i = 0; i < arr.length; i++) {
//     const firstValue = arr[i];
//     const secondValue = arr[i + 1];
//     const thirdValue = arr[i + 2];

//     const isDublicate = (firstValue === secondValue) &&
//         (secondValue === thirdValue);

//     if (isDublicate) {
//         const [deletedNumber] = arr.splice(i, 1);
//         arr.push(deletedNumber);
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     const firstValue = arr[i];
//     const secondValue = arr[i + 1];
//     const thirdValue = arr[i + 2];

//     const isDublicate = (firstValue === secondValue) &&
//         (secondValue === thirdValue);

//     if (isDublicate) {
//         const [deletedNumber] = arr.splice(i, 1);
//         arr.unshift(deletedNumber);
//         i--;
//     }
// }

// console.log(arr);


//   TASK
//   Групування користувачів, хто одружений і більше 30 років
//  треба попасти в новий масив, де вони матимуть  дитину від 1 до 10 років
//  const usersWithAddress = [{
//         id: 9,
//         name: 'vasya',
//         age: 31,
//         isMarried: true,
//         address: {
//             city: 'Kyiv',
//             street: 'Gongadze',
//             number: 16
//         }
//     },
//     {
//         id: 2,
//         name: 'petya',
//         age: 30,
//         isMarried: true,
//         address: {
//             city: 'Rivne',
//             street: 'Zelena',
//             number: 1
//         }
//     },
//     {
//         id: 4,
//         name: 'kolya',
//         age: 29,
//         isMarried: true,
//         address: {
//             city: 'Lviv',
//             street: 'Pasichna',
//             number: 121
//         }
//     }, {
//         id: 3,
//         name: 'olya',
//         age: 28,
//         isMarried: false,
//         address: {
//             city: 'Rivne',
//             street: 'Shevchenko',
//             number: 90
//         }
//     }, {
//         id: 8,
//         name: 'max',
//         age: 30,
//         isMarried: true,
//         address: {
//             city: 'Lviv',
//             street: 'Kriva Lipa',
//             number: 115
//         }
//     }, {
//         id: 6,
//         name: 'anya',
//         age: 31,
//         isMarried: false,
//         address: {
//             city: 'Lviv',
//             street: 'Shevchenko',
//             number: 2
//         }
//     }, {
//         id: 10,
//         name: 'oleg',
//         age: 28,
//         isMarried: false,
//         address: {
//             city: 'Kyiv',
//             street: 'Centralna',
//             number: 22
//         }
//     }, {
//         id: 5,
//         name: 'andrey',
//         age: 29,
//         isMarried: true,
//         address: {
//             city: 'Lviv',
//             street: 'Gorodotska',
//             number: 43
//         }
//     },
//     {
//         id: 1,
//         name: 'masha',
//         age: 32,
//         isMarried: true,
//         address: {
//             city: 'Kyiv',
//             street: 'Peremogi',
//             number: 12
//         }
//     }
// ];

// usersWithAddress.reduce((acc, user) => {
//     if (user.isMarried && user.age >= 30) {
//         const randomAge = Math.random() * (11 - 1) + 1;
//         user.childAge = Math.round(randomAge);
//     }
//     return;
// }, 0);


// console.log(usersWithAddress);
// ____________________________________________________________

// Cоздать функцию которая принимает число и возвращает  текст как
// в примере:
// 3275  —>  "3000 + 200 + 70 +5"

// ____________________________________________________________

// Дан массив целых чисел, найдите тот, который встречается нечетное
// количество раз.Всегда будет только одно целое число, которое встречается
//  нечетное количество раз
// [1,2,3,4,5,2,4,1,3] -> 5

// _____________________________________________________________

// Знайти анаграму.
// Перевірити чи слово має в собі такі самі літери як і поеперднє слово.

// ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true

// _______________________________________________________________

// Точная степень двойки
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// ______________________________________________________________

// Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки,
// списки, массивы ну и циклы, разумеется.
// Рекурсія)

// ______________________________________________________________

// Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, я
// вляется ли это слово палиндромом. Выведите YES или NO.
// При решении этой задачи нельзя пользоваться циклами, в решениях
// на питоне нельзя использовать срезы с шагом, отличным от 1.

// _______________________________________________________________

// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.

// 2176491947586100 -> 3

// _________________________________________________________________

// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] ->
// [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// flat використовувати заборонено.

// ___________________________________________________________________

// Знайти набільший елемент в масиві за допомогою reduce
// [1,6,9,0,17,88,4,7] -> 88

// const list = [19, 6, 9, 122, 17, 88, 4, 7];


// //     Resolve 1 with REduce()

// function max(list) {
//     return list.reduce((acc, value) => acc > value ? acc : value);

// }

// function min(list) {
//     return list.reduce((acc, value) => acc < value ? acc : value);
// }

// console.log(max(list));
// console.log(min(list));

// console.log('*****************************');

// //   Resolve 2 with ForEach();

// function max1(list) {
//     let max = list[0];
//     list.forEach(function(element) {
//
//       if (element > max) max = element;
//     });
//     return max;
//   }
//
//   console.log(max1(list));



//   function min1(list) {
//     let min = list[0];
//     list.forEach(function(element) {

//       if (element < min) min = element;
//     });
//     return min;
//   }

//   console.log(min1(list));



// ____________________________________________________________________


// Отримати масив лише унікальних значень за допомогою reduce
// [1, 9, 0, 1, 5, 9, 1, 6] -> [1, 9, 0, 5, 6]

// ____________________________________________________________________
// Знайти найблільше число поліндром яке утворюється завдяки добутку
// двох простих пятизначних чисел.

// ____________________________________________________________________

// Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)