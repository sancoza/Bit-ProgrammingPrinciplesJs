// objekat ima klasu student NEPOSTOJE KLASE SVE SU OBJEKTI SAMO IMITIRAMO KLASU

// {
// }

// var student1 = {
//   firstname: 'Pera',
//   lastName: 'Peric',
//   age: 22,
//   sayHello: function () {
//     //ovo je metoda
//     return 'ćao';
//   },
// };

// var student2 = {
//   firstname: 'Pera',
//   lastName: 'Peric',
//   age: 22,
//   sayHello: function () {
//     //ovo je metoda
//     return 'ćao';
//   },
// };

// var repost = {
//   monthrevenue: 33333,
//   lastName: 'Perić',
//   calculateGrossRevenue: function () {
//     //ovo je enkapsulacija nedira se vezano za objekat ne za korisnika
//     return monthrevenue + 12;
//   },
// };

// objekat je console metoda je log console.log() enkapsulacija- kako je implementirano ne znamo

// parse objekat int metoda  parse objekat float metoda

// public metoda je javna
// private koristimo unutar objekta

// talk metoda polimorfizam radi dve različite stvari sposobnost da pozovemo istu medotu na različitim objektima

// *****************************from array to object******************************

// arrray  je index

// a u objectu mi definišemo key

// {}-object

// var hero = {ocupation : 1};

// pristupanje vrednostima objekta:

// hero.occupation

// var repost = {
//   monthrevenue: 33333,
//   'lastName': 'Perić',
//   calculateGrossRevenue: function () {
//     //ovo je enkapsulacija nedira se vezano za objekat ne za korisnika
//     return monthrevenue + 12;
//   },
// };

// console.log(repost['lastName']);
// repost.adddress='Zlatne fgrede';
// console.log(repost)
// delete repost. monthrevenue;
// console.log(repost)

//***********************          values vs reference                **************************/

// var student1 = {
//   firstname: 'Pera',
//   lastName: 'Peric',
//   age: 22,
//   sayHello: function () {
//     //ovo je metoda
//     return 'ćao';
//   },
// };

// var student2 =student1;

// student2.omiljenaBoja='plava';

// console.log(student2);
// console.log(student1);//koriste itu referencu u memoriji

// var student2 = {
//   firstname: 'Pera',
//   lastName: 'Peric',
//   age: 22,
//   sayHello: function () {
//     //ovo je metoda
//     return 'ćao';
//   },
// };
// // sada koriste dva objekta

// student2.omiljenaBoja='plava';

// console.log(student2);

// // student1===student2//porede se po referenci ako koriste istu referencu biće true
// // ovo daje false različita referenca

// // ako imaju istu strukturu
// JSON.stringify(student1)===JSON.stringify(student2);

// čista funkcija
// var addElZerro = function (arr) {
//   arr[arr.length] = 0;
//   return arr;
// }

// var res = addElZerro([1,2,3]);

// console.log(res);

// ovo nije čista
// var addElZerro = function (arr) {
//   arr[arr.length] = 0;
//   return arr;
// }

// var arr = [1,2,3];//dodlelili smo referencu svi rade sa istim nizom promenila je spoljnu varijablu jel koriste istu referencu
// var res = addElZerro(arr);

// console.log(res);
// console.log(arr);

// // čista funkcija
// var addElZerro = function(arr) {
//   var newArr=[];

//   for (let i = 0; i < arr.length; i++) {
//    newArr[i]=arr[i];

//   }
//   arr[arr.length]=0;
//   return newArr;
// }

// var arr = [1,2,3];
// var res = addElZerro(arr);
// console.log(res);
// console.log(arr);
