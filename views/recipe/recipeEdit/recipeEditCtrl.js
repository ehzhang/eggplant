angular.module('app')
  .controller('RecipeEditCtrl',
    function($filter, $state, $scope, RecipeService, IngredientService, VersionService) {
      // Set the 'Recipe' in this child scope to a clone of the parent scope's
      // Looks pretty fucky, I know.
      $scope.recipe = $.extend(true, {}, $scope.recipe);
      $scope.recipe.changeSummary = "";

      var allIngredients = IngredientService.getAll();

      // Filter the ingredients selections to those not already in the recipe.
      function filterIngredients(){
        var ingMap = {};
        var ingredients = $scope.recipe.ingredients.forEach(function(i){
          ingMap[i.name] = true;
        });
        $scope.ingredients = allIngredients.filter(function(i){
          // If its in the recipe ingredients already, false
          return !ingMap[i.name];
        });
      }

      $scope.$watch('recipe.ingredients', function(val){
        filterIngredients();
      }, true);

      $scope.newIngredient = {};

      function checkIngredientExists(name, ingredients) {
        // If the ingredient already exists,
        var ingMap = {};
        ingredients.forEach(function(i){
          ingMap[i.name] = true;
        });
        return ingMap[name];
      }

      // LOOK AWAY, jQUERY DISASTER AHEAD
      // This is because semantic-ui dropdown doesn't have a nice way to
      // deal with a default value that should always appear in the dropdown.
      function dropdownAddCreateNew(value) {

        // Disable the create new dropdown.
        if (checkIngredientExists(value, allIngredients)){
          $('#ingr-dropdown .button').addClass('disabled');
        } else {
          $('#ingr-dropdown .button').removeClass('disabled');
        }

        var text = "Create New";

        if (value && value.length > 0){
          text += " '" + value + "'";
        }

        if ($('#ingr-dropdown .button').length > 0) {
          $('#ingr-dropdown .button').text(text);
          return;
        }

        var $createNew = $("<div class='ui fluid purple button'>"+ text +"</div>");
        $createNew.click(function(e){
          var val = $('#ingr-dropdown input.search').val();
          $('.ui.modal.new-ingredient')
            .modal('setting', 'closable', false)
            .modal('show');
        });

        $('#ingr-dropdown .menu').append($createNew);
      }

      $('#ingr-dropdown').dropdown({
        duration: 0,
        onChange: function(value, text, choice) {
          $scope.newIngredient.name = value;
        },
      });

      $('#ingr-dropdown input.search').on('keyup', function(e){
        var value = e.target.value;
        $scope.newIngredient.name = value;
        dropdownAddCreateNew(value);
      });

      // Initialize the create new button
      dropdownAddCreateNew();

      $scope.onCreateNewIngredient = function(ingredient) {
        IngredientService.add(ingredient);
        allIngredients = IngredientService.getAll();
        filterIngredients();

        $scope.newIngredient.name = ingredient.name;
        $('#ingr-dropdown input.search').val(ingredient.name);
        $('#ingr-dropdown .default.text').hide();
      };

      // END DISASTER

      $scope.deleteIngredient = function (index) {
        $scope.recipe.ingredients.splice(index, 1);
      };

      $scope.addNewIngredient = function() {
        // TODO: Validation

        // Check that ingredient exists
        if (!checkIngredientExists($scope.newIngredient.name, allIngredients)) {
          return;
        }

        $scope.recipe.ingredients.push($.extend(true, {}, $scope.newIngredient));
        $scope.newIngredient = {};
        $('#ingr-dropdown').dropdown('clear');
      };

      $scope.checkIngredientInDescription = function(){
        var numberIngredients = $scope.ingredients.length;
        var errors = [];
        for (var i = 0 ; i < numberIngredients; i++) {
          ingredient = $scope.ingredients[i].name;
          if ($scope.recipe.instructions.toLowerCase().indexOf(ingredient) == -1){
            errors.push(ingredient);
          }
        }
        if (errors.lenght > 0){
          // console.log("The following ingredients are not in the instructions: " + errors.join(", "))
          return false;
        }
      };

      $scope.save = function() {
        // TODO: Validation
        var newVersionIndex = VersionService.getLatestVersionForRecipe($scope.recipe.id).index + 1;

        // this only increments the version number by 1
        $scope.recipe.latestVersion = $scope.recipe.latestVersion + 1;

        $scope.recipe.lastUpdated = new Date();

        VersionService.add({
          recipeId: $scope.recipe.id,
          index: newVersionIndex,
          snapshot: $scope.recipe,
        });

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

        });

    });