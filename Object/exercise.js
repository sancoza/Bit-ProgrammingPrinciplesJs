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

// var createRecipe  = function()//može i ovako

// function createRecipe(
//   name,
//   cuisineType,
//   complexity,
//   ingridiens,
//   time,
//   instructions
// ) {
//   // if (typeof name !== 'string') {
//   //   console.log('Parametar name is wrong');
//   // }
//   var recipe = {
//     name: name,
//     cuisineType: cuisineType,
//     complexity: complexity,
//     ingridiens: ingridiens,
//     preparingTime: time,
//     instructions: instructions,
//     printIng: function () {
//       console.log(recipe.ingridiens);
//     },
//     checkIsUnder15min: function () {
//       return recipe.preparingTime < 15;
//     },
//     changeCuisineType: function (newCuisineType) {
//       recipe.cuisineType = newCuisineType;
//     },
//     deleteIngridients: function (ingridient) {
//       var updatedIngrients = [];
//       for (let i = 0; i < recipe.ingridiens.length; i++) {
//         if (recipe.ingridiens[i] !== ingridient) {
//           updatedIngrients[updatedIngrients.length] = recipe.ingridiens[i];
//         }
//       }
//       recipe.ingridiens = updatedIngrients;
//     },
//   };
//   return recipe;
// }

// var paprikas = createRecipe(
//   'paprikas',
//   'Madjarska kuhinja',
//   3,
//   ['krompir', 'paprika', 'crni luk', 'biber'],
//   60,
//   'Sipati vodu u lonac...'
// );

// console.log(paprikas);
// console.log(paprikas.name);
// console.log(paprikas.ingridiens);
// console.log(paprikas.ingridiens[0]);
// paprikas.printIng();
// console.log(paprikas.checkIsUnder15min());
// console.log(paprikas);
// paprikas.changeCuisineType('italijanska kuhinja');
// console.log(paprikas);

// console.log(paprikas);
// paprikas.deleteIngridients('biber');
// console.log(paprikas);


// function createRecipe(n, ct, cm, ing, t, ins) {
//   var recipe = {
//     name: n,
//     cuisineType: ct,
//     complexity: cm,
//     ingridients: ing,
//     time: t,
//     instructions: ins,
//     printIng: function () {
//       console.log(recipe.ingridients);
//     },
//     checkIsUnder15Min: function () {
//       return recipe.time < 15;
//     },
//     changeCuisineType: function (newCuisineType) {
//       recipe.cuisineType = newCuisineType;
//     },
//     deleteIngridient: function (ingredient) {
//       var updatedIngredients = [];
//       for (var i = 0; i < recipe.ingridients.length; i++) {
//         if (recipe.ingridients[i] !== ingredient) {
//           updatedIngredients[updatedIngredients.length] = recipe.ingridients[i];
//         }
//       }
//       recipe.ingridients = updatedIngredients;
//     },
//   };
//   return recipe;
// }