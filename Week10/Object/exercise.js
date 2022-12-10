// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

// var coffee = {
//   name: 'cappuccino',
//   strength: 'mild',
//   flavour: 'chocolate',
//   milk: 'yes',
//   sugar: 'no',
// };

// console.log(coffee);

// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

// var favouriteMovie = {
//   title: 'Harry Potter',
//   actors: {
//     actor1: 'Harry',
//     actor2: 'Hamrione',
//     actor3: 'Dumledore',
//   },
//   director: 'Chris Columbus',
//   genre: 'Fantasy',
//   popularity: 'Very Popular',
// };

// console.log(favouriteMovie);
// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project's
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

// function getProgram(desc, lang, git, dev) {
//   var program = {
//     description: desc,
//     language: lang,
//     gitRep: git,
//     status: dev,
//     printGit: function () {
//       console.log(program.gitRep);
//     },
//     isJavaScript: function () {
//       if (program.language === 'JavaScript') {
//         return true;
//       }
//       return false;
//     },
//     isCompleted: function () {
//       return program.status;
//     },
//   };
//   return program;
// }

// var res = getProgram('program', 'JS', 'sancoza', true);

// res.printGit();
// res.isJavaScript();

// var object = function project (des,lang,git,dev) {
//   return {
//     description: des,
//     programmingLanguage: lang,
//     gitRepo: git,
//     status:dev,
//     repoInfo: (function() {
//       return git;
//     })(),
//     checkLanguage : (function() {
//       if (lang === 'Java Script') {
//         return 'Written is JS';
//       }else {
//         return 'Not written in JS';
//       }
//     })(),
//     checkStatus: (function() {
//       if(dev) {
//         return 'Project is in development';
//       }else {
//         return 'Project is not in development';
//       }
//     })(),
//   }
// };

// console.log(object('program', 'JS', 'sancoza', true));

// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.

// function createRecipe (name,cuisine,complex,ingredients,time,instruction) {
//   var recipe = {
//     recipeName: name,
//     cuisineType: cuisine,
//     complexity:complex,
//     listOfIngredients: ingredients,
//     preparationTime: time,
//     preparingInstruction:instruction,
//     printIngredients: function() {
//       console.log(recipe.listOfIngredients);
//     },
//     isItDoneIn15min:
//     function () {
//       return recipe.preparationTime === '30min';
//     },
//     replaceCuisine: function(newCuisine) {
//       recipe.cuisineType = newCuisine;
//     },
//     deleteIngredient: function(list, ing) {
//       var updatedList = [];
//       for (var i = 0; i < list.length; i++) {
//           if (list[i] !== ing) {
//               updatedList[updatedList.length] = list[i];
//           }
//       }
//       return updatedList;
//     }
//   }
//   return recipe;
// }

// var recipe = createRecipe ('pancakes','USA',1,['water','flour','eggs','milk','cream'],'25min','mix and bake','Serbia');

// console.log(recipe);

// // recipe.replaceCuisine('japanska');
// // console.log(recipe.isItDoneIn15min());
// recipe.replaceCuisine('japanska');
// console.log(recipe.deleteIngredient(recipe.listOfIngredients, "milk"));
// console.log(recipe.isItDoneIn15min);




















// function createRecipe(t,l) {
//   var recipe = {
//     title:t,
//     list:l, 
//   deleteIng: function(ing) {
//     var updatedList = [];
//     for (let i = 0; i < recipe.list.length; i++) {
//       if(ing !== recipe.list[i]) {
//         updatedList[updatedList.length] = recipe.list[i];
//       }
//     }
//     recipe.list = updatedList;
//   },
//   };
//  return recipe;
// }

// var res = createRecipe('Ruska salata', ['majonez','kiseli krastavci','šargarepa']);

// console.log(res);

// res.deleteIng('majonez');
// console.log(res);



