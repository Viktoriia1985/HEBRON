//  LESSON 5

// 00:15 Основні принципи ООП
// 00:27 Code example
// 00:56 Extends

// Основні принципи ООП
//
// 1) ІНКАПСУЛЯЦІЯ (заборона доступа певних елементів назовні) => обгортка чогось складного в просте!!!!
// 2) НАСЛІДУВАННЯ
// 3) ПОЛІМОРФІЗМ  -  один і той самий метод виконує різну роботу
//

// На чому стоїть ООР:
// 1. НАСЛІДУВАННЯ - властивіть дочірнього класу унаслідувати БАТЬКІВСЬКІ властивості.
// Але не навпаки (батьківський клас не наслідує властивості з дочірнього класу)
// 2. ІНКАПСУЛЯЦІЯ (приховання)- це властивість вложення більш складної поведіки в якусь просту
// обгортку або простий метод. Приховання складної логіки в просту функцію.
// 3. ПОЛІМОРФІЗМ - об'єкт може себе вести по-різному, в залежності від переданих йому
// параметрамів.
// 4. АБСТРАКЦІЯ - є якийсь певний абстрактний клас, екземпляр класу якого не можна зробити.
// Але на основі цього абстрактного класу можна створити будь що.
//

// const user = {
//     name: 'Viktoriia',
//     age: 36,
//     sayHello1: () => {
//         console.log('Hello! My name is', user.name, '. I am', user.age);
//     }
// };
//
// const user2 = {
//     name: 'Vlada',
//     age: 32,
//     sayHello: () => {
//         console.log('Hello! My name is', user2.name, '. I am', user2.age);
//     }
// };
//
// const user3 = {
//     name: 'Anna',
//     age: 20,
//     sayHello: () => {
//         console.log('Hello! My name is', user3.name, '. I am', user3.age);
//     }
// };
//
// user3.sayHello();


// class User {
//     constructor(name, age = 18) {
//         this.name = name;
//         this.age = age;
//     }
//
//     sayHello() {
//         console.log(this.name, 'say HELLO to you!');
//     }
//
//     study(title = 'Node JS') {
//         console.log(this.name, 'is studying', title);
//     }
//
// }
//
// const user = new User('Viktoriia', 26);
// const vlada = new User('Vlada', 32);
// const irina = new User('Irina');
//
// console.log(user);
// vlada.sayHello();
// irina.sayHello();
// user.study('Java');
// console.log(irina.age);
// irina.study();


// // this - це вказівка на об'єкт, з яким працюємо (зберігає контекст)
//
// // Всіх юзерів з класу не вивести одразу!, хіба що всіх в один масив

// let users = [user, vlada, irina];

// console.log(users[0]);
// console.log(users[2]);

// console.log(users);
// user.sayHello();

// vlada.sayHello();
// vlada.name = 'Vova';
// vlada.sayHello();


// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greeting() {

//         console.log(`Hello my name is ${this.name}. I am ${this.age} years old`);
//     }
// }


// class Developer extends Human {

//     constructor(name, age, skill = 'Angular') {
//         super(name, age); // в super прописуються ті поля, що пішли від батька, для них this прописується автоматом
//         this.skill = skill;
//     }
//     coding(hours) {
//         console.log(`I am ${this.name} and I'm coding on ${this.skill} ${hours} hours per day`);
//         console.log(`За сьогодні я заробила`, hours * 3, '$');
//     }
// }


// class TeamLead extends Developer {
//     constructor(name, age, skill, experience = 10) {
//         super(name, age, skill);
//         this.experience = experience;
//     }
//     coding(hours) {
//         console.log(`Ні, Ні! Я, ${this.name}, і вже своє відкодив - повних ${this.experience} років`);
//     }

//     greeting() {
//         console.log(`Yo man`);
//     }
// }

// const vika = new Human('Viktoriia', 36);
// vika.greeting();

// const veronika = new Developer('Veronika', 25, 'NodeJS');
// console.log(veronika);
// veronika.greeting();
// veronika.coding(10);

// const valera = new TeamLead('Valera', 34, ['Node', 'Nest'], 18);
// console.log(valera);
// valera.greeting();
// valera.coding(6); // поліморфізм - один і той самий метод виконує різну роботу
// console.log(valera.experience);


//Модифікатор доступу in OOP (Java, TypeScript)
// - private;
// - protected;



//   DEBUGGER  //
// for (let index = 0; index < 6; index++) {
//     debugger;
//    console.log(index);

// }

// console.log('************************************');
// console.log('************************************');
// console.log('************************************');



////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//                     H O M E W O R K                                //
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////




// // Реалізовуємо свій компютерний магазин.
// // ===
// // Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// // Оперативна память.
// // Потужність процесора. (цифра від 0 до 1000)
// // Назва.
// // В кожного компютера має бути метод включання.
// // ===
// // Від базового компютрера треба реалізувати ноутбук.
// // Він має нову властивість дюймаж монітора.

// // У нього зявляється нова змінна роботи батареї. Ця змінна визначається
// // як 'потужність / (дюйми * оперативку)'

// // ===
// // Від ноутбука потрібно зробити ультрабук.
// // Він має нову змінну ваги.
// // При включенні ультрабуку має видаватися помилка, якшо вага більша з
// //за 2кг та батарея тримаж менше ніж 4 години.
// // ===
// // Від базвого класу потрібно створити базовий ПК.
// // В нього має бути новий метод запуску ігор.
// // Кількість FPS визначається як потужність / опервтивку.
// // Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

// // Компютер можна апгрейдити.
// // Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// // Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// // Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// // ===
// // Від базового ПК необхідно зробити ігровий ПК.
// // Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// // При запуску однієї гри потужніть процесора має падати на 0.1%.
// // Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно
// // видати помилку, (алерт, або консоль)б що на цьому відрі ігри не запускаються.

// class Computer {
//     constructor(ram, power, name, password) {
//         this._ram = ram,
//             this._power = power,
//             this._name = name;
//         this._password = password;
//     }

//     get ram() {
//         return this._ram;
//     }

//     set ram(value) {
//         this._ram = value;
//     }

//     get power() {
//         console.log('THIS IS GETTER');
//         return this._power;
//     }

//     set power(value) {

//         if (value > 1000 || value < 0) {
//             console.log('Not valid power');
//             return;
//         }

//         this._power = value;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         this._name = value;
//     }

//     get password() {
//         console.log(`Can't get password`);
//         return null;
//     }

//     set password(value) {
//         this._password = value;
//     }

//     powerOn() {
//         console.log('Hello. I am', this.name);
//     }

// }


// class Laptop extends Computer {
//     constructor(ram, power, name, monitor) {
//         super(ram, power, name);
//         this._monitor = monitor;
//         // потужність / (дюйми * оперативку)
//         this.battery = power / (monitor * ram);
//     }

//     get monitor() {
//         return this._monitor;
//     }

//     set monitor(value) {
//         this._monitor = value;
//     }

// }

// const pentium = new Computer(2, 400, ' Pentium 2', '12345');

// // console.log(pentium.password);
// // console.log(pentium._power);
// // pentium.powerOn();

// const lenovo = new Laptop(4, 500, 'ThinkPad', 21);
// console.log(lenovo.battery);


// // ==========================================
// // Від ноутбука потрібно зробити ультрабук.
// // Він має нову змінну ваги.
// // При включенні ультрабуку має видаватися помилка, якшо вага більша з
// //за 2кг та батарея тримаж менше ніж 4 години.

// class UltraBook extends Laptop {
//     constructor(ram, power, name, monitor, weight) {
//         super(ram, power, name, monitor);
//         this._weight = weight;
//     }

//     get weight() {
//         return this._weight;
//     }

//     set weight(value) {
//         this._weight = value;
//     }

//     powerOn() {
//         if (this._weight > 2) {
//             throw new Error('вага більша за 2кг');
//         }

//         if (this.battery < 4) {
//             throw new Error('батарея тримає менше ніж 4 години');
//         }
//         console.log('Hello. I am', this.name);
//     }
// }

// const newUltraBook = new UltraBook(12, 500, 'ASus', 12, 1.8);
// try {
//     newUltraBook.powerOn();
// } catch (e) {
//     console.log(e);
// }

// console.log('******************************');
// console.log('******************************');

// // ===============================================
// // Компютер можна апгрейдити.
// // Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// // Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// // Для зміни характеритик мають бути свої методи. Мiняти змінну "в лоб" заборонено.
// // ===

// class CompCopy {
//     constructor(ram, power, name) {
//         this.ram = ram;
//         this.power = power;
//         this.name = name;

//     }

//     upgradePC(newPower) {
//         const isMoreThan10Percent = newPower >= this.power * 1.1;
//         if (isMoreThan10Percent || newPower <= this.power) {
//             throw new Error('Power not valid');
//         }
//         this.power = newPower;

//     }
// }

// const newCompCopy = new CompCopy(12, 600, 'LenOVO');

// try {
//     newCompCopy.upgradePC(660);
//     console.log(newCompCopy.power);
// } catch (e) {
//     console.log(e);
// }

// console.log('******************************');
// console.log('******************************');

// // Від базового ПК необхідно зробити ігровий ПК.
// // Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// // При запуску однієї гри потужніть процесора має падати на 0.1%.
// // Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно
// // видати помилку, (алерт, або консоль)б що на цьому відрі ігри не запускаються.

// class Comp {
//     constructor(ram, power, fps) {
//         this.ram = ram;
//         this.power = power;
//         this.fps = fps;
//     }

//     upgradeToGamePC(newFpc) {
//         const enoughFPS = newFpc >= this.fps * 2;
//         if (this.ram < 8 || this.power < 500 || !enoughFPS) {
//             throw new Error('на цьому відрі ігри не запускаються');
//         }

//         this.fps = newFpc;
//     }

//     startGame() {
//         this.power = Math.round(this.power - this.power * 0.01);
//     }

// }

// const gamerComp = new Comp(16, 700, 25);

// try {
//     gamerComp.upgradeToGamePC(50);
//     console.log(gamerComp.fps);
// } catch (e) {
//     console.log(e);
// }
// console.log(gamerComp.power);
// gamerComp.startGame();
// console.log(gamerComp.power);
// gamerComp.startGame();

// console.log(gamerComp.power);
// gamerComp.startGame();

// console.log(gamerComp.power);




// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User


// function User(id, name, surname, email, phone) {

//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }


// let array = [];

// let array1 = new User('1', 'Vika', 'Krat', 'flight@gmail.com', +380664052762);
// const array2 = new User('2', 'Veraa', 'Petryk', 'hello@gmail.com', +380664756433);
// const array3 = new User('3', 'Anna', 'Omalina', 'anna@gmail.com', +380660000762);
// const array4 = new User('4', 'Katya', 'Sloboda', 'school@gmail.com', +380664565762);
// const array5 = new User('5', 'Gala', 'Onyschuk', 'hope@gmail.com', +380668964646);
// const array6 = new User('6', 'Natali', 'Kucher', 'sweet45@gmail.com', +380668964690);
// const array7 = new User('7', 'Sofiya', 'Babych', 'life34@gmail.com', +380668968646);
// const array8 = new User('8', 'Svitlana', 'Lastivka', 'okweb300@gmail.com', +3809700964646);
// const array9 = new User('9', 'Antonina', 'Radysh', 'hidden@gmail.com', +380939664646);
// const array10 = new User('10', 'Rita', 'Lytvyn', 'ride1745e@gmail.com', +380668969706);

// array = [array1, array2, array3, array4, array5, array6, array7, array8, array8, array10];
// console.log(array);


// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


// class Client {
//     constructor(id, name, surname, email, phone, order = []) {

//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }


// let newArray1 = new Client('1', 'Vika', 'Krat', 'flight@gmail.com', +380664052762, ['beer', 'fish']);
// const newArray2 = new Client('2', 'Veraa', 'Petryk', 'hello@gmail.com', +380664756433, ['Coca-cola, Pepsi, Fanta']);
// const newArray3 = new Client('3', 'Anna', 'Omalina', 'anna@gmail.com', +380660000762, ['Sweets', 'Gums']);
// const newArray4 = new Client('4', 'Katya', 'Sloboda', 'school@gmail.com', +380664565762, ['Water', 'Lemonade']);
// const newArray5 = new Client('5', 'Gala', 'Onyschuk', 'hope@gmail.com', +380668964646, ['Bread', 'Croissant']);
// const newArray6 = new Client('6', 'Natali', 'Kucher', 'sweet45@gmail.com', +380668964690, ['Lemon', 'Orange']);
// const newArray7 = new Client('7', 'Sofiya', 'Babych', 'life34@gmail.com', +380668968646, ['Coffe', 'Tea']);
// const newArray8 = new Client('8', 'Svitlana', 'Lastivka', 'okweb300@gmail.com', +3809700964646, ['Hamburger', 'Cheesburger']);
// const newArray9 = new Client('9', 'Antonina', 'Radysh', 'hidden@gmail.com', +380939664646, 'Honey', 'Sugar');
// const newArray10 = new Client('10', 'Rita', 'Lytvyn', 'ride1745e@gmail.com', +380668969706, ['Milk', 'Cottage cheese']);

// newArray = [newArray1, newArray2, newArray3, newArray4, newArray5, newArray6, newArray7, newArray8, newArray9, newArray10];
// console.log(newArray);


//  Створити функцію конструктор яка дозволяє створювати об'єкти car, з
// властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна.
//   Додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість}
//  на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості
// на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і добавляє його в поточний об'єкт car

// function Car1(manufacturer, model, year, maxSpeed, capacity, driver) {
//     this.manufacturer = manufacturer;
//     this.model = model;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//     this.driver = ' ';

//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//     };

//     this.info = function () {
//         console.log(`
//         manufacturer: ${this.manufacturer};
//         model: ${this.model};
//         year: ${this.year};
//         maxSpeed: ${this.maxSpeed};
//         capacity: ${this.capacity};
//         driver: ${this.driver};
//         `);
//     };

//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     };

//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };

//     this.addDriver = function (newDriver) {
//         this.driver = newDriver;
//     };
// }

// let car1 = new Car1('BMW', 'X3', 2018, 220, 2.0);
// console.log(car1);
// console.log('***************************************');

// car1.increaseMaxSpeed(280);
// car1.changeYear(2021);
// car1.addDriver({name: 'Vika', gender: 'female', age:38, status: true});
// car1.info();
//  console.log(`--------------------------------------------`);
// console.log(car1.driver);



// console.log(`--------------------------------------------`);
// console.log(`--------------------------------------------`);
// console.log(`--------------------------------------------`);



// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт
// функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість}
//на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної
// швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором
//полів, і доавляет його в поточний об'єкт car
//
//

// class Car {
//     constructor(manufacturer, model, year, maxSpeed, capacity) {
//         this.manufacturer = manufacturer;
//         this.model = model;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity;

//     }
//     drive() {
//         console.log(`Ідемо зі швидкістю ${this.maxSpeed} на годину`);
//     }

//     info() {
//         console.log(`
//         manufacturer: ${this.manufacturer},
//         model: ${this.model},
//         year: ${this.year},
//         maxSpeed: ${this.maxSpeed},
//         capacity: ${this.capacity},
//         driver: ${this.driver}
//         `);
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed = newSpeed;
//     }

//     changeYear (newValue) {
//         this.year = newValue;
//     }

//     addDriver (driver) {
//        this.driver = driver;
//     }
// }

// const newCar = new Car('Mazda', 'X3', 2016, 160, 1.5);
// console.log(newCar);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(400);
// newCar.changeYear(2022);
// newCar.addDriver({firstName: 'Vova', gender: 'male', age: 47, status: true});
// newCar.info();
// console.log(newCar.driver);



// class Car {
//     constructor (manufacturer, model, year, maxSpeed, capacity, driver){
//         this.manufacturer = manufacturer;
//         this.model = model;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity;
//         this.driver = ' ';
//     }
//
//     drive () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//     info () {
//         console.log(`
//         manufacturer: ${this.manufacturer};
//         model: ${this.model};
//         year: ${this.year};
//         maxSpeed: ${this.maxSpeed};
//         capacity: ${this.capacity};
//         driver: ${this.driver};
//         `);
//     }
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//
//     addDriver (newDriver) {
//         this.driver = newDriver;
//     }
// }
//
// const car = new Car('BMW', 'X3', 2016, 200, 2.0);
// car.drive(200);
// car.increaseMaxSpeed(230);
// car.changeYear(2019);
// car.addDriver({name: 'Vova', gender: 'male', age:38, status: true});
// car.info();
// console.log(`---------------------------------------------------`);
// console.log(car.driver);




// -створити ФУНКЦІЮ конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та
// функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }

// function Prince(name, age, findShoes) {
//     this.name = name;
//     this.age = age;
//     this.findShoes = findShoes;


//     this.findCinderella = function(array) {
//         for (const cinderella of array) {
//             if (cinderella.footSize === prince1.findShoes){
//                 console.log(cinderella);
//             }
//         }
//     }
// }


// const arrayOfCinderellas = [
//     new Cinderella('Anna', 22, 39),
//     new Cinderella('Olga', 32, 36),
//     new Cinderella('Ina', 30, 35),
//     new Cinderella('Katya', 22, 38),
//     new Cinderella('Anetta', 34, 35),
//     new Cinderella('Nata', 19, 35),
//     new Cinderella('Anna', 20, 40),
//     new Cinderella('Vera', 27, 35),
//     new Cinderella('Sveta', 22, 41),
//     new Cinderella('Viktoriia', 36, 37)
// ];


// const prince1 = new Prince('Vova', 47, 35);

// prince1.findCinderella(arrayOfCinderellas);  // выводит всех cinderellas
// // с подходящим размером ноги

// console.log('************************************');
// console.log('************************************');
// console.log('************************************');




// -створити КЛАС попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- a) за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// -- б)Додати принцу функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// class Cinderella {
//     constructor(name, age, foot) {
//         this.name = name;
//         this.age = age;
//         this.foot = foot;
//     }
// }

// class Prince {
//     constructor(name, age, shoesSize) {
//         this.name = name;
//         this.age = age;
//         this.shoesSize = shoesSize;
//     }

//     findMyCinderella(girls) {
//         if (!Array.isArray(girls)) {
//             console.log('No cinderella for prince');
//             return;
//         }

//         for (const girl of girls) {
//             if (this.shoesSize === girl.foot) {
//                 console.log(`Prince ${this.name} and Cinderella ${girl.name} got married`);
//                 break;
//             }
//         }
//     }
// }

// const irina = new Cinderella('Ira', 18, 38);
// const veronika = new Cinderella('Veronika', 17, 36);
// const nastya = new Cinderella('Nastya', 18, 38);
// const diana = new Cinderella('Diana', 20, 37);
// const olga = new Cinderella('Olga', 20, 35);

// const cinderellas = [irina, veronika, nastya, diana, olga];

// const maks = new Prince('Maks', 22, 35);

// maks.findMyCinderella(cinderellas);



