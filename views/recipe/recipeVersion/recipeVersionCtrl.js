angular.module('app')
  .controller('RecipeVersionCtrl',
    function($scope, version) {
        $scope.version = version;
    });