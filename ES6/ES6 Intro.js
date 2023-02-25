// VAR IMA FUNKCIONALNI SKOP SAMO JE U SKOPU FUNKCIJE
//  LET IMA BLOK SKOP blok je izmedju otvarajuce i zatvarajuce zagrade let je sigurniji vid ne mozemo da koristimo tudje varijable varijabla u bloku dostupna je samo u bloku let nema hojsting const mora biti inicijalizovana

// function test() {
//   var a = 10;
// }

// var arr = [21,332,33,45,566,677];

// for(var i = 0; i < arr.length; i++) {
//   var currentEl = arr[i];
// }

// // console.log(a);
// console.log(i);
// console.log(currentEl);

// function test() {
//   let a = 10;
// }

// let arr = [21,332,33,45,566,677];

// for(let i = 0; i < arr.length; i++) {
//   let currentEl = arr[i];
// }

// if(nesto) {
//   let a = 20;
//   if(nestoDrugo) {
//     console.log(a);
//   }
// }

// console.log(a);

// const a = 3;
// a=5;// ne moze constanta da se menja

// console.log(a);

// const b = [1, 2, 3, 4, 5];
// b.push(6);
// c = b.map(function (el) {
//   return el + 1;
// });

// console.log(b);
// console.log(c);

// let count;
// const count; ovo ne moze mora da ima vrednost  const count = 3;

// const user = {
//   name:'Pera',
//   lastName:'Peric'
// }

// user.id = 33;
// console.log(user);

// ****************   template strings   ****************

// const user = {
//   name: 'Pera',
//   lastName: 'Peric',
//   sayHello: function (pozdrav) {
//     // return pozdrav + ' ' + this.name + ' ' + this.lastName + ' !';
//     return `${pozdrav} ${this.name} ${this.lastName} !`; //ovako se spajaju stringovi
//   },
// };

// console.log(user.sayHello('Pozdrav'));

// // let stringTemplate = '
// // blablabla'; ne može u dva reda

// let stringTemplate = `
// Ćao
// ${user.lastName}
// Čao

// `; //sa becktiks može u dva reda
// console.log(stringTemplate);

// **********  default parametars  **********

// function sum (a = 0,b = 0) {
//   // a = a || 0;//varijabli a ako postoji i ako je truti vrenost ako nije truti nek bude nula
//   // b = b || 0;//varijabli b ako postoji i ako je truti vrenost ako nije truti nek bude nula
//   return a + b;
// }

// // console.log(sum(22,33));
// console.log(sum());//ako nepošaljemo parametar da imamo defolne vrednosti

// function sum1( a=10,b=10) {
//   return a + b;
// }

// console.log(sum1(0,0));
// console.log(sum1('33','33'));
// console.log(sum1(3));

// ********      object literal   ********* bez konstruktora bez klase

// const firstName = 'Dario';
// const id = 33;

// const user = {
//   // firstName: firstName,
//   // id:id,//ovako više ne pišemo
//   firstName,
//   id,
//   // sayHello: function() {
//   //   return `Hello ${this.firstName}`
//   // }
//   seyHello() {
//     return `Hello ${this.firstName}`
//   }
// };
// console.log(user);
// console.log(user.seyHello);

// evry sum

//map vraća novi niz OVO MORA DA SE ZNA petlja sa istim brojem elemenata kao originalni njiz
//filter vraca novi niz OVO MORA DA SE ZNA

// sum i evry vraćaju boolin true ili false

// const orginalArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const mappedArray = orginalArr.map(function(number) {
//   //izvršiće se onoliko puta koliko ima članova i staviće iza retrn ono što stavimo
//   // return 'ćao';
//   return number + 100;//map vraća novi niz sa istim brojem članova
// });

// console.log(mappedArray);

// const filterArray = orginalArr.filter(function(number) {
// //ono što se nalazi iza return ako je truti biće član novog niza
// return number % 2 === 0;
// });
// console.log(mappedArray);

// const isConditionTrue = orginalArr.some(function (number) {
//   //some vraća ili tru ili false proverava uslov na svakom članu i ako je bar na jednom tru vraća true
//   // return number + 100;
//   // return number === 100;
//   // return number === 5;
//   // return number % 10 === 0;
// });

// const isConditionTruee = orginalArr.every(function (number) {
//   //samo ako je evry tačan dobićemo true samo ako je uslov tačan na svakom članu ako bar na jednom nije tačno doijamo false dali svi članovi niza ispunjavaju uslov ako ima bar jedan fals sve je false
//   // return false;
//   // return typeof number === 'number';
//   // return `${number}.length` === 1;
// });

// console.log(isConditionTruee);
