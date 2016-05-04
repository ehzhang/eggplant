angular.module('app')
  .controller('RecipeHistoryCtrl',
    function($state, $scope, VersionService) {
        $scope.versions = VersionService.getAllForRecipe($scope.recipe.id);

        $scope.selectVersion = function(id) {
            $state.go('app.recipe.history.version', {versionId: id});
        };

        function getDiff(version) {
          if (version.index > 0) {
            var prev = VersionService.find(function(v){
              return v.recipeId == version.recipeId && v.index == version.index - 1;
            })[0];
            if (prev) {
              return VersionService.getDiff(prev, version);
            }
          }
        }

        $scope.diffs = $scope.versions.map(getDiff);

    });