(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['browse_recipes_view'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    <div class=\"ui recipe segment\" data-recipe-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\n        <div class=\"ui grid\">\n            <div class=\"three wide column\">\n                <img\n                    src=\""
    + alias2(alias1((depth0 != null ? depth0.imageUrl : depth0), depth0))
    + "\"\n                    class=\"ui large image\">\n            </div>\n\n            <div class=\"nine wide column\">\n                <div class=\"content\">\n                    <h3 class=\"recipe-name\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h3>\n                    v<div class=\"recipe-version\">"
    + alias2(alias1((depth0 != null ? depth0.latestVersion : depth0), depth0))
    + "</div>\n\n                    <div class=\"ui divider\"></div>\n\n                    <p>\n                    "
    + alias2(alias1((depth0 != null ? depth0.changeSummary : depth0), depth0))
    + "\n                    </p>\n                </div>\n            </div>\n\n            <div class=\"right aligned four wide column\">\n                <div class=\"content\">\n                    <div class=\"recipe-last-updated\">\n                        Last Updated "
    + alias2(alias1((depth0 != null ? depth0.lastUpdated : depth0), depth0))
    + "\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1 class=\"ui header\">\n    Browse Recipes\n</h1>\n\n<div class=\"ui divider\"></div>\n\n<div class=\"ui icon fluid input\">\n    <input id=\"browse-filter\"\n        placeholder=\"Search for Recipes...\"\n        type=\"text\">\n    <i class=\"search icon\"></i>\n</div>\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.recipes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['edit_recipe_view'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"inline fields\">\n            <div class=\"three wide field\">\n                <input type=\"number\" name=\"amount\" placeholder=\""
    + alias4(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amount","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amount","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n            <div class=\"four wide field\">\n                <select class=\"ui dropdown\" name=\"units\" value=\""
    + alias4(((helper = (helper = helpers.units || (depth0 != null ? depth0.units : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"units","hash":{},"data":data}) : helper)))
    + "\">\n                    <option value=\"tsp\">tsp</option>\n                    <option value=\"tbsp\">tbsp</option>\n                    <option value=\"cup\">cup</option>\n                </select>\n            </div>\n            <div class=\"eight wide field\">\n                <label>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</label>\n            </div>\n            <div class=\"one wide field\">\n                <i class=\"red remove circle icon\"></i>\n            </div>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                          <div class=\"item\" data-value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "<div id=\"edit-recipe-form\" class=\"ui form\">\n    <div style=\"text-align: right\" class=\"ui header\">\n        Updating to Version <strong class=\"brand\">2.4</strong>\n    </div>\n\n    <div class=\"ui divider\"></div>\n\n    <div class=\"small ui header\">\n        Recipe Description\n    </div>\n    <div class=\"fields\">\n        <div class=\"twelve wide field\">\n            <textarea\n                name=\"description\"\n                placeholder=\"This is a recipe for a delicious...\"\n                >"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.description : stack1), depth0))
    + "</textarea>\n        </div>\n        <div class=\"four wide field\">\n            <div class=\"ui fluid card\">\n                <div class=\"ui medium fluid image\">\n                    <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.imageUrl : stack1), depth0))
    + "\">\n                </div>\n                <div class=\"ui bottom attached button\">\n                    Upload New Image\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"ui divider\"></div>\n\n    <div class=\"small ui header\">\n        Ingredients\n    </div>\n\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.ingredients : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"small ui header\">\n        Add Ingredient to Recipe\n    </div>\n    <div class=\"ui form\" id=\"add-ingr-form\">\n        <div class=\"inline fields\">\n            <div class=\"three wide field\">\n                <input type=\"text\" placeholder=\""
    + alias2(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"amount","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias2(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"amount","hash":{},"data":data}) : helper)))
    + "\" name=\"amount\">\n            </div>\n            <div class=\"four wide field\" name=\"units\">\n                <select class=\"ui dropdown\">\n                <option value=\"\">tsp</option>\n                <option value=\"1\">tbsp</option>\n                <option value=\"0\">cup</option>\n                </select>\n            </div>\n            <div class=\"field\">\n                <div class=\"ui fluid search selection dropdown\" id=\"ingr-dropdown\">\n                    <input type=\"hidden\" name=\"name\">\n                    <i class=\"dropdown icon\"></i>\n                    <div class=\"default text\">Select Ingredient</div>\n                    <div class=\"menu\">\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.ingredients : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                   </div>\n                </div>\n            </div>\n            <div class=\"field\">\n                <div\n                    id=\"add-ingr-btn\"\n                    class=\"ui submit positive button\">\n                    Add\n                </div>\n            </div>\n\n            <div class=\"field\">\n                <div class=\"ui purple button\" id=\"add-ingr\">\n                    <i class=\"plus icon\"></i>\n                    Create New Ingredient\n                </div>\n            </div>\n        </div>\n        <div class=\"ui error message\"></div>\n    </div>\n\n    <br>\n\n    <div class=\"ui divider\"></div>\n\n    <br>\n\n    <div class=\"field\">\n        <div class=\"ui grid\">\n            <div class=\"eight wide column\">\n                <div class=\"small ui header\"> Edit Instructions </div>\n                <textarea\n                    id=\"instructions-edit\"\n                    name=\"instructions\"\n                    placeholder=\"1. Prepare the...\"\n                    ></textarea>\n            </div>\n            <div class=\"eight wide column\">\n                <div class=\"small ui header\"> Preview </div>\n                <div id=\"instructions-preview\" class=\"instructions\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <br>\n    <br>\n\n    <div class=\"field\">\n        <div class=\"small ui header\">Change Summary</div>\n        <textarea name=\"summary\" rows=\"2\" placeholder=\"I removed/added some...\"></textarea>\n    </div>\n\n\n    <div class=\"ui divider\"></div>\n\n    <div class=\"right aligned field\">\n        <div\n            id=\"cancel-recipe-btn\"\n            class=\"ui basic large button\">Cancel</div>\n        <div\n            id=\"update-recipe-btn\"\n            class=\"ui purple large submit button\">Update Recipe</div>\n    </div>\n    <div class=\"ui error message\"></div>\n\n    <br>\n    <br>\n    <br>\n\n</div>\n\n<div class=\"ui modal new-ingredient small\">\n"
    + ((stack1 = container.invokePartial(partials.new_ingredient_form,depth0,{"name":"new_ingredient_form","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});
templates['global_nav'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"global-nav\" class=\"ui stackable grid\">\n    <div class=\"four wide column\"></div>\n    <div class=\"eight wide column\">\n        <div class=\"ui secondary inverted pointing large menu\">\n            <a id=\"global-nav-home\" class=\"active item\">\n                Eggplant\n            </a>\n            <a id=\"global-nav-browse\" class=\"item\">\n                Browse\n            </a>\n            <div class=\"right menu\">\n              <a class=\"ui item\">\n                <i class=\"user icon\"></i>\n                Justin\n              </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"four wide column\"></div>\n</div>\n\n";
},"useData":true});
templates['layout'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.global_nav,depth0,{"name":"global_nav","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"ui stackable grid\">\n    <div class=\"four wide column\"></div>\n    <div class=\"eight wide column\">\n        <div id=\"content\">\n        </div>\n    </div>\n    <div class=\"four wide column\"></div>\n</div>";
},"usePartial":true,"useData":true});
templates['new_ingredient_form'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"header\">\n    Create New Ingredient\n</div>\n<div class=\"content\">\n    <div class=\"ui form ingredient\" id=\"new-ingr-form\">\n        <div class=\"inline fields\">\n            <div class=\"three wide field\">\n                <label>Name</label>\n            </div>\n            <div class=\"nine wide field\">\n                <input type=\"text\" name=\"name\">\n            </div>\n        </div>\n        <div class=\"inline fields\">\n            <div class=\"three wide field\">\n                <label>Description</label>\n            </div>\n            <div class=\"nine wide field\">\n                <textarea rows=5 name=\"description\"></textarea>\n            </div>\n        </div>\n        <div class=\"inline fields\">\n            <div class=\"three wide field\">\n                <label>Allergens</label>\n            </div>\n            <div class=\"nine wide field\">\n                <textarea rows=5></textarea>\n            </div>\n        </div>\n        <div class=\"inline fields\">\n            <div class=\"three wide field\">\n                <label>Photo</label>\n            </div>\n            <div class=\"three wide field\">\n                <div class=\"ui card\">\n                    <div class=\"ui medium image\">\n                        <img src=\"http://semantic-ui.com/images/wireframe/image.png\">\n                    </div>\n                    <div class=\"ui bottom attached button\">\n                        Upload\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"actions\">\n    <div class=\"ui red button\" id=\"modal-cancel-btn\">Cancel</div>\n    <div class=\"ui positive right labeled icon button\" id=\"new-ingr-btn\">\n    Save\n    <i class=\"checkmark icon\"></i>\n    </div>\n</div>";
},"useData":true});
templates['recipe_nav_header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"ui three item menu\">\n  <a id=\"nav-history-btn\" class=\"item\">\n    <i class=\"history icon\"></i>\n    View History\n  </a>\n  <a id=\"nav-stats-btn\" class=\"item\">\n    <i class=\"line chart icon\"></i>\n    View Sales\n  </a>\n  <a id=\"nav-update-btn\" class=\"item\">\n    <i class=\"edit icon\"></i>\n    Update\n  </a>\n</div>";
},"useData":true});
templates['recipe_page'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div>\n    <h1 id=\"recipe-header\" class=\"ui header\">\n      "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n    </h1>\n\n    <div class=\"version-header\">\n        <h3 style=\"display: inline\">Latest Version: <strong class=\"brand\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.latestVersion : stack1), depth0))
    + "</strong></h3>\n        <br>\n        <span class=\"version-message\">\n            Doubled amount of secret sauce.\n        </span>\n    </div>\n\n    <br>\n\n    <div id=\"recipe-content\">\n"
    + ((stack1 = container.invokePartial(partials.recipe_view,depth0,{"name":"recipe_view","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div>\n</div>";
},"usePartial":true,"useData":true});
templates['recipe_stats_view'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <img id=\"stats-v"
    + alias4(((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"version","hash":{},"data":data}) : helper)))
    + "\" class=\"stats-img\" data-version=\""
    + alias4(((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"version","hash":{},"data":data}) : helper)))
    + "\" data-summary=\""
    + alias4(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data}) : helper)))
    + "\" src=\"img/stats_v"
    + alias4(((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"version","hash":{},"data":data}) : helper)))
    + ".png\"></img>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.recipe_nav_header,depth0,{"name":"recipe_nav_header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"ui divider\"></div>\n\n<h3 class=\"ui header\">Overall Sales for "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h3>\n\n<div>\n    <img id=\"stats-x\" class=\"stats-axis\" src=\"img/stats_xaxis.png\"></img>\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.versions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <img id=\"stats-y\" class=\"stats-axis\" src=\"img/stats_yaxis.png\"></img>\n</div>";
},"usePartial":true,"useData":true});
templates['recipe_view'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <div>\n                        "
    + alias4(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amount","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.units || (depth0 != null ? depth0.units : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"units","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\n                    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.instructions : stack1), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, buffer = 
  ((stack1 = container.invokePartial(partials.recipe_nav_header,depth0,{"name":"recipe_nav_header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"ui divider\"></div>\n\n<div class=\"ui grid\">\n\n    <div class=\"row\">\n        <div class=\"twelve wide column\">\n            <p>\n                "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.description : stack1), depth0))
    + "\n            </p>\n        </div>\n        <div class=\"four wide column\">\n            <img class=\"ui fluid image\" src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.imageUrl : stack1), depth0))
    + "\">\n        </div>\n    </div>\n</div>\n\n<div class=\"ui divider\"></div>\n\n<div class=\"ui grid\">\n\n    <div class=\"row\">\n        <div class=\"four wide column\">\n            <h3>Ingredients</h3>\n            <div class=\"ingredients\">\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.ingredients : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n        <div class=\"twelve wide column\">\n            <h3>Instructions</h3>\n            <div class=\"instructions\">\n                ";
  stack1 = ((helper = (helper = helpers.markdown || (depth0 != null ? depth0.markdown : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"markdown","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(alias3,options) : helper));
  if (!helpers.markdown) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n        </div>\n    </div>\n</div>";
},"usePartial":true,"useData":true});
})();