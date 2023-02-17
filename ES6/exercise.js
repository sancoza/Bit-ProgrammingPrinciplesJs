var obj = { x: 5, y: 13 };
obj.z = 20;
console.log(obj);

var obj = { x: 5, y: 13 };
console.log(obj.x);

var obj = { x: 5, y: 13 };
console.log(obj.z);

var obj = Object.create({ product: 'mug' });
obj.color = 'red';
console.log(obj.color);

var obj = Object.create({ product: 'mug' });
obj.color = 'red';
obj.product = 'teacher';
console.log(obj.product);

Object.prototype.day = 'Monday';
var plan = { active: 'JS codding' };
console.log(plan.day);

Object.prototype.day = 'Monday';
var plan = { active: 'Js codding', day: 'always' };
console.log(plan.day);

var coffe = 'cappucino';

function orderCoffy() {
  console.log(this.coffe);
}

orderCoffy();

function orderCoffy() {
  console.log(this.coffe);
}
orderCoffy();

var coffe = 'cappucino';
var superCoffy = {
  coffe: 'espreso',
  strength: 3,
  orderCoffy: function () {
    console.log(coffe);
  },
};

superCoffy.orderCoffy();

var coffe = 'cappucino';
var superCoffy = {
  coffe: 'espreso',
  strength: 3,
  orderCoffy: function () {
    return coffe;
  },
};

console.log(superCoffy.orderCoffy());

var mondayToDo = {
  activity: 'do this',
  song: 'lalala',
  sing: function () {
    console.log(this.song);
  },
};

var tusdeyToDo = {
  activity: 'do this letar',
  song: 'ooooo',
};

mondayToDo.sing.call(tusdeyToDo);

var res = Array.prototype.indexOf.call([1, 3, 5, 2, 11], 3);
console.log(res);

var result;
result = String.prototype.concat.call('abc', 'ABC');
console.log(result);

var x = 5;

try {
  x *= 3;
  if (x < 10) {
    throw new Error('wrong');
  }
  console.log(x);
} catch (error) {
  console.log(error.message);
}

var a = [2, 3, 4, 5];
var b = [2, 3, 4, 5];
console.log(a === b);

var a = [2, 3, 4, 5];
var b = a;
console.log(a === b);

var arr = ['a', 'b', 'c'];

function transform(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }
}

transform(array);
console.log(array);

function transform(a) {
  // let aCopy = [...a];
  // for (let i = 0; i < aCopy.length; i++) {
  //   aCopy[index] = aCopy[index].toUpperCase();
  // }
  // return aCopy;
  return a.map((s) => s.toUpperCase());
}

let arr = ['a', 'b', 'c'];

let res = transform(arr);
console.log(arr, res);

var a = 34;
function transform(a) {
  a = a * 2;
}

transform(a);
console.log(a);

var a = 34;
function transform(a) {
  return a * 2;
}

transform(a);
console.log(a);

var obj = { x: 10, y: 5 };

function transform(o) {
  o.x += 2;
  o.z = 10;
}

transform(obj);
console.log(obj.x + obj.z);
