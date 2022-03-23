//////////////////////////////////////////////////////////////////////
//////////                   L E S S O N   2               ///////////

//   00 : 10 - conditional (ternary) operator;
//   00 : 13 - object;
//   00 : 24 - array;


// console.log(typeof BigInt)  // function

// const age = 15;
// const name = 'Vik';

// if (age > 18) {
//     console.log('YES')
// } else {
//     console.log('NO')
// }

//   conditional (ternary) operator

// (age > 18 || name === 'Vika') ? console.log('YES') : console.log('NO');
//
// const isAdult = age > 18 ? 'Adult' : 'Too young';
//
// console.log(isAdult);

/////////////////////////////////////////////////////////////////////////////////

//                        O B J E C T
//
// const name1 = 'victor';
// const name2 = 'victor';
//
// console.log(name1 === name2); // true
//
// const user1 = { name: 'victor' };
// const user2 = { name: 'victor' };
//
// console.log(user1 === user2); // false

///////////////////

// const user1 = { name: 'victor' };
// const user2 = user1;
// console.log(user1 === user2);  // true

///////////////////

// const user1 = { name: 'victor' };
// const user2 = user1;
//
// user2.name = 'Dima';
//
// console.log(user1 === user2);  // true
// console.log(user1.name);
// console.log(user2.name);

////////////////////////////////////////////////////////////////////

//               A R R A Y

// const names = ['Vika', 'Vova', 'Anya', 'Roma'];
//
// console.log(names[2]);  // Anya
//
// names[4] = 'Olga';
//
// names.push('Irina', 'Sveta');  // ДОБАВЛЯЕТ элемент В КОНЕЦ массива
// console.log(names);
// console.log(names.length);  // 7 елементів
//
// const strOfNames = names.join();  // превращает массив в строку
// console.log(strOfNames);
//
// names.unshift('VADIM') //  ДОБАВЛЯЕТ элемент В НАЧАЛО массива
// console.log(names);
//
// names[0] = 'TOLYA';
// console.log(names);
//
// names[6567] = 'Koko'
// console.log(names)
// console.log(names[0], names[5], names[6567])
//
// console.log('*********************************************');

/////////////////////

// const names2 = ['Vera', 'Vlad', 'Vasya', 'Arina', 'Semen', 'Rita', 'Nadya', 'DARIYA'];
// console.log(names2);
// console.log(names2.length);

// names2.pop();   //    УДАЛЯЕТ элемент В КОНЕЦЕ массива. Элемент можно вернуть
// console.log(names2);

// names2.shift();   //    УДАЛЯЕТ элемент В НАЧАЛЕ массива. Элемент можно вернуть
// console.log(names2);

// names2[100]='Karina';
// names2[101]='OlGa';

// console.log(names2);
// console.log(names2.length);

// names2.shift();
// names2.shift();
// names2.shift();
// console.log(names2);
// console.log(names2.length);

// const deleteFromStart = names2.shift();
// console.log(deleteFromStart, 'was deleted');

// const deleteFromEnd = names2.pop();
// console.log(deleteFromEnd, 'was deleted');

////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
///////     LOOP   "FOR"       ////////
//////////////////////////////////////////////////////////

// const newNames = ['Vera', 'Vlad', 'Vasya', 'Arina', 'Semen', 'Rita', 'Nadya', 'DARIYA'];

// console.log(newNames.length);
//
// console.log('************************');
// for (let i = 5; i < newNames.length; i++) {
//     console.log(i);
//     console.log(newNames[i])
// }
//
// console.log('************************');
// console.log(newNames.length);


// console.log('************************');
//
// for (let i = 5; i <= newNames.length-1; i++) {
//     console.log(newNames[i], 'прибула на роботу ', i);
// }
//
// console.log('************************');
// console.log(newNames);

// const newNames = ['Vera', 'Vlad', 'Vasya', 'Arina', 'Semen', 'Rita', 'Nadya'];

// console.time('Without variable');

// for (let i = 2; i <= newNames.length; i++) {
//     console.log(newNames[i]);
// }
// console.timeEnd('Without variable');  // 51 ms

// console.log('************************');

// console.time('With variables'); // This will be a little bit faster

// let arrL = newNames.length;

// for (let i = 0; i < arrL; i++) {
//     console.log('number of element:', i, ' ', newNames[i], 'HELLO');
// }

// console.timeEnd('With variables');  // 49 ms

//  newNames.length = 0;
//  console.log(newNames);
//
// newNames.push('Hello World');
// console.log(newNames);

// const newNamesNew = newNames.join(' ; ');
// console.log(newNamesNew);  // преобразовывает массив в строку //  Vera ; Vlad ; Vasya ; Arina ; Semen ; Rita ; Nadya

////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////
////             below it is  NOT a LESSON

////////////////////////////////////////////////////////////////////////////////////
///////////////        array.flatMap  (используется для более     //////////////////
///////////////        быстрого преобразования массива)          ///////////////////
////////////////////////////////////////////////////////////////////////////////////

// const arr = [12, 9, 6, 3];

// const result = arr.flatMap(x => [x / 3]);
// console.log(result);   // [4, 3, 2, 1]


// let result2 = arr.flatMap( x => [x * 2]);
// console.log(result2); //  [24, 18, 12, 6]

// console.log('******************************');

// const duplicate = x => [x, x];
// let arr2 = [2, 3, 4].flatMap(duplicate);

// console.log(arr2); //  [2, 2, 3, 3, 4, 4]

// const triple = x => [x, x, x];
// let arr3 = [10, 33, 55].flatMap(triple);
// console.log(arr3);  // [10, 10, 10, 33, 33, 33, 55, 55, 55]


///*********************************************************************///

// ---------------------------------------------------------------------//
// ---------------------------------------------------------------------//

//////////////                  HOMEWORK                   ///////////////
//////////////                  HOMEWORK                   ///////////////
//////////////                  HOMEWORK                   ///////////////

// ---------------------------------------------------------------------//
// ---------------------------------------------------------------------//

// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//

// const arr1 = [2, 4, 6, 7, 8];
// const arr2 = ['hello', 'okten', 'car', 'name', 'window'];
// const arr3 = [2, 4, 'okten', false, true];

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);



// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = '3';
// arr[4] = 3;
// arr[7] = 'hello okten';
// arr[10] = true;
// arr[20] = 'false';

// console.log(arr);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i <= 10; i++) {
//     document.write(`<div>Hello World</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i <= 10; i++) {
//     document.write(`<div>Hello: ${i} </div>`);
//     document.write('<div>Hello: '+ i +' </div>');
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;

// while (i < 10) {
//     document.write(`<h1>HELLO</h1>`);
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;

// while (i < 10) {
//     document.write(`<h1>HELLO: ${i}</h1>`);
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// const arr1 = [3, 5, 7, -12, 0, -234, 954, 1, 999, -10];

// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);

// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr2 = ['hello', 'okten', 'car', 'name', 'window', 'instance', 'rendering', 'variable', 'implement', 'property'];

// let arrL = arr2;
// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i]);
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr3 = ['123', 'okten', -123, 'name', true, 'instance', 'rendering', false, 'implement', 'property'];

// for (let i = 0; i < arr3.length; i++) {
//     console.log(arr3[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr4 = [true, 'okten', -123, 'name', true, 'instance', 'rendering', false, 'implement', 'property'];

// for (let i = 0; i < arr4.length; i++) {
//    if (typeof arr4[i] === 'boolean') {
//        console.log(arr4[i]);
//    } else {
//        console.log('not a boolean');
//    }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr5 = [true, 'okten', -123, 'name', true, 'instance', 334, false, 'implement', 'property'];

// for (let i = 0; i < arr5.length; i++) {
//     if (typeof arr5[i] === 'number') {
//         console.log(arr5[i]);
//     } else {
//         console.log('not a number');
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//

// let arr6 = [1, 'okten', -123, 'name', true, 'instance', 334, false, 'implement', 0];

// for (let i = 0; i < arr6.length; i++) {
//     (typeof arr6[i] === 'string')
//         ? console.log(arr6[i])
//         : console.log('not a string');
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//Вивести в консоль всі його елементи в циклі.


// let array = [];

// array[0] = 'Okten';
// array[1] = false;
// array[2] = 10;
// array[3] = '10';
// array[4] = undefined;
// array[5] = 'hello';
// array[6] = null;
// array[7] = 234;
// array[8] = true;
// array[19] = 'car';


// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// console.log('*********************');
// console.log(typeof(array[2]));
// console.log(typeof(array[3]));

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//    console.log(`step: ${i}`);
//    console.log('step:', i);
//    document.write('<div> step: '+ i +' </div>');
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log('step:', i);
//     document.write('<div>step: '+ i +' </div>')
// }



// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 200; i+=2) {
//     console.log('step:', i);
//     document.write(`step: ${i} <br>`);
// }

// console.log('****************************');
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 200; i++) {
//     if (i % 2 === 0) {
//         console.log('step:', i);
//         document.write(`step: ${i} <br>`);
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 200; i++) {
//     if (i % 2 === 1) {
//         console.log('step:', i);
//         document.write(`step: ${i} <br>`);
//     }
// }


// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let arr = ['a', 'b', 'c'];

// for (let i = 1; i <= 3; i++) {
//     arr[arr.length] = i;
//     console.log(arr);
//     console.log(arr.length);
//     console.log('***********');
// }
// console.log('*********************');
// console.log(arr);
// console.log(arr.length);


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let array = [1, 2, 3];

// let newArray = [...array].reverse();
// console.log(newArray);

// console.log('****************************');
// ////             OR              ///

// let array2 = [1, 2, 3];

// let newArray2 = [];

// for (let i = 0; i < array2.length; i++) {
//    newArray2 = array2.reverse();
//    console.log(newArray2[i]);
// }

// console.log(newArray2);



// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let arr = [1, 2, 3];

// for (let i = 4; i <= 6; i++) {
//     arr[arr.length] = i;
// }

// console.log(arr);
// console.log('************************');
// ////////////////////      OR                    ////////////////////

// for (let i = 4; i <= 6; i++) {
//     arr.push()
// }
// console.log(arr);


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let arr1 = [1, 2, 3];

// for (let i = 6; i >=4; i--) {
//    arr1.unshift(i)

// }
// console.log(arr1);

///////////////////////////////////////////////////////////

// let arr1 = [1, 2, 3];
// for (let i = 4; i <= 6; i++) {
//     arr1.unshift(i)

// }

// console.log(arr1);   //[  6, 5, 4, 1, 2, 3 ]  WHHHHHHHHHYYYYYY


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let arr = ['js', 'css', 'jq'];

// let element = arr.shift();
// console.log(element);


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let arr = ['js', 'css', 'jq'];

// let element2 = arr.pop();
// console.log(element2);



// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

// let arr = [1, 2, 3, 4, 5];
// let newArray = [];


// for (let i = 3; i < arr.length; i++) {
//    newArray.push(arr[i])

// }

// console.log(newArray);



// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].


// let arr = [1, 2, 3, 4, 5];
// let newArray = [];


// for (let i = 1; i >= 0 ; i--) {
//    newArray.unshift(arr[i]);
// }
// console.log(newArray);


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [];
// let delElements = [];

// for (let i = 0; i < arr.length; i++) {
//     i >= 3
//         ? delElements.push(arr[i])
//         : arr2.push(arr[i]);
// }
// const result = [...arr2, "a", 'b', 'c', ...delElements]
// console.log(result);

//////                              OR                   ///////

// let arr = [1, 2, 3, 4, 5];

// let arrOfLetter = ['a', 'b', 'c'];
// let delLeft = [];
// let delRight = [];

// for (let i = 0; i < arr.length; i++) {
//    i >= 3
//        ? delRight.push(arr[i])
//        : delLeft.push((arr[i]));
// }

// let newArray = [...delLeft, ...arrOfLetter, ...delRight];
// console.log(newArray);




// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// Підказка. Працюйте по принципу задачі вище.


// let array = [1, 2, 3, 4, 5];

// let arr1 = [];
// let arr2 = [];
// let arr3 = [];

// for (let i = 0; i < array.length; i++) {
//   if (i >= 0 && i < 1) {
//       arr1.push(array[i]);
//   } else if (i >= 1 && i <= 3) {
//       arr2.push(array[i]);
//   } else if (i == 4) {
//       arr3.push(array[i]);
//   }
// }

// let newArray = [...arr1, 'a', 'b', ...arr2, 'c', ...arr3, 'e'];
// console.log(newArray);





// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
//
//
// let arr = [1, 2, 3, 4, 5];

// for (let i = 3; i < 4; i++) {
//   arr.splice(3, 2, 'a', 'b', 'c')
// }
// console.log(arr);



// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// const arr1 = [3, 5, 7, -12, 0, -234, 954, 1, 999, -10];


// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] % 2 == 0) {
//          console.log(arr1[i]);
//     }
// }



// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
//За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// const array = [-29, 44, 7, -12, 0, -234, 954, 1, 340, -100000];

// const array2 = [];

// for (let i = 0; i < array.length; i++) {
//     array2.push(array[i]);
// }

// console.log(array2);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
//За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// const array = [-1000, 44, 7, -12, 8, -55, 954, 1, 340, 909];

// let newArray = [];


// for (let i = 0; i < array.length; i++) {
//     newArray[i] = array[i];

// }

// console.log(newArray);


// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while

//  перебрати циклом while та вивести  числа тільки парні  значення
// let array = [2,17,13,6,22,31,45,66,100,-18];

// let i = 0;
// while(i < array.length) {
//     if(array[i] % 2 !== 1) {
//         console.log(array[i]);
//     }
//     i++;
// }


// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
//
//
// 1. Створити пустий масив та :
//    a. заповнити його 50 парними числами за допомоги циклу.
//    b. заповнити його 50 непарними числами за допомоги циклу.
//    c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//    d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//  2. Вивести за допомогою console.log кожен третій елемен
//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
//
//
//
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
























