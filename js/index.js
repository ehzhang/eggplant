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

    appendToElement("body", "recipe_page", {
        recipe: recipe
    });

    $(document).on("click", "#update-btn", function(e) {
        loadElement("#recipe-content", "ingredients_form", {
            recipe: recipe
        });
    });
});