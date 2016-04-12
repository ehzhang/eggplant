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
        instructions: [
            "Slice eggplant.",
            "Marinate eggplant in secret sauce.",
            "Cook quinoa.",
            "Toss eggplant, mixed greens, and quinoa.",
        ]
    };


    appendToElement("body", "layout");

    // Start off by loading the main content with the recipe page
    appendToElement("#content", "recipe_page", {
        recipe: recipe
    });

    $(document).on("click", "#update-btn", function(e) {
        loadElement("#recipe-content", "ingredients_form", {
            recipe: recipe
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