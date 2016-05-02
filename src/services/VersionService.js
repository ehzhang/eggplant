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

    return service;

  });