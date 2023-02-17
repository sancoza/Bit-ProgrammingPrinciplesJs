//this odnosi se na objekat u kojem se nalazimo unutar objekta ga koristimo

// function Recipe(n, ct, cm, ing, t, ins) {
//   //  var this ={}; ovo nepišemo
//   //     this.name= n,
//   //     this.cuisineType= ct,
//   //     this.complexity= cm,
//   //     this.ingridients= ing,
//   //     this.time= t,
//   //     this.instructions= ins,
//   //     this.printIng= function () {
//   //       console.log(this.ingridients);
//   //     },
//   //     checkIsUnder15Min= function () {
//   //       return this.time < 15;
//           // return this.time <15;
//   //     },
//   //     this.changeCuisineType= function (newCuisineType) {
//   //       this.cuisineType = newCuisineType;
//           //  this.cuisineType = newCuisineType;
//   //     },
//   //     this.deleteIngridient= function (ingredient) {
//   //       var updatedIngredients = [];
//   //       for (var i = 0; i < this.ingridients.length; i++) {
//   //         if (this.ingridients[i] !== ingredient) {
//   //           updatedIngredients[updatedIngredients.length] = this.ingridients[i];
//   //         }
//   //       }
//   //       this.ingridients = updatedIngredients;
// //         this.ingridients = updatedIngredients;
//   //     }
//   // return this;ovo nepišemo
//   // }
// var p = new Recipe (
//     'paprikas',
//     'Madjarska kuhinja',
//     3,
//     ['krompir', 'paprika', 'crni luk', 'biber'],
//     60,
//     'Sipati vodu u lonac...'
//   );

// konstruktorska funkcija se piše velikom slovom ona nema return i nema objekat

// new se koriti za  konstruktorske funkcije

// var a = 20;
// window.a;
// this.a; // ako ga ne koristimo u objektu ima vrednost globalnog objekta


// istanceof vraća true ili false proverava jel objekat dobijen iz klase

// Object je ugradjena konstruktorska funkcija sve kalse nasledjuju Object

// if(!(testObj instanceof Recipe)) {
//   console.log('Object is not from Recipe')
// }

// var c = p;

// c.name='test';
// console.log(c);
// console.log(p);

// var stringObj = JSON.stringify(p);
// console.log(stringObj);
// var c = JSON.parse(stringObj);
// c.name = 'test';

// var original = {howmany:100};
// var test1={howmany:100}

// function nullify (o) {
//  o.howmany=0;
// }

// nullify(original);
// original.howmany;

// console.log(original.howmany);

// console.log(original === test1)//nova adresa u memoriji



