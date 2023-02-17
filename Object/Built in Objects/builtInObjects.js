// var str='Pateto';
// var capitalString=str.toUpperCase();
// console.log(capitalString);
// console.log(str);

// var str ='lorem impsum dolor sit amet';
// var arr = str.split('');
// var arr = str.split('m');//od stringa u niz
// console.log(arr);
// var str1 = arr.join('-');//od niza u string
// console.log(str1)

// var str ='lorem impsum dolor sit amet';
// var arr = str.split(' ');
// // arr.push('ne znam');////ubacuje član na zadnje mesto
// arr.unshift('ne znam')//ubacuje član na prvo mesto
// arr.pop();//skida zadnji element sa niza
// arr.shift();//skida prvi član

// console.log(arr);

// var res = arr.push('ne znam');
// console.log(res);

// filtriranje: u novi niz spakuje sve gde je uslov true; koristi se za uslov
// var str ='lorem impsum dolor sit amet';
// var arr = str.split(' ');

// var res = arr.filter(function(element) {
//   return element.length > 4;//prikaži sve što ima više od 4 slova
// })
// console.log(res);

// //map mapira uvek vraca niz iste duzine;novi konvertovani izmenjeni član
// var res = arr.map(function(element) {
//   return element.toUpperCase();
// })
// console.log(res);

// //originalni niz se nemenja ni u map ni u filter

// var res = arr.map(function(element) {
//   if(element.length > 4) {
//     return element.toUpperCase();
//   }
//   return element;
// });
// console.log(res);

// var a = [1,5,4,12,8];

// a.sort(function(a,b) {
//   // return a - b;//od najmanjeg
//   return b - a;//od najvećeg
// });
// console.log(a);

// var a = [{name:'johan',age: 23},
// {name:'sara',age: 36},
// {name:'bob',age: 43}];

// a.sort(function(a,b) {
//  return a.age - b.age;
// });
// console.log(a);

// var date = new Date ('2022-03-22');

// console.log(date.getDate());//vraća dan
// console.log(date.getDay());//vraća dan u nedelji kreće od nule
// console.log(date.getMonth())//mese kreće od nule
// console.log(date.getFullYear());

// var arr = ['2022-03-22', '2019-04-16', '2021-07-5'];

// var mapedArr = arr.map(function (e) {
//   var date = new Date(e);
//   // return date.getFullYear();
//   return {
//     stringFormat: e,
//     timestamp: date.getTime(),
//   };
// });

// mapedArr.sort(function (a, b) {
//   return a.timestamp - b.timestamp;
// });
// finalArr = mapedArr.map(function (e) {
//   return e.stringFormat;
// });
// console.log(finalArr);

// var daydiff = (1625436000000 -  1555372800000) / 1000 / 60 / 60 / 24;
// console.log(daydiff);

// var now = new Date();
// var hours = now.getHours();
// var minutes = now.getMinutes();
// var second = now.getSeconds();

// console.log(hours);
// console.log(hours + ':' + minutes);
// console.log(hours + ':' + minutes + ':' + second);

// var p = document.getElementById('delete');

// setInterval(function () {
//   var now = new Date();
//   var hours = now.getHours();
//   var minutes = now.getMinutes();
//   var second = now.getSeconds();
//   var formatedTime = hours + ':' + minutes + ':' + second;
//   p.textContent = formatedTime;
// }, 1000);
