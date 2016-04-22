$(document).ready(function() {

    var recipeVersions = [{
        version: 1,
        summary: "Reduce amount of mixed greens.",
    }, {
        version: 2,
        summary: "Add mayo to sauce.",
    }, {
        version: 3,
        summary: "Add more eggplant and decrease amount of quinoa.",
    }, {
        version: 4,
        summary: "Add hummus to the recipe.",
    }];

    var recipes = [
      {
        id: "0",
        name: "Eggplant Po Boy",
        changeSummary: "Changed breading to panko.",
        latestVersion: "1.2",
        imageUrl: "assets/eggplant_poboy.jpg",
        lastUpdated: 'Jan 1st, 1971',
        description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
        ingredients: [{
            name: "eggplant",
            amount: 2,
            units: "slices",
        }, {
            name: "quinoa",
            amount: 1,
            units: "cups",
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
      {
        id: "1",
        name: "Eggplant Tacos",
        changeSummary: "Used fresher tortillas.",
        latestVersion: "2.5",
        imageUrl: "assets/eggplant_taco.jpg",
        lastUpdated: 'Jan 1st, 1971',
        description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
        ingredients: [{
            name: "eggplant",
            amount: 2,
            units: "slices",
        }, {
            name: "quinoa",
            amount: 1,
            units: "cups",
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
        instructions: "1. Slice the Eggplant \n2. Marinate Eggplant in secret sauce **30 minutes!** \n3. Cook Quinoa \n4. Toss Eggplant, mixed greens, and quinoa",
      },
      {
        id: "2",
        name: "Eggplant Quinoa Bowl",
        changeSummary: "Doubled the amount of secret sauce.",
        latestVersion: "2.3",
        imageUrl: "assets/eggplant_quinoa_bowl.jpg",
        lastUpdated: 'Jan 1st, 1971',
        description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
        ingredients: [{
            name: "eggplant",
            amount: 2,
            units: "slices",
        }, {
            name: "quinoa",
            amount: 1,
            units: "cups",
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
        instructions: "1. Slice the Eggplant \n2. Marinate Eggplant in secret sauce **30 minutes!** \n3. Cook Quinoa \n4. Toss Eggplant, mixed greens, and quinoa",

      },
      {
        id: "3",
        name: "Eggplant Burrito",
        changeSummary: "Whole wheat tortillas, locally made.",
        latestVersion: "4.5",
        imageUrl: "assets/eggplant_burrito.jpg",
        lastUpdated: 'Jan 1st, 1971',
        description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
        ingredients: [{
            name: "eggplant",
            amount: 2,
            units: "slices",
        }, {
            name: "quinoa",
            amount: 1,
            units: "cups",
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
        instructions: "1. Slice the Eggplant \n2. Marinate Eggplant in secret sauce **30 minutes!** \n3. Cook Quinoa \n4. Toss Eggplant, mixed greens, and quinoa",

      },
      {
        id: "4",
        name: "Eggplant Fritters",
        changeSummary: "Now using a beer batter.",
        latestVersion: "3.2",
        imageUrl: "assets/eggplant_fritter.jpg",
        lastUpdated: 'Jan 1st, 1971',
        description: "Man braid fixie farm-to-table pug wayfarers scenester before they sold out ramps tilde, man bun YOLO slow-carb squid shoreditch put a bird on it. Tote bag venmo lo-fi kombucha synth semiotics. Photo booth thundercats hella squid church-key semiotics. Scenester dreamcatcher cornhole, whatever affogato roof party 3 wolf moon kinfolk shabby chic meh twee photo booth irony keffiyeh. Literally chia jean shorts, viral kinfolk pickled bicycle rights flexitarian twee marfa neutra cray.",
        ingredients: [{
            name: "eggplant",
            amount: 2,
            units: "slices",
        }, {
            name: "quinoa",
            amount: 1,
            units: "cups",
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
        instructions: "1. Slice the Eggplant \n2. Marinate Eggplant in secret sauce **30 minutes!** \n3. Cook Quinoa \n4. Toss Eggplant, mixed greens, and quinoa",

      },
    ];

    // TODO: Set a unit specific to each ingredient
    var ingredients = [{
        name: "eggplant",
        description: "A purple vegetable."
    }, {
        name: "secret sauce",
        description: "The recipe is a secret"
    }, {
        name: "mayo",
        description: "A condiment",
        allergens: "eggs"
    }, {
        name: "quinoa",
        description: "A grain",
    }, {
        name: "mixed greens",
        description: "A vegetable",
        allergens: "vegetables"
    }];


    // Data Models
    var currentRecipe = recipes[2]; // Eggplant Quinoa Bowl

    // Layout is the Master Root Scope upon which all of everything yay
    appendToElement("body", "layout");

    // #content is the next layer down
    // Use this to change entire pages

    // #recipe-content exists within the recipe content window.
    // Use this to change within a recipe

    // Start with the browse screen
    showBrowse();

    function showRecipe() {
        loadElement("#content", "recipe_page", {
            recipe: currentRecipe
        });
    }

    function showUpdateRecipe() {
        loadElement("#recipe-content", "edit_recipe_view", {
            recipe: currentRecipe,
            ingredients: ingredients
        });

        // Markdown Converter
        var converter = new showdown.Converter();

        // Set preview to text
        $('#instructions-edit')
          .val(currentRecipe.instructions);

        $('#instructions-preview')
          .html(converter.makeHtml(currentRecipe.instructions));

        $('#instructions-edit').keyup(function(){
          $('#instructions-preview')
            .html(converter.makeHtml($('#instructions-edit').val()));
        });

        // TODO: Make sure to show the add new ingredient dropdown even if the
        // ingredient isn't found

        $(".ui.fluid.search.selection.dropdown").dropdown();
        triggerAddIngredientValidation();

        $("#add-ingr").on("click", function(e){
            $(".ui.new-ingredient.modal").modal("show");
            triggerNewIngredientValidation();
            $(".ui.new-ingredient.modal").modal({
              onApprove: function(){
                if ($('.ui.ingredient.form').form('is valid')) {
                    var fields = $("#new-ingr-form").form("get values", ["name", "description", "allergens", "photo"]);
                    ingredients.push(fields);
                    showUpdateRecipe();
                    $('#ingr-dropdown').dropdown('set selected', fields["name"]);
                  return true;
                } else {
                  return false;
                }
              }
            });
        });

        $('#edit-recipe-form').form({
            on: "submit",
            inline: true,
            fields: {
                description: {
                    identifier: 'description',
                    rules: [{
                        type: 'empty',
                        prompt : 'Please enter a description'
                    }]
                },
                amount: {
                    identifier: 'amount',
                    rules: [{
                        type   : 'number',
                        prompt : 'Please enter the amount'
                    }]
                },
                units: {
                    identifier: 'units',
                    rules: [{
                        type   : 'empty',
                        prompt : 'Please select the unit type'
                    }]
                },
                ingredient: {
                    identifier: 'ingredient',
                    rules: [{
                        type   : 'empty',
                        prompt : 'Please select an ingredient'
                    }]
                },
                instructions: {
                    identifier: 'instructions',
                    rules: [{
                        type   : 'empty',
                        prompt : 'Please add instructions'
                    }]
                },
                summary: {
                    identifier: 'summary',
                    rules: [{
                        type   : 'empty',
                        prompt : 'Please add a summary'
                    }]
                },
            }
        });
    }




    function showRecipeStats() {
        loadElement("#recipe-content", "recipe_stats_view", {
            recipe: currentRecipe,
            versions: recipeVersions,
        });
        for (var i = 0; i < recipeVersions.length; i++) {
            var recipeVersion = recipeVersions[i];
            $('#stats-v' + recipeVersion.version)
              .popup({
                inline   : true,
                hoverable: true,
                title: "Version " + recipeVersion.version,
                content: recipeVersion.summary,
                position : 'bottom left',
                delay: {
                  show: 300,
                  hide: 800
                }
            });
        }
    }

    function showBrowse() {
      loadElement("#content", "browse_recipes_view", {
          recipes: recipes
      });
    }

    function triggerNewIngredientValidation() {
        $('.ui.ingredient.form')
            .form({
            on: "blur",
            inline: true,
            fields: {
              name: {
                identifier: 'name',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please enter a name for this ingredient'
                  }
                ]
              },
              description: {
                identifier: 'description',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please enter a description'
                  }
                ]
              }
            }
          });
    }

    function triggerAddIngredientValidation() {
      var ingredientList = ingredients.map(function(ingredient){
        return ingredient["name"];
      });
      var nameRules = [{ type   : 'empty',
                         prompt : 'Please select an ingredient.'}];
      ingredientList.forEach(function(ingredientName){
          nameRules.push({
            type: 'doesntContain[' + ingredientName + ']',
            prompt: 'Recipe already contains this ingredient!'
          });
      });
      $("#add-ingr-form")
        .form({
          on: "blur",
          fields: {
            name: {
              identifier: 'name',
              rules: nameRules
            },
            amount: {
              identifier: 'amount',
              rules: [
                {
                  type   : 'empty',
                  prompt : 'Please enter an amount.'
                },
                {
                  type   : 'number',
                  prompt : 'Please enter a number.'
                }
              ]
            }
          }
        });
    }

    $(document).on("keyup", "#browse-filter", function(e) {
        console.log($(this).val());
        var regex = new RegExp($(this).val(), 'i');
        $(".ui.recipe.segment").hide();
        $(".ui.recipe.segment").filter(function() {
            return regex.test($(this).text());
        }).show();
    });

    $(document).on("click", "#recipe-header", function(e) {
      showRecipe();
    });

    $(document).on("click", "#nav-history-btn", function(e) {
      showRecipe();
    });

    $(document).on("click", "#nav-update-btn", function(e) {
      showUpdateRecipe();
    });

    $(document).on("click", "#nav-stats-btn", function(e) {
      showRecipeStats();
    });

    $(document).on("click", "#global-nav-browse", function(e) {
      showBrowse();
    });

    $(document).on("click", "#global-nav-home", function(e) {
      showBrowse();
    });


    $(document).on("submit", "#edit-recipe-form", function(e) {
        e.preventDefault();

        var fields = $(this).form("get values",
            ["description", "instructions", "summary"]);

        currentRecipe.description = fields.description;
        currentRecipe.instructions = fields.instructions;
        currentRecipe.changeSummary = fields.summary;
        currentRecipe.latestVersion = parseFloat(currentRecipe.latestVersion) + 0.1;

        loadElement("#content", "recipe_page", {
            recipe: currentRecipe
        });
    });

    $(document).on("click", "#cancel-recipe-btn", function(e) {
      // Return to Recipe View
      loadElement("#content", "recipe_page", {
          recipe: currentRecipe
      });
    });

    $(document).on("click", ".recipe.segment", function(e) {

      var recipeId = this.dataset.recipeId;

      // Select the current recipe
      currentRecipe = recipes[recipeId];

      loadElement("#content", "recipe_page", {
          recipe: currentRecipe
      });
    });

    $(document).on("click", "#modal-cancel-btn", function(e) {
        $(".ui.modal").modal("hide");
    });

    $(document).on("click", "#add-ingr-btn", function(e) {
        var fields = $("#add-ingr-form").form("get values", ["amount", "units", "name"]);
        if ($("#add-ingr-form").form("is valid")) {
            currentRecipe.ingredients.push(fields);
            showUpdateRecipe();
        }
    });
});