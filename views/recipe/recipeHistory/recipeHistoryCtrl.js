angular.module('app')
  .controller('RecipeHistoryCtrl',
    function($state, $scope, VersionService) {
        $scope.versions = VersionService.getAllForRecipe($scope.recipe.id);

        $scope.selectVersion = function(id) {
            $state.go('app.recipe.history.version', {versionId: id});
        }
    });