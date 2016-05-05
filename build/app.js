var app = angular.module('app', [
  'ngSanitize',
  'textAngular',
  'ui.router',
  'autocompleteSui',
]);
angular.module('app')
  .run(function(RecipeService, IngredientService, VersionService) {
    var DAY = 1000 * 60 * 60 * 24;
    var recipes = [
      {
        id: "0",
        name: "Eggplant Po Boy",
        changeSummary: "Changed breading to panko.",
        latestVersion: 1,
        imageUrl: "assets/eggplant_poboy.jpg",
        lastUpdated: new Date() - DAY,
        description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
        ingredients: [{
            name: "eggplant",
            amount: 2,
            units: "slice",
        }, {
            name: "quinoa",
            amount: 1,
            units: "cup",
        }, {
            name: "mixed greens",
            amount: 0.5,
            units: "cup",
        }, {
            name: "mayo",
            amount: 2,
            units: "tbsp",
        }, {
            name: "secret sauce",
            amount: 0.5,
            units: "tbsp",
        }],
        instructions: "<p>1. Slice Eggplant</p><p>2. Dip eggplant in egg and then dip in panko breadcrumbs</p><p>3. Fry in oil about 5 minutes until golden brown</p><p>4. Put in hoagie roll.</p>",
      },
      {
        id: "1",
        name: "Eggplant Tacos",
        changeSummary: "Used fresher tortillas.",
        latestVersion: 1,
        imageUrl: "assets/eggplant_taco.jpg",
        lastUpdated: new Date() - 2 * DAY,
        description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
        ingredients: [{
            name: "eggplant",
            amount: 2,
            units: "slice",
        }, {
            name: "quinoa",
            amount: 1,
            units: "cup",
        }, {
            name: "mixed greens",
            amount: 0.5,
            units: "cup",
        }, {
            name: "mayo",
            amount: 2,
            units: "tbsp",
        }, {
            name: "secret sauce",
            amount: 0.5,
            units: "tbsp",
        }],
        instructions: "<p>1. Slice the Eggplant </p><p>2. Marinate Eggplant in secret sauce<b> 30 minutes!</b></p><p>3. Cook Quinoa </p><p>4. Toss Eggplant, mixed greens, and quinoa.</p>",

      },
      {
        id: "2",
        name: "Eggplant Quinoa Bowl",
        changeSummary: "Doubled the amount of secret sauce.",
        latestVersion: 3,
        imageUrl: "assets/eggplant_quinoa_bowl.jpg",
        lastUpdated: new Date() - 3 * DAY,
        description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
        ingredients: [{
            name: "eggplant",
            amount: 2,
            units: "slice",
        }, {
            name: "quinoa",
            amount: 1,
            units: "cup",
        }, {
            name: "mixed greens",
            amount: 0.5,
            units: "cup",
        }, {
            name: "mayo",
            amount: 2,
            units: "tbsp",
        }, {
            name: "secret sauce",
            amount: 0.5,
            units: "tbsp",
        }],
        instructions: "<p>1. Slice the Eggplant </p><p>2. Marinate Eggplant in secret sauce<b> 30 minutes!</b></p><p>3. Cook Quinoa </p><p>4. Toss Eggplant, mixed greens, and quinoa.</p>",

      },
      {
        id: "3",
        name: "Eggplant Burrito",
        changeSummary: "Whole wheat tortillas, locally made.",
        latestVersion: 1,
        imageUrl: "assets/eggplant_burrito.jpg",
        lastUpdated: new Date() - 7 * DAY,
        description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
        ingredients: [{
            name: "eggplant",
            amount: 2,
            units: "slice",
        }, {
            name: "quinoa",
            amount: 1,
            units: "cup",
        }, {
            name: "mixed greens",
            amount: 0.5,
            units: "cup",
        }, {
            name: "mayo",
            amount: 2,
            units: "tbsp",
        }, {
            name: "secret sauce",
            amount: 0.5,
            units: "tbsp",
        }],
        instructions: "<p>1. Slice the Eggplant </p><p>2. Marinate Eggplant in secret sauce<b> 30 minutes!</b></p><p>3. Cook Quinoa </p><p>4. Toss Eggplant, mixed greens, and quinoa.</p>",

      },
      {
        id: "4",
        name: "Eggplant Fritters",
        changeSummary: "Now using a beer batter.",
        latestVersion: 1,
        imageUrl: "assets/eggplant_fritter.jpg",
        lastUpdated: new Date() - 15 * DAY,
        description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
        ingredients: [{
            name: "eggplant",
            amount: 2,
            units: "slice",
        }, {
            name: "quinoa",
            amount: 1,
            units: "cup",
        }, {
            name: "mixed greens",
            amount: 0.5,
            units: "cup",
        }, {
            name: "mayo",
            amount: 2,
            units: "tbsp",
        }, {
            name: "secret sauce",
            amount: 0.5,
            units: "tbsp",
        }],
        instructions: "<p>1. Slice the Eggplant </p><p>2. Marinate Eggplant in secret sauce<b> 30 minutes!</b></p><p>3. Cook Quinoa </p><p>4. Toss Eggplant, mixed greens, and quinoa.</p>",

      },
    ];

    var versions = [{
        recipeId: "0",
        index: 0,
        snapshot: {
            id: "0",
            name: "Eggplant Po Boy",
            changeSummary: "Changed breading to panko.",
            latestVersion: 1,
            imageUrl: "assets/eggplant_poboy.jpg",
            lastUpdated: new Date() - DAY,
            description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
            ingredients: [{
                name: "eggplant",
                amount: 2,
                units: "slice",
            }, {
                name: "quinoa",
                amount: 1,
                units: "cup",
            }, {
                name: "mixed greens",
                amount: 0.5,
                units: "cup",
            }, {
                name: "mayo",
                amount: 2,
                units: "tbsp",
            }, {
                name: "secret sauce",
                amount: 0.5,
                units: "tbsp",
            }],
            instructions: "1. Slice Eggplant \n2. Dip eggplant in egg and then dip in panko breadcrumbs \n3. Fry in oil about 5 minutes until golden brown \n4. Put in hoagie roll.",
        },
    }, {
        recipeId: "1",
        index: 0,
        snapshot: {
            id: "1",
            name: "Eggplant Tacos",
            changeSummary: "Used fresher tortillas.",
            latestVersion: 1,
            imageUrl: "assets/eggplant_taco.jpg",
            lastUpdated: new Date() - 2 * DAY,
            description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
            ingredients: [{
                name: "eggplant",
                amount: 2,
                units: "slice",
            }, {
                name: "quinoa",
                amount: 1,
                units: "cup",
            }, {
                name: "mixed greens",
                amount: 0.5,
                units: "cup",
            }, {
                name: "mayo",
                amount: 2,
                units: "tbsp",
            }, {
                name: "secret sauce",
                amount: 0.5,
                units: "tbsp",
            }],
            instructions: "<p>1. Slice the Eggplant </p><p>2. Marinate Eggplant in secret sauce<b> 30 minutes!</b></p><p>3. Cook Quinoa </p><p>4. Toss Eggplant, mixed greens, and quinoa.</p>",
          },
    }, {
        recipeId: "2",
        index: 0,
        snapshot: {
            id: "0",
            name: "Eggplant Quinoa Bowl",
            changeSummary: "First version!",
            latestVersion: 1,
            imageUrl: "assets/eggplant_quinoa_bowl.jpg",
            lastUpdated: new Date() - DAY*20,
            description: "This is a yummy eggplant bowl!! Hooray!",
            ingredients: [{
                name: "eggplant",
                amount: 2,
                units: "slice",
            }, {
                name: "quinoa",
                amount: 1,
                units: "cup",
            }, {
                name: "mixed greens",
                amount: 0.5,
                units: "cup",
            }, {
                name: "salt",
                amount: 1,
                units: "tsp"
            }],
            instructions: "<p>1. Slice the Eggplant</p><p>2. Cook Quinoa</p><p>3. Toss Eggplant, mixed greens, and quinoa</p>",
        }
    }, {
        recipeId: "2",
        index: 1,
        snapshot: {
            id: "0",
            name: "Eggplant Quinoa Bowl",
            changeSummary: "Added secret sauce and mayo.",
            latestVersion: 2,
            imageUrl: "assets/eggplant_quinoa_bowl.jpg",
            lastUpdated: new Date() - DAY*15,
            description: "Hello! This is a yummy eggplant bowl!! Hooray!",
            ingredients: [{
                name: "eggplant",
                amount: 2,
                units: "slice",
            }, {
                name: "quinoa",
                amount: 1,
                units: "cup",
            }, {
                name: "mixed greens",
                amount: 0.5,
                units: "cup",
            }, {
                name: "mayo",
                amount: 2,
                units: "tbsp",
            }, {
                name: "secret sauce",
                amount: 0.25,
                units: "tbsp",
            }],
            instructions: "<p>1. Slice the Eggplant </p><p>2. Marinate Eggplant in secret sauce<b> 30 minutes!</b></p><p>3. Cook Quinoa </p><p>4. Toss Eggplant, mixed greens, and quinoa.</p>",
        }
    }, {
        recipeId: "2",
        index: 2,
        snapshot: {
            id: "2",
            name: "Eggplant Quinoa Bowl",
            changeSummary: "Doubled the amount of secret sauce.",
            latestVersion: 3,
            imageUrl: "assets/eggplant_quinoa_bowl.jpg",
            lastUpdated: new Date() - 3 * DAY,
            description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
            ingredients: [{
                name: "eggplant",
                amount: 2,
                units: "slice",
            }, {
                name: "quinoa",
                amount: 1,
                units: "cup",
            }, {
                name: "mixed greens",
                amount: 0.5,
                units: "cup",
            }, {
                name: "mayo",
                amount: 2,
                units: "tbsp",
            }, {
                name: "secret sauce",
                amount: 0.5,
                units: "tbsp",
            }],
            instructions: "<p>1. Slice the Eggplant </p><p>2. Marinate Eggplant in secret sauce<b> 30 minutes!</b></p><p>3. Cook Quinoa </p><p>4. Toss Eggplant, mixed greens, and quinoa.</p>",
        }
    }, {
        recipeId: "3",
        index: 0,
        snapshot: {
            id: "3",
            name: "Eggplant Burrito",
            changeSummary: "Whole wheat tortillas, locally made.",
            latestVersion: 1,
            imageUrl: "assets/eggplant_burrito.jpg",
            lastUpdated: new Date() - 7 * DAY,
            description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
            ingredients: [{
                name: "eggplant",
                amount: 2,
                units: "slice",
            }, {
                name: "quinoa",
                amount: 1,
                units: "cup",
            }, {
                name: "mixed greens",
                amount: 0.5,
                units: "cup",
            }, {
                name: "mayo",
                amount: 2,
                units: "tbsp",
            }, {
                name: "secret sauce",
                amount: 0.5,
                units: "tbsp",
            }],
            instructions: "<p>1. Slice the Eggplant </p><p>2. Marinate Eggplant in secret sauce<b> 30 minutes!</b></p><p>3. Cook Quinoa </p><p>4. Toss Eggplant, mixed greens, and quinoa.</p>",
          },
    }, {
        recipeId: "4",
        index: 0,
        snapshot: {
            id: "4",
            name: "Eggplant Fritters",
            changeSummary: "Now using a beer batter.",
            latestVersion: 1,
            imageUrl: "assets/eggplant_fritter.jpg",
            lastUpdated: new Date() - 15 * DAY,
            description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
            ingredients: [{
                name: "eggplant",
                amount: 2,
                units: "slice",
            }, {
                name: "quinoa",
                amount: 1,
                units: "cup",
            }, {
                name: "mixed greens",
                amount: 0.5,
                units: "cup",
            }, {
                name: "mayo",
                amount: 2,
                units: "tbsp",
            }, {
                name: "secret sauce",
                amount: 0.5,
                units: "tbsp",
            }],
            instructions: "<p>1. Slice the Eggplant </p><p>2. Marinate Eggplant in secret sauce<b> 30 minutes!</b></p><p>3. Cook Quinoa </p><p>4. Toss Eggplant, mixed greens, and quinoa.</p>",

          },
    }];

    var ingredients = [{
        id: "0",
        name: "eggplant",
        description: "A purple vegetable."
    }, {
        id: "1",
        name: "secret sauce",
        description: "The recipe is a secret"
    }, {
        id: "2",
        name: "mayo",
        description: "A condiment",
        allergens: "eggs"
    }, {
        id: "3",
        name: "quinoa",
        description: "A grain",
    }, {
        id: "4",
        name: "mixed greens",
        description: "A vegetable",
        allergens: "vegetables"
    }];

    function resetCache() {
        localStorage.clear();
        recipes.forEach(function(r) {
            RecipeService.add(r);
        });

        ingredients.forEach(function(i){
            IngredientService.add(i);
        });

        versions.forEach(function(i){
            VersionService.add(i);
        });
    }

    // Increment when wanting to force a client change
    var VERSION = 2;
    var MDB_V = 'mdb_v';

    var v = localStorage.getItem(MDB_V);

    if (!v || v < VERSION) {
        resetCache();
    }

    localStorage.setItem(MDB_V, VERSION);

  });
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

      .state('app.recipe.history.version', {
        url: '/version/:versionId',
        views: {
          'content@app.recipe': {
            controller: 'RecipeVersionCtrl',
            templateUrl: 'views/recipe/recipeVersion/recipeVersion.html'
          }
        },
        resolve: {
          version: function($stateParams, VersionService){
            return VersionService.findById($stateParams.versionId);
          },
        }
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

      .state('app.create', {
        url: '/create',
        controller: 'RecipeCreateCtrl',
        templateUrl: 'views/recipe/recipeCreate/recipeCreate.html'
      });

  });
angular.module('app')
  .run(function($rootScope, $sce, $sanitize) {
    $rootScope.UTIL = {
      fromNow: function(time) {
        return moment(time).fromNow();
      },
      formatDate: function(time) {
        return moment(time).format('MM/DD/YY');
      }
    };
  });
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

    service.update = function(id, obj) {
      return Recipes.update(id, obj);
    }

    return service;

  });
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
    };

    service.findById = function(id) {
      return Versions.findById(id);
    };

    service.update = function(id, obj) {
      return Versions.update(id, obj);
    };

    service.getAllForRecipe = function(recipeId) {
      return Versions.find((function(version){
        return version.recipeId == recipeId;
      })).sort(function(a,b){
        return b.index - a.index;
      });
    };

    service.getLatestVersionForRecipe = function(recipeId) {
      return service.getAllForRecipe(recipeId)[0];
    };

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
          ridx += 1;
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
    };

    return service;

  });
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
angular.module('app')
  .controller('BrowseCtrl',
    function($scope, $state, RecipeService){
      $scope.recipes = RecipeService.getAll();
      $('.ui.dropdown').dropdown();
      $scope.orderBy = function(x) {
      	$scope.orderByInput = x;
      };

      var allRecipes = RecipeService.getAll().forEach(function(r) {
        // console.log(r.imageUrl);
      });

      $scope.selectRecipe = function(id) {
        $state.go('app.recipe', {id: id});
      };

      $scope.createRecipe = function() {
        $state.go('app.create', {id: $scope.recipes.length});
      };

      $('#browse-filter').focus();
    });

angular.module('app')
  .controller('RecipeCtrl',
    function($scope, recipe) {
      $scope.recipe = recipe;
    });
angular.module('app')
  .controller('RecipeCreateCtrl',
    function($state, $scope, RecipeService, IngredientService, VersionService) {
      $scope.recipe = {
        id: Math.floor(Math.random() * 100000),
        imageUrl: "http://semantic-ui.com/images/wireframe/image.png",
        ingredients: [],
        changeSummary: "First Version!",
        description: "",
        instructions: "",
      };

      // ALL OF THIS SHIT IS COPY PASTED FROM RECIPE EDIT CTRL
      $scope.isValidForm = false;

      $scope.allIngredients = IngredientService.getAll();

      function initForm() {
        var formSettings = {
            keyboardShortcuts: false,
            fields: {
              name: {
                identifier: 'name',
                rules: [{
                  type: 'empty',
                  prompt: 'Please enter a recipe name.'
                }]
              },
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
            }
          };
        $scope.recipe.ingredients.forEach(function(i){
          formSettings.fields['amount-'+i.name] = {
            identifier: 'amount-'+i.name,
            rules: [{
              type: "not[0]", // kind of hack
              prompt: 'Please set a non-zero amount for ' + i.name
            },{
              type: "minLength[1]", // kind of hack
              prompt: 'Please set a non-zero amount for ' + i.name
            }
            ]
          };
          formSettings.fields['units-'+i.name] = {
            identifier: 'units-'+i.name,
            rules: [{
              type: 'minLength[1]',
              prompt: 'Please select a unit for ' + i.name
            },{
              type: "empty", // kind of hack
              prompt: 'Please set a non-zero amount for ' + i.name
            }]
          };
        });
        $('#create-recipe-form').form(formSettings);
      }

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
        initForm();

        $("#create-recipe-form").form("validate form");

        if (!$("#create-recipe-form").form("is valid")){
          return;
        }

        // this only increments the version number by 1
        $scope.recipe.latestVersion = 1;

        $scope.recipe.lastUpdated = new Date();

        VersionService.add({
          recipeId: $scope.recipe.id,
          index: 1,
          snapshot: $scope.recipe,
        });

        $scope.create(); // YEAH

      };

      $scope.cancel = function() {
        $state.go('app.browse');
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

      $scope.create = function() {
        // TODO: Validation
        RecipeService.add($scope.recipe);

        $state.go('app.recipe', {id: $scope.recipe._id}, {
          reload: true
        });
      };

    });
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

      function initForm() {
        var formSettings = {
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
          };
        $scope.recipe.ingredients.forEach(function(i){
          formSettings.fields['amount-'+i.name] = {
            identifier: 'amount-'+i.name,
            rules: [{
              type: "not[0]", // kind of hack
              prompt: 'Please set a non-zero amount for ' + i.name
            },{
              type: "minLength[1]", // kind of hack
              prompt: 'Please set a non-zero amount for ' + i.name
            }
            ]
          };
          formSettings.fields['units-'+i.name] = {
            identifier: 'units-'+i.name,
            rules: [{
              type: 'minLength[1]',
              prompt: 'Please select a unit for ' + i.name
            },{
              type: "empty", // kind of hack
              prompt: 'Please set a non-zero amount for ' + i.name
            }]
          };
        });
        $('#edit-recipe-form').form(formSettings);
      }

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
        initForm();

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
angular.module('app')
  .controller('RecipeStatsCtrl',
    function($scope, $state, VersionService) {
        Chart.defaults.global.defaultFontFamily = 'Avenir Next';
        Chart.defaults.global.legend.display = false;

        if ($('#ingr-dropdown .button').length > 0) {
          $('#ingr-dropdown .button').text(text);
          return;
        }

      // $('#ingr-dropdown').dropdown({
      //   duration: 0,
      //   onChange: function(value, text, choice) {
      //     $scope.newIngredient.name = value;
      //   },
      //   onNoResults: function(value) {
      //     dropdownAddCreateNew(value);
      //   }
      // });

        var randomScalingFactor = function() {
            return 500 + Math.round(Math.random() * 100);
        };

        function formatDate(time) {
            return moment(time).format('MM/DD/YY');
        }

        function zeroDate(date) {
            return moment(date).startOf('date');
        }
        var versions = VersionService.getAllForRecipe($scope.recipe.id);

        $scope.versions = versions.sort(function(a, b){
            return a.snapshot.latestVersion - b.snapshot.latestVersion;
        });

        var minDate = $scope.versions[0].snapshot.lastUpdated;
        var maxDate = new Date();
        maxDate.setHours(0);
        maxDate.setMinutes(0);
        maxDate.setSeconds(0);
        maxDate.setMilliseconds(0);


        function getDiff(version) {
          if (version.index > 0) {
            var prev = VersionService.find(function(v){
              return v.recipeId == version.recipeId && v.index == version.index - 1;
            })[0];
            if (prev) {
              return VersionService.getDiff(prev, version);
            }
          }
        }

        $scope.diffs = $scope.versions.map(getDiff);

        var salesData = [];
        var versionData = [];

        for (var i = 0; i < $scope.versions.length; i++) {
            var currentDate = new Date($scope.versions[i].snapshot.lastUpdated);
            var nextDate = maxDate;
            if (i < $scope.versions.length - 1) {
                var nextDate = new Date($scope.versions[i+1].snapshot.lastUpdated);
            }
            var randomData = randomScalingFactor();
            versionData.push({
                x: new Date(zeroDate(currentDate)),
                y: randomData,
                version: $scope.versions[i].snapshot.latestVersion,
            }); 
            salesData.push({
                x: new Date(zeroDate(currentDate)),
                y: randomData,
            }); 
            currentDate.setDate(currentDate.getDate() + 1);

            while (currentDate < nextDate) {
                salesData.push({
                    x: new Date(zeroDate(currentDate)),
                    y: randomScalingFactor(),
                }); 
                currentDate.setDate(currentDate.getDate() + 1);
            }
        }
        
        var drawChart = function(startDate, endDate) {
            $("#canvas").replaceWith("<canvas id='canvas'></canvas>");
            $("#canvas").on("mouseover", null);
            var ctx = document.getElementById("canvas").getContext("2d");

            var filteredVersionData = versionData.filter(function(d) {
                return moment(d.x).isSameOrAfter(new Date(startDate), 'date') && moment(d.x).isSameOrBefore(new Date(endDate), 'date');
            });
            var filteredSalesData = salesData.filter(function(d) {
                return moment(d.x).isSameOrAfter(new Date(startDate), 'date') && moment(d.x).isSameOrBefore(new Date(endDate), 'date');
            });

            if (!moment(filteredVersionData[0].x).isSame(new Date(startDate), 'date')) {
                filteredVersionData.unshift({
                    x: new Date(startDate),
                    y: filteredSalesData[0].y,
                    version: filteredVersionData[0].version - 1,
                })
            }

            if (!moment(filteredVersionData[filteredVersionData.length - 1].x).isSame(new Date(endDate), 'date')) {
                filteredVersionData.push({
                    x: new Date(zeroDate(endDate)),
                    y: filteredSalesData[filteredSalesData.length - 1].y,
                    version: versionData[versionData.length - 1].version + 1,
                });
            }

            var data = {
                datasets: [
                    {
                        label: "Versions",
                        data: filteredVersionData,
                        backgroundColor: 'rgba(255,255,255,0)',
                        borderColor: 'rgba(155, 89, 182, 0)',
                        pointBorderColor: 'rgba(155, 89, 182, 0)',
                        pointBackgroundColor: 'rgba(155, 89, 182, 0)',
                    }, {
                        label: "Sales",
                        data: filteredSalesData,
                        backgroundColor: 'rgba(155, 89, 182,.05)',
                        borderColor: 'rgba(155, 89, 182, .3)',
                        pointBorderColor: 'rgba(155, 89, 182, .3)',
                        pointBackgroundColor: 'rgba(155, 89, 182, .3)',
                    }
                ]
            };

            data.datasets.forEach(function(dataset) {
                dataset.borderWidth = 6;
                dataset.pointHoverRadius = 6;
                dataset.radius = 6;
                dataset.hitRadius = 20;
                dataset.pointBorderWidth = 3;
            });


            var chart = new Chart(ctx, {
                type: 'line',
                data: data,
                options: {
                    hover: {
                        mode: 'label'
                    },
                    title: {
                        display: false,
                        text: $scope.recipe.name + ' Sales'
                    },
                    scales: {
                        xAxes: [{
                            type: "time",
                            position: 'bottom',
                            scaleLabel: {
                                display: true,
                                labelString: 'Date'
                            },
                            time: {
                                // Moment js for each of the units. Replaces `displayFormat`
                                // To override, use a pattern string from http://momentjs.com/docs/#/displaying/format/
                                displayFormats: {
                                    'millisecond': 'SSS [ms]',
                                    'second': 'h:mm:ss a', // 11:20:01 AM
                                    'minute': 'h:mm:ss a', // 11:20:01 AM
                                    'hour': 'MMM D, hA', // Sept 4, 5PM
                                    'day': 'll', // Sep 4 2015
                                    'week': 'll', // Week 46, or maybe "[W]WW - YYYY" ?
                                    'month': 'MMM YYYY', // Sept 2015
                                    'quarter': '[Q]Q - YYYY', // Q3
                                    'year': 'YYYY', // 2015
                                },
                                // Sets the display format used in tooltip generation
                                tooltipFormat: 'll',
                                // unit: 'day',

                            },
                            ticks: {
                                min: startDate,
                                max: endDate,
                                determineDataLimits: function() {
                                    this.max = endDate;
                                    this.min = startDate;
                                },

                            }
                        }],
                        yAxes: [{
                            position: 'left',
                            scaleLabel: {
                                display: true,
                                labelString: 'Sales'
                            },
                            ticks: {
                            }

                        }],
                    },
                    tooltips: {
                        callbacks: {
                            label: function(tooltipItem, data) {
                                if (tooltipItem.datasetIndex == 0) {
                                    var updatedVersion = parseInt(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].version);
                                    if (updatedVersion == 1) {
                                        return "Created Version 1";
                                    } else if (updatedVersion >= filteredVersionData[filteredVersionData.length - 1].version) {
                                        return "";
                                    } else {
                                        return "Updated to Version " + updatedVersion;
                                    }
                                } else {
                                    return "Sales: " + tooltipItem.yLabel;
                                }
                            }
                        }
                    },
                }
            });

            var xBins = chart.config.data.datasets[0].metaData.map(function(e) {
                return e._view.x;
            });

            function findBin(x) {
                if (x < xBins[0]) {
                    return -1;
                } else {
                    var i = 0;
                    while (i < xBins.length) {
                        if (x >= xBins[i] && x < xBins[i+1]) {
                            return i;
                        }
                        i++;
                    }
                    return xBins.length;
                }
            }

            var resizePopup = function(){$('.ui.popup').css('max-height', $(window).height());};

            $(window).resize(function(e){
                resizePopup();
            });

            $("#canvas").on("mouseover", function(e) {
                var bin = findBin(e.offsetX);
                if (bin < 0 || bin >= xBins.length) {
                    return;
                }
                var rectWidth = xBins[bin+1] - xBins[bin];
                var rectHeight = chart.chartArea.bottom - chart.chartArea.top;
                $("#stats-highlighter").remove();
                $("#canvas-container").append("<div id='stats-highlighter'></div>")
                $("#stats-highlighter").css({
                    left: xBins[bin],
                    top: chart.chartArea.top,
                    width: rectWidth,
                    height: rectHeight,
                });
                $("#stats-highlighter").popup({
                    position : 'right center',
                    hoverable: true,
                    popup : $('#popup-' + parseInt(filteredVersionData[bin].version - 1)),
                });
            });
    }

    if ($scope.versions.length < 2) {
        $("#daterange-container").hide();
        $("#canvas-container").html("No sales data recorded yet.")
    } else {

        $('#daterange').daterangepicker({
            format: 'MM/DD/YY',
            startDate: formatDate(minDate),
            endDate: formatDate(maxDate),
            minDate: formatDate(minDate),
            maxDate: formatDate(maxDate),
        }, function(start, end, label) {
            drawChart(zeroDate(start), zeroDate(end));
        });

        drawChart(minDate, maxDate);
    }


    $scope.selectVersion = function(id) {
        $state.go('app.recipe.history.version', {versionId: id});
    }

});        
angular.module('app')
  .controller('RecipeHistoryCtrl',
    function($state, $scope, VersionService) {
        $scope.versions = VersionService.getAllForRecipe($scope.recipe.id);

        $scope.selectVersion = function(id) {
            $state.go('app.recipe.history.version', {versionId: id});
        };

        function getDiff(version) {
          if (version.index > 0) {
            var prev = VersionService.find(function(v){
              return v.recipeId == version.recipeId && v.index == version.index - 1;
            })[0];
            if (prev) {
              return VersionService.getDiff(prev, version);
            }
          }
        }

        $scope.diffs = $scope.versions.map(getDiff);

    });
angular.module('app')
  .controller('RecipeVersionCtrl',
    function($scope, version, VersionService) {
        $scope.version = version;

        if ($scope.version.index > 0) {
            var prev = VersionService.find(function(v){
                return v.recipeId == version.recipeId && v.index == version.index - 1;
            })[0];
            if (prev) {
                $scope.diff = VersionService.getDiff(prev, $scope.version);
                console.log($scope.diff);
                $scope.showDiff = true;
            }
        } 
    });