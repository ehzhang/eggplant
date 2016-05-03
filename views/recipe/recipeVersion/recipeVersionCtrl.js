angular.module('app')
  .controller('RecipeVersionCtrl',
    function($scope, version, VersionService) {
        $scope.version = version;

        if ($scope.version.index > 0) {
            var prev = VersionService.find(function(v){
                return v.recipeId == version.recipeId && v.index == version.index - 1;
            })[0];
            if (prev) {
                $scope.diff = VersionService.getDiff(prev, $scope.version);
                $scope.showDiff = true;
            }
        } 
    });