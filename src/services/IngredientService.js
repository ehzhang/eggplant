/**
 * Ingredients Service currently wraps our mock db.
 */
angular.module('app')
  .factory('IngredientService', function() {

    var Ingredients = new mDB('ingredients');

    var service = {};

    service.getAll = function() {
      return Ingredients.findAll();
    };

    service.add = function(obj) {
      Ingredients.insert(obj);
    };

    service.findById = function(id) {
      return Ingredients.findById(id);
    };

    return service;

  });