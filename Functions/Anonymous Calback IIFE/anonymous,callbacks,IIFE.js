// jedan način hoisting
// var res=add(22,33);
// console.log(res);
// function add(a,b) {
//   return a + b;
// }

// var add; popeo je na vrh deklaraciju u trenutku pozivanja nalazi se undefined to nije funkcija
// drugi način anonimna funkcija******
//  podigne na vrh deklaracije varijabli ali neće da popne ono što je u njima ostaje na liniji koda

// var add = function (a,b) {
//   return a + b;
// }

// samopozivajuća funkcija svaki fajl ima zaseban skop za sebe da nedodje do mešanja varijabli tu se odma pozove
// lokalni skop izolovali smo je ne mogu ponovo da se upotrebljavaju za nešto što će se jednom izvršiti čim se pokrene skripta

// (function () {
//   console.log('I am IIFE function');
// })();

//spoljašna  funkcija
// function outer(string) {
// function inner(s) { //prvo se izvši ova
//   return s + s;
// }
//   return inner(string); //onda iz prve pozovemo i damo parametar iz outer vraća s+s
// }

// var res = outer('cao');
// console.log(res);

// function a() {
//   console.log('A!');//prvo ova linija
//   return function() {//pa se iz ove funkcije vraca anonimna funkcija
//     console.log('B!');
//   };
// }
// kao da smo reki ovo
// // var result = function() {pa se iz ove funkcije vraca anonimna funkcija
// //   console.log('B!');
// // };

// var result = a();

// ako znam o da funkcija vraća funkciju var result = a()();

// result();ovo je ovo iznad

// očekuje da parametri budu funkcije

// function sum (funA,funB) {
//   return funA() + funB()
// }

// var res= sum(
// function () {
//   return 2;
// }
//  function() {
//   return 4;
// }
// );
// console.log(res);

// var r =sum(2,3);
// console.log(r);//sve deklaracije prelaze na vrh
// function sum (a,b) {
//   return a+b;//ovo je funcion declaration možemo da je ozovemo pre nego je deklarišemo
// }

// var r;
// r=sum(2,3);argument
// console.log(r)

// var sum = function(a,b) {parametar
//   return a + b;//hoisting dodela vrednosti je na liniji koja je bila
// }

// var a = 4;
// var b = a;
// a++;
// console.log(a,b);

// var a = [2,3,4];
// var b = a;
// a[2]=100;
// console.log(a,b);

// (function () {
//   return 'cao';
// })()//ovo je anonimna funkcija

// funkcija može da vraća funkciju

// function helloFactory (a,b) {
//   var hello=function() {
//     return 'helo';
//   }
//   return hello;
// }
// var r = helloFactory();
// var res =r();
// console.log(res);

// function sum(funcA,funcB) {
//   return funcA() + funcB();
// }

// var res = sum(
//   function() {
//     return 2;
//   },
//   function() {
//     return 4;
//   }
// )
// console.log(res);

// napiši funkciju koja filtrir parne brojeve
// var arr = [1,2,3,4,5,6,7,8];

// function filterEven(a) {
//   var b = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 === 0) {
//       b[b.length] = a[i];
//     }
// }
//   return b;
// }

// var res = filterEven(arr);
// console.log(res);

// var arr = [1,2,3,4,5,6,7,8];

// function filterOdd(a) {
//   var b = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 !== 0) {
//       b[b.length] = a[i];
//     }
// }
//   return b;
// }

// res = filterOdd(arr);
// console.log(res);

// var arr = [1,2,3,4,5,6,7,8];

// function filterNegativ(a) {
//   var b = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] < 0 ) {
//       b[b.length] = a[i];
//     }
// }
//   return b;
// }

// var res = filterNegativ(arr);
// console.log(res);

// function filter(a, cb) {
//   var b = [];
//   for (var i = 0; i < a.length; i++) {
//     var element = a[i];
//     var isConditionTrue = cb(element);
//     if (isConditionTrue) {
//       b[b.length] = a[i];
//     }
//   }

//   return b;
// }

// function filter(a, cb) {
//   var b = [];
//   for (var i = 0; i < a.length; i++) {
//     var element = a[i];
//     var isConditionTrue = cb(element);
//     if (isConditionTrue) {
//       b[b.length] = a[i];
//     }
//   }

//   return b;
// }

// var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function isEven(e) {
//   return e % 2 === 0;
// }
// var resEven = filter(arr, isEven);
// console.log(resEven);

// function isOdd(e) {
//   return e % 2 !== 0;
// }
// var resOdd = filter(arr, isOdd);
// console.log(resOdd);

// function isNegative(e) {
//   return e < 0;
// }
// var resNegative = filter(arr, isNegative);
// console.log(resNegative);

// function isPositive(e) {
//   return e > 0;
// }
// var resPositive = filter(arr, isPositive);
// console.log(resPositive);

// function map(a,cb) {
//   var b = [];
//   for (let i = 0; i < a.length; i++) {
//     var element = a[i];
//     var processedElement = cb(element);
//     b[b.length] = processedElement;
//   }
//   return b;
// }

// var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function incrementByOne(e) {
//   return e + 1;
// }

// var  resIcrementByOne = map(arr, incrementByOne);
// console.log(resIcrementByOne);

// function double(e) {
//   return e * 2;
// }

// var  resDouble = map(arr, double);
// console.log(resDouble);

// //napisati funkciju koja vraća array parne brojeve pomnožene same sa sobom
// function proccess(e) {
//   if (e % 2 === 0) {
//     return e * e;
//   }
//   return e;
// }

// var  res = map(arr, proccess);
// console.log(res);

// callback:

// function test(cb,number) {
//   return cb(number);
// }


// var increment = function(n) {
//   return n+1;
// }
// var res=test(increment,5);

// console.log(res);

