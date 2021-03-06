angular.module('app')
  .controller('BrowseCtrl',
    function($scope, $state, RecipeService){
      $scope.recipes = RecipeService.getAll();
      $('.ui.dropdown').dropdown();
      $scope.orderBy = function(x) {
      	$scope.orderByInput = x;
      };

      var allRecipes = RecipeService.getAll().forEach(function(r) {
        // console.log(r.imageUrl);
      });

      $scope.selectRecipe = function(id) {
        $state.go('app.recipe', {id: id});
      };

      $scope.createRecipe = function() {
        $state.go('app.create', {id: $scope.recipes.length});
      };

      $('#browse-filter').focus();
    });