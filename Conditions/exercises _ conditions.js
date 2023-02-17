//*** EXERCISES CONDITIONS
// Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
// result in the console with the specified sign.
// Sample numbers: 3, -7, 2
// Output: The sign is -

//         var a = 3;
//         var b= -7;
//         var c = 2;

//         var result = a*b*c;

//         if (result > 0 ) {
//           console.log('The sign is +');
//         }else {
//         console.log('The sign is -');
//         }

// Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
// Sample numbers: -5, -2, -6, 0, -1
// Output: 0

// a=-5;
// b=-2;
// c=-6;
// d= 0;
// f=-1;
// if (a>b && a>c && a>d && a>f)
// {
//     console.log(a);
// }
// else if (b>a && b>c && b>d && b>f)
// {
//     console.log(b);
// }
// else if (c>a && c>b && c>d && c>f)
// {
//     console.log(c);
// }
// else if (d>a && d>c && d>b && d>f)
// {
//     console.log(d);
// }
// else
// {
//     console.log(f);
// }

// Task 3. Write a conditional statement to print three numbers as sorted number list.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

// var x= 4;
// var y=0;
// var z= -1;
// if (x>y && x>z)
// {
//         if (y>z)
//         {
//             console.log(x + ", " + y + ", " +z);
//         }
//         else
//         {
//             console.log(x + ", " + z + ", " +y);
//         }
// }
// else if (y>x && y >z)
// {
//         if (x>z)
//         {
//              console.log(y + ", " + x + ", " +z);
//         }
//         else
//         {
//              console.log(y + ", " + z + ", " +x);
//         }
// }
// else if (z>x && z>y)
// {
//         if (x>y)
//         {
//             console.log(z + ", " + x + ", " +y);
//         }
//         else
//         {
//             console.log(z + ", " + y + ", " +x);
//         }
// }

// Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”. Sample input: 10 Sample input: 7
// Output: 10 / 2 = 5 Output: X

// var number = 10;
// var number1=7;
// var result = number / 2;

// if(number % 2 === 0) {
//   console.log(result);
// }else{
//   console.log('X');
// }
// if(number1 % 2 === 0) {
//   console.log(result);
// }else{
//   console.log('X');
// }
// console.log(typeof number);

// Task 5. Write a program that compares two numbers and displays the larger. Display the result in
// the console.

// var num1= 2;
// var num2 =5;

// if(num1 > num2) {
//   console.log('num1 is larger');
// }else if (num2 > num1) {
//   console.log('num2 is larger');
// }

// Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32  where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Sample Input: 60°C
// Output : 60°C is 140 °F

// var celsius = 60;

// var celsiusTofahrenheit = (9* celsius/5) + 32 ;

// var fahrenheitTocelsius= (celsiusTofahrenheit -32) * 5 / 9;

// console.log(celsiusTofahrenheit);
// console.log(fahrenheitTocelsius);

//   Task 7. Write a JavaScript program to get the difference between a given number and 13, if
// the number is greater than 13 return double difference between that number and 13.
// Sample Input: 11 Sample Input: 32
// Output : 2 Output : 38

// a=11;
// b=32;
// if(a <= 13) {
//   console.log(13- a);
// }else if( a >= 13) {
//   console.log((a-13) *2);
// }
// if(b <= 13) {
//   console.log(13- b);
// }else if( b >= 13) {
//   console.log((b-13) *2);
// }

// Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
// values are same, then returns triple their sum.
// Sample Input: 12,5 Sample Input: 8,8
// Output : 17 Output : 48

// var a=12, b=5;
// if (a===b) {
//     console.log((a+b)*3)
// } else {
//     console.log(a+b)
// }
// var a=8, b=8;
// if (a===b) {
//     console.log((a+b)*3)
// } else {
//     console.log(a+b)
// }

// Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
// the number is 50 or if their sum is 50.
// Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10
// Output : - Output : true Output : true

// var a=5, b=54;
// if (a===50 || b===50 || a+b===50) {
//     console.log("true")
// }
// var a=6, b=50;
// if (a===50 || b===50 || a+b===50) {
//     console.log("true")
// }
// var a=40, b=10;
// if (a===50 || b===50 || a+b===50) {
//     console.log("true")
// }

// Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.
// Sample Input: 13 Sample Input: 34 Sample Input: 256
// Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400

// a = 13;
// b = 34;
// c = 256;

// if(20 >= a <= 100) {
// console.log('-');
// }else {
//   console.log('20⇔ 100');
// }

// if(20 <=  b <= 100) {
//   console.log('20⇔ 100')
// }else {
//   console.log('-');
// }

// if (20 <= c <= 100) {
//   console.log('100 ⇔ 400');
// } else {
//   console.log('-');
// }
