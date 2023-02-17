// // function logThis(a) {
// //   console.log(a,this);
// // }

// // logThis(22);

// var user = {
//   firstName: 'Dario',
//   lastName: 'Stamenkovic',
//   sayHello: function (greeting, punctuation) {
//     console.log(greeting + ' ' + this.firstName + punctuation);
//   },
// };

// var obj = {
//   firstName: 'Marko',
// };

// // logThis.call(user,33);
// // user.sayHello('Vozdra');

// // user.sayHello.call(obj, 'Vozdra', '!');

// // bind kreira novu funkciju

// var newFunction = user.sayHello.bind(obj, 'Hello', '.');

// newFunction();

// function logThis() {
//   console.log(this);
//   function logAnotherThis () {
//     console.log(this);
//     }
//     logAnotherThis.call(this);
// }

// var obj = {test:'cao'};

// logThis.call(obj);

// var car = {
//   registrationNumber :' NS1234',
//   brand: 'Toyota',
//   details: function() {
//     console.log(this.registrationNumber + ' ' + this.brand);
//   }
// }

// car.details();

// var newDeatild = car.details.bind(car);
// newDeatild();

// var car = {
//   registrationNumber :' NS1234',
//   brand: 'Toyota',
//   details: function(ownerName) {
//    console.log(ownerName + ', this is your car: '+ this.registrationNumber + ' ' + this.brand);
//   }
// }

// var myCar = car.details.bind(car,'Sandra');
// myCar();

// var car = {
//   registrationNumber: 'NS1234',
//   brand: 'Toyota'
// }

// function details(ownerName) {
//   console.log(ownerName + ' this is your car: ' + this.registrationNumber + ' ' + this.brand);
// }

// details.apply(car, ['Sandra']);
// details.call(car,'Sandra');

// function numbers (a,b,c) {
//   console.log(this);
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// numbers.call(1,[2,3,4]);

// function sumOfNumbers () {
//   var total= 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// // var sum = sumOfNumbers(1,2,3);
// // var sum = sumOfNumbers.call(1,2,3);
// var number = [1,2,3];
// var sum = sumOfNumbers.apply(null,number);

// console.log(sum);

// var updateZipCode = function () {
//   console.log(this);
// }
// updateZipCode.call({zip:'1234'});

// var updateZipCode = function (newZip,country) {
//   console.log(newZip + ' ' + country);
// }

// var zipCode = {
//   tip:'1234'
// };

// updateZipCode.call(zipCode,'5678','Serbia');

// var zipcode = {
//     checkZipcode : function() {
//         console.log(this);
//         var updateZipCode = function() {
//             console.log(this);
//         }.bind(this);
//         updateZipCode();
//     }
// }
// zipcode.checkZipcode();

// var person = {
//   name : "Jack",
//   prop : {
//       name : "Daniel",
//       getName : function() {
//           return this.name;
//       }
//   }
// }

// var name = person.prop.getName.bind(person);
// console.log(name());

// var  name = person.prop.getName();
// console.log(name);
