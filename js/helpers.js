Handlebars.registerPartial('layout', Handlebars.templates['layout']);
Handlebars.registerPartial('global_nav', Handlebars.templates['global_nav']);
Handlebars.registerPartial('recipe_nav_header', Handlebars.templates['recipe_nav_header']);
Handlebars.registerPartial('ingredients_form', Handlebars.templates['ingredients_form']);
Handlebars.registerPartial('ingredients_view', Handlebars.templates['ingredients_view']);
Handlebars.registerPartial('new_ingredient_form', Handlebars.templates['new_ingredient_form']);

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