'use strict';
// 1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

// (function replace(arr) {
//   var index = 0,
//     index2 = 0,
//     arr1 = arr[0],
//     arr2 = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0) {
//       arr1 = arr[arr.length - 1];
//       index = i;
//     }
//     if (i === arr.length - 1) {
//       arr2 = arr[0];
//       index2 = i;
//     }
//   }
//   arr[index] = arr1;
//   arr[index2] = arr2;

//   return console.log(arr);
// })([4, 5, 11, 9]);

// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20

// (function calcSurface (a,b) {
//   return console.log(a*b);
// })(4,5);

// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements.
// Input: prograMming
// Output: progra**ing, 2

// (function replaceAppLetter() {
//   var res = "",
//       newArray = [],
//       counter = 0,
//       string = 'prograMming';

//   for (var i = 0; i < string.length; i++) {
//       newArray[newArray.length] = string[i];
//       if (string[i] === 'm'|| string[i] === 'M') {
//           newArray[i] = '*';
//           counter++;
//       }
//       res += newArray[i];
//   }
//   return console.log(res + ", " + counter);
// }) ("prograMming", "m", "*");

// 4. Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com

// (function suggestEmail (name,surname) {
//   return function () {
//     console.log(name + '.' + surname + '@gmail.com');
//   }
// })('sandra','balog')();

// 5. Write a function that returns a function that calculates a decimal value of the given octal
// number.
// Input: 034
// Output: 28

// (function calculateDec() {
//   return function(octal) {
//       console.log(parseInt(octal, 8));
//   }
// })()("034");

// 6. Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
// Input: JSGuru123
// Output: Your password is cool!

// proverite da li je string validan password
// ako jeste, pozovete successCallback
// ako nije, pozovete errorCallback
// function success() {
//   console.log("Success")}

// (function checkPW(password, successCallback, errorCallback) {
//   var digits = ["0", "1", " 2", "3", "4", "5", "6", "7", "8", "9"];
//   for (i = 0; i < password.length; i++) {
//       for (j = 0; j < digits.length; j++) {
//           if (password.length >= 6 && password[i] === digits[j]) {
//               return successCallback();
//           }
//       }
//   }
//   return errorCallback();
// })("JS1234vs3", function() { console.log("Your password is cool") }, function() { console.log("Your password is invalid") });

//Sonja version:

function succesCallback() {
  console.log('Paswword ok');
}

function errorCallback() {
  console.log('Paswword invalid');
}

function isValid(password) {
  if (password.length < 6) {
    return false;
  }
  for (let i = 0; i < password.length; i++) {
    var nextCharacter = parseInt.password[i];
    if (Number.isNaN(nextCharacter)) {
      return true;
    }
  }
  return false;
}

function mainFunction(password, success, error) {
  if (isValid(password)) {
    success();
  } else {
    error();
  }
}

mainFunction('ggggg6', succesCallback, errorCallback);

// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

// (function filter(array, action) {
//   var filteredArray = [];
//   for (var i = 0; i < array.length; i++) {
//     if(action(array[i])) {
//       filteredArray[filteredArray.length] = array[i];
//     }
//   }
//   return console.log(filteredArray);
// })([2, 8, 11, 4, 9, 3], function(a) { return a % 2 !== 0; });
