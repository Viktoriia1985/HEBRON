// 00:11                 Promise
// 00:55:00 - 01:04:30  Promisw.all() &  Promise.allSettled
// 01:06:47               Async Await




// function orderTour(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 500) {
//                 // resolve не зупиняє виконання функції
//                 return resolve('Єгипет')
//             }
//             reject('немає грошей')

//         }, 100)
//     })
// }


// function prepareTour() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Я зібрався')
//         }, 900)
//     })
// }


// function goToKyiv(date) {
//     return new Promise((resolve, reject) => {

//         if (date === 14.02) {
//             return reject(`квитки на ${date} вже продані`);
//         }

//         console.log('Я купив квитки на', date);
//         setTimeout(() => {
//             resolve('Чух Чух');
//         }, 1800)
//     })
// }


// orderTour(560)
//     .then(country => {
//         console.log('Юхуууу! летимо в', country);

//         console.log('Давай збиратись)');
//         return prepareTour()
//     })
//     .then(value => {
//         console.log('-------------THEN 2-----------');
//         console.log(value);

//         return goToKyiv(15.02)

//     })
//     .then(value => {

//         console.log('-----------THEN 3---------------');

//         console.log(value);
//     })
//     .catch(reason => {
//         console.log('Наша відпустка не вдалась, бо', reason);
//     })


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

// const sendEmail1 = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('SEND 1')
//     }, 2000)
// })


// const sendEmail2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('SEND 2')   // ламається, якщо REJECT
//     }, 1000)

// })


// const sendEmail3 = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('SEND 3')
//     }, 1000)

// })


// console.time('Time')

// // Promise.all([sendEmail1, sendEmail2.catch(()=>{}),sendEmail3]) => КОСТИЛЬ

// Promise.all([sendEmail1, sendEmail2, sendEmail3])
//     .then(value => {
//         console.log(value);


//         console.timeEnd('Time')
//     })
//     .catch(reason => {
//         console.log(reason);
//     })


// Promise.allSettled([sendEmail1, sendEmail2, sendEmail3])
// .then(value => {
//     console.log(value);
// })


// Promise.race([sendEmail1, sendEmail2, sendEmail3])
// .then(value => {
//     console.log(value);
// })


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//                          ASYNC AWAIT                                 //


// function orderTour(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 500) {
//                 // resolve не зупиняє виконання функції
//                 return resolve({
//                     country: 'Єгипет',
//                     change: money - 500
//                 });
//             }
//             reject('немає грошей');

//         }, 1000)
//     })
// }


// function prepareTour() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Я зібрався')
//         }, 3000)
//     })
// }


// function goToKyiv(date, moneyForTicket) {
//     return new Promise((resolve, reject) => {
//         console.log('moneyForTicket', moneyForTicket);

//         if (date === 14.02) {
//             return reject(`квитки на ${date} вже продані`);
//         }

//         if (moneyForTicket < 200) {
//             return reject('не вистачає грошей на квиток');
//         }

//         console.log('Я купив квитки на', date);
//         setTimeout(() => {
//             resolve('Чух Чух');
//         }, 1000)
//     })
// }


// async function letsVacation() {

//     try {
//         const countryResp = await orderTour(700);
//         console.log('Юхуууу! летимо в', countryResp.country);


//         console.log('Збирайся');
//         const weDone = await prepareTour();

//         console.log(weDone);

//         console.log('Я йду замовляти квитки на потяг');
//         const newVar = await goToKyiv(16.03, countryResp.change);

//         console.log(newVar);

//         return countryResp.change;

//     } catch (e) {
//         console.log(e, 'ERROR!!!!');
//     }


// }

// // letsVacation();

// (async() => {
//     let num = await letsVacation();
//     console.log("num",num);
// })()



//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//                       H O M E W O R K                            //
//Зробити свій розпорядок дня.

// У вас має бути від 7 до 10 асинхронних дій з різними затримками.
//Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
//Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.

//       Напиклад     //

//   Прокнутись - 0.3с
//   Поснідати - 1с
//   Піти в душ - 0.5с
//   Дочекатись автобус - 2с =>
//          (вернути решту: якщо change >= 300 => купую плаття
//                         якщо  change < 300 => на дієті без харчів)
//   Попрацювати - 4с
//   Пообідати - 1с
//   Приїхати додому -2с
//   Повечеряти - 1с
//   Ліг спати - 0.3c

//І так далі

////////////////////////////////////////////////////////////
///////////////////    Promise   ///////////////////////////

// function myNewDay(isWakeupDone) {
//     return new Promise((resolve, reject) => {
//         const userName = 'Viktoria';

//         setTimeout(() => {
//             if (isWakeupDone) {
//                 resolve(`Добрий ранок ${userName}`)
//             }
//             return reject(`Огоооо!, ${userName}, ти проспала`)
//         }, 300)
//     })
// }


// function haveBreakfast() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`Сніданок смачний`)
//         }, 1500)
//     })
// }

// function goToShower(isGoToShowerDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isGoToShowerDone) {
//                 resolve(`Ти вже чиста! дуй на роботу`)
//             }
//             reject(`води немає. Ремонтні роботи.`)
//         }, 500)
//     })
// }

// function waitTheBus(isBusHere, moneyAfterDay) {
//     return new Promise((resolve, reject) => {
//         console.log(moneyAfterDay, 'moneyAfterDay');

//         setTimeout(() => {

//             if (isBusHere && (moneyAfterDay) > 200) {
//                 resolve({
//                     work: 'Буду вчасно',
//                     money: 'Після роботи купую плаття'
//                 });
//                 return;
//             }

//             if (isBusHere && (moneyAfterDay) <= 200) {
//                 resolve({
//                     work: 'Буду вчасно',
//                     money: 'грошей на плаття немає'
//                 });
//                 return;
//             }
//             reject({
//                 status: 400,
//                 message: 'Запізднююсь'
//             })

//         }, 2000)

//     })
// }

// function isWorkToday() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`Вже нікого немає в офісі. Ти добре попрацювала. Відпочивай`)
//         }, 3000)
//     })
// }



// myNewDay(true)
//     .then(value => {
//         console.log(value);

//         console.log(`Іди снідай`);
//         return haveBreakfast()

//     })
//     .then(value => {
//         console.log(value);
//         console.log('Іди в душ');

//         return goToShower(false)
//             .catch(e => {
//                 console.log(e + 'Сьогодні приймаю душ на роботі');
//             })
//     })
//     .then(value => {
//         if (value) console.log(value);

//         console.log('Чекаю на автобус');
//         return waitTheBus(true, 190)
//     })
//     .then(value => {
//         console.log(value);
//         console.log('Час добряче попрацювати');
//         return isWorkToday()
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(error => {
//         console.log('День так собі -', error);
//     }).
//     finally(() => {
//         console.log('Wish you good luck!');
//     })



/////////////////////////////////////////////////////////////
/////////////////   ASYNC AWAIT   ///////////////////////////

// function myNewDay(isWakeupDone) {
//     return new Promise((resolve, reject) => {
//         const userName = 'Viktoria';

//         setTimeout(() => {
//             if (isWakeupDone) {
//                 resolve(`Добрий ранок, ${userName}`)
//                 return

//             }

//             return reject(`Огоооо!, ${userName}, ти проспала`)
//         }, 300)
//     })
// }


// function haveBreakfast() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`Сніданок смачний`)
//         }, 1500)
//     })
// }

// function goToShower(isGoToShowerDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isGoToShowerDone) {
//                 resolve(`Ти вже чиста! Дуй на роботу`)
//             }
//             reject(`води немає. Ремонтні роботи.`)
//         }, 500)
//     })
// }

// function waitTheBus(isBusHere, moneyAfterDay) {
//     return new Promise((resolve, reject) => {
//         console.log(moneyAfterDay, 'moneyAfterDay');

//         setTimeout(() => {
//             if (isBusHere && (moneyAfterDay) > 200) {
//                 resolve({
//                     work: 'Буду вчасно',
//                     dress: 'Після роботи купую плаття'
//                 });
//                 return;
//             }

//             if (isBusHere && (moneyAfterDay) <= 200) {
//                 resolve({
//                     work: 'Буду вчасно',
//                     dress: 'грошей на плаття немає'
//                 });
//                 return;
//             }

//             reject({
//                 status: 400,
//                 message: 'запізднююсь'
//             })
//         }, 2000)

//     })
// }

// function isWorkToday() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`Вже нікого немає в офісі. Ти добре попрацювала. Відпочивай`)
//         }, 2400)
//     })
// }


// async function myWorkDay() {
//     const userName = 'Viktoriia';
//     try {
//         const startTheDay = await myNewDay(true);

//         console.log(startTheDay);
//         console.log('Іди їсти');

//         const breakfast = await haveBreakfast(true);
//         console.log(breakfast);

//         const shower = await goToShower(true);
//         console.log(shower);

//         const {dress, work} = await waitTheBus(true, 201);      // TODO не працює
//         console.log(work);
//         console.log(dress);
//         // console.log('Після роботи купую плаття');

//         const theEndOfWorkDay = await isWorkToday();
//         console.log(theEndOfWorkDay);

//     } catch (e) {
//         console.log(e.message, 'ERROR', e.status);
//     }
// }

// myWorkDay();



//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// console.log('HELLO');

// console.log('********************************************');


// function multiply(a, b) {
//     return a * b ;
// }

// function square(n) {
//     return multiply(n, n);
// }

// function printSquare(n){
//     let squared = square(n);
//     console.log(squared);
// }

// printSquare(5)

// console.log('********************************************');




// orderTour(600)
//     .then((result) => {
//         console.log(result);

//     })
//     .catch(reason => {
//         console.log(reason);
//     })
//     .finally(() => {
//         console.log('FINALLY');
//     })



//////////////////////////////////////////////////
/////////////////////////////////////////////////


//   Вивести цифри у порядку зростання без повторення однакових цифр

function minValue(values){
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
}

console.log(minValue([1, 1, 5, 7, 5, 9, 7, 1]));

console.log([1, 1, 5, 7, 5, 9, 7, 1])


console.log('********************');
console.log('********************');



const minValue2 = (values) => +Array.from(new Set(values)).sort((a,b) => a-b).join('')

console.log(minValue2([1, 1, 5, 7, 5, 9, 7, 1]));

console.log([1, 1, 5, 7, 5, 9, 7, 1]);


console.log('********************');



