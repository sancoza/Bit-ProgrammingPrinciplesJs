// //exercise 1 2
// var day=7;
// switch (day) {
//   case 1 : day='Monday';
//   break;
//   case 2 : day='Tusday';
//   break;
//   case 3 : day ='Wednesday';
//   break;
//   case 4 : day ='Thursday';
//   break;
//   case 5 : day = 'Friday';
//   break;
//   case 6 : day = 'Saturday';
//   break;
//   case 7 : day = 'Sunday';
//   break;
//   default:
//     day="Input must be a number between 1 and 7";
//     break;
// }
// console.log(day);

// // exercise 3

// switch (day) {
//   case 1 : day=`It's weekday`;
//   break;
//   case 2 : day=`It's weekday`;
//   break;
//   case 3 : day=`It's weekday`;
//   break;
//   case 4 : day=`It's weekday`;
//   break;
//   case 5 : day=`It's weekday`;
//   break;
//   case 6 : day = `It's weekend`;
//   break;
//   case 7 : day = `It's weekend`;
//   break;
//   default:
//     day="Input must be a number between 1 and 7";
//     break;
// }
// console.log(day);

// exercise 4

// var month = 2;

// switch (month) {
// case 1 : month ="January";
// break;
// case 2 : month ="February";
// break;
// case 3 : month ="March";
// break;
// case 4 : month="April";
// break;
// case 5 : month ="June";
// break;
// case 6 : month= "July";
// break;
// case 7 : month ="August";
// break;
// case 8 : month =" September";
// break;
// case 9 : month=" October";
// break;
// case 10 : month="November";
// break;
// case 11 : month="December";
// default:
//   month="Input a number between 1 to 12";
// }
// console.log(month);

// exercise 5

// var seasone = 'January';

// var result = '';

// switch (seasone) {
//   case 'January':
//   case 'Februar':
//   case 'December':
//     result = 'Winter';
//     break;
//   case 'March':
//   case 'Aprile':
//   case 'May':
//     result = 'Spring';
//     break;
//   case 'Jun':
//   case 'July':
//   case 'Avgust':
//     result = 'Summer';
//     break;
//   case 'September':
//   case 'Ocotober':
//   case 'November':
//     result = 'Fall';
//     break;
//   default:
//     result = 'unknown brand';
// }

// console.log(result);

// exercise 6

// var grade = 'A';

// switch (grade) {
//   case 'A':
//     grade = 'A - Good job';
//     break;
//   case 'B':
//     grade = 'B - Pretty good';
//     break;
//   case 'C':
//     grade = 'C - Passed';
//     break;
//   case 'D':
//     grade = 'D - Not so Good';
//     break;
//   case 'F':
//     grade = 'Failed';
//     break;
//   default:
//     grade = 'Unknown grade';
// }
// console.log(grade);

// exercises 7

// var city = 'Zagr';
// var country = '';
// switch (city) {
//   case 'Novi Sad':
//   case 'Beograd':
//   case 'Subotica':
//     country = 'Serbia';
//     break;
//   case 'Segedin':
//   case 'Budapest':
//     country = 'Hungary';
//     break;
//   case 'Zagreb':
//   case 'Makarska':
//   case 'Split':
//   case 'Opatija':
//   case 'Rijeka':
//   case 'Dubrovnik':
//     country = 'Hrvatska';
//     break;
//   default:
//     country = 'Please choose a different city';
// }

// console.log(country);

// Exercise 8

var number1 = 5;
var number2 = 4;

var result = '/';

switch (result) {
  case '+':
    result = number1 + number2;
    break;
  case '-':
    result = number1 - number2;
    break;
  case '*':
    result = number1 * number2;
    break;
  case '/':
    result = number1 / number2;
    break;
}

console.log(result);
