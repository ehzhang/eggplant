angular.module('app')
  .controller('BrowseCtrl',
    function($scope, $state, RecipeService){
      $scope.recipes = RecipeService.getAll();
      $('.ui.dropdown')
      .dropdown()
      ;
      $scope.selectRecipe = function(id) {
        $state.go('app.recipe', {id: id});
      };
      $scope.orderBy = function(x) {
      	$scope.orderByInput = x;
    }
    });