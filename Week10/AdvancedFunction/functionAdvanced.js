// var result = true;
// function s (first , second) {
//   return first - second;
// }

// result = s(12,-10);
// result =s(22,2);

// console.log(result);

// 'use strict'

// myVar = 'random';
// function addOne(num) {
//   return num + 1;
// }

// var result = addOne(4);
// console.log(result);

// var global = 123;
// var res = function() {
//   global = -1;
// }

// console.log(global);

// var global =123;
// var res= function() {
//   global = -1;
// }
// res;
// console.log(global);

// var global =123;
// var res = function() {
//   global= arguments[0] || -1;
// }

// res(10);
// console.log(global);

// res(0);
// console.log(global);

// var result;
// var res= function(num) {
//   num = num || 0;
//   return num;
// }
// result= res(10);
// console.log(result);

// result=res();
// console.log(result);

// 'use strict'

// var result = square(10);
// console.log(result);

// function square(num) {
//   num *= num;//nema return
// }

// 'use strict'

// var result = square(10);
// console.log(result);

// function square(num) {
//   num *= num;
//  return num;
// }

// 'use strict'

// function toString(num) {
//   result = num + '';
//   return result;
// }

// console.log(result);//rezultat nije definisan

// function toString(num) {
//   result = num + '';
//   return result;
// }

// toString(22);
// console.log(result);

// function toString(num) {
//   'use strict';
//   result= num + '';
//   return result;
// }

// toString(num);//num nije definisana
// console.log(result);

// function toString(num) {
//   'use strict';
//   result= num + '';//result nije definisan
//   return result;
// }
// var num =33;
// toString(num);
// console.log(result);

// function toString(num) {
//   'use strict';
//  var result = num + '';
//   return result;
// }
// var num =33;
// toString(num);
// console.log(result);//sad se žai na ovaj nije lokalna

// function toString(num) {
// result = num + '';//lokalna
//   return result;
// }
// var num =33;//globalna
// toString(num);//toString(33);
// console.log(result);

//hoisting not a function popeće var string gore
// var output = toString(0.15);
// console.log(output);

// var toString= function(num) {
//   var result = num + '';
//   return result;
// }

// var toString;//undefined

// var output = toString(0.15);
// console.log(output);

// var toString= function(num) {
//   var result = num + '';
//   return result;
// }

// var output = toString(0.15);
// console.log(output);

// function toString(num) {
//   var result = num + '';
//   return result;
// }

// var toString = function(num) {
//   var result= num+'';
//   return result;
// }

// var output = toString(0.15);
// console.log(output);

// var toString= function(num) {
//   num = num || '';
//   var result = num + '';
//   return result;
// }

// var output = toString;//dodelili smo mu celu funkciju dobijamo funkciju
// console.log(output);

// var res=output(22);
// console.log(res);
// console.log(typeof res);

// 'use strict'

// var global = parseInt('1e2');

// incrementGlobal = function() {
//   global++;
// }

// incrementGlobal();

// console.log(global);
// console.log(typeof global);

// var global = parseFloat('1e2');

// incrementGlobal = function() {
//   global++;
// }

// incrementGlobal();

// console.log(global);
// console.log(typeof global);

// 'use strict'
// function sum(num1,num2) {
//   num1= num1 || 0;//ako je falsy setuj da bude nula
//   num2=num2 || 0;

//   if(!num1 && !num2) {
//     return -1
//   }
//   return num1+num2;
// }

// var sumNumbers=sum;
// var result=sumNumbers();
// console.log(result);

//hoisting kad se pozove funkcija prvo nadje sve deklaracije var x=20
// var x = 21;
// var girl = function() {
//   console.log(x);
//   var x = 20;
// }
// girl();

// function test() {
//   var a;
//   function foo() {
//     return 2;
//   }
//   console.log(a);//undefined
//   console.log(foo());//2
//   var a =1;
// }
// test();

//hoisting na globalnom nivou

// prvo će da uzme sve funkcije i da prebaci gore
// var x ;
// var girl;
// var boy;
// var dog;
// var g;
// var p;
// var q;

// svuda nestaje var dodela vrednosti ostaje na linijama gde je bila
// poziva se funkcija girl posebno se vrši hojsting samo u telu te funkcije
// penje sve deklaracije na vrh te funkcije-lokalni skop kada se pozove funkcija
// var x;//undefined
// x=20;
// var test;//undefined
// test=4;

// cela funkcija ide gore
// res=(12,3);//15

// var x = 21;

// console.log(g);undefined
// console.log(p);undefined
// console.log(q);undefined

// var girl = function () {
//   console.log(x);
//   var x = 20;
// };

// var boy = function() {
//   console.log(test);
//   var test =4;
// }

// var dog = function () {
//   var res = sum(12,3)
// console.log(res);
// return res;

//   function sum (a,b) {
//     return a+b;
//   }
// }

// var g = 1;
// var p = 1;
// var q = 1;

// girl();
// boy();
// dog();

// typeof console.log;

// (function() {
//   return console.log;
// })()('Boo!');

// function multiply(a, b) {
//   var mResult = a * b;
//   return function (a, b) {
//     return mResult + a + b;
//   };
// }

// var output = multiply(3, 4);
// var res = output(10, 10);
// console.log(output);
// console.log(res);
