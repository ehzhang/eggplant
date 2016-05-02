angular.module('app')
  .controller('RecipeEditCtrl',
    function($state, $scope, RecipeService, IngredientService) {
      // Set the 'Recipe' in this child scope to a clone of the parent scope's
      // Looks pretty fucky, I know.
      $scope.recipe = $.extend(true, {}, $scope.recipe);
      $scope.recipe.changeSummary = "";

      $scope.ingredients = IngredientService.getAll();

      $scope.newIngredient = {};

      $scope.deleteIngredient = function (index) {
        $scope.recipe.ingredients.splice(index, 1);
      }

      $scope.addNewIngredient = function() {
        // TODO: Validation
        $scope.recipe.ingredients.push($.extend(true, {}, $scope.newIngredient));
        $scope.newIngredient = {};
      };

      $scope.checkIngredientInDescription = function(){
        var numberIngredients = $scope.ingredients.length;
        var errors = [];
        for (var i = 0 ; i < numberIngredients; i++) {
          ingredient = $scope.ingredients[i].name
          if ($scope.recipe.instructions.toLowerCase().indexOf(ingredient) == -1){
            errors.push(ingredient);
          }
        }
        if (errors.lenght > 0){
          console.log("The following ingredients are not in the instructions: " + errors.join(", "))
          return false
        }
      }




      $scope.save = function() {
        // TODO: Still need to update version
        // TODO: Validation
        RecipeService.update($scope.recipe._id, $scope.recipe);
        $state.go('app.recipe', {}, {
          reload: true
        });
      };

      $scope.cancel = function() {
        $state.go('app.recipe');
      };

    });