angular.module('app')
  .controller('RecipeHistoryCtrl',
    function($scope, VersionService) {
        $scope.versions = VersionService.getAllForRecipe($scope.recipe.id);
        console.log($scope.versions);
    });