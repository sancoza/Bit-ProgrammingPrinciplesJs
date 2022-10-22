var month = 4;
var result = '';

// if (month === 1){
// result = 'January';
// }else if (month === 2) {
//   result = 'February';
// }
// else if (month === 3) {
//   result = 'March';
// }else if (month === 4) {
//   result = 'April';
// }else if (month === 5) {
//   result = 'May';
// }else if (month === 6) {
//   result = 'June';
// }else {
//   result ='not suported input'
// }
// console.log(result);

switch (month) {
  case 1:
    result = 'January';
    break;
  case 2:
    result = 'February';
    break;
  case 3:
    result = 'March';
    break; //ako nestavimo brek izvršava sve slučajeve do break-a
  case 4:
    result = 'April';
    break;
  case 5:
    result = 'May';
    break;
  case 6:
    result = 'June';
    break;
  default:
    result = 'not suppoerted input';
}
console.log(result);

var carBrand = 'bmw';

switch (carBrand) {
  case 'bmw':
  case 'audi':
  case 'mercedes':
    result = 'this is german car';
    break;
  case 'peugeot':
  case 'renault':
  case 'citroen':
    result = 'this is franch car';
    break;
  default:
    result = 'unknown brand';
}
console.log(result);
