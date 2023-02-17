// ******************* destracturing  *******************

// const arr = [1, 2, 3, 4, 5, 6,'seven'];

// // let firstEl = arr[0];
// // let secondEl = arr[1];
// // let thirdEl =arr[2];

// // u jednj liniji možemo da pročitamo vrednosti mora da se pazi na redosled

// const [firstEl, secondEl, thirdEl] = arr;
// // const [thirdEl] = arr;

// // const rrr = arr[6];
// // console.log(rrr);

// console.log(firstEl, secondEl, thirdEl);
// // console.log(thirdEl);

// const user = {
//   firstName: 'Pera',
//   lastName: 'Peric',
//   age: 44,
//   id: 123456,
// };

// // u objektu nije bitan redosled

// // const firstName = user.fisrName;
// // const lastName = user.lastName;
// // const age = user.age;
// // const id = user.id;

// let {firstName, lastName, age, id} = user;

// lastName ='Markovic';

// console.log(lastName);
// console.log(user);

// const { lastName : lN, age : a, id, firstName} = user;

// console.log(firstName, lN, a, id);

// function printUserData(u) {
//   console.log(`
//   IME: ${u.firstName}
//   PREZIME: ${u.lastName}
//   GODINE: ${u.age}
//   ID: ${u.id}
//   `);
// }

// function printUserData(firstName, lastName, age, id) {
//   console.log(`
//   IME: ${firstName}
//   PREZIME: ${lastName}
//   GODINE: ${age}
//   ID: ${id}
//   `);
// }

// printUserData(user);

// ******************* arrow functions *******************

// const sum = function (a,b) {
//   return a + b;
// }

// const sum = (a, b) => a + b;

// const multiply = (a, b) => a * b;

// console.log(sum(22, 33));
// console.log(multiply(2, 2));

// const arr = [1, 2, 3, 4, 5];
// const mapArr = arr.map((n) => n + 100);
// console.log(mapArr);

// const filter = arr.filter((number) => number % 2 === 0);
// console.log(filter);

// const some = arr.some((number) => number % 10 === 0);
// console.log(some);

// const every = arr.every((number) => `${number}.length === 1`);
// console.log(every);

// const createFunctin = () => () => 22;

// function createFunctin () {
//   return function () {
//     return 22;
//   }
// }
// const res = createFunctin()();
// console.log(res);

// const createObject = (a, b) => ({ a: a, b: b });

// // const createObject = (a,b) =>  {
// //  return {a: a, b: b}
// // };
// const res1 = createObject('cao', 'pozdrav');
// console.log(res1);

// ******************* spread rest *******************

// spread prospemo ...

// const a = [1, 2, 3, 4, 5];
// const b = [6, 7, 8, 9];

// // // const c = [...a,...b];
// // const c = [...b, ...a, 22, 44];

// // // ako hoćemo da napravimo kopiju noiza da bude isti al drugo mesto u memoriji
// // const aCopy = [...a]; //menja se na kopiji ne na originalu a

// // console.log(c);

// // const user = {
// //   firstName: 'Pera',
// //   lastName: 'Peric',
// //   age: 33,
// //   id: 1234,
// // };

// // const extendeUser = { ...user, street: 'Jovan Jovanovic 13' };
// // const copyUser = { ...user };
// // copyUser.age = 50;

// // console.log(copyUser, user);

// // a.push(b);
// // console.log(a);
// // a.push(...b);
// // console.log(a);

// //rest ... ostatak sakuplja ostatak i stavlja u varijablu

// // const [firstElement,...ostalo] = a;
// // const [firstElement, , ,...ostalo] = a;
// // console.log(ostalo);

// const user = {
//   firstName: 'Pera',
//   lastName: 'Peric',
//   age: 44,
//   id: 123456,
// };

// const { firstName, ...ostalo } = user;

// // var ostalo = {
// //   lastName: user.lastName
// // } ovako smo pre pisali

// console.log(ostalo);

// function format(...args) {
//   return args.map((a) => a.toUpperCase());
// }

// const res = format('cao', 'pozdrav', 'hello');
// console.log(res);

// ******************* reduce *******************

// prima dva parametra callbac funkcija druga početno stanje akumulatora akumulira se ta vrednost kasnije curr trenutni element akumulator + curr element 1 petlja vraća akumulator nazad

// const a = [1, 2, 3, 4, 5];
// const a = ['cao','pozdra','hello'];

// const sum = a.reduce(function(acc,curr) {
//   return acc + curr;
// },0);
//akumulator + trenutni element

// const sum = (...args) => args.reduce((a, c) => a + c, 0); //novi način

// const res = a.reduce(function(acc,curr) {
//   return acc + curr;
// },'')

// function sumAll() {
//   var sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     const element = arguments[i];
//     sum = sum + element;
//   }
//   return sum;
// } //stari način

// let res = sum(22, 44, 55);
// let res2 = sumAll(22, 44, 55);
// console.log(res, res2);

// let users = [
//   { name: 'Pera', lastName: 'Peric', id: '2d3wd' },
//   { name: 'Mira', lastName: 'Miric', id: '5d3wd' },
//   { name: 'Olja', lastName: 'Oljic', id: '9d3wd' },
// ];

// usersMap = {
//   '2d3wd': {
//     name: 'Pera',
//     lastName: 'Peric',
//     id: '2d3wd',
//   },
//   '5d3wd': {
//     name: 'Mira',
//     lastName: 'Miric',
//     id: '5d3wd',
//   },
//   '9d3wd': {
//     name: 'Olja',
//     lastName: 'Oljic',
//     id: '9d3wd',
//   },
// };stari način

// const usersIdMap = users.reduce(function (acc, curr) {
//   acc[curr.id] = curr;
//   return acc;
// }, {}); //novi način

// console.log(usersIdMap);
// console.log(usersIdMap['9d3wd']);
