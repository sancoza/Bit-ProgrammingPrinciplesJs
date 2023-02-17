// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

// var e = 3;

// var a =[5, -4.2, 3, 7];
// var found=false;

// for (i = 0; i < a.length; i++) {
//   if (e === a[i]) {
//     found=true;
//   }
// }

// if (found) {
//   console.log("yes");
// }
// else{
//   console.log("no");
// }

// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

// var array = [-3, 11, 5, 3.4, -8];

// for (i = 0; i < array.length; i++ ) {
//   if (array[i] > 0) {
//     array[i]= array[i]*2;
//   }
// }
// console.log(array);

// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

// var array = [4, 2, 2, -1, 6];

// var minimum = array[0];

// for(var i = 1; i < array.length; i++) {
//   if (array[i]<minimum) {
//     minimum =array[i];
//   }
// }
// console.log(minimum, array.indexOf(minimum));

// 4. Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

// var array = [4,2,2,-1,6];

// var firstMinNum = array[0];

// var secondMinNum;

// for (var i = 0; i < array.length; i++) {
//   if (array[i] < firstMinNum) {
//     secondMinNum=firstMinNum;
//     firstMinNum = array[i];
//   }
// }

// console.log(secondMinNum);

// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

// var array = [3, 11, -5, -3, 2];

// var sum = 0;

// for (var i = 0; i < array.length; i++) {
//   if (array[i] > 0) {
//     sum += array[i];
//   }
// }
// console.log(sum);

// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// var a = [2, 4, -2, 7, -2, 4, 2];

// var result="The array is simetric";

// for (var i = 0, j= a.length -1; i <= j; i++,j--) {
//   if(a[i]!== a[j]) {
//     result="Array is not simetric"
//     break;
//   }
// }
// console.log(result);

// var a = [2, 4, -2, 7, -2, 4, 2];
// var result = true;

// for (var i = 0; i < a.length / 2; i++) {
//     if (a[i] != a[a.length -i -1]) {
//         result= false;
//     }
// }

// if(result)
//     console.log("The array is symmetrical.");
// else
//     console.log("The array is not symmetrical.");

// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

// var a = [4, 5, 6, 2];
// var b = [3, 8, 11, 9];
// var c = [];
// var i = 0;

// for (i = 0; i < a.length; i++) {
//   c[c.length] = a[i];
//   c[c.length] = b[i];
// }
// console.log(c);

// 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

// var array = [4, 5, 6, 2];
// var array1=[3, 8, 11, 9];

// var intertwines= array.concat(array1);

// console.log(intertwines);

// 9. Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]

// Output array: [4, 6, 8]

// var a = [4, 6, 2, 8, 2, 2];
// var aWithoutE = [];

// for (var i = 0; i < a.length; i++){
//    if (a[i] !== 2) {
//     aWithoutE.push(a[i]);
//    }
// }
// console.log(aWithoutE);

// 10. Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

// var e = 78;
// var p=3;
// var a = [2, -2, 33, 12, 5, 8];
// var result=[];

// for (var i=0; i < a.length; i++) {
//   if(p > a.length) {
//     console.log('Error');
//     break;
//   }
//   if(i === p) {
//     result[result.length] = e;
//   }
//   result[result.length] = a[i];
// }
// console.log(result);
