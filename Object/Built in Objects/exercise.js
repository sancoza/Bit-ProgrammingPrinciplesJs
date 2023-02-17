// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

// function duplicate (arr) {
//   var newArr= [];
//   for (var i = 0; i < arr.length; i++) {
//     newArr.push(arr[i], arr[i])
// }
// return newArr;
// }

// console.log(duplicate([2,4,7,11,-2,1]));

// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

// var p = function removeDuplicates(array) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i++) {
//       if (newArray.indexOf(array[i]) === -1) {
//           newArray.push(array[i])
//       }
//   }
//   return newArray;
// }

// console.log(p([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]))

// 3.
// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

// function checkIfOdd(array) {
//   if (array.length % 2 !== 0) {
//       return true
//   } else {
//       return false
//   }
// }

// console.log(checkIfOdd([1, 2, 9, 2, 1]))

// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

// function countLessThanMiddle(array) {
//   var count = 0;
//   if (array.length % 2 === 0) {
//       return "Error";
//   }
//   var middleEl = array[Math.floor(array.length / 2)];
//   for (var i = 0; i < array.length; i++) {
//       if (array[i] < middleEl) {
//           count++;
//       }
//   }
//   return count;
// }

// console.log(countLessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]))

// 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

// function getSmallest(array) {
//   var minValue = Math.min(...array);
//   var minLastIndex = array.lastIndexOf(minValue);
//   var outputObject = {minvalue: minValue, minLastIndex: minLastIndex};
//   return outputObject;
// }

// console.log(getSmallest([1, 4, -2, 11, 8, 1, -2, 3]))

// 5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

// function findAllSmaller(array, e) {
//   newArray = [];
//   for (var i = 0; i < array.length; i++) {
//       if (array[i] < e) {
//           newArray.push(array[i])
//       }
//   }
//   return newArray
// }

// console.log(findAllSmaller([2, 3, 8, -2, 11, 4], 6))

// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

// function findPro(array) {
//   var newArray = [];
//   var string = array.join(" ");
//   for (var i = 0; i < array.length; i++) {
//       string = array[i].toLowerCase();
//       if (string.startsWith("pro")) {
//       newArray.push(array[i]);
//       }
//   }
//   return Array.from(newArray)
// }

// console.log(findPro(["JavaScript", "Programming", "fun", "product"]))

// c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.

// function filterElements (array, cb) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i++) {
//       if (cb(array[i])) {
//           newArray.push(array[i]);
//       }
//   }
//   return newArray;
// }

// console.log(filterElements([2, 3, 8, -2, 11, 4], function(e) {return e < 6}))
// console.log(filterElements(["JavaScript", "Programming", "fun", "product"], function(e) {return e.toLowerCase().startsWith("pro")}))

// 6.
// a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [

// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]
// b. Write a function that calculates the total price of your shopping list.

// c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.

// d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.

// var array = [
//   {name: "bread", price: 78.9249},
//   {name: "butter", price: 239.8664},
//   {name:"cheese", price: 430.7868}
// ]
// function calculateTotal(array) {
//   var total = 0;
//   array.forEach(element => {
//       total += element.price
//   });
//   return total;
// }

// console.log(calculateTotal(array));

// function getAverage(array) {
//   var average = 0;
//   array.forEach(element => {
//       average += element.price / array.length;
//   });
//   return average.toFixed(3);
// }

// console.log(getAverage(array));

// function getMax(array) {
//   var max = 0;
//   array.forEach(element => {
//       max = Math.max(element.price);
//   });
//   var maxItem = array.find((element) => element.price === max);
//   return maxItem.name.toUpperCase();
// }

// console.log(getMax(array));

// 7.
// a. Write a function that checks if a given string is written in all capitals.
// b. Write a function that checks if a given string contains any digits.
// c. Write a function that checks if a given string is a valid hexadecimal color.
// d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.
// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).*/

// function checkWriting(string) {
//     return string === string.toUpperCase()
// }
// console.log(checkWriting("BANANAS"))

// function searchDigits(string) {
//     var r = /\d+/
//     return string.search(r) !== -1;
// }
// console.log(searchDigits("500 Bananas"))

// function isValidColor(str) {
//     return str.match(/^#([0-9a-f]{3}){1,2}$/i) !== null;
// }
// console.log(isValidColor("#FFF"))

// function checkInterval(n) {
//     return n > 1900 && n < 2018
// }
// console.log(checkInterval(2011))

// function Validator(str, pw, color, year) {
//     this.stringValidator = str;
//     this.passwordValidator = pw;
//     this.colorValidator = color;
//     this.yearValidator = year;
// }

// var check = new Validator(checkWriting, searchDigits, isValidColor, checkInterval);

// console.log(check);
// console.log(check.stringValidator("MAU"))
// console.log(check.passwordValidator("23fsd"))
// console.log(check.colorValidator("#FFF000"))
// console.log(check.yearValidator(2017))

// 8. Write a function that calculates a number of days to your birthday.

// Input: 25 February
// Output: 5 days

// var birthday = new Date('6/20/2023');
// var today = new Date();

// function calculateDays(birthday, today) {
//     var difference = birthday.getTime() - today.getTime();
//     var daysUntil = Math.ceil(difference / (1000 * 3600 * 24));
//     return daysUntil;
// }

// console.log(calculateDays(birthday, today) + " days")

// 9. Write a function that for a given departure and arrival time calculates the time the trip
// takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds

// function tripTime(start, end) {

//   var departure = new Date(start);
//   var arrival = new Date(end);
//   var timeDiff = arrival.getTime() - departure.getTime();

//   var hours = timeDiff / 1000 / 60 / 60;

//   var min = hours * 60 - Math.round(hours) * 60

//   var sec = min * 60 - Math.round(min) * 60;

//   return Math.round(hours) + " hours " + Math.round(min) + " minutes " + Math.round(sec) + " seconds";
// }

// console.log(tripTime('2022-11-12T08:22:13', '2022-11-12T11:43:22'));

// 10.
// a. Write a constructor function that creates points in space. Each point in space has
// its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
// b. Write a function that calculates the distance between two points in the space.

// function Coordinates(x, y, z) {
//   this.xAxis = x;
//   this.yAxis = y;
//   this.zAxis = z;
// }

// var k = new Coordinates(3, 5, 1);
// console.log(k)

// function calculateDistance(p1, p2) {
//   var a = p2.x - p1.x;
//   var b = p2.y - p1.y;
//   var c = p2.z - p1.z;
//   return Math.hypot(a, b, c);
// }

// var distance = calculateDistance({x: 5, y: 8, z: 1}, {x: 4, y: 9, z: 2});
// console.log(distance)

// 11.
// a. Write a function that generates a random integer value between 5 and 20.
// b. Write a function that generates a random integer value between 50 and 100.
// c. Write a function which expects a number and a callback generator function and
// returns an array of numbers produced by the generator function.

// function generateRandomInt(min, max) {
//   var difference = max - min;
//   var randomNr = Math.random();
//   randomNr = Math.floor( randomNr * difference);
//   randomNr = randomNr + min;
//   return randomNr;
// }

// console.log(generateRandomInt(5, 20))
// console.log(generateRandomInt(50, 100))

// function generateRandomArray(number) {
//   var array = [];
//   for (var i = 0; i < number; i++) {
//   array.push(Math.round(Math.random() * number))
//   }
//   return array;
// }

// console.log(generateRandomArray(6))

// 12. Write a function that shuffles the elements of a given array.

// Input: [3, 6, 11, 2, 9, 1]

// Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)

// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));
//       var temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//   }
//   return array;
// }

// console.log(shuffleArray([3, 6, 11, 2, 9, 1]))

// 13.  Create a new JavaScript file and put these two arrays at the beginning. You will write a single function that performs many operations on them.

// var fruit = ["banana", "apple", "orange", "watermelon"];
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
// // After every command, use console.log() to inspect your arrays. A good way to do that is to do something like:
// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

//1 Remove the last item from the vegetable array.
//2 Remove the first item from the fruit array.
//3 Find the index of "orange."
//4 Add that number to the end of the fruit array.
//5 Use the length property to find the length of the vegetable array.
//6 Add that number to the end of the vegetable array.
//7 Put the two arrays together into one array. Fruit first. Call the new Array "food".
//8 Remove 2 elements from your new array starting at index 4 with one method.
//9 Reverse your array.
//10 Turn the array into a string and return it.

// If you've done everything correctly, the last step should print the following string to the console:

// 3,pepper,1,watermelon,orange,apple

// var fruit = ["banana", "apple", "orange", "watermelon"];
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
// var food = fruit.concat(vegetables);

//1. fruit.pop();
//2. fruit.shift();
//3. var indexOf = fruit.indexOf('orange');
//   console.log(indexOf);
//4. console.log(fruit.push(5));
//5. console.log(vegetables.length);
//6. console.log(vegetables.push(5));
//7. var food = fruit.concat(vegetables);
//   console.log('food: ', food);
//8. food.splice(4,1);
//   console.log(food);
//9. fruit.reverse();

// fruit.toString();
// console.log(food);

// console.log('fruit: ', fruit);
// console.log('vegetables: ',vegetables);
