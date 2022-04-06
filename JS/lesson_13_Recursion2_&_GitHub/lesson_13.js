// //     TASK   "Depth"


// const superDeepObj1 = {
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
//
// const superDeepObj2 = {
//     one: {
//         innerOne: {
//             innerTwo: {}
//         }
//     },
//     one2: {
//         two: {
//             three: {
//                 four: 10,
//                 fourq: [{
//                     user: {
//                         name: 'Vova'
//                     }
//                 }]
//             }
//         }
//     }
// };
//
// console.log(Object.values(superDeepObj2));
//
// let deepIndex = -Infinity;
//
// const deepCounter = (object, deepCount = 0) => {
//     if (typeof object !== 'object' && object !== null) {
//         if (deepIndex < deepCount) {
//             deepIndex = deepCount;
//         }
//         return;
//     }
//
// const values = Object.values(object);
//
//     for (const singleObject of values) {
//         deepCounter(singleObject, ++deepCount);
//     }
// };
//
// deepCounter(superDeepObj1);
// console.log(deepIndex);
//
// console.log('********************************');
//
// deepCounter(superDeepObj2);
// console.log(deepIndex);
//


///////////////////////////////////////////////////////////////////////////

// GIT HUB  - 00: 50 : 00

//   git branch - показати в консолі всі гілки; * позначена та гілка, де знаходишся наразі;
//
//   git git checkout [(назва гілки)] - перейти на певну гілку;
//
//   git
//
//












