$(document).ready(function() {
    var recipe = {
        name: "Eggplant Quinoa Bowl",
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


    appendToElement("body", "layout");

    // Start off by loading the main content with the recipe page
    appendToElement("#content", "recipe_page", {
        recipe: recipe
    });

    function showUpdateRecipe() {

        loadElement("#recipe-content", "ingredients_form", {
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

    $(document).on("click", "#update-btn", function(e) {
      showUpdateRecipe();
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