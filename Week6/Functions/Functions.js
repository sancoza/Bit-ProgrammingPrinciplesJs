// // n parametar 33 argument dodeljujemo funkciji

// // this function chack if number is even or odd and return string "even" or "odd"
// function checkIfNumberIsEvenOrOdd(n) {
//   if (typeof n !== 'number'){
//     return 'Invalid input';
//   }
//   var result="";
//   if(n % 2 === 0) {
// result= 'even';
// }else {
//   result = 'odd';
// }
// return result;
// }

// var  r = checkIfNumberIsEvenOrOdd(33);
// console.log(r);

// var f = checkIfNumberIsEvenOrOdd(22);
// console.log(f);

// function sayHello() {
//   return 'ćao';
// }
// var p =sayHello();
// console.log(p);


// // arguments ugradjena varijabla ponaša se kao niz 
// function sumNumbers() {
//   var result = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// }
// var g = sumNumbers(22,33,44);
// console.log(g);

// ugradjene funkcije

// var number = parseInt('333errrreeer');//pravi broj od stringa čim naidje na prvi karakter koji nemože da izparsira ako ništa nemože vraća NaN, 0x heksadecimalan
// console.log(number);

// var n = parseFloat('11.11');//sa decimalama koristiomo parsfloat  3e-4 (0.0003) samo jedan parametar prima
// console.log(n);

// var e = parseFloat('eee');

// if(isNaN(e)) {
//   console.log('an error ocurred');
// }
// console.log(isNaN(e));//isNaN vraća true ili false

// console.log(isFinite(33));//da proverovamao jel input validan broj

// function getMax(a, b) {
//   if(!isFinite(a) || !isFinite(b)) return 'Invalid input';
//   if (a > b) return a;
//   if (b > a) return b;
// return 'Numbers are equal';
// }
// // var result= getMax(2,3);
// // console.log(result);
// console.log(getMax(2, 3));



