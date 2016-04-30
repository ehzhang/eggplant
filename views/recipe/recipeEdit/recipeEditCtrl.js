angular.module('app')
  .controller('RecipeEditCtrl',
    function($scope, IngredientService) {
      // Set the 'Recipe' in this child scope to a clone of the parent scope's
      // Looks pretty fucky, I know.
      $scope.recipe = $.extend(true, {}, $scope.recipe);
      $scope.ingredients = IngredientService.getAll();
    });