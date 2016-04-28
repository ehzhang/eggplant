angular.module('app')
  .controller('BrowseCtrl',
    function($scope, $state, RecipeService){
      $scope.recipes = RecipeService.getAll();

      $scope.selectRecipe = function(id) {
        $state.go('app.recipe', {id: id});
      };
    });