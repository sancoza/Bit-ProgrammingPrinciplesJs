// 1. Write a function that checks if a given string contains digit 5.
// Input: “1b895abd”
// Output: true
// Input: “1bser9re”
// Output: false

// function containsDigit (string, digit){
//   for( var i=0; i< string.length; i++){
//       if(string[i] == digit){
//           return true;
//       }
//   }
//   return false;
// }
// result=containsDigit("1b895abd",5);
// console.log(result);

// function containing (string, digit){
//   return function inner(){
//       for( var i=0; i< string.length; i++){
//           if(string[i]==digit){
//               return true;
//           }
//       }
//       return false;
//   }
// }
// result=containing("1b895abd",5)();
// console.log(result);

// 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with
// ‘**’.
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

// function replace(string,find){
//   var word="";
//   var array=[];
//   var newString="";
//   for(var i=0; i < string.length; i++){
//       if(i===string.length-1){
//           word=word + string[i];
//           array[array.length]=word;
//       }else if(string[i] !== " "){
//           word=word + string[i];
//       }else{
//           array[array.length]=word;
//           word="";
//       }
//   }
//   for (var j=0; j<array.length;j++){
//       if(find===array[j]){
//           array[j]="";
//           for (var k=0; k<find.length;k++){
//               array[j]+="*";
//           }
//       }
//   }
//   for(var i=0; i<array.length; i++){
//      if(i!==array.length-1){
//       newString+=array[i];
//       newString+=" ";
//       }else{
//       newString+=array[i];
//       }
//   }
//   return newString;
// }
// result=replace("Programming in JS is super interesting!","JS");
// console.log(result);

// 3. Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’
// Output: “Good morning”

// function insert(string, char, pos) {
//   var res = "";
//   for (i = 0; i < string.length; i++) {
//       if (i === pos - 1) {
//           res += char;
//       }
//       res += string[i];
//   }
//   return res;
// }
// console.log(insert("Goo morning", "d", 4));

// 4. Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”

// function deleteChar(string, position) {
//   var res = "";
//   for (var i = 0; i < string.length; i++) {
//       if (i === position) {
//           continue;
//       }
//       res += string[i];
//   }
//   return res;
// }
// console.log(deleteChar("Goodd morning!", 3));

// 5. Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]

// function deleteEverySecondEl(array) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i += 2) {
//       newArray[newArray.length] = array[i];
//   }
//   return newArray;
// }
// console.log(deleteEverySecondEl([3, 5, 1, 8, 90, -4, 23, 1, 67]));

// 6. Write a function that replaces the elements of the given array between two positions with
// their doubled values.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]

// function replaceElements(array, position, numOfElements) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i++) {
//       if (i >= position && i < numOfElements + position-1) {
//           newArray[i] = array[i] *2;
//       }else {
//           newArray[i] = array[i];
//       }
//   }
//   return newArray;
// }
// console.log(replaceElements([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 ));

// 7. Write a function that checks if every element of the first array is contained in the second
// array. Be careful with repetitions!
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true

// var checkIfContain = (function check(firstArray, secondArray){
//   var foundChar = 0;
//   for (var i = 0; i < firstArray.length; i++){
//       for (var j = 0; j < secondArray.length; j++){
//           if (firstArray[i] === secondArray[j]){
//               foundChar++;
//               break;
//           }
//       }
//   }
//   return (foundChar === firstArray.length) ? console.log('true') : console.log('false');
// })([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]);

// 8. Write a function that sorts an array of strings by the number of appearances of the letter
// ‘a’ or ‘A’.
// Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]

// var howManyAInString = (function (string) {
//   var countA = 0;
//   for (var i = 0; i < string.length; i++) {
//       if (string[i] === 'a' || string[i] === 'A') {
//         countA++;
//       }
//   }
//   return countA;
// });
//var arar = ['morning', 'tea',  'apple','amazing , 'JavaScript'];
//console.log(howManyAInString(arar[2]))

// function sortByAppearances(arrayOfStrings) {
// var tempString;
// for (var i = 0; i < arrayOfStrings.length-1; i++) {
//   for (var j = 1; j < arrayOfStrings - i; j++) {
//     console.log(i,j)
//     if (howManyAInString(arrayOfStrings[i]) > howManyAInString(arrayOfStrings[j])) {

//       tempString = arrayOfStrings[i];
//       arrayOfStrings[i] = arrayOfStrings[j];
//       arrayOfStrings[j] = tempString;
//     }
//   }
// }
// return arrayOfStrings;
// };

// console.log(sortByAppearances(['apple', 'tea', 'amazing', 'morning', 'JavaScript']))

// 9. Write a function that prints out the date of the next day.
// Output: 25. 10. 2018.

// function printNextDay (string) {
//   var day = parseInt(string[0] + string[1]);
//   var month = parseInt(string[4] + string[5]);
//   var year = parseInt(string[8] + string[9] + string[10] + string[11]);
//   var monthLength = 31;
//   var leapYearDay = 0;
//   // check if leap year
//   if (year%4 === 0 && (year%400 === 0 || year%100 !== 100)) {
//     leapYearDay = 1;
//   }
//   switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//     monthLength = 31;
//     break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//     monthLength = 30;
//     break;
//     case 2:
//     monthLength = 28 + leapYearDay;
//     break;
//   }
//     if ((day + 1) > monthLength) {
//       day = '01';
//       month++;
//     }
//     else {
//       day++;
//     };
//     if (month > 12) {
//       month = '01';
//       year++;
//     }
//   console.log('' + day + '. ' + month + '. ' + year + '.');
// }

// printNextDay('26. 11. 2022.');

// 10. Write a function that prints out the date of the previous day.
// Output: 23. 10. 2018.

// function printPreviousDay (string) {
//   var day = parseInt(string[0] + string[1]);
//   var month = parseInt(string[4] + string[5]);
//   var year = parseInt(string[8] + string[9] + string[10] + string[11]);
//   var leapYearDay = 0;
//   // check if leap year
//   if (year%4 === 0 && (year%400 === 0 || year%100 !== 100)) {
//     leapYearDay = 1;
//   }
//     if ((day - 1) === 0) {
//       switch (month) {
//       case 1:
//       day = 31;
//       month = 12;
//       year--;
//       break;
//       case 3:
//       day = 28 + leapYearDay;
//       month--;
//       break;
//       case 5:
//       case 7:
//       case 10:
//       case 12:
//       day = 30;
//       month--;
//       break;
//       case 2:
//       case 4:
//       case 6:
//       case 8:
//       case 9:
//       case 11:
//       day = 31;
//       month--;
//       break;
//     }
//     }
//     else {
//       day--;
//     }
//   console.log('' + day + '. ' + month + '. ' + year + '.');
// }

// printPreviousDay('26. 11. 2022.');

// 11. Write a function that prints out an array of the numbers aligned from the right side.
// Input: [78, 111, 4, 4321]
// Output:
// 78
// 111
// 4
// 4321

// function printArray(array) {
//   var res = "",
//       temp = [],
//       maxi = "",
//       blank = 0;

//   for (var i = 0; i < array.length; i++) {
//       temp[i] = array[i] + "";
//       if (temp[i].length > maxi.length) {
//           maxi = temp[i];
//       }
//   }

//   for (var i = 0; i < temp.length; i++) {
//       blank = maxi.length - temp[i].length;
//       var tabs = '';
//       for (k = 0; k < blank; k++) {
//           tabs += " ";
//       }
//       res += tabs + temp[i];
//       res += '\n';
//   }
//   return res;
// }
// console.log(printArray([78, 111, 4, 4321]));
