// function Person(name, surname) {
//   this.name = name;
//   this.surname = surname;
// }
// Person.prototype.fullName = function () {
//   return this.name + ' ' + this.surname;
// };

// Person.prototype.printInfo = function () {
//   console.log(this.fullName());
// };

// var pera = new Person('Pera', 'Peric');

// console.log(pera);
// pera.printInfo();

// // this.printInfo = function() {
// //   console.log()
// // } ovako smo pre radili sad koristimo prototype

// // nasledjivanje programer od person

// function Programer(name, surname, favoriteLanguage) {
//   Person.call(this, name, surname);
//   this.favoriteLanguage = favoriteLanguage;
// }

// // programerPera.printInfo(); dobijamo eror proces nasledjivanja nije kompletan nije nasledio ceo prototyipe.Mora ovako:
// // create kreira objekat na onovu prototipa koji mu dajemo

// Programer.prototype = Object.create(Person.prototype);

// Programer.prototype.constuctor = Programer;

// Programer.prototype.printInfo = function () {
//   console.log(
//     this.fullName() + ' , favorite language: ' + this.favoriteLanguage
//   );
// };

// var programerPera = new Programer('Pera', 'Peric', 'JS');
// console.log(programerPera);
// programerPera.printInfo();
// console.log(programerPera.constuctor);

/****************************************************/

// function Person(name, surname) {
//   this.name = name;
//   this.surname = surname;
// }
// Person.prototype.fullName = function () {
//   return this.name + ' ' + this.surname;
// };

// Person.prototype.printInfo = function () {
//   console.log(this.fullName());
// };ovo se skraceno pise ovako:

// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   fullName() {
//     return this.name + ' ' + this.surname;
//   }
//   printInfo() {
//     console.log(this.fullName());
//   }
// }

// var pera = new Person('Pera', 'Peric');

// console.log(pera);
// pera.printInfo();

/************************************************************************/
// function Programer(name, surname, favoriteLanguage) {
//   //   Person.call(this, name, surname);
//   //   this.favoriteLanguage = favoriteLanguage;
//   // }

//   // // programerPera.printInfo(); dobijamo eror proces nasledjivanja nije kompletan nije nasledio ceo prototyipe.Mora ovako:
//   // // create kreira objekat na onovu prototipa koji mu dajemo

//   // Programer.prototype = Object.create(Person.prototype);

//   // Programer.prototype.constuctor = Programer;

//   // Programer.prototype.printInfo = function () {
//   //   console.log(
//   //     this.fullName() + ' , favorite language: ' + this.favoriteLanguage
//   //   );
//   // };ovo dole menja ovo:

// class Programer extends Person {
//   constructor(name, surname, favoriteLanguage) {
//     super(name, surname);
//     this.favoriteLanguage = favoriteLanguage;
//   }
//   printInfo() {
//     console.log(
//       super.fullName() + ' , favorite language: ' + this.favoriteLanguage
//     );
//   }
// }

// var programerPera = new Programer('Pera', 'Peric', 'JS');
// console.log(programerPera);
// programerPera.printInfo();
// console.log(programerPera.constuctor);
