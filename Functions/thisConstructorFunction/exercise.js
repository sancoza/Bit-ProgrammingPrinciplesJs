// 1. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project's
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

// function Project(desc, lang, git, dev) {
 
//     this.description = desc;
//     this.language= lang;
//     this.gitRep= git;
//     this.status= dev;
//     this.printGit= function () {
//       console.log(this.gitRep);
//     };
//     this.isJavaScript=function () {
//       if (this.language === 'JavaScript') {
//         return true;
//       }
//       return false;
//     };
//     this.isCompleted= function () {
//       return this.status;
//     }
// }

// var res = new Project('program', 'JS', 'sancoza', true);
// console.log(res);


// res.printGit();
// console.log(res.isJavaScript());
// console.log(res.isCompleted());

// console.log(res instanceof Object);


// 2. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.

// function Recipe(n, ct, cm, ing, t, ins) {
  
//       this.name= n,
//       this.cuisineType= ct,
//       this.complexity= cm,
//       this.ingridients= ing,
//       this.time= t,
//       this.instructions= ins,
//       this.printIng= function () {
//         console.log(this.ingridients);
//       },
//       this.checkIsUnder15Min = function () {
//         return this.time < 15;
        
//       },
//       this.changeCuisineType= function (newCuisineType) {
//         this.cuisineType = newCuisineType;
//         console.log(this.cuisineType);
//       },
//       this.deleteIngridient= function (ingredient) {
//         var updatedIngredients = [];
//         for (var i = 0; i < this.ingridients.length; i++) {
//           if (this.ingridients[i] !== ingredient) {
//             updatedIngredients[updatedIngredients.length] = this.ingridients[i];
//           }
//         }
//         this.ingridients = updatedIngredients; 
//         console.log(this.ingridients);
//       }
//   }

// var p = new Recipe ('paprikas','Madjarska kuhinja',3,['krompir', 'paprika', 'crni luk', 'biber'],60,'Sipati vodu ulonac...');


// console.log(p);
// console.log(p.name);
// console.log(p.printIng());

// console.log(p.checkIsUnder15Min());

// p.changeCuisineType('italijanska kuhinja');
// console.log(p);

// console.log(p.deleteIngridient('biber'));
// console.log(p);

//  function Person (first, last, age, hair) {
//     this.firsName = first;
//     this.lastName = last;
//     this.age = age;
//     this.hair = hair;
//     this.changeColor = function(newColor) {
//     this.hair = newColor;
//   }

// }

// 3. exercise

// function  Automobil (marka,model,upaljen,snaga,boja) {
//   this.marka = marka;
//   this.model = model;
//   this.upaljen = upaljen;
//   this.snaga = snaga;
//   this.boja = boja;
//   this.upali= function() {
//     this.upaljen = true;
//   };
//    this.ugasen = function() {
//     this.ugasen = false;  
//   };
//   this.prefarbaj= function(novaBoja) {
//     this.boja = novaBoja;
//   }
// }
 
// var a = new Automobil ('Audi','X5',true,100,'bela');
// console.log(a);
// a.prefarbaj('roza');

// console.log('Marka: ' + a.marka);
// console.log('Model: ' + a.model);
// console.log('Snaga: ' + a.snaga);
// console.log('Boja: ' + a.boja);

// 4. exercise

// function Hotel (ime,adresa,sobe,rezervacija,teretana) {
// this.ime = ime;
// this.adresa = adresa;
// this.brojsoba = sobe;
// this.rezervacija = rezervacija;
// this.teretana = teretana;
// this.brojSlobodnihSoba = function () {
//   var slobodno = this.brojsoba - this.rezervacija;
//   return slobodno;
// }
// }

// var h = new Hotel ('Hotel Park','NovosadskojSajma 35',140,57,true);

// console.log('Podaci o hotelu:');
// console.log('Naziv ' + h.ime);
// console.log('Adresa ' + h.adresa);
// console.log('Kapacitet: ' + h.brojSoba);
// console.log('Broj slobodnih soba: ' + h.brojSlobodnihSoba());