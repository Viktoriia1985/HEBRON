// class Computer {
//     constructor(ram, power, name) {
//         this._ram = ram;
//         this._power = power;
//         this._name = name;
//     }
//
//     get ram() {
//         return this._ram;
//     }
//
//     set ram(value) {
//         this._ram = value;
//     }
//
//     get power() {
//         console.log('THIS IS GETTER')
//         return this._power;
//     }
//
//     set power(value) {
//         if (value > 1000 || value < 0) {
//             console.log('Not valid power');
//             return;
//         }
//
//         this._power = value;
//     }
//
//     get name() {
//         console.log('THIS IS A NAME')
//         return this._name;
//     }
//
//     set name(value) {
//         this._name = value;
//     }
//
//     powerOn() {
//         console.log('Wroom wroom. I am', this._name);
//     }
// }
//
//
// class Laptop extends Computer {
//     constructor(ram, power, name, monitor) {
//         super(ram, power, name);
//         this._monitor = monitor;
//         //  потужність / (дюйми * оперативку)
//         this.battarey = power / (monitor * ram)
//     }
//
//     get monitor() {
//         return this._monitor;
//     }
//
//     set monitor(value) {
//         this._monitor = value;
//     }
// }
//
// const pentium = new Computer(2, 400, 'Pentium 2');
//
// const lenovo = new Laptop(4, 500, 'ThinkPad', 17);
//
// console.log(pentium.power);
// console.log(pentium.name);
// console.log('--------------')
// pentium.power = 9908
// console.log(pentium.power)
// console.log('--------------')
// pentium.powerOn();
// console.log('--------------')
// console.log(lenovo.battarey, 'battery power in hours');

//
// //   Компютер можна апгрейдити.
// //   Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// //   Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// //   Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

// class CompCopy {
//     constructor(ram, power, name) {
//         this.ram = ram;
//         this.power = power;
//         this.name = name;
//     }
//
//     upgradePC(newPower) {
//         const isMoreThan10Percent = newPower >= this.power * 1.1;
//         if (isMoreThan10Percent || newPower <= this.power) {
//             throw new Error('Power not valid');
//         }
//         this.power = newPower;
//     }
// }
//
// const newCompCopy = new CompCopy(8, 400, 'Lenovo');
//
// try {
//     newCompCopy.upgradePC(440);
//     console.log(newCompCopy.power, 'PC power')
// } catch (e) {
//     console.log(e)
// }


// Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100

//                        RESOLVE 1
//
// function zerosToEnd(arr = []) {
//     if (!Array.isArray(arr)) {
//         console.log('This is not array')
//         return;
//     }
//
//     let zerosCount = 0;
//     const result = [];
//
//     for (const number of arr) {
//
//         if (number === 0) {
//             zerosCount++;
//         } else {
//             result.push(number)
//         }
//     }
//
//     for (let i = 0; i < zerosCount; i++) {
//         result.push(0);
//     }
//     console.log(result);
// }
//
// const array = [0, 2, 6, 9, 18, 6, 0, 0, 8, 4, 94];
// zerosToEnd(array)


//                        RESOLVE 2

// const array1 = [0, 2, 6, 9, 18, 6, 0, 0, 8, 4, 94];
// // const arrayExit = [2, 6, 9, 18, 6, 8, 4, 94, 0, 0, 0];
//
// const zeros1 = [];
// const result1 = [];
//
// for (const number of array1) {
//     if (number === 0) {
//         zeros1.push(number)
//     } else {
//         result1.push(number)
//     }
// }
//
// console.log(result1);
// console.log(zeros1);
// result1.push(...zeros1);
// console.log(result1)

//                 RESOLVE 3

// const array3 = [0, 2, 6, 9, 18, 6, 0, 0, 8, 4, 94];
// // const arrayExit = [2, 6, 9, 18, 6, 8, 4, 94, 0, 0, 0];
//
// const zeros3 = [];
// const result3 = [];
//
// for (const number of array3) {
//     if (number === 0) {
//         zeros3.push(number)
//     } else {
//         result3.push(number)
//     }
// }
//
// console.log(zeros3);
// console.log(result3);
//
// for (const zero of zeros3) {
//     result3.push(zero)
// }
//
// console.log(result3)

//                         RESOLVE 4

// Всі цифри 0 мають бути в кінці масиву без зміни порядку інших цифер

// const array1 = [0, 2, 6, 9, 18, 6, 0, 0, 8, 4, 94];
// // const arrayExit = [2, 6, 9, 18, 6, 8, 4, 94, 0, 0, 0];
//
// let newArr = array1.filter(el => el === 0)
// let newArr2 = array1.filter(el => el !== 0)
//
// console.log(newArr)
// console.log(newArr2)
//
// // newArr2.push((array1.filter(el => (el === 0))))
// // console.log(newArr2.flat(1));
// //                 OR
// // newArr2.push(...newArr);
// // console.log(newArr2)




//
// // -створити класс попелюшка з полями ім'я, вік, розмір ноги
// // --Створити 10 попелюшок , покласти їх в масив
// // --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// // a) за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//
// // b) Додати принцу функцію "пошук попелюшки"
// // -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//
// class Cinderella {
//     constructor(name, age, lag) {
//         this.name = name
//         this.age = age
//         this.lag = lag
//     }
// }
//
// class Prince {
//     constructor(name, age, shoesSize) {
//         this.name = name
//         this.age = age
//         this.shoesSize = shoesSize
//     }
//
//     findGirlOfDream(girls) {
//         if (!Array.isArray(girls)) {
//             console.log('Nobody wants you ');
//             return;
//         }
//
//         for (const girl of girls) {
//             if (this.shoesSize === girl.lag) {
//                 console.log(`${this.name} and ${girl.name} get married`);
//                 break;
//             }
//         }
//     }
// }
//
// const irina = new Cinderella('Ira', 19, 38);
// const veronika = new Cinderella('Veronika', 17, 36);
// const nastya = new Cinderella('Nastya', 18, 37);
// const diana = new Cinderella('Diana', 20, 34);
// const viktoria = new Cinderella('Viktoriia', 19, 35);
//
// const cinderellas = [irina, veronika, nastya, diana, viktoria];
//
// const maks = new Prince('Maks', 22, 36);
//
// maks.findGirlOfDream(cinderellas);
//
//
// function User(name, age) {
//     this.name = name;
//     this.age = age;
//
//     this.sayHello = function () {
//         console.log('Hello', this.name);
//     }
// }
//
//
// const maks2 = new User('Maks', 20);
//
// console.log(maks2);
















