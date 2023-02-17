// 1. Write a function that capitalizes the first letter of each string argument it receives.
// Function arguments: ['hello', 'there', 'ES',6]
// Output: ['Hello', 'There', 'ES']

// function capitalizeFirsttLetter (...args) {
//   return args.map((a) => a.toUpperCase());
// }

// const res = capitalizeFirsttLetter('hello','there','ES');
// console.log(res);

let capitalizesFirstLetter = (array) => {
  let newArray = array.filter((e) => typeof e === 'string');
  // console.log(newArray);
  newArray.forEach((element, i, newArray) => {
    newArray[i] = element.charAt(0).toUpperCase() + element.slice(1);
  });
  return console.log(newArray);
};
capitalizesFirstLetter(['hello', 'there', 'ES', 6]);

// 2. Write a function that calculates sale tax that should be paid for the product of the given price.
// Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
// Input: [{ name: “Banana”, price: 120 }, {name: “Orange”, price: 100}]
// Output: [{ name: “Banana”, price: 144 }, { name: “Orange”, price: 120 }] // product full price
// Output2: [ 24, 20 ] // tax only
