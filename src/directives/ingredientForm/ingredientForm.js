angular.module('app')
  .directive('ingredientForm', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        'ingredient': '=info',
        'onSave': '=onSave'
      },
      templateUrl: 'src/directives/ingredientForm/ingredientForm.html',
      link: function(scope, element, attrs) {
        scope.save = function() {
          scope.onSave(scope.ingredient);
          $('.ui.modal').modal('hide');
        };

        scope.close = function() {
          scope.ingredient = {};
          $('.ui.modal').modal('hide');
        };
      }
    };
  });