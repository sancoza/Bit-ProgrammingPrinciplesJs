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

// for (var i = 0; i < 1000; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// 3.Write a program to compute the sum and product of an array of integers.

// var array = [1,2,3,4,5,6];
// sum=0;
// product=1;
// for ( i = 0; i < array.length; i++) {
// sum += array[i];//1+2+3+4+5+6
// product *= array[i];//1*2*3*4*5*6
// }
// console.log("Sabiranje: "+ sum + " Množenje " + product);

// 4. Write a program which prints the elements of the following array as a single string.

// var x = ['1','A','B','c','r', true, NaN, undefined];
// var element="";

// for (i =0; i < x.length; i++) {
//   element += " " + x[i];
// }
// console.log(element);

// 5. Write a program that prints the elements of the following array.

// var a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27]
//   ];

// var element="";

//   for (i = 0; i < a.length; i++) {
// for(var j=0; j < a[i].length; j++){
//   element += a [i][j] + " ";
// }
//   }
//   console.log(element);

// 6. Write a program that outputs the sum of squares of the first 20 numbers.

// var sum = 0;

// for (i = 0; i <= 20; i++) {
//   sum = sum + i * i;
// }
// console.log("The sum of squares of  the first 20 number is " + sum);

// 7. Write a program that computes average marks of the following students. Then use this
// average to determine the corresponding grade.

// var students = [
//   ["David", 80],
//   ["Marko", 70],
//   ["Dany", 88],
//   ["John", 95],
//   ["Thomas", 68]
// ];

// var avggrade = 0;
// for (var i = 0; i < students.length; i++){
//     avggrade += students [i][1];
//     var avg = (avggrade/students.length);
// }
// console.log("Average grade: " + avg);
// if (avg < 60){
//     console.log("Grade: F");
// }
// else if (avg < 70){
//     console.log("Grade: D");
// }
// else if (avg < 80){
// console.log("Grade: C");
// }
// else if (avg < 90){
//     console.log("Grade: B");
// }
// else if (avg < 100){
//     console.log("Grade: A");
// }
// 8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print Fizz; instead of the number, and for numbers
// divisible by 5 (and not 3), print Buzz instead. When you have that working, modify your
// program to print FizzBuzz, for numbers that are divisible by both 3 and 5 (and still print
// Fizz or Buzz for numbers divisible by only one of those).

// for (i = 1; i < 10; i++) {
//   if ( i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizz Buzz");
//   }else if (i % 3 === 0) {
//     console.log("Fizz");
//   }else if ( i % 5 === 0) {
//     console.log("Buzz");
//   }else {
//     console.log(i);
//   }
// }
