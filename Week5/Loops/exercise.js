// 1.Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.

// for (var i = 0; i < 15; i++ ) {
//   if ( i % 2 === 0) {
//     console.log(i + "is even");
//   }else {
//     console.log(i + "odd");
//   }
// }


// 2. Write a program to sum the multiples of 3 and 5 under 1000.

// var sum =0;

// for ( var i = 0; i < 1000; i++) {
//   if (i % 3 === 0 && i % 5 === 0 ) {
//     sum += i;
//   }
// }
// console.log(sum);

// 3.Write a program to compute the sum and product of an array of integers.

// var array = [1,2,3,4,5,6];

// var sum = 0;
// var product = 1;

// for ( i = 0; i < array.length; i++) {
//   sum += array[i];
//   product *= array[i];
// }
// console.log(sum,product);

// 4. Write a program which prints the elements of the following array as a single string.

// var x = ['1','A','B','c','r', true, NaN, undefined];
// var el="";
// for (var i = 0; i < x.length; i++) {
//    el += " " + x[i];
// }
// console.log(el);

// 5. Write a program that prints the elements of the following array.

// var a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27]
//   ];

//   var el ="";

//   for (i = 0; i < a.length; i++) {

//   for ( j = 0; j < a[i].length; j++) {
//    el += " " + (a[i][j]);
//   }
//   }
//   console.log(el);

// 6. Write a program that outputs the sum of squares of the first 20 numbers.

// var sum = 0;

// for (i = 0; i <= 20; i++) {
//   sum = sum + i * i;
// }
// console.log("The sum of squares of  the first 20 number is " + sum);

// 7. Write a program that computes average marks of the following students. Then use this
// average to determine the corresponding grade.

// var sum=0;

// for (let i = 0; i <= 20; i++) {
//   sum += i*i;
// }
// console.log(sum);

// var array = [
//   ['David',80],
//   ['Marko', 77],
//   ['Dany',88],
//   ['John',95],
//   ['Thomas', 68]
// ];
// var ocena =0;

// for ( i = 0; i < array.length; i++) {
//   ocena += array[i][1];
// }
// var avg= (ocena/array.length);

// if(avg < 60) {
//   console.log("F");
// }else if (avg < 70) {
//   console.log("D");
// }else if ( avg < 80) {
//   console.log("C");
// }else if ( avg < 90) {
//   console.log("B");
// }else if (avg < 100) {
//   console.log("A");
// }
// 8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print Fizz; instead of the number, and for numbers
// divisible by 5 (and not 3), print Buzz instead. When you have that working, modify your
// program to print FizzBuzz, for numbers that are divisible by both 3 and 5 (and still print
// Fizz or Buzz for numbers divisible by only one of those).

// for (i = 0; i < 20; i++) {
//   console.log(i);
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('Fizz buzz');
//     continue;
//   }
//   if (i % 3 === 0) {
//     console.log('Fizz');
//     continue;
//   }
//   if (i % 5 === 0) {
//     console.log('Buzz');
//     continue;
//   }
// }
