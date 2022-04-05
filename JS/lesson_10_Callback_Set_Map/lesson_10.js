// 00:09                 Callback
// 00:48:00              Set
// 01:05:20              Map


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
//             });
//         }
//         callback('Нема грошей');
//     }, 1000);
// }

// function prepareTour() {
//     setTimeout(() => {
//         console.log('Давай, збирайся');
//     }, 500);
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


// Написати анаграму

// let word1 = 'ivan'
// let word2 = 'vain'
// // видасть  true

// let newWord = 'Victor'
// let newWord1 = 'Rocivz'
// // видасть false

function  checkAnagram (arr) {
     if(!arr || arr.length <= 1) return false;

     let word1= arr[0].toUpperCase().split('').sort().join('');

     for (let i = 0; i < arr.length; i++) {

         if(arr[i].toUpperCase().split('').sort().join('') !== word1) {
            return false
         }
     }
     return true
}


console.log(checkAnagram(['Ivana', 'AVain', 'niava', 'AVANI']));
console.log(checkAnagram(['ViCtor', 'RocivW']));