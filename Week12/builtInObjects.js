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
var str ='lorem impsum dolor sit amet';
var arr = str.split(' ');


var res = arr.filter(function(element) {
  return element.length > 4;//prikaži sve što ima više od 4 slova
})
console.log(res);

//map mapira uvek vraca niz iste duzine;novi konvertovani izmenjeni član
var res = arr.map(function(element) {
  return element.toUpperCase();
})
console.log(res);

//originalni niz se nemenja ni u map ni u filter

var res = arr.map(function(element) {
  if(element.length > 4) {
    return element.toUpperCase();
  }
  return element;
});
console.log(res);