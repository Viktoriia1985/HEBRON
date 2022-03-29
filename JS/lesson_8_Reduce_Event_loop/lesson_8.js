//////////////////////////////////////////////////////////////////////////
//                       A R R A Y   M E T H O D                        //
//                                                                      // 

// Flat()      00:01:00
// Splice()    00:05:40
// Reduce()    00:30:00 
// EVENT LOOP  00:51:00
// Smal Even Loop example    01:40:00

///////////////////////////////////
//
//          FLAT()   FLAT()
//

// const myAwesomeArray = [[1, 2], [3, 4, [7, 7, [8, 9]]], 5]
//
// let a = myAwesomeArray.flat(3)
// console.log(a);


///////////////////////////////////
//
//          SPLICE()   SPLICE()
//
//

// const girls = ['Alla', 'Vika', 'Tina', 'Lera', 'Sveta', 'Valeriia', 'Tanya', 'Galina'];
//
// let spliceGirls = girls.splice(1, 2);
//
// console.log(spliceGirls) // =>['Vika', 'Tina]
// console.log(girls)   // =>['Alla', 'Lera', 'Sveta', 'Valeriia', 'Tanya', 'Galina']


// let deleteGirls = girls.splice(2, 2, ...['NNNNNN', 'OOOKK']) //=> ['Alla', 'Vika', 'NNNNNN', 'OOOKK', 
// //'Lera', 'Sveta', 'Valeriia', 'Tanya', 'Galina']

// console.log(girls);  //=> ['Alla', 'Vika', 'NNNNNN', 'OOOKK','Lera', 'Sveta', 
// // 'Valeriia', 'Tanya', 'Galina']
// console.log(deleteGirls);   //  ['Tina', 'Lera']


///////////////////////////////////
//
//          REDUCE() 
//  map(), filter,  map() && filter() одночасно, дозволяє
//  знаходити max & min значення в масиві
//

const numbers = [2, 5, 1, 11, 28, 3, 88, 91, 975, 100];

 let num = numbers.reduce((acc, value, index) => {
console.log(acc, 'acc');
console.log(value, 'value');
console.log(index, 'index');

console.log('-----------------------------------');

return acc + value
 }, 0)

console.log(num);

//   TASK
// хочемо порахувати суму всіх років 
//
// let users = [{
//         name: 'Dima',
//         age: 10
//     },
//     {
//         name: 'Nastya',
//         age: 22
//     },
//     {
//         name: 'Volodya',
//         age: 19
//     },
//     {
//         name: 'Yarko',
//         age: 39
//     },
//     {
//         name: 'Yevhen',
//         age: 14
//     },
//     {
//         name: 'Taras',
//         age: 44
//     },
// ];

// let reduce = users.reduce((acc, value) => {
//     console.log(acc, 'acc');
//     console.log('***********');
//     console.log(value, 'value');
//     console.log('-----------');



//     return acc + value.age;
// }, 0)

// console.log(reduce);

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

// треба дівчат зробити об'єктами, дати вік, всіх кому  > 18 повернути

// const girls = ['Alla', 'Vika', 'Tina', 'Lera', 'Sveta', 'Valeriia', 'Tanya', 'Galina'];


// let reduce1 = girls.reduce((acc, name) => {
//     const age = Math.floor(Math.random() * 40);

//     console.log(age, 'age');
//     console.log(name, 'name');
//     console.log('---------------------');


//     if (age < 18) {
//         return acc;
//     }

//     const girl = {
//         name,
//         age,
//         car: true
//     };

//     acc.push(girl);

//     return acc;
// }, []);


// console.log(reduce1);


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//                       E V E N T   L O O P                       //
//


// setTimeout(() => {
//     console.log(1);   // async
// }, 1000)

// console.log(2);   // sync

// setTimeout(() => {
//     console.log(3);    // async
// }, 500)




// setTimeout(() => {
//     console.log(1);   // async
// }, 0)

// console.log(2);   // sync

// setTimeout(() => {
//     console.log(3);    // async
// }, 0)



// let elementById = document.getElementById('btn');

// console.log(elementById);

// elementById.onclick = ()=> {
//     console.log('CLICK');
// };

// let i = 0;
// while (i < 999999999) {
//     i++;
// }



/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  T A S K //////////////////////////////


// function f(n){
//     return('* '.repeat(n)+'\n').repeat(n).trim()
// }

// let f1 = f(3)

// console.log(f1);

// console.log('-----------------------------------');

//відповідь
// * * * 
// * * * 
// * * *



// function f2(n) {
//     return('$ '.repeat(n)+'\n').repeat(n).trim()
// }

// let f3 = f2(5)

// console.log(f3);

// відповідь
//  $ $ $ $ $ 
//  $ $ $ $ $ 
//  $ $ $ $ $ 
//  $ $ $ $ $ 
//  $ $ $ $ $


//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Задача на засвоєння reduce. 
//
// Необхідно реалізувати групування користувачів за тим, 
// на який курс вони записані. На фото приклад вихідного об'єкту

// const list = [
//     {
//       name: 'Vika',
//       course: 'NODE'
//     },
//     {
//       name: 'Viktoria',
//       course: 'JS'
//     },
//     {
//       name: 'Maks',
//       course: 'REACT'
//     },
//     {
//       name: 'Tamara',
//       course: 'JAVA'
//     },
//     {
//       name: 'Volodymyr',
//       course: 'JS'
//     },
//     {
//       name: 'Maks',
//       course: 'JS'
//     },
//     {
//       name: 'Alina',
//       course: 'REACT'
//     },
//     {
//       name: 'Olena',
//       course: 'JS'
//     },
//     {
//       name: 'Dima',
//       course: 'JAVA'
//     },
//   ];

//   console.log(list);


// reduce


// const newList = list.reduce((acc, user) => {
// if(!acc [user.course]){
//     acc[user.course] = []
// }
// acc[user.course].push(user)

// return acc
// }, {})

// console.log(newList);

//  console.log('***********************************');
//  console.log('***********************************');

//filter
//
// const newFilterList = list.filter(user => user.course === 'JS')
// console.log(newFilterList);
// console.log(list);


// console.log('--------------------------------------');
// console.log('--------------------------------------');

// map
//

// // Array WITH mutation
// //

// let c = list.map(user => user.age = Math.round(Math.random()*40))
// console.log(c);
// console.log(list);

// console.log('--------------------------------------');
// console.log('--------------------------------------');


// Array with out mutation

// let a = JSON.parse(JSON.stringify(list)).map(user => user.age = Math.round(Math.random()*40));
// console.log(a);
// console.log(list);

// console.log('--------------------------------------');

// const b = list.map(user => ({...user, age: Math.round(Math.random() * 40)}));
// console.log(b);
// console.log(list);




