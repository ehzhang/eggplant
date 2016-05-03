angular.module('app')
  .controller('RecipeEditCtrl',
    function($filter, $state, $scope, RecipeService, IngredientService, VersionService) {
      // Set the 'Recipe' in this child scope to a clone of the parent scope's
      // Looks pretty fucky, I know.
      $scope.recipe = $.extend(true, {}, $scope.recipe);
      $scope.recipe.changeSummary = "";
      $scope.isValidForm = false;
      $scope.isIdentical = false;

      $scope.allIngredients = IngredientService.getAll();

      $("#edit-recipe-form")
        .form({
          keyboardShortcuts: false,
          fields: {
            description: {
              identifier: 'description',
              rules: [{
                type    : 'empty',
                prompt  : 'Please enter a description.'
              }]
            },
            instructions: {
              identifier: 'instructions',
              rules: [
                {
                  type   : 'empty',
                  prompt : 'Please include some instructions.'
                }
              ]
            },
            summary: {
              identifier: 'summary',
              rules: [{
                type    : 'empty',
                prompt  : 'Please enter a summary of your changes.'
              }]
            },
          }
        });

      // Filter the ingredients selections to those not already in the recipe.
      function filterIngredients(){
        var ingMap = {};
        var ingredients = $scope.recipe.ingredients.forEach(function(i){
          ingMap[i.name] = true;
        });
        $scope.availIngredients = $scope.allIngredients.filter(function(i){
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

      $scope.createNewIngredient = function(name) {
        $('.ui.modal.new-ingredient')
          .modal('setting', 'closable', false)
          .modal('show');
        $scope.newIngName = name;
      };

      $scope.onCreateNewIngredient = function(ingredient) {
        IngredientService.add(ingredient);
        $scope.allIngredients = IngredientService.getAll();
        filterIngredients();

        $scope.newIngredient.name = ingredient.name;
      };

      $scope.deleteIngredient = function (index) {
        $scope.recipe.ingredients.splice(index, 1);
      };

      $scope.addNewIngredient = function() {
        // TODO: Validation

        if (checkIngredientExists($scope.newIngredient.name, $scope.recipe.ingredients)) {
          return;
        }

        // Check that ingredient exists
        if (!checkIngredientExists($scope.newIngredient.name, $scope.allIngredients)) {
          return;
        }

        $scope.recipe.ingredients.push($.extend(true, {}, $scope.newIngredient));
        $scope.newIngredient = {};
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

      function arraysEqual(a, b) {
        if (a === b) return true;
        if (a.length != b.length) return false;

        for (var i = 0; i < a.length; i++){
          if (a[i] != b[i] && !isIdentical(a[i], b[i], ["$$hashKey"])) {
            return false;
          }
        }
        return true;
      }

      function isIdentical(a, b, ignoredProperties) {
        var keys = Object.getOwnPropertyNames(a);
        for (var i = 0; i < keys.length; i++){
          var key = keys[i];
          if (ignoredProperties && ignoredProperties.indexOf(key) != -1) {
            continue;
          }
          if (a[key] != b[key]){
            if (a[key] instanceof Array){
              if (!arraysEqual(a[key], b[key])) {
                return false;
              }
            } else {
              return false;
            }
          }
        }
        return true;
      }

      $scope.save = function() {
        var mostRecentVersion = VersionService.getLatestVersionForRecipe($scope.recipe.id);

        var ignoredProperties = ["changeSummary", "lastUpdated", "latestVersion", "_id"];
        // check that things have actually changed

        $scope.isIdentical = isIdentical($scope.recipe, mostRecentVersion.snapshot, ignoredProperties);

        if ($scope.isIdentical) {
          return;
        }

        $("#edit-recipe-form").form("validate form");

        if (!$("#edit-recipe-form").form("is valid")){
          return;
        }

        var newVersionIndex = mostRecentVersion.index + 1;

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