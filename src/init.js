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
            latestVersion: 2,
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
            latestVersion: 3,
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
            latestVersion: 2,
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

    if (RecipeService.getAll().length === 0) {
      recipes.forEach(function(r) {
        RecipeService.add(r);
      });
    }

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

    if (IngredientService.getAll().length === 0) {
        ingredients.forEach(function(i){
            IngredientService.add(i);
        });
    }

    if (VersionService.getAll().length === 0) {
        versions.forEach(function(i){
            VersionService.add(i);
        });
    }
  });