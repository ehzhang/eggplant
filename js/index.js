$(document).ready(function() {
    var recipe = {
        name: "Eggplant Quinoa Bowl",
        latestVersion: "2.3",
        changeSummary: "Doubled the amount of secret sauce.",
        imageUrl: "assets/eggplant_quinoa_bowl.jpg",
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
    };

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
        changeSummary: "Doubled the amount of secret sauce.",
        latestVersion: "1.2",
        imageUrl: "assets/eggplant_poboy.jpg",
        lastUpdated: 'Jan 1st, 1971',
      },
      {
        id: "1",
        name: "Eggplant Tacos",
        changeSummary: "Doubled the amount of secret sauce.",
        latestVersion: "2.5",
        imageUrl: "assets/eggplant_taco.jpg",
        lastUpdated: 'Jan 1st, 1971',
      },
      {
        id: "2",
        name: "Eggplant Quinoa Bowl",
        changeSummary: "Doubled the amount of secret sauce.",
        latestVersion: "2.3",
        imageUrl: "assets/eggplant_quinoa_bowl.jpg",
        lastUpdated: 'Jan 1st, 1971',
      },
      {
        id: "3",
        name: "Eggplant Burrito",
        changeSummary: "Doubled the amount of secret sauce.",
        latestVersion: "4.5",
        imageUrl: "assets/eggplant_burrito.jpg",
        lastUpdated: 'Jan 1st, 1971',
      },
      {
        id: "4",
        name: "Eggplant Fritters",
        changeSummary: "Doubled the amount of secret sauce.",
        latestVersion: "3.2",
        imageUrl: "assets/eggplant_fritter.jpg",
        lastUpdated: 'Jan 1st, 1971',
      },
    ];

    // Layout is the Master Root Scope upon which all of everything yay
    appendToElement("body", "layout");

    // #content is the next layer down
    // Use this to change entire pages

    // #recipe-content exists within the recipe content window.
    // Use this to change within a recipe

    // Start off by loading the main content with the recipe page
    appendToElement("#content", "recipe_page", {
        recipe: recipe
    });

    function showRecipe() {
        loadElement("#content", "recipe_page", {
            recipe: recipe
        });
    }

    function showUpdateRecipe() {
        loadElement("#recipe-content", "edit_recipe_view", {
            recipe: recipe
        });

        // Markdown Converter
        var converter = new showdown.Converter();

        // Set preview to text
        $('#instructions-edit')
          .val(recipe.instructions);

        $('#instructions-preview')
          .html(converter.makeHtml(recipe.instructions));

        $('#instructions-edit').keyup(function(){
          $('#instructions-preview')
            .html(converter.makeHtml($('#instructions-edit').val()));
        });
    }

    // showUpdateRecipe();

    function showRecipeStats() {
        loadElement("#recipe-content", "recipe_stats_view", {
            recipe: recipe,
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

    showBrowse();

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

    $(document).on("click", "#update-recipe-btn", function(e) {

      // TODO: Update the in memory recipe

      // Return to Recipe View
      loadElement("#content", "recipe_page", {
          recipe: recipe
      });
    });

    $(document).on("click", "#cancel-recipe-btn", function(e) {
      // Return to Recipe View
      loadElement("#content", "recipe_page", {
          recipe: recipe
      });
    });

    $(document).on("click", ".recipe.segment", function(e) {

      var recipeId = this.dataset.recipeId;

      var r = recipes[recipeId];


      // TODO: Fill out actual data later
      if (recipeId == 2) {
          r = recipe;
      }

      loadElement("#content", "recipe_page", {
          recipe: r
      });
    });

    $(document).on("click", "#add-ingr-btn", function(e) {
        $(".ui.modal").modal("show");
    });

    $(document).on("click", "#modal-cancel-btn", function(e) {
        $(".ui.modal").modal("hide");
    });

    $('.ui.ingredient.form')
      .form({fields: {
      name: {
        identifier: 'name',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a name for this ingredient'
          }
        ]
      },
      gender: {
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
});