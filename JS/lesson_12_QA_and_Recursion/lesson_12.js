//    TIME CODING
//  Методи функцій:   00 : 00  - 00: 17
//    - f.call
//    - f.apply
//    - f.bind
//  REDUCE()          00 : 17
//  RECURSION         00 : 43



// має можливість викликати одну і ту саму функцію з різними властивостями.
// Дозволяє змінювати контекст

/////////////////////////
/// .call(), .apply() ///
/////////////////////////


// const worker1 = {
//     name: 'Dima',
//     title: 'Junior',
//     payment: 200
// };

// const worker2 = {
//     name: 'Igor',
//     title: 'Middle',
//     payment: 1400
// };

// function changePayment(newTitle, newPayment) {
//     this.title = newTitle;
//     this.payment = newPayment;
// }


// changePayment.call(worker1, 'Middle',  808);
// console.log(worker1);   // {name: 'Dima', title: 'Middle', payment: 89569933}

// changePayment.apply(worker2, ['Senior', 2002])
// console.log(worker2);   // {name: 'Igor', title: 'Senior', payment: 10000000}



////////////////////
///    .bind()   ///
////////////////////

// const worker1 = {
//         name: 'Dima',
//         title: 'Junior',
//         payment: 200
//     };

//     const worker2 = {
//         name: 'Igor',
//         title: 'Middle',
//         payment: 1400
//     };

//     function changePayment(newTitle, newPayment) {
//         this.title = newTitle;
//         this.payment = newPayment;
//     }


// const changePayment1 = changePayment.bind(worker2, 'Senior', 100);

// changePayment1()

// console.log(worker1);   //   {name: 'Dima', title: 'Junior', payment: 200}
// console.log(worker2);   //   {name: 'Igor', title: 'Senior', payment: 100}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

///////////////////////         REDUCE()          ////////////////////////////


// const body = {
//     msg1: '',
//     pic1: null,
//     msg2: 'Hello, we are here',
//     pic2: 'https://example.com/image.png'
// };

// const body_keys = Object.keys(body);

// const lang_fields = body_keys.reduce((acc, curr) => {

//     if (curr.startsWith('msg') && body[curr]) {
//         acc.msg.push(curr);
//     }

//     if (curr.startsWith('pic') && body[curr]) {
//         acc.pic.push(curr);
//     }

//     return acc;
// }, {
//     msg: [],
//     pic: [],
// });

// console.log(lang_fields);


///////////////////////////////////////////////////////////////

// const media = [
//   {
//     mediaContentType: 'image/png',
//     mediaUrl: 'http://image1.png'
//   },
//   {
//     mediaContentType: 'application/pdf',
//     mediaUrl: 'http://file1.pdf'
//   },
//   {
//     mediaContentType: 'image/jpg',
//     mediaUrl: 'http://image2.jpg'
//   },
//   {
//     mediaContentType: 'multipart/mixed',
//     mediaUrl: 'http://image1.mix'
//   },
// ];


// const reduce = media.reduce((acc, mediaData) => {
//   if (mediaData.mediaContentType.includes('image')) {
//     acc.push({
//       type: 'image',
//       payload: { url: mediaData.mediaUrl },
//     });
//   } else if (mediaData.mediaContentType.includes('application')) {
//     acc.push({
//       type: 'file',
//       payload: { url: mediaData.mediaUrl },
//     });
//   }

//   return acc;
// }, []);

// console.log(reduce);

// console.log(')____________________________________---)')


// const map = media.map(mediaData => {
//   if (mediaData.mediaContentType.includes('image')) {
//     return {
//       type: 'image',
//       payload: { url: mediaData.mediaUrl },
//     };
//   }

//   if (mediaData.mediaContentType.includes('application')) {
//     return {
//       type: 'file',
//       payload: { url: mediaData.mediaUrl },
//     };
//   }
// });

// console.log(map);

//////////////////////////////////////////////////////////////////////////

//       RECURSION


/////////////////////////////////////////////////////////////////////////////

/////////   HOME WORK


// let arr = [100, 200, 300, 400, 500];

// function recursator(arrToIterate, i = 0) {
//   console.log('HELLO RECURSION');
//   console.log(i);

//   if (i >= arrToIterate.length) {
//     return;
//   }

//   console.log(arrToIterate[i])

//   recursator(arrToIterate, ++i);
// }

// recursator(arr);

////////////////////////////////////////////////////

// Знайти кінцеві значення

// let superDeepObj1 = {
//     one: {
//       two: {
//         three: {
//           four: {
//             five: {
//               arr: [],
//               six: 6
//             },
//             hello: 'world',
//             arr: []
//           }
//         }
//       }
//     }
//   };

//   let superDeepObj2 = {
//     one: {
//       two: {
//         three: {
//           four: 10,
//           fourq: []
//         }
//       }
//     },
//     oqne: {
//       two: {
//         three: {
//           four: 10,
//           fourq: []
//         }
//       }
//     }
//   };

//   findDeepOfObj(superDeepObj1);
//   console.log('===============================');
//   findDeepOfObj(superDeepObj2);

//   function findDeepOfObj(obj) {
//     getProp(obj);

//     function getProp(obj) {
//       for (const value in obj) {
//         if (typeof (obj[value]) === 'object' && !Array.isArray(obj[value]) ) {
//           getProp(obj[value]);
//           continue;
//         }
//         console.log('Finale value: ', obj[value]);
//       }
//     }
// }

// console.log('-----------------------------------------------');
// console.log('-----------------------------------------------');

//   Знайти максимальну кількість вложенностей
//
//          RESOLVE 1  (вкладенність)


// let superDeepObj1 = {
//     one: {
//         two: {
//             three: {
//                 four: {
//                     five: {
//                         arr: [],
//                         six: 6
//                     },
//                     hello: 'world',
//                     arr: []
//                 }
//             }
//         }
//     }
// };

// let superDeepObj2 = {
//     one: {
//         two: {
//             three: {
//                 four: 10
//             }
//         }
//     }
// };

// function depth(obj) {
//     let maxdepth = 0;
//     if (typeof obj == 'object') // object or array
//         for (const key in obj) {

//             let dpth = depth(obj[key]);

//             if (dpth > maxdepth)
//                 maxdepth = dpth;
//         }
//     return maxdepth + 1;
// }


// console.log(depth(superDeepObj1));   // 7
// console.log(depth(superDeepObj2));   // 5

//            RESOLVE 2  (вкладенність)

// let superDeepObj1 = {
//     one: {
//         two: {
//             three: {
//                 four: {
//                     five: {
//                         arr: [],
//                         six: 6
//                     },
//                     hello: 'world',
//                     arr: []
//                 }
//             }
//         }
//     }
// };

// let superDeepObj2 = {
//     one: {
//         two: {
//             three: {
//                 four: 10,
//                 fourq: []
//             }
//         }
//     },
//     oqne: {
//         two: {
//             three: {
//                 four: 10,
//                 fourq: []
//             }
//         }
//     }
// };

// findDeepOfObj(superDeepObj1);   // 6
// console.log('===============================');
// findDeepOfObj(superDeepObj2);   // 7

// function findDeepOfObj(obj) {
//     let variableValue = 0;
//     getProp(obj);

//     function getProp(obj) {
//         for (const value in obj) {
//             if (typeof (obj[value]) === 'object' && !Array.isArray(obj[value])) {
//                 getProp(obj[value]);
//                 variableValue++;
//                 continue;
//             }
//             console.log('Finale value: ', obj[value]);
//         }

//     }
//     variableValue++;
//     console.log(variableValue, 'вкладенність');
// }

// console.log('-----------------------------------------------');
// console.log('-----------------------------------------------');




// console.log('-----------------------------------------------');
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// Написати функцію, яка підставляє значення в ${nextWorkingDay}.
// Наприклад, клыєнт нам пише Thursday 12:06 або Sunday 23:06, то ми
// відписати в ці дні який час роботи.
//
// const message = `Привіт. Нажаль ми сьогоне не працюємо. Завітайте до нас
//  в ${nextWorkingDay} з ${openFrom} до ${openTo}`

// const workingDays = {
//     Monday: {
//         isOpen: false,
//         from: 10,
//         to: 22
//     },
//     Tuesday: {
//         isOpen: true,
//         from: 11,
//         to: 18
//     },
//     Wednesday: {
//         isOpen: false,
//         from: 11,
//         to: 18
//     },
//     Thursday: {
//         isOpen: false,
//         from: 11,
//         to: 18
//     },
//     Friday: {
//         isOpen: false,
//         from: 11,
//         to: 18
//     },
//     Saturday: {
//         isOpen: true,
//         from: 12,
//         to: 16
//     },
//     Sunday: {
//         isOpen: false,
//         from: 12,
//         to: 16
//     }
// };

// console.log(workingDays);

// function recursionDays(obj) {
//     const nextWorkingDay = 0;
//     getProp(obj);

//     function getProp(obj) {
//         for (const value in obj) {

//             console.log(value);
//             console.log(obj[value]);
//             for (const value in obj) {

//                 if ((obj[value]) === false) {
//                     getProp(obj[value]);
//                     continue;
//                 }
//             }
//             console.log('-------');
//         }
//     }
// }

// recursionDays(workingDays);


// console.log('-------------------------------------------');

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// let a = 0;
// let b = a++;

// console.log(a, 'a');
// console.log(b, 'b');

// console.log('---');

// let c = 0;
// let d = ++c;

// console.log(c, 'c');
// console.log(d, 'd');

// console.log('*****************************');
// console.log('*****************************');

//                 TASK 1
//
// let arr = [10, 22, 33, 44, 55];
//
// function recursator(arrToIterate, i = 0) {
//     // console.log('-----------------');
//     // console.log(arrToIterate);
//     // console.log('-----------------');
//
//     console.log('HELLO RECURSION');
//     console.log(i);
//
//     if (i >= arrToIterate.length) {
//         return;
//     }
//
//     console.log(arrToIterate[i]);
//
//     recursator(arrToIterate, ++i);
//
// }
//
// recursator(arr);

//////////////////////////////////////////////////////////////////////

// Зробити з багатовимірного масиву одновимірний масив

//       RESOLVE with Recursion

// const multiArr = [
//     10,
//     [111, [222, [333]], 444],
//     555,
//     [666, 777, [
//         [888], 999
//     ], 1000]
// ];

// // console.log(multiArr);
// // console.log('--------------------');
// // console.log(multiArr.flat(10));

// // console.log('--------------------');


// const flattedArr = [];

// function flatter(arrToFlat = [], i = 0) {

//     console.log('I am working with', JSON.stringify(arrToFlat));
//     console.log('"i" is equel to', i);

//     if (typeof arrToFlat[i] === 'number') {
//         console.log('THIS IS NUMBER', arrToFlat[i]);
//         flattedArr.push(arrToFlat[i]);

//         console.log('Return and go forward ------------ ');
//         return flatter(arrToFlat, ++i);
//     }

//     if (Array.isArray(arrToFlat[i])) {
//         console.log('arrToFlat[i] is array');
//         console.log('Return and go forward ------------ ');
//         flatter(arrToFlat[i], 0);
//     }

//     if (arrToFlat.length < i) {

//         console.log('Length is too big');
//         return;
//     }

//     console.log('------------------Run Flatter again');
//     flatter(arrToFlat, ++i);
// }


// flatter(multiArr);

// console.log(flattedArr);




////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


//   function flatter(arrToFlat = [], i = 0) {
//     console.log('I am working with', JSON.stringify(arrToFlat));
//     console.log('I is equal to', i);
//     if (typeof arrToFlat[i] === 'number') {
//       console.log('This is number', arrToFlat[i]);
//       flattedArr.push(arrToFlat[i]);

//       console.log('Return and go forward ----------')
//       return flatter(arrToFlat, ++i);
//     }

//     if (Array.isArray(arrToFlat[i])) {
//       console.log('arrToFlat[i] is array.')
//       console.log('Return and go forward ----------')
//       flatter(arrToFlat[i], 0);
//     }

//     if (arrToFlat.length < i) {
//       console.log('Lenth is to big')
//       return;
//     }

//     console.log('-------- Run Flatter again')
//     flatter(arrToFlat, ++i);
//   }

//   flatter(multiArr)

//   console.log(flattedArr);


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


// let a = 0
// let b = a++;
// let c = ++a;
//
// console.log(a, 'a');
// console.log(b, 'b');
// console.log(b, 'b');