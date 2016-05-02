angular.module('app')
  .controller('RecipeEditCtrl',
    function($state, $scope, RecipeService, IngredientService) {
      // Set the 'Recipe' in this child scope to a clone of the parent scope's
      // Looks pretty fucky, I know.
      $scope.recipe = $.extend(true, {}, $scope.recipe);
      $scope.recipe.changeSummary = "";

      $scope.ingredients = IngredientService.getAll();

      $scope.newIngredient = {};

      // LOOK AWAY, jQUERY DISASTER AHEAD
      // This is because semantic-ui dropdown doesn't have a nice way to
      // deal with a default value that should always appear in the dropdown.
      function dropdownAddCreateNew(value) {
        var text = "Create New";

        if (value && value.length > 0){
          text += "'" + value + "'";
        }

        if ($('#ingr-dropdown .button').length > 0) {
          $('#ingr-dropdown .button').text(text);
          return;
        }

        var $createNew = $("<div class='ui fluid purple button'>"+ text +"</div>");
        $createNew.click(function(){
          var val = $('#ingr-dropdown input.search').val();
          alert(val);
        });

        $('#ingr-dropdown .menu').append($createNew);
      }

      $('#ingr-dropdown').dropdown({
        duration: 0,
        onChange: function(value, text, choice) {
          $scope.newIngredient.name = value;
        },
        onNoResults: function(value) {
          dropdownAddCreateNew(value);
        }
      });

      $('#ingr-dropdown input.search').on('keyup', function(e){
        var value = e.target.value;
        dropdownAddCreateNew(value);
      });

      // Initialize the create new button
      dropdownAddCreateNew();
      // END DISASTER

      $scope.deleteIngredient = function (index) {
        $scope.recipe.ingredients.splice(index, 1);
      };

      $scope.addNewIngredient = function() {
        // TODO: Validation
        $scope.recipe.ingredients.push($.extend(true, {}, $scope.newIngredient));
        $scope.newIngredient = {};
        $('#ingr-dropdown').dropdown('clear');
      };

      $scope.save = function() {
        // TODO: Still need to update version
        // TODO: Validation
        RecipeService.update($scope.recipe._id, $scope.recipe);
        $state.go('app.recipe', {}, {
          reload: true
        });
      };

      $scope.cancel = function() {
        $state.go('app.recipe');
      };

      $('#upload-img')
        .popup({
          hoverable: true,
          position : 'bottom left',
          delay: {
            show: 300,
            hide: 800
          }
        });

        $(document).on("keypress", "#img-input", function(e) {
          if (e.keyCode == 13) {
            var imageUrl = $(this).val();
            $scope.recipe.imageUrl = imageUrl;
            $("#preview-img").attr("src", imageUrl);
          }

        })


    });