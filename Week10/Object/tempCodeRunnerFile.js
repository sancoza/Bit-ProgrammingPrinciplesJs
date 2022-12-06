function createRecipe(
  name,
  cuisine,
  complex,
  ingredients,
  time,
  instruction,
  newCuisine
) {
  var recipe = {
    recipeName: name,
    cuisineType: cuisine,
    complexity: complex,
    listOfIngredients: ingredients,
    preparingTime: time,
    preparingInstruction: instruction,
    printIngredinets: function () {
      console.log(this.listOfIngredients);
    },
    isItDoneIn15min: function () {
      return this.preparingTime === '15min';
    },
    replaceCuisine: function () {
      return (recipe.cuisineType = newCuisine);
    },
    deleteIngredient: function (list, ing) {
      var updatedList = [];
      for (var i = 0; i < list.length; i++) {
        if (list[i] !== ing) {
          updatedList[updatedList.length] = list[i];
        }
      }
      return updatedList;
    },
  };
  return recipe;
}

var recipe = createRecipe(
  'pancakes',
  'french',
  2,
  ['water', 'flour', 'sugar', 'eggs', 'milk'],
  '25min',
  'mix and bake',
  'german'
);
console.log(recipe);
recipe.printIngredinets();
console.log(recipe.isItDoneIn15min());
console.log(recipe.replaceCuisine());
console.log(recipe.deleteIngredient(recipe.listOfIngredients, 'milk'));