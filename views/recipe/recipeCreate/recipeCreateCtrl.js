angular.module('app')
  .controller('RecipeCreateCtrl',
    function($state, $scope, RecipeService) {
      $scope.recipe = {
        imageUrl: "http://semantic-ui.com/images/wireframe/image.png",
      }


      $scope.create = function() {
        // TODO: Validation
        RecipeService.add($scope.recipe);

        $state.go('app.recipe', {id: $scope.recipe._id}, {
          reload: true
        });
      };

      $scope.cancel = function() {
        $state.go('app.create.recipe');
      };
    });