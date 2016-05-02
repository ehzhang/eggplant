angular.module('app')
  .controller('BrowseCtrl',
    function($scope, $state, RecipeService){
      $scope.recipes = RecipeService.getAll();

      console.log($scope.recipes);

      var allRecipes = RecipeService.getAll().forEach(function(r) {
        console.log(r.imageUrl);
      })

      $scope.selectRecipe = function(id) {
        $state.go('app.recipe', {id: id});
      };

      $scope.createRecipe = function() {
        $state.go('app.create', {id: $scope.recipes.length});
      };
    });