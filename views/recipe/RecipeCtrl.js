angular.module('app')
  .controller('RecipeCtrl',
    function($scope, recipe) {
      $scope.recipe = recipe;
    });