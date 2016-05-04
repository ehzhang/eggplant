angular.module('autocompleteSui', [])
  // Semantic-UI Based Autocomplete Search, with an option to create a new entry
  .directive('autocompleteSuiCreate', function($document) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        'placeholder': '@',
        'alreadyExistsMessage': '@',
        'allOptions': '=',
        'availOptions': '=',
        'selected': '=',
        'onClickCreate': '&',
        'onEnter': '&'
      },
      templateUrl: 'src/directives/autocompleteSui/autocompleteSui.html',
      link: function(scope, element, attrs) {

        function checkOptionExists(name, options) {
          // If the ingredient already exists,
          if (!options) {
            return false;
          }
          var optMap = {};
          options.forEach(function(i){
            optMap[i.name] = true;
          });
          return optMap[name];
        }

        scope.$watch('selected', function(val){

          if (val) {
            scope.focused = true;
          }

          scope.optionExists = !!checkOptionExists(val, scope.allOptions);

          if(scope.optionExists && !checkOptionExists(val, scope.availOptions)) {
            scope.error = attrs.alreadyExistsMessage;
          } else {
            scope.error = false;
          }

        });

        scope.create = function() {
          scope.onClickCreate({name: scope.selected});
        };

        scope.enter = function() {
          scope.onEnter();
          scope.focused = false;
        };

        scope.setSelected = function(val) {
          scope.selected = val;
          scope.focused = false;
        };

        scope.checkOption = function() {

          if(scope.optionExists) {
            // If it isn't available
            if (!checkOptionExists(scope.selected, scope.availOptions)) {
              scope.selected = "";
            }
          }
        };

        function checkOutsideAutocomplete(e) {
          if(!$(e.target.parentElement).hasClass('autocomplete-sui')) {
            scope.focused = false;
            scope.checkOption();
            scope.$apply();
          }
        }

        $document.on('click', checkOutsideAutocomplete);

        scope.$on('$destroy', function(){
          $document.unbind('click', checkOutsideAutocomplete);
        });

      }
    };
  });