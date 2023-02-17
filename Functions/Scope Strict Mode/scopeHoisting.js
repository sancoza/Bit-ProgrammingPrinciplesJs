// // 'use strict';//može za ceo fail ili za odredjenju funkciju
// // var a = 44 + b;//statment
// // var b;//declaration statment
// // function sum(a,b)  {//isto declaration statment
// // return a+b
// // }
// // sum(a,b)//ovo je i exprsion i statment

// // var  a, b, c;//globalni scope
// // var nešto;
// // function sum(a,b) {
// //   nešto =33;
// //   var d;//dostupne samo u funkciji lokalna varijabla
// //   return a + b;
// // }
// // sum(2,2);
// // console.log(nešto);

// // var a =33;
// // var x =15;

// // function sum(x,y) {
// // var a =44;//uvek će prednost da ima lokalni skop
// // console.log(a);
// // return x + y;
// // }
// // sum(3,2);
// // console.log(a);

// // var scop ='global';

// // function checkScope() {
// //   var scop = 'local';
// //   return scop;
// // }

// // var result =checkScope();

// // console.log(scop);
// // console.log(result);

// // var a ='global';

// // function checkScope2() {
// //   a='30';//zameniće globalnu
// //   b='30';//napraviće globalnu
// //   return[a,b];
// // }
// // checkScope2();
// // console.log(a);
// // console.log(b);

// // function test (a,b) {
// //   var c, d, y, u;

// // }

// // hoisting uzdizanje
// // var global;
// // var c;//pravi memoriju za sve što se deklariše podiže deklaraciju na vrh
// // var d;

// // function myFunction() {
// //   console.log(global);
// //   var global=1;
// //   console.log(global);
// //   var nešto;
// //   return nešto;
// // }
// // var global =123;
// // var d = 33;

// // myFunction();

