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
