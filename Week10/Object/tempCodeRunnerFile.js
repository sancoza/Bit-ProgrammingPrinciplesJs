function createRecipe (name,cuisine,complex,ingredients,time,instruction) {
  var recipe = {
    recipeName: name,
    cuisineType: cuisine,
    complexity:complex,
    listOfIngredients: ingredients,
    preparationTime: time,
    preparingInstruction:instruction,
    printIngredients: function() {
      console.log(recipe.listOfIngredients);
    },
    isItDoneIn15min:
    function () {
      return recipe.preparationTime === '15min';
    },
    replaceCuisine: function(newCuisine) {
      recipe.cuisineType = newCuisine;
    },
    deleteIngredient: function(list, ing) {
      var updatedList = [];
      for (var i = 0; i < list.length; i++) {
          if (list[i] !== ing) {
              updatedList[updatedList.length] = list[i];
          }
      }
      return updatedList;
    }
  }
  return recipe;
}

var recipe = createRecipe ('pancakes','franch',2,['water','flour','eggs','milk'],'25min','mix and bake','USA');

console.log(recipe);

// recipe.replaceCuisine('japanska');
// console.log(recipe.isItDoneIn15min());
recipe.replaceCuisine('japanska');
console.log(recipe.deleteIngredient(recipe.listOfIngredients, "milk"));
console.log(recipe.isItDoneIn15min);