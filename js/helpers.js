Handlebars.registerPartial('layout', Handlebars.templates['layout']);
Handlebars.registerPartial('global_nav', Handlebars.templates['global_nav']);
Handlebars.registerPartial('recipe_nav_header', Handlebars.templates['recipe_nav_header']);
Handlebars.registerPartial('recipe_view', Handlebars.templates['recipe_view']);
Handlebars.registerPartial('edit_recipe_view', Handlebars.templates['edit_recipe_view']);
Handlebars.registerPartial('new_ingredient_form', Handlebars.templates['new_ingredient_form']);

Handlebars.registerPartial('recipe_stats_view', Handlebars.templates['recipe_stats_view']);

Handlebars.registerPartial('browse_recipes_view', Handlebars.templates['browse_recipes_view']);

// Append template to specified selector
var appendToElement = function(selector, template, data) {
    data = data || {};
    $(selector).append(Handlebars.templates[template](data));
};

// Load template to specified selector
var loadElement = function(selector, template, data) {
    $(selector).html(Handlebars.templates[template](data));
};

Handlebars.registerHelper('markdown', function(options) {
    var converter = new showdown.Converter();
    var html = converter.makeHtml(options.fn(this));
    return new Handlebars.SafeString(html);
});

Handlebars.registerHelper('increaseVersion', function(recipe) {
    return parseFloat(recipe.latestVersion) + 0.1;
});