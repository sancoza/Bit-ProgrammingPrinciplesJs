// 1.Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.

// for ( var x =0; x<15; x++) {
//   if(x === 0) {
//     console.log(x + "is even");
//   }else if ( x % 2 === 0) {
// console.log(x + "is even");
//   }else {
//     console.log(x + "is odd");
//   }
// }

// 2. Write a program to sum the multiples of 3 and 5 under 1000.

// var sum = 0;

// for (var a = 0; a < 1000; a++) {
//   if (a % 3 === 0 || a % 5 === 0) {
//     sum += a;
//   }
// }
// console.log(sum);

// 3.Write a program to compute the sum and product of an array of integers.

// var array = [1, 2, 3, 4, 5],
//   b = 0,
//   c = 1,
//   i;
// for (i = 0; i < array.length; i += 1) {
//   b += array[i];
//   c *= array[i];
// }
// console.log('Sum : ' + b + ' Product : ' + c);

// 4. Write a program which prints the elements of the following array as a single string.

// var x = ['1', 'A','B', 'c', 'r', true, NaN, undefined];

// for ( var i in x) {
//   console.log("row" + i);
//   for (var b in x[i]) {
//     console.log(" " + x[i][b]);
//   }
// }

// 5. Write a program that prints the elements of the following array.

// var a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
// ];

// for ( var i in a) {
//   console.log("row" + i);
//   for (var b in a[i]) {
//     console.log(" " + a[i][b]);
//   }
// }

// 6. Write a program that outputs the sum of squares of the first 20 numbers.
// var number = 20;
// var sum = 0;

// for ( var i = 1; i <= number; i++) {
//   sum += i;
// }

// console.log('The sum of first 20 number: ', sum);

// 7. Write a program that computes average marks of the following students. Then use this
// average to determine the corresponding grade.

// var students =[['David', 80],['Marko', 77],['Dany',88],['John', 95], ['Thomas',68]];
// var averageMarks =0;

// for ( var i = 0; i < students.length; i++) {
//   averageMarks += students[i][1];
//   var average = ( averageMarks/students.length);
// }
// console.log("Average grade: " + (averageMarks)/students.length);

// if ( average < 60) {
//   console.log("Grade: F");
// }else if (average < 70){
//   console.log("Grade: D");
// }else if (average < 80) {
//   console.log("Grade : C");
// }else if ( average < 90) {
//   console.log( "Grade : B");
// }else if ( average < 100) {
//   console.log("Grade : A");
// }

// 8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print Fizz; instead of the number, and for numbers
// divisible by 5 (and not 3), print Buzz instead. When you have that working, modify your
// program to print FizzBuzz, for numbers that are divisible by both 3 and 5 (and still print
// Fizz or Buzz for numbers divisible by only one of those).

// for (var number = 1; number <= 100; number++) {
//   if (number % 3 == 0 && number % 5 == 0) {
//     console.log('FizzBuzz');
//   } else if (number % 3 == 0) {
//     console.log('Fizz');
//   } else if (number % 5 == 0) {
//     console.log('Buzz');
//   } else {
//     console.log(number);
//   }
// }


