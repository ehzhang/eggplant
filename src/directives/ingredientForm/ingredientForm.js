angular.module('app')
  .directive('ingredientForm', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        'name': '=',
        'onSave': '='
      },
      templateUrl: 'src/directives/ingredientForm/ingredientForm.html',
      link: function(scope, element, attrs) {

        $("#new-ingr-form")
          .form({
            inline: true,
            fields: {
              name: {
                identifier: 'name',
                rules: [{
                  type    : 'empty',
                  prompt  : 'Please enter a name.'
                }]
              },
              description: {
                identifier: 'description',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please include a description.'
                  }
                ]
              },
            }
          });

        scope.ingredient = {};

        scope.$watch('name', function(val){
          scope.ingredient.name = val;
        });

        scope.save = function() {
          $("#new-ingr-form").form("validate form");
          if (!$("#new-ingr-form").form("is valid")){
            console.log($("#new-ingr-form").form("errors"));
            return;
          }
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