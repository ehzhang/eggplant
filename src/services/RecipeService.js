angular.module('app')
  .factory('RecipeService', function() {

    var Recipes = new mDB('recipes');

    var service = {};

    service.getAll = function() {
      return Recipes.findAll();
    };

    service.add = function(recipe) {
      Recipes.insert(recipe);
    };

    service.findById = function(id) {
      return Recipes.findById(id);
    };

    return service;

  });