console.log('test 1');
console.log('test 2');
console.log('test 3');
// console.log(b);//ovde puca skripta i nista posle nje nece se izvesti
// try {
//   console.log(b);
// } catch(error) {
//   var errorNode = document.createElement('p');
//   errorNode.classList.add('error');
//   errorNode.textContent = error.message;
//   console.log(error.message);
// }

// try {
//   var b =33;
//   console.log(b);
//   console.log(c);//kad se desi greska preostali deo try bloka se izignosrise
//   console.log('testtttt');
// } catch(e) {
//   console.log(e.message);
// }
// console.log('test 5');
// console.log('test 6');

//ako zaboravimo npr. zagradu javlja se sintaks eror ništa neće pokazati nije run time error
// try catch blok koristimo za greske koje se jave kasnije

// try {
//   var b =33;
//   console.log(b);
//   console.log(c);
// } catch(e) {
//   console.log(e.stack);
// }
// console.log('test 5');
// console.log('test 6');

//mozemo sami da bacamo greške throw

// try {
//   var result = null;
// if(!result) {
//   throw new Error('Something wrong happend');
// }
// } catch(e) {
//   console.log(e.message);
//   console.log(e.name);
//   console.log(e.stack);
// }
// console.log('test 5');
// console.log('test 6');

// try {
//   var result = null;
// if(!result) {
//   throw {message: 'Something wrong happend', moreInfo:'test test test'};
// }
// } catch(e) {
//   console.log(e.name);
//   console.log(e.message);
//   console.log(e.stack);
//   console.log(e.moreInfo)
// }
// console.log('test 5');
// console.log('test 6');

// try {
//   var result = null;
// if(!result) {
//   throw new Error('Something wrong happend');
// }
// } catch(e) {
//   console.log(e.message);
  
// }finally {
//   console.log('always run');
// }
// console.log('test 5');
// console.log('test 6');

//finally se uvek ranuje i ako se greska desi i ako se ne desi stavlja se na kraj 

