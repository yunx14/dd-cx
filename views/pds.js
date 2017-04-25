(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Welcome</h1>\n<p>This is a simple <em>Experience EndPoint</em> for Locations.</p>\n";
},"useData":true});
templates['location-form'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Location</h1>\r\n<form action=\"location-form\" method=\"post\">\r\n<formset id=\"location\">\r\n<label>Name</label><input type=\"text\" name=\"name\" />\r\n</formset>\r\n<button type=\"submit\">Submit</button>\r\n</form>\r\n";
},"useData":true});
templates['location-search'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Location Search</h1>\r\n<h2>Search by zipcode</h2>\r\n\r\n<form action=\"location-search\" method=\"post\">\r\n  <formset id=\"location-search\">\r\n    <!-- label for=\"search\">Search</label --><input type=\"search\" name=\"search\" id=\"search\" class=\"search zip\" placeholder=\"ex: 12345\" maxlength=\"5\"/>\r\n  </formset>\r\n  <button type=\"submit\">Search</button>\r\n  <button id=\"debugButton\" type=\"button\">Debug Model</button>\r\n</form>\r\n\r\n<!-- create a view to manage interaction (optional) -->\r\n<script src=\"./location-search.js\" defer=\"defer\"></script>\r\n";
},"useData":true});
templates['locations'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "  <li>"
    + alias4(((helper = (helper = helpers.npi || (depth0 != null ? depth0.npi : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"npi","hash":{},"data":data}) : helper)))
    + "&nbsp;:&nbsp;"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "&nbsp;:&nbsp;"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.name : depth0)) != null ? stack1.first : stack1), depth0))
    + " "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.name : depth0)) != null ? stack1.last : stack1), depth0))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<h1>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n<ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.locations : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
templates['provider-directory-search'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <label for=\""
    + alias4(((helper = (helper = helpers["field-id"] || (depth0 != null ? depth0["field-id"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"field-id","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labelAttribute : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</label>\r\n      <input id=\""
    + alias4(((helper = (helper = helpers["field-id"] || (depth0 != null ? depth0["field-id"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"field-id","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.inputAttribute : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.inputSecondaryAttribute : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " />\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return " >"
    + container.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"label","hash":{},"data":data}) : helper)));
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.attributeName || (depth0 != null ? depth0.attributeName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"attributeName","hash":{},"data":data}) : helper)))
    + "=\""
    + alias4(((helper = (helper = helpers.attributeValue || (depth0 != null ? depth0.attributeValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"attributeValue","hash":{},"data":data}) : helper)))
    + "\"";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.attributeName || (depth0 != null ? depth0.attributeName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"attributeName","hash":{},"data":data}) : helper)));
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <h3>Results</h3>\r\n    <ul class='provider-list' id=\"provider-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.provider : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "      <li class=\"provider-facility\">\r\n        <div class=\"\">NPI: "
    + alias4(((helper = (helper = helpers.npi || (depth0 != null ? depth0.npi : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"npi","hash":{},"data":data}) : helper)))
    + "</div>\r\n        <div class=\"\">Name: "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.name : depth0)) != null ? stack1.first : stack1), depth0))
    + " "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.name : depth0)) != null ? stack1.last : stack1), depth0))
    + "</div>\r\n        <div class=\"\">Gender: "
    + alias4(((helper = (helper = helpers.gender || (depth0 != null ? depth0.gender : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gender","hash":{},"data":data}) : helper)))
    + "</div>\r\n        <div class=\"\">Speciality: "
    + alias4(((helper = (helper = helpers.speciality || (depth0 != null ? depth0.speciality : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"speciality","hash":{},"data":data}) : helper)))
    + "</div>\r\n        <div class=\"\">Accepting: "
    + alias4(((helper = (helper = helpers.accepting || (depth0 != null ? depth0.accepting : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accepting","hash":{},"data":data}) : helper)))
    + "</div>\r\n        <div class=\"\">Languages: "
    + alias4(((helper = (helper = helpers.languages || (depth0 != null ? depth0.languages : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"languages","hash":{},"data":data}) : helper)))
    + "</div>\r\n\r\n        <ul>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.addresses : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\r\n\r\n        <div class=\"provider__network\">"
    + alias4(((helper = (helper = helpers.network || (depth0 != null ? depth0.network : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"network","hash":{},"data":data}) : helper)))
    + "</div></br>\r\n      </li>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <div class=\"provider__addresses\">Address: "
    + alias4(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"address","hash":{},"data":data}) : helper)))
    + ", "
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + ", "
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.zip || (depth0 != null ? depth0.zip : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zip","hash":{},"data":data}) : helper)))
    + "</div>\r\n            <div class=\"provider__phone\">Phone: "
    + alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<li><a href=\"#"
    + alias4(((helper = (helper = helpers.linkHref || (depth0 != null ? depth0.linkHref : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkHref","hash":{},"data":data}) : helper)))
    + "\" class=\"\">"
    + alias4(((helper = (helper = helpers.aLink || (depth0 != null ? depth0.aLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aLink","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, buffer = 
  "<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\r\n    <link href=\"./styles/style.css\" rel=\"stylesheet\"/>\r\n  </head>\r\n  <body>\r\n\r\n\r\n<header class=\"page-header header--banner\">\r\n  <ul>\r\n    <li>\r\n      <i class=\"icon icon-home\" aria-label=\"home icon\"></i>\r\n    </li>\r\n    <li class=\"logo__container\">\r\n      <img class=\""
    + alias4(((helper = (helper = helpers.imgClass || (depth0 != null ? depth0.imgClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgClass","hash":{},"data":data}) : helper)))
    + "\" src=\"../../images/logo-unbounded-alternate-reversed.png\" srcset=\"../../images/logo-unbounded-alternate-reversed.svg\" alt=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" />\r\n    </li>\r\n    <li class=\"login__container\">\r\n      <a href=\"#"
    + alias4(((helper = (helper = helpers.linkHref || (depth0 != null ? depth0.linkHref : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkHref","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = helpers.aLinkInverted || (depth0 != null ? depth0.aLinkInverted : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aLinkInverted","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.aLink || (depth0 != null ? depth0.aLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"aLink","hash":{},"data":data}) : helper)))
    + "</a>\r\n    </li>\r\n  </ul>\r\n</header>\r\n<main role=\"main\" class=\"page-main\">\r\n\r\n\r\n  <form action=\"directory-search.html\" method=\"post\" id='address_form' autocomplete=\"off\" >\r\n    <h2 class=\""
    + alias4(((helper = (helper = helpers.styleModifier || (depth0 != null ? depth0.styleModifier : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"styleModifier","hash":{},"data":data}) : helper)))
    + "\" ";
  stack1 = ((helper = (helper = helpers.attribute || (depth0 != null ? depth0.attribute : depth0)) != null ? helper : alias2),(options={"name":"attribute","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.attribute) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + alias4(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"heading","hash":{},"data":data}) : helper)))
    + "</h2>\r\n    <p><a>Log in</a> to find dentists in your plan.</p>\r\n    <fieldset>\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.form : depth0)) != null ? stack1.formFields : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </fieldset>\r\n    <button type=\"submit\" class=\""
    + alias4(((helper = (helper = helpers.btnClass || (depth0 != null ? depth0.btnClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"btnClass","hash":{},"data":data}) : helper)))
    + " btn--primary\">"
    + alias4(((helper = (helper = helpers.btnTextPrimary || (depth0 != null ? depth0.btnTextPrimary : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"btnTextPrimary","hash":{},"data":data}) : helper)))
    + "</button>\r\n	</form>\r\n\r\n  <!--if results -->\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.provider : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n</main>\r\n<footer class=\"page-footer\" role=\"contentinfo\">\r\n	<div>\r\n    <a href=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" class=\"c-logo-link\">\r\n      <img src=\"../../images/logo-primary-alternate.png\" srcset=\"../../images/logo-primary-alternate.svg\" srcset=\"../../images/logo-primary-alternate.svg\" alt=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" />\r\n    </a>\r\n	</div>\r\n\r\n	<ul class=\"contact g-half \">\r\n		<li class=\"gi\">\r\n			<div id=\"feedback\" class=\"feedback\">\r\n				<button class=\""
    + alias4(((helper = (helper = helpers.btnClass || (depth0 != null ? depth0.btnClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"btnClass","hash":{},"data":data}) : helper)))
    + " btn--feedback\">"
    + alias4(((helper = (helper = helpers.btnTextFeedback || (depth0 != null ? depth0.btnTextFeedback : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"btnTextFeedback","hash":{},"data":data}) : helper)))
    + "</button>\r\n			</div>\r\n		</li>\r\n		<li class=\"gi\">\r\n			<p>Need Help?</p>\r\n			<a class=\"phone-number\" href=\"tel:+"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.phoneNumber : stack1), depth0))
    + "\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.phoneNumber : stack1), depth0))
    + "</a>\r\n		</li>\r\n	</ul>\r\n\r\n	<div class=\"footer-links\">\r\n		<ul>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.footerLinks : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</ul>\r\n	</div>\r\n\r\n	<p class=\"copyright\">&copy; "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.company : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>\r\n\r\n	<p class=\"disclaimer\">\r\n		This site is the home of Delta Dental of California, Delta Dental Insurance Company, Delta Dental of Pennsylvania, Delta Dental of the District of Columbia, Delta Dental of Delaware, Delta Dental of West Virginia, their affiliated companies, and Delta Dental of New York. For other Delta Dental Plans Association member companies, visit the Delta Dental Plans Association website.\r\n	</p>\r\n</footer>\r\n\r\n<script type=\"text/javascript\" src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ&libraries=places\"></script>\r\n<script src=\"./jquery.min.js\" defer=\"defer\"></script>\r\n<script src=\"./main.js\" defer=\"defer\"></script>\r\n\r\n</body>\r\n</html>\r\n";
},"useData":true});
templates['layouts/main'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <title>Main HTML</title>\r\n    <link href=\"./styles/style.css\" rel=\"stylesheet\"/>\r\n  </head>\r\n  <body>\r\n  "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n  </body>\r\n</html>\r\n";
},"useData":true});
})();