angular.module('app')
  .factory('VersionService', function() {

    var Versions = new mDB('versions');

    var service = {};

    service.getAll = function() {
      return Versions.findAll();
    };

    service.add = function(version) {
      Versions.insert(version);
    };

    service.find = function(filter){
      return Versions.find(filter);
    }

    service.findById = function(id) {
      return Versions.findById(id);
    };

    service.update = function(id, obj) {
      return Versions.update(id, obj);
    }

    service.getAllForRecipe = function(recipeId) {
      return Versions.find((function(version){
        return version.recipeId == recipeId;
      })).sort(function(a,b){
        return b.index - a.index;
      });
    }

    service.getLatestVersionForRecipe = function(recipeId) {
      return service.getAllForRecipe(recipeId)[0];
    }

    function sortByName(a, b) {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      }
      return 0;
    }

    service.getDiff = function(recipe, other) {
      var diff = {
        ingredients: [],
      };
      var recipeIngredients = recipe.snapshot.ingredients.sort(sortByName);
      var otherIngredients = other.snapshot.ingredients.sort(sortByName);

      var ridx = 0;
      var oidx = 0;

      while (ridx < recipeIngredients.length && oidx < otherIngredients.length) {
        var ri = recipeIngredients[ridx];
        var oi = otherIngredients[oidx];
        if (ri.name == oi.name) {
          // same ingredient, check if the values are different
          var ingredient = {ingredient: oi};
          if (ri.amount != oi.amount || ri.units != oi.units) {
            ingredient.status = "changed";
            ingredient.prev = ri;
          }
          diff.ingredients.push(ingredient);
          ridx += 1;
          oidx += 1;
        } else if (ri.name > oi.name) {
          // something got added
          diff.ingredients.push({ingredient:oi, status: "added"});

          oidx += 1;
        } else {
          // something got deleted
          diff.ingredients.push({ingredient:ri, status: "removed"});
          ridx += 1
        }
      }

      if (ridx < recipeIngredients.length) {
        // everything left over is deleted
        recipeIngredients.slice(ridx).forEach(function(i){
          diff.ingredients.push({ingredient:i, status: "removed"});
        });
      } else if (oidx < otherIngredients.length) {
        // everything left over is added
        otherIngredients.slice(oidx).forEach(function(i){
          diff.ingredients.push({ingredient:i, status: "added"});
        });
      }

      diff.descDiff = JsDiff.diffSentences(recipe.snapshot.description, other.snapshot.description);
      diff.instrDiff = JsDiff.diffSentences(recipe.snapshot.instructions, other.snapshot.instructions);

      return diff;
    }

    return service;

  });