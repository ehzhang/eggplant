// Append template to specified selector
var appendToElement = function(selector, template, data) {
    data = data || {};
    $(selector).append(Handlebars.templates[template](data));
}

// Load template to specified selector
var loadElement = function(selector, template, data) {
    $(selector).html(Handlebars.templates[template](data));
}