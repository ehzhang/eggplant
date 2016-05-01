angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {

    // Default Route
    $urlRouterProvider.otherwise('browse');

    $stateProvider
      .state('app', {
        views: {
          '': {
            templateUrl: 'views/base.html'
          },
          'navbar@app': {
            templateUrl: 'views/navbar/navbar.html'
          }
        }
      })
      .state('app.browse', {
        url: '/browse',
        controller: 'BrowseCtrl',
        templateUrl: 'views/browse/browse.html'
      })

      .state('app.recipe', {
        url: '/recipe/:id',
        controller: 'RecipeCtrl',
        views: {
          '': {
            templateUrl: 'views/recipe/recipeBase.html',
            controller: 'RecipeCtrl'
          },
          'content@app.recipe': {
            templateUrl: 'views/recipe/recipeView.html',
            controller: 'RecipeCtrl'
          },
        },
        resolve: {
          recipe: function($stateParams, RecipeService) {
            return RecipeService.findById($stateParams.id);
          }
        }
      })

      .state('app.recipe.history', {
        url: '/history',
        views: {
          'content@app.recipe': {
            controller: 'RecipeHistoryCtrl',
            templateUrl: 'views/recipe/recipeHistory/recipeHistory.html'
          }
        },
      })

      .state('app.recipe.edit', {
        url: '/edit',
        views: {
          'content@app.recipe': {
            controller: 'RecipeEditCtrl',
            templateUrl: 'views/recipe/recipeEdit/recipeEdit.html'
          }
        },
      })

      .state('app.recipe.stats', {
        url: '/stats',
        views: {
          'content@app.recipe': {
            controller: 'RecipeStatsCtrl',
            templateUrl: 'views/recipe/recipeStats/recipeStats.html'
          }
        }
      })

      .state('app.recipe.create', {
        url: '/create',
        views: {
          'content@app.recipe': {
            controller: 'RecipeCreateCtrl',
            templateUrl: 'views/recipe/recipeCreate/recipeCreate.html'
          }
        }
      });

  });