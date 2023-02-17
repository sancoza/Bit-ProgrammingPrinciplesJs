'use strict';
// 1.What is output of the following piece of code?

// var a = [2,3,11,5,23,24];
// a.length = 2;//[2,3]
// console.log(a);

// 2.What is output of the following piece of code?

// var message ='';
// var n = 4;

// while(n >= 0) {
//   message +='*';
//   n--;
// }
// console.log(message);//*****

// 3.What is output of the following piece of code?

// var s ='JavaScript Programming';

// var result = s[3];

// console.log(result);//a

// 4.What is output of the following piece of code?

// var array = [];

// for (let i = 0; i < 4; i++) {
//   array[i] = 2 * i;//0*2;1*2;2*2;3*2
// }
// console.log(array);//0,2,4,6

// 5.What is output of the following piece of code?

// var array = [];

// for (let i = 0; i < 4; i++) {
//   array[2 * i] = i;
//   array[2 * i + 1] = i;

//   // //prva iteracija i=0;
//   // array[2*0]=0;=> array[0]=0;[0]
//   // array[2*0+1]=0;array[1]=0;=>[0,0]
//   //  //druga iteracija i=1;
//   // array[2*1]=1;array[2]=1;[0,0,1]
//   // array[2*1+1]=1;array[3]=1=>[0,0,1,1]
//   // // treća iteracija i =2;
//   // array[2*2]=2;array[4]=2;[0,0,1,1,2]
//   // array[2*2+1]=2;array[5]=2=>[0,0,1,1,2,2]
//   // // četvrta iteracija i=3
//   // array[2*3]=3;array[6]=3;[0,0,1,1,2,2,3]
//   // array[2*3+1]=3;array[7]=3;[0,0,1,1,2,2,3,3]

// }

// console.log(array);

// 6. What is output of the following piece of code?

// var numbers = [4,5,12,9];
// console.log(numbers.length);//Number of elements (value) in the array 4

// 7. What is output of the following piece of code?

// for (var i = 0; i < 10; i += 2){
//   console.log(i);

// i=0=>0+2=0
//i=0=>0+2=2
//i=2=>2+2=4
//i=4=>4+2=6
//i=6=>6+2=8

//prekida sa izvršavanjem i=8=>8+2=10 i mora da je manje od 10
// }

// 8. What is output of the following piece of code?

// var n= 23;
// n -=2;//n=23-2;

// console.log(n);

// 9.What is output of the following piece of code?

// var isWriter = true;
// console.log(!isWriter);//false

// 10. What is output of the following piece of code?

// var array = [2,15,18,-4,2];

// var result = array[0];

// for(var i = 1; i < array.length; i++) {
//   if (array[i] > result) {
//     result = array[i];
//   }
// }
// console.log(result);//18

// // array.length=> broj elemenata niza 5
// // 15>2
// // result = 15
// // 18>2
// // result = 18
// // -4>2
// // false prekida se petlja pošto je false

// 11. What is output of the following piece of code?

// var a = [2,3,11];

// a.length=5;//broj elemenata niza 5

// console.log(a);//[2,3,11,empty,empty];

// 12. What is output of the following piece of code?

// var sum = 0;

// for (var i = 0; i < 10; i++) {
//   if (i === 6) {
//     continue;
//   }
//   if ( i % 3 === 0) {
//     sum++
//   }
// }

// console.log(sum);

// gledamo samo brojeve deljive sa 3

// prva iteracija
//  i=0 0 % 3 === 0 sum++= 0+1=1 sum=1;

// jedan i dva nisu deljivi sa tri

// druga iteracija
// i=3 3%3 === 0 sum++=1+1=2 sum=2

// preskačemo 4

// i=6 6===6 preskačemo

// 7 8 preskačemo

// treća iteracija
// i=9 9%3 === 0 sum++=2+1=3 sum=3;

// 13.  What is output of the following piece of code?

// var s = 'ab34abc';
// console.log(parseInt(s));//NaN  parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN

// 14. What is output of the following piece of code?

// for(var i = 1; i < 6; i++) {
// if(i===3 || i === 4) {
//   break;
// }
// console.log(i)//1,2
// }

// i=1
// i=1+1=2
// i=2+1=3ovo se ne izvršava

// 15.What is output of the following piece of code?

// var result;
// var n;

// n=4;

// switch(n) {
//   case 2:
//     result = 1;
//     break;
//   case 4://ulazi ovde nema break
//     result = 2;
//   case 6:
//     result = 3;//propada dovde i štampa samo 3
//     break;
//   default :
//   result = 100
// }
// console.log(result);

// 16.What is output of the following piece of code?

// for (var i = 0; i < 5; ) {
//   console.log('*');//nema i++ pravi infinite petlju
// }

// 17.What is output of the following piece of code?

// var sum = 0;
// for (let i = 0; i < 10; i++) {
//   if(i % 3 === 0) {
//     sum ++;
//   }
//   if(i === 8) {
//     break;
//   }
// }

// console.log(sum);

// i=0 0%3=0 sum=0+1=1
// i=3 3%3=1 sum=1+1=2
// i=6 6%3=2 sum=2+1=3

// 18.What is output of the following piece of code?

// var result;
// var n =34;

// if(n % 2 === 0) {
//   result = n / 2;
// }else {
//   result = n * 2;
// }
// console.log(result);

// //n jje deljiv sa dva 34/2=17

// 19.What is output of the following piece of code?

// for (var i = 3; i >= 0; i--) {
//   console.log(i);
// }

//     i=3 3>=0
// i=3-1=2 2>=0
// i=2-1=1 1>=0
// i=1-1=0 0>=0

// *bonus:
// var x = 3;
// var y = x--;// originalni x se smanjuje a novi y dobija vrednost x
// console.log(x);
// console.log(y);

// var x =3;
// var y = --x;
// console.log(x,y);//i x i y se smanjuju

// 20.What is output of the following piece of code?

// var n = 10;
// console.log(++n);//11

// 21.What is output of the following piece of code?

// function mul(a,b) {
//   var result;
//   result = a*b;
//   return result;
// }

// var product;
// product = mul(4);
// console.log(product);//NaN

// 22.What is output of the following piece of code?

// for (var i = 1; i < 6; i++) {
// if (i ===2 || i === 4) {
//   continue;
// }
// console.log(i)
// }

//     i=1 1<6 👍
// i=1+1=2 2<6 preskoči
// i=2+1=3 3<6 👍
// i=3+1=4 4<6 preskoči
// i=4+1=5 5<6 👍

// 23.What is output of the following piece of code?

// function selection (a,b,c) {
//   if ( a > b && a > c) {
//     return a;
//   }
//   if(b > a && b> c) {
//     return b;
//   }
//   if(c > a && c > b) {
//     return c;
//   }
// }

// var result;
// result = selection(4,5,2);
// console.log(result);//5

// 24.What is output of the following piece of code?

// var s = 'coffee';
// s[0]= 'C';
// console.log(s);//coffee

// 25.What is output of the following piece of code?

// var isBlue = true;
// var isSolid = false;
// console.log(isBlue || isSolid);//true

// 26.What is output of the following piece of code?

// function f (a,b) {
//   return a + b;
// }
// var result;
// result = f(4,5);
// console.log(result);//9

// 27.What is output of the following piece of code?

// var n = 5;
// var numberOfOdds = 0;

// var i =0;

// while (i <= n) {
//   if(i % 2 === 0) {
//     numberOfOdds++;
//   }
//   i++;
// }
// console.log(numberOfOdds);//3

// i = 0  0 % 2 === 0 👍 numberOfOdds = 0 + 1 = 1
// i = 2  2 % 2 === 0 👍 numberOfOdds = 1 + 1 = 2
// i = 4  4 % 2 === 0 👍 numberOfOdds = 2 + 1 = 3

// 28.What is output of the following piece of code?

// function f (a,b) {
//   return a + b;
// }
// console.log(f(12));NaN

// 29.What is output of the following piece of code?

// function f(a) {
//   for (var i = 0, j = a.length -1; i < j; i++, j--) {
//       var tmp = a[i];
//       a[i] = a[j];
//       a[j] = tmp;
//   }
//   return a;
// }
// console.log(f(['3',4,22,true,-2]));



// 30.What is output of the following piece of code?

// var sum = 0;
// for(var i = 0; i < 5; i++) {
//   sum += i;
//   console.log(sum);
// }

// i=0;       0<5    sum = 0+0=0;
// i=0+1=1    1<5    sum = 0+1=1;
// i=1+1=2    2<5    sum = 1+2=3;
// i=2+1=3    3<5    sum = 3+3=6;
// i=3+1=4    4<5    sum = 6+4=10;
// i=4+1=5    5<5    ovo se neštampa false

// 31.What is output of the following piece of code?

// function f (a,b) {
//   return 1 + a + b;
// }
// var result;
// result =f(4,5,32,11);
// console.log(result);//10

// 32.What is output of the following piece of code?

// function mul(a,b) {
//   var result;
//   return result;
//   result = a * b;
// }
// var product;
// product = mul(4,5);
// console.log(product);//undefined result nije definisan

// 33.What is output of the following piece of code?

// var result;
// var n;
// n=14;

// switch (n) {
//   case 2:
//     result=1;
//     break;
//   case 4:
//     result=2;
//   case 6:
//     result=3;
//   break;
//   default:
//     result=100;
// }
// console.log(result);//100

// 34.What is output of the following piece of code?

// function mul(a,b) {
//   var result;
//   result =a*b;
//   return result;
// }

// var product;
// product = mul(4,5);//20
// console.log(product);

// 35.What is output of the following piece of code?

// var s = 'abc';
// console.log(s+s);//'abcabc

// 36.What is output of the following piece of code?

// var s = '34abc';
// console.log(parseInt(s));//34 converts a given value to an integer number if not possible to convert then return NaN

// *bonus
// console.log(parseInt(12+12));//24
// console.log(parseInt(1.6+1.6));//3
// console.log(parseInt(3.142));//3
// console.log(parseInt('24'));//24
// console.log(parseInt('2'+'4'));//24
// console.log(parseInt('2'+'4a'));//24 dali je prvi karakter integer dali je drugi karakter ineger dali je treći karakter integer nije štampa prva dav
// console.log(parseInt('2a'+'4a'));//2 dali je prvi karakter(2) integer jeste dali je drugi karakter integer(a) nije prekida i štampa prvi
// console.log(parseInt('a4'));//NaN dali je prvi karakter integer nije štampa nije broj NaN
// console.log(parseInt(true));NaN

// 37.What is output of the following piece of code?

// var isBlue = true;
// var isSolid = false;
// console.log(isBlue && isSolid);//false

// 38.What is output of the following piece of code?

// var description = 'Do the magic';

// for (var i = description.length -1; i >= 0; i--) {
//   s = s + description[i];
// }
// console.log(s);//cigam eht oD

// prvo se izvršava var i = description.length -1;
// drugo se izvršava i >= 0
// treće se izvršava  s = s + description[i];
// četvrto se izvršava i--

// prva iteracija  i = 11-1=10;
//                 10 >= 0;
//                 s = s + 10 s=[c]

// 39.What is output of the following piece of code?
// var sum = 0;
// for (var i =4; i < 8; i = i + 1) {
//   sum += i;
//   console.log(sum);
// }
// i=4      4<8  sum = 0 + 4 = 4;
// i=4+1=5  5<8  sum =4+ 5 = 9;
// i=5+1=6  6<8  sum = 9 + 6 = 15;
// i=6+1=7  7<8  sum = 15 + 7=22

// 40.What is output of the following piece of code?

// console.log(2 + true);//true prelazi u jedan rezultat je tri

// 41.What is output of the following piece of code?

// function f() {
//   var result;
//   result = f();
//   console.log(result);//undefined
// }

// 42.What is output of the following piece of code?

// var a = 10;
// var b = 12;
// var tmp;

// tmp = a;//10
// a = b;//12
// b = tmp;//10

// console.log(a,b);//12 10

// 43.What is output of the following piece of code?

// var message = 'JaVaScRIPT prograAMMing';
// var counter = 0;

// for ( var i = 0; i < message.length; i++) {
//   if(message[i] === 'a' || message[i] === 'A') {
//     counter++;
//   }
// }
// console.log(counter);//4

// 44.What is output of the following piece of code?

// function sum () {
//   return arguments[0] + arguments[2];
// }
// var result;
// result = sum(2,5,11,'abc');
// console.log(result);//13 2+11
