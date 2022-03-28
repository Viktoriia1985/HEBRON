// 0:02     STRING Methods;
// 0:17:30  ...SPREAD  оператор (...деструктуризація)
// 0:46:30  Array Methods


// let str = 'Hello world ';
//
// console.log('******************************');
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log('******************************');
//
// console.log('Karina' === 'Karina');
//
// let dealerId = '   Karina Petrova  ';
//
// console.log('******************************');
// console.log(dealerId);
// console.log(dealerId.trim());
// console.log('******************************');


// //   SPLIT()
// //
// console.log('******************************');
// const names = 'Ira;Volodya;Dima;Karina';
// let strings = names.split(';');
// console.log(strings);    //   масив  ['Ira', 'Volodya', 'Dima', 'Karina']
// console.log(typeof strings);    //  object
//
// console.log('******************************');

// // JOIN()
// //
// let girls = ['Olga', 'Vika', 'Tanya', 'Lera', 'Sveta', 'Galina'];
// let s = girls.join('; ');
// console.log(s);   //  string => Olga, Vika, Tanya, Lera, Sveta, Galina
// console.log(typeof s);    // string
//
// console.log('******************************');


// //   INCLUDES()
// //
// const text = 'Привіт, я Віктор. Буду вчити вас JS';
//
// let b = text.toLowerCase().includes('js');
// console.log(b);  // true
//
// let girlsNames = ['Olga', 'Vika', 'Tanya', 'Lera', 'Sveta', 'Galina'];
// let b1 = girlsNames.includes('Vika');
// console.log(b1);   // true
//
// console.log('******************************');

// //   REPLACE() & ReplaceAll()
// //
// const text1 = 'Привіт, я Віктор. Буду вчити вас JS. Бо JS - найкращий';
//
// let s1 = text1.replace('JS', 'Python');
// console.log(s1);   //  Привіт, я Віктор. Буду вчити вас Python. Бо JS - найкращий
//
// let s2 = text1.replaceAll('JS', 'Python');
// console.log(s2);   // Привіт, я Віктор. Буду вчити вас Python. Бо Python - найкращий
//
// console.log('******************************');

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

//                    Д Е С Т Р У К Т У Р И З А Ц І Я                         //
//                             SPRED оператор                                 //

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// console.log('******************************');

// const number = [2, 6, 7, 999, 97644, 3, 51, 66];
// const girls = ['Olga', 'Vika', 'Tanya', 'Lera', 'Sveta', 'Gala'];
//
// const [girl1, Vika, girl2] = girls;
// console.log(girl1, Vika, girl2);  //  Olga Vika Tanya
//
// const [,name2] = girls;
// console.log(name2)     // Vika
//
// const [,,irinka] = girls;
// console.log(irinka);   // Tanya (кожна кома - ім'я)
//
// const dana = girls[3];
// console.log(dana);  // Lera
//
// const secondToLast = girls[girls.length - 2];
// console.log(secondToLast);   // Sveta
//
// const [newName1, newName2, ...other2] = girls;
// console.log(newName1)  // Olga
// console.log(newName2)  // Vika
// console.log(other2);   // ['Tanya', 'Lera', 'Sveta', 'Gala']
//
//
// console.log('******************************');
// console.log('******************************');
//
// const user = {
//     name: 'Viktor',
//     age: 36,
//     car: true,
//     bike: false,
//     phone: 'Iphone XS-Max',
//     job: {
//         title: 'Senior'
//     }
// }

// const name = 'Karina';
//
// const {
//     name: newName,
//     car,
//     phone,
//     wife = false,
//     job: { title }
// } = user;
//
// console.log(name);     // Karina
// console.log(newName);  // Viktor
// console.log(phone);    // IPhone
// console.log(wife);    // false
// console.log(title);    // Senior

////////////////////////////////////////////
////////////////////////////////////////////
// console.log('******************************');
// console.log('******************************');
//
// const user = {
//     name: 'Viktor',
//     age: 36,
//     car: true,
//     bike: false,
//     phone: 'Iphone XS-Max',
//     job: {
//         title: 'Senior'
//     }
// }
//
// const {
//     name: newName,
//     car,
//     phone,
//    ...other
// } = user;
//
// console.log(name, car, phone)
// console.log(other);   // => {age: 36, bike: false, job: {…}}

////////////////////////////////////////////////////////////////

//    С Т Р У К Т У Р И З А Ц І Я

// const user = {
//     name: 'Viktor',
//     age: 36,
//     car: true,
//     bike: false,
//     phone: 'Iphone XS-Max',
//     job: {
//         title: 'Senior'
//     }
// }
//
// const extendedUser = {
//     ...user,
//     payment: 800
// }
//
// console.log(extendedUser.payment)   // 800
// console.log(extendedUser);
// console.log('*********************************************');
//
// const newExtendedUser = {
//     ...user
// }
//
// newExtendedUser.phone = 'Xiaomi'; // копіює {} фбо [] тільки по ПЕРШОМУ РІВНЮ ВЛОЖЕННОСТІ
// newExtendedUser.job.title = 'Middle';
//
// console.log(user);
// console.log(newExtendedUser);

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

//                          A R R A Y   M E T H O D S                          //

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

/////////////
//
//  SORT(a, b)     SORT()     SORT()      SORT()
//

// const numbers = [2, 5, 1, 999999999, 28, 3, 88, 91, 975, 11778];
//
// let numbers1 = numbers.sort((x, y) => x - y);
//
// console.log(numbers1); // => [1, 2, 3, 5, 28, 88, 91, 975, 11778, 999999999]
// console.log(numbers); // метод sort() мутує масив
//
// console.log('******************************');
//
// let numbers2 = numbers.sort((x, y) => y - x);
//
// console.log(numbers2); // => [999999999, 11778, 975, 91, 88, 28, 5, 3, 2, 1]
// console.log(numbers); // метод sort() мутує масив
//
// console.log('******************************');

// const girls = ['Alla', 'Vika', 'Tanya', 'Lera', 'Sveta', 'Galina'];
//
// girls.sort((a, b) => {
//     if (a > b) {
//         return -1
//     }
//     return 1
// });
//
// console.log(girls);  // ['Vika', 'Tanya', 'Sveta', 'Lera', 'Galina', 'Alla']

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

//////////////
//
//      FILTER(value, index, array)   FILTER()  FILTER()  FILTER()
//

// const numbers = [2, 5, 1, 999999999, 28, 3, 88, 91, 975, 11778];
// const girls = ['Vita', 'Alla', 'Vika', 'Tina', 'Lera', 'Sveta', 'Valeriia', 'Tanya', 'Galina'];
//
// let filter1 = girls.filter(name => name.includes('er'))
// console.log(filter1)  // ['Lera', 'Valeriia']
//
//
// let filter = girls.filter(name => name.startsWith('T'))
// console.log(filter);   //  ['Tina', 'Tanya']
//
// let newString = filter.sort()
// console.log(newString);    //   ['Tanya', 'Tina']
//
// let numbers1 = numbers.filter(number => number > 50);
// console.log(numbers1)

// console.log('******************************');
// console.log('******************************');

// const numbers = [2, 5, 1, 999999999, 28, 3, 88, 91, 975, 11778];
//
// let num1 = numbers.filter((number) => (number % 2 === 0) ? true : false);
// console.log(num1);    // [2, 28, 88, 11778]

// let numbers1 = numbers.filter(number => {
//     if (number % 2 === 0) {
//         return true;
//     }
// });
// console.log(numbers1);    //   [2, 28, 88, 11778]

// console.log('******************************');
// console.log('******************************');
// let newNumber = numbers.filter(number => number > 100);
// console.log(newNumber); // [999999999, 975, 11778]

// const filterNameMoreFive = girls.filter((name) => name.length > 5)
// console.log(filterNameMoreFive);  //   ['Valeriia', 'Galina']

// console.log('******************************');
// console.log('******************************');

// const numbers2 = [2, 5, 1, 999999999, 28, 3, 88, 91, 975, 11778];

// let newNumbers2 = numbers2.filter((number, index, array) => {
//     console.log(number, 'value');
//     console.log(index, 'index');
//     console.log(array, 'array');
//     console.log('------------------------------');


//     if(number % 2 !== 0) {
//         return true
//     }
// })

// console.log(newNumbers2);

// console.log('******************************');
// console.log('******************************');


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


////////////////
//
//   forEach(value, index, array)   forEach()
//
//

//const numbers = [2, 5, 1, 999999999, 28, 3, 88, 91, 975, 11778];
// const girls = ['Alla', 'Vika', 'Tina', 'Lera', 'Sveta', 'Valeriia', 'Tanya', 'Galina'];
//
// girls.forEach((value, index) => {
//     console.log(index, 'index');
//
//     if (value.startsWith('V')) {
//         return;
//     }
//     console.log(value);
// })
////////////////////////

/////////////////
//
//   FIND() & findIndex()
//
//

// const girls = ['Alla', 'Vika', 'Tina', 'Lera', 'Sveta', 'Valeriia', 'Tanya', 'Galina'];
//
// let fate = girls.find(girl => girl.startsWith('T'));
// let destiny = girls.findIndex(girl => girl.startsWith('T'))
//
// console.log(fate);  // Tina
// console.log(destiny);  // індекс 2

/////////////////
//
//   SOME() & EVERY()
//
//
//
// const girls = ['Alla', 'Vika', 'Tina', 'Lera', 'Sveta', 'Valeriia', 'Tanya', 'Galina'];
//
// let some = girls.some(girl => girl.startsWith('T'))
// let every = girls.every(girl => girl.startsWith('T'))
//
// console.log(some, 'some');   // true
// console.log(every, 'every');  // false

// console.log('******************************');
//
// const numbers = [2, 5, 1, 999999999, 28, 3, 88, 91, 975, 11778];
//
// let some1 = numbers.some(number => number > 10000)
// let every1 = numbers.every(number => number > 10000)
//
// console.log(some1, 'some2');
// console.log(every1, 'every2');

// let some2 = girls.some(girl => girl.includes('a'))
// let every2 = girls.every(girl => girl.includes('a'))

// console.log(some2, 'some2'); // true  тому що знайдена літера 'а'
// console.log(every2, 'every2'); // true тому що літера 'а' що знайдена в кожному імені


/////////////////////////////////////////////////////////////////////////
/////////////////
//
//   MAP(value, index, array)    MAP()   MAP()    MAP()    MAP()
//
//
// const girls = ['Alla', 'Vika', 'Tina', 'Lera', 'Sveta', 'Valeriia', 'Tanya', 'Galina'];
//
// let mapOfName = girls.map(value => {
//     console.log(value);
//
//     if (value.length > 5) {
//         return value + ' BAD Girl'
//     }
//
//     return value;
// })
//
// console.log(mapOfName);


// console.log('******************************');
// console.log('******************************');
//
// const girls = ['Alla', 'Vika', 'Tina', 'Lera', 'Sveta', 'Valeriia', 'Tanya', 'Galina'];
//
// const mapOfNewGirls = girls.map((name, index) => {
// const age = Math.floor(Math.random()*40)
//
//     return {
//         name,
//         id: index + 1,
//         age,
//         boyfriend: age >= 18
//     }
// })
//
// console.log(mapOfNewGirls);
// console.log(girls);

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// console.log('******************************');
// console.log('******************************');


// const user = {
//         name: 'Vika',
//         age: 36,
//         car: true,
//         bike: false,
//         phone: 'Iphone',
//         job: {
//             title: 'Senior'
//         }
//     }

// console.log(user.name);
// console.log(user['name']);
//
// console.log('******************************');
// console.log('******************************');
//
// function getUserValue(keyName){
//     console.log(keyName);
//     return user[keyName]
//
// }
//
// const userName = getUserValue('name')
// const userAge = getUserValue('age')
// const userJob = getUserValue('job')
//
// console.log('-----------------');
//
// console.log(userName);
// console.log(userAge);
// console.log(userJob.title);


// console.log('******************************');
// console.log('******************************');

const user = {
    name: 'Vova',
    age: 47,
    car: 'BMW',
    family: {
        wifeName: 'Viktoriia',
        wifeAge: 36
    },
    job: {
        company: 'UIA',
        occupation: 'pilot',
        qualification: 'captain',
        experience: 30
    },
}

function getUserValue(keyName) {
    console.log(keyName);
    return user[keyName]
}


let nameOfUser = getUserValue('name')
let ageOfUser = getUserValue('age')
let carOfUser = getUserValue('car')
let userWifeName = getUserValue('family')
let jobOfUser = getUserValue('job')

console.log('----------------------------');
console.log('----------------------------');

console.log(nameOfUser, ':name');
console.log(ageOfUser, 'age');
console.log(carOfUser, ':car');
console.log(userWifeName.wifeName, 'is Vovas wife');
console.log(nameOfUser, 'works in', jobOfUser.company,'.He is the best', jobOfUser.occupation, 'of UIA');


// TODO reduce splice flat


