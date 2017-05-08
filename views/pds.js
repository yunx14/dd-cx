!function(){var e=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n["about"]=e({compiler:[7,">= 4.0.0"],main:function(e,n,a,l,t){return"<h1>Welcome</h1>\r\n<p>This is a simple <em>Experience EndPoint</em> for Locations.</p>\r\n"},useData:!0}),n["location-form"]=e({compiler:[7,">= 4.0.0"],main:function(e,n,a,l,t){return'<h1>Location</h1>\r\n<form action="location-form" method="post">\r\n<formset id="location">\r\n<label>Name</label><input type="text" name="name" />\r\n</formset>\r\n<button type="submit">Submit</button>\r\n</form>\r\n'},useData:!0}),n["location-search"]=e({compiler:[7,">= 4.0.0"],main:function(e,n,a,l,t){return'<h1>Location Search</h1>\r\n<h2>Search by zipcode</h2>\r\n\r\n<form action="location-search" method="post">\r\n  <formset id="location-search">\r\n    \x3c!-- label for="search">Search</label --\x3e<input type="search" name="search" id="search" class="search zip" placeholder="ex: 12345" maxlength="5"/>\r\n  </formset>\r\n  <button type="submit">Search</button>\r\n  <button id="debugButton" type="button">Debug Model</button>\r\n</form>\r\n\r\n\x3c!-- create a view to manage interaction (optional) --\x3e\r\n<script src="./location-search.js" defer="defer"><\/script>\r\n'},useData:!0}),n["locations"]=e({1:function(e,n,a,l,t){var r,i,s=null!=n?n:{},o=a.helperMissing,c=e.escapeExpression,p=e.lambda;return"  <li>"+c((i=null!=(i=a.npi||(null!=n?n.npi:n))?i:o,"function"==typeof i?i.call(s,{name:"npi",hash:{},data:t}):i))+"&nbsp;:&nbsp;"+c((i=null!=(i=a.type||(null!=n?n.type:n))?i:o,"function"==typeof i?i.call(s,{name:"type",hash:{},data:t}):i))+"&nbsp;:&nbsp;"+c(p(null!=(r=null!=n?n.name:n)?r.first:r,n))+" "+c(p(null!=(r=null!=n?n.name:n)?r.last:r,n))+"</li>\r\n"},compiler:[7,">= 4.0.0"],main:function(e,n,a,l,t){var r,i,s=null!=n?n:{};return"<h1>"+e.escapeExpression((i=null!=(i=a.title||(null!=n?n.title:n))?i:a.helperMissing,"function"==typeof i?i.call(s,{name:"title",hash:{},data:t}):i))+"</h1>\r\n<ul>\r\n"+(null!=(r=a.each.call(s,null!=n?n.locations:n,{name:"each",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t}))?r:"")+"</ul>\r\n"},useData:!0}),n["provider-directory-search-org"]=e({1:function(e,n,a,l,t){return""},3:function(e,n,a,l,t){var r,i,s=null!=n?n:{},o=a.helperMissing,c=e.escapeExpression;return'      <label for="'+c((i=null!=(i=a["field-id"]||(null!=n?n["field-id"]:n))?i:o,"function"==typeof i?i.call(s,{name:"field-id",hash:{},data:t}):i))+'" '+(null!=(r=a.each.call(s,null!=n?n.labelAttribute:n,{name:"each",hash:{},fn:e.program(4,t,0),inverse:e.noop,data:t}))?r:"")+'</label>\r\n      <input id="'+c((i=null!=(i=a["field-id"]||(null!=n?n["field-id"]:n))?i:o,"function"==typeof i?i.call(s,{name:"field-id",hash:{},data:t}):i))+'" '+(null!=(r=a.each.call(s,null!=n?n.inputAttribute:n,{name:"each",hash:{},fn:e.program(6,t,0),inverse:e.noop,data:t}))?r:"")+" "+(null!=(r=a.each.call(s,null!=n?n.inputSecondaryAttribute:n,{name:"each",hash:{},fn:e.program(8,t,0),inverse:e.noop,data:t}))?r:"")+" />\r\n"},4:function(e,n,a,l,t){var r;return" >"+e.escapeExpression((r=null!=(r=a.label||(null!=n?n.label:n))?r:a.helperMissing,"function"==typeof r?r.call(null!=n?n:{},{name:"label",hash:{},data:t}):r))},6:function(e,n,a,l,t){var r,i=null!=n?n:{},s=a.helperMissing,o=e.escapeExpression;return o((r=null!=(r=a.attributeName||(null!=n?n.attributeName:n))?r:s,"function"==typeof r?r.call(i,{name:"attributeName",hash:{},data:t}):r))+'="'+o((r=null!=(r=a.attributeValue||(null!=n?n.attributeValue:n))?r:s,"function"==typeof r?r.call(i,{name:"attributeValue",hash:{},data:t}):r))+'"'},8:function(e,n,a,l,t){var r;return e.escapeExpression((r=null!=(r=a.attributeName||(null!=n?n.attributeName:n))?r:a.helperMissing,"function"==typeof r?r.call(null!=n?n:{},{name:"attributeName",hash:{},data:t}):r))},10:function(e,n,a,l,t){var r;return"  <h3>Results</h3>\r\n    <ul class='provider-list' id=\"provider-list\">\r\n"+(null!=(r=a.each.call(null!=n?n:{},null!=n?n.provider:n,{name:"each",hash:{},fn:e.program(11,t,0),inverse:e.noop,data:t}))?r:"")+"    </ul>\r\n"},11:function(e,n,a,l,t){var r,i,s=null!=n?n:{},o=a.helperMissing,c="function",p=e.escapeExpression,u=e.lambda;return'      <li class="provider-facility">\r\n        <div class="">NPI: '+p((i=null!=(i=a.npi||(null!=n?n.npi:n))?i:o,typeof i===c?i.call(s,{name:"npi",hash:{},data:t}):i))+'</div>\r\n        <div class="">Name: '+p(u(null!=(r=null!=n?n.name:n)?r.first:r,n))+" "+p(u(null!=(r=null!=n?n.name:n)?r.last:r,n))+'</div>\r\n        <div class="">Gender: '+p((i=null!=(i=a.gender||(null!=n?n.gender:n))?i:o,typeof i===c?i.call(s,{name:"gender",hash:{},data:t}):i))+'</div>\r\n        <div class="">Speciality: '+p((i=null!=(i=a.speciality||(null!=n?n.speciality:n))?i:o,typeof i===c?i.call(s,{name:"speciality",hash:{},data:t}):i))+'</div>\r\n        <div class="">Accepting: '+p((i=null!=(i=a.accepting||(null!=n?n.accepting:n))?i:o,typeof i===c?i.call(s,{name:"accepting",hash:{},data:t}):i))+'</div>\r\n        <div class="">Languages: '+p((i=null!=(i=a.languages||(null!=n?n.languages:n))?i:o,typeof i===c?i.call(s,{name:"languages",hash:{},data:t}):i))+"</div>\r\n\r\n        <ul>\r\n"+(null!=(r=a.each.call(s,null!=n?n.addresses:n,{name:"each",hash:{},fn:e.program(12,t,0),inverse:e.noop,data:t}))?r:"")+'        </ul>\r\n\r\n        <div class="provider__network">'+p((i=null!=(i=a.network||(null!=n?n.network:n))?i:o,typeof i===c?i.call(s,{name:"network",hash:{},data:t}):i))+"</div></br>\r\n      </li>\r\n"},12:function(e,n,a,l,t){var r,i=null!=n?n:{},s=a.helperMissing,o="function",c=e.escapeExpression;return'            <div class="provider__addresses">Address: '+c((r=null!=(r=a.address||(null!=n?n.address:n))?r:s,typeof r===o?r.call(i,{name:"address",hash:{},data:t}):r))+", "+c((r=null!=(r=a.city||(null!=n?n.city:n))?r:s,typeof r===o?r.call(i,{name:"city",hash:{},data:t}):r))+", "+c((r=null!=(r=a.state||(null!=n?n.state:n))?r:s,typeof r===o?r.call(i,{name:"state",hash:{},data:t}):r))+" "+c((r=null!=(r=a.zip||(null!=n?n.zip:n))?r:s,typeof r===o?r.call(i,{name:"zip",hash:{},data:t}):r))+'</div>\r\n            <div class="provider__phone">Phone: '+c((r=null!=(r=a.phone||(null!=n?n.phone:n))?r:s,typeof r===o?r.call(i,{name:"phone",hash:{},data:t}):r))+"</div>\r\n"},14:function(e,n,a,l,t){var r,i=null!=n?n:{},s=a.helperMissing,o=e.escapeExpression;return'\t\t\t<li><a href="#'+o((r=null!=(r=a.linkHref||(null!=n?n.linkHref:n))?r:s,"function"==typeof r?r.call(i,{name:"linkHref",hash:{},data:t}):r))+'" class="">'+o((r=null!=(r=a.aLink||(null!=n?n.aLink:n))?r:s,"function"==typeof r?r.call(i,{name:"aLink",hash:{},data:t}):r))+"</a></li>\r\n"},compiler:[7,">= 4.0.0"],main:function(e,n,a,l,t){var r,i,s,o=null!=n?n:{},c=a.helperMissing,p="function",u=e.escapeExpression,d=e.lambda,h='<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta charset="UTF-8" />\r\n    <title>'+u((i=null!=(i=a.title||(null!=n?n.title:n))?i:c,typeof i===p?i.call(o,{name:"title",hash:{},data:t}):i))+'</title>\r\n    <link href="./styles/style.css" rel="stylesheet"/>\r\n  </head>\r\n  <body>\r\n\r\n\r\n<header class="page-header header--banner">\r\n  <ul>\r\n    <li>\r\n      <i class="icon icon-home" aria-label="home icon"></i>\r\n    </li>\r\n    <li class="logo__container">\r\n      <img class="'+u((i=null!=(i=a.imgClass||(null!=n?n.imgClass:n))?i:c,typeof i===p?i.call(o,{name:"imgClass",hash:{},data:t}):i))+'" src="../../images/logo-unbounded-alternate-reversed.png" srcset="../../images/logo-unbounded-alternate-reversed.svg" alt="'+u(d(null!=(r=null!=n?n.company:n)?r.name:r,n))+'" />\r\n    </li>\r\n    <li class="login__container">\r\n      <a href="#'+u((i=null!=(i=a.linkHref||(null!=n?n.linkHref:n))?i:c,typeof i===p?i.call(o,{name:"linkHref",hash:{},data:t}):i))+'" class="'+u((i=null!=(i=a.aLinkInverted||(null!=n?n.aLinkInverted:n))?i:c,typeof i===p?i.call(o,{name:"aLinkInverted",hash:{},data:t}):i))+'">'+u((i=null!=(i=a.aLink||(null!=n?n.aLink:n))?i:c,typeof i===p?i.call(o,{name:"aLink",hash:{},data:t}):i))+'</a>\r\n    </li>\r\n  </ul>\r\n</header>\r\n<main role="main" class="page-main">\r\n\r\n\r\n  <form action="directory-search.html" method="post" id=\'address_form\' autocomplete="off" >\r\n    <h2 class="'+u((i=null!=(i=a.styleModifier||(null!=n?n.styleModifier:n))?i:c,typeof i===p?i.call(o,{name:"styleModifier",hash:{},data:t}):i))+'" ';return i=null!=(i=a.attribute||(null!=n?n.attribute:n))?i:c,s={name:"attribute",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t},r=typeof i===p?i.call(o,s):i,a.attribute||(r=a.blockHelperMissing.call(n,r,s)),null!=r&&(h+=r),h+">"+u((i=null!=(i=a.heading||(null!=n?n.heading:n))?i:c,typeof i===p?i.call(o,{name:"heading",hash:{},data:t}):i))+"</h2>\r\n    <p><a>Log in</a> to find dentists in your plan.</p>\r\n    <fieldset>\r\n"+(null!=(r=a.each.call(o,null!=(r=null!=n?n.form:n)?r.formFields:r,{name:"each",hash:{},fn:e.program(3,t,0),inverse:e.noop,data:t}))?r:"")+'    </fieldset>\r\n    <button type="submit" class="'+u((i=null!=(i=a.btnClass||(null!=n?n.btnClass:n))?i:c,typeof i===p?i.call(o,{name:"btnClass",hash:{},data:t}):i))+' btn--primary">'+u((i=null!=(i=a.btnTextPrimary||(null!=n?n.btnTextPrimary:n))?i:c,typeof i===p?i.call(o,{name:"btnTextPrimary",hash:{},data:t}):i))+"</button>\r\n\t</form>\r\n\r\n  \x3c!--if results --\x3e\r\n"+(null!=(r=a.if.call(o,null!=n?n.provider:n,{name:"if",hash:{},fn:e.program(10,t,0),inverse:e.noop,data:t}))?r:"")+'\r\n</main>\r\n<footer class="page-footer" role="contentinfo">\r\n\t<div>\r\n    <a href="'+u(d(null!=(r=null!=n?n.company:n)?r.url:r,n))+'" class="c-logo-link">\r\n      <img src="../../images/logo-primary-alternate.png" srcset="../../images/logo-primary-alternate.svg" srcset="../../images/logo-primary-alternate.svg" alt="'+u(d(null!=(r=null!=n?n.company:n)?r.name:r,n))+'" />\r\n    </a>\r\n\t</div>\r\n\r\n\t<ul class="contact g-half ">\r\n\t\t<li class="gi">\r\n\t\t\t<div id="feedback" class="feedback">\r\n\t\t\t\t<button class="'+u((i=null!=(i=a.btnClass||(null!=n?n.btnClass:n))?i:c,typeof i===p?i.call(o,{name:"btnClass",hash:{},data:t}):i))+' btn--feedback">'+u((i=null!=(i=a.btnTextFeedback||(null!=n?n.btnTextFeedback:n))?i:c,typeof i===p?i.call(o,{name:"btnTextFeedback",hash:{},data:t}):i))+'</button>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li class="gi">\r\n\t\t\t<p>Need Help?</p>\r\n\t\t\t<a class="phone-number" href="tel:+'+u(d(null!=(r=null!=n?n.contact:n)?r.phoneNumber:r,n))+'">'+u(d(null!=(r=null!=n?n.contact:n)?r.phoneNumber:r,n))+'</a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<div class="footer-links">\r\n\t\t<ul>\r\n'+(null!=(r=a.each.call(o,null!=n?n.footerLinks:n,{name:"each",hash:{},fn:e.program(14,t,0),inverse:e.noop,data:t}))?r:"")+'\t\t</ul>\r\n\t</div>\r\n\r\n\t<p class="copyright">&copy; '+u(d(null!=(r=null!=n?n.company:n)?r.name:r,n))+'</p>\r\n\r\n\t<p class="disclaimer">\r\n\t\tThis site is the home of Delta Dental of California, Delta Dental Insurance Company, Delta Dental of Pennsylvania, Delta Dental of the District of Columbia, Delta Dental of Delaware, Delta Dental of West Virginia, their affiliated companies, and Delta Dental of New York. For other Delta Dental Plans Association member companies, visit the Delta Dental Plans Association website.\r\n\t</p>\r\n</footer>\r\n\r\n<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ&libraries=places"><\/script>\r\n<script src="./jquery.min.js" defer="defer"><\/script>\r\n<script src="./main.js" defer="defer"><\/script>\r\n\r\n</body>\r\n</html>\r\n'},useData:!0}),n["provider-directory-search"]=e({1:function(e,n,a,l,t){var r;return'      <ul class="provider-list">\r\n'+(null!=(r=a.each.call(null!=n?n:{},null!=n?n.provider:n,{name:"each",hash:{},fn:e.program(2,t,0),inverse:e.noop,data:t}))?r:"")+"      </ul>\r\n"},2:function(e,n,a,l,t){var r,i,s=null!=n?n:{},o=a.helperMissing,c="function",p=e.escapeExpression;return'        <li class="provider-listing">\r\n          <article>\r\n            <aside>\r\n\r\n              <div class="provider__distance">\r\n                <i class="icon  icon-map-marker" aria-label=""></i>\r\n                <span>'+p((i=null!=(i=a.distance||(null!=n?n.distance:n))?i:o,typeof i===c?i.call(s,{name:"distance",hash:{},data:t}):i))+'</span>\r\n              </div>\r\n\r\n              <div class="provider__link">\r\n                <a href="'+p((i=null!=(i=a.link||(null!=n?n.link:n))?i:o,typeof i===c?i.call(s,{name:"link",hash:{},data:t}):i))+'">View <i class="icon icon-right-arrow" aria-label="right arrow"></i></a>\r\n              </div>\r\n\r\n            </aside>\r\n\r\n            <section>\r\n\r\n              <header class="provider__name">\r\n                <h5>'+p((i=null!=(i=a.firstName||(null!=n?n.firstName:n))?i:o,typeof i===c?i.call(s,{name:"firstName",hash:{},data:t}):i))+" "+p((i=null!=(i=a.lastName||(null!=n?n.lastName:n))?i:o,typeof i===c?i.call(s,{name:"lastName",hash:{},data:t}):i))+'</h5>\r\n                <p class="provider__specialty">'+p((i=null!=(i=a.specialty||(null!=n?n.specialty:n))?i:o,typeof i===c?i.call(s,{name:"specialty",hash:{},data:t}):i))+'</p>\r\n              </header>\r\n\r\n              <div class="provider__network">\r\n                <p><i class="icon icon-info" aria-label=""></i>'+p((i=null!=(i=a.network||(null!=n?n.network:n))?i:o,typeof i===c?i.call(s,{name:"network",hash:{},data:t}):i))+'</p>\r\n\r\n                <p><i class="icon icon-check-circle" aria-label=""></i> Accepting new patients</p>\r\n              </div>\r\n\r\n              <div class="provider__address-name">'+p((i=null!=(i=a.locationName||(null!=n?n.locationName:n))?i:o,typeof i===c?i.call(s,{name:"locationName",hash:{},data:t}):i))+"</div>\r\n              <ul>\r\n"+(null!=(r=a.each.call(s,null!=n?n.addresses:n,{name:"each",hash:{},fn:e.program(3,t,0),inverse:e.noop,data:t}))?r:"")+"              </ul>\r\n\r\n            </section>\r\n          </article>\r\n        </li>\r\n"},3:function(e,n,a,l,t){var r,i=null!=n?n:{},s=a.helperMissing,o="function",c=e.escapeExpression;return'                <div class="provider__address">Address: '+c((r=null!=(r=a.address||(null!=n?n.address:n))?r:s,typeof r===o?r.call(i,{name:"address",hash:{},data:t}):r))+", "+c((r=null!=(r=a.city||(null!=n?n.city:n))?r:s,typeof r===o?r.call(i,{name:"city",hash:{},data:t}):r))+", "+c((r=null!=(r=a.state||(null!=n?n.state:n))?r:s,typeof r===o?r.call(i,{name:"state",hash:{},data:t}):r))+" "+c((r=null!=(r=a.zip||(null!=n?n.zip:n))?r:s,typeof r===o?r.call(i,{name:"zip",hash:{},data:t}):r))+'</div>\r\n                <div class="provider__phone">Phone: '+c((r=null!=(r=a.phone||(null!=n?n.phone:n))?r:s,typeof r===o?r.call(i,{name:"phone",hash:{},data:t}):r))+"</div>\r\n"},compiler:[7,">= 4.0.0"],main:function(e,n,a,l,t){var r,i,s=null!=n?n:{};return'<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta charset="UTF-8" />\r\n  <title>'+e.escapeExpression((i=null!=(i=a.title||(null!=n?n.title:n))?i:a.helperMissing,"function"==typeof i?i.call(s,{name:"title",hash:{},data:t}):i))+'</title>\r\n  <link href="./styles/style.css" rel="stylesheet"/>\r\n</head>\r\n<body>\r\n\r\n  <header class="page-header">\r\n    <a href="#go-home" class="home-icon">\r\n      <i class="icon  icon-home" aria-label="home icon"></i>\r\n    </a>\r\n\r\n    <nav class="page-nav">\r\n      <ul>\r\n        <li>\r\n          <a href="#go-somewhere" class="inverted">Log in</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n\r\n    <div class="logo-container">\r\n      <a href="#go-home" class="logo">\r\n        <img src="../../images/logo-unbounded-alternate-reversed.png" srcset="../../images/logo-unbounded-alternate-reversed.svg" alt="Delta Dental Logo" width="205px">\r\n      </a>\r\n    </div>\r\n  </header>\r\n\r\n  <main>\r\n    <section>\r\n\r\n      <header class="section-heading">\r\n        <h1>Find a Dentist</h1>\r\n        <p><a>Log in</a> to find dentists in your plan.</p>\r\n      </header>\r\n\r\n      <form action="directory-search.html" method="post" id=\'address_form\' autocomplete="off">\r\n        <div class="form-element">\r\n          <label for="location">Near</label>\r\n          <input id="location" type="text" name="location" placeholder="Zip code, city, or address">\r\n        </div>\r\n\r\n        <div class="form-element">\r\n          <label for="distance">Distance</label>\r\n          <select id="distance" name="distance">\r\n            <option value="5">Within 5 Miles</option>\r\n            <option value="10">Within 10 Miles</option>\r\n            <option value="15">Within 15 Miles</option>\r\n            <option value="25">Within 25 Miles</option>\r\n            <option value="35">Within 35 Miles</option>\r\n            <option value="60" selected="selected">Within 60 Miles</option>\r\n          </select>\r\n        </div>\r\n\r\n        <fieldset class="form-element">\r\n          <legend>Specialty</legend>\r\n          <label for="specialty_General-Dentist" class="form-element__checkbox">\r\n            <input id="specialty_General-Dentist" type="checkbox" name="specialty" value="General Dentist">General Dentist\r\n          </label>\r\n\r\n          <label for="specialty_Endodontist" class="form-element__checkbox">\r\n            <input id="specialty_Endodontist" type="checkbox" name="specialty" value="Endodontist">Endodontist\r\n          </label>\r\n\r\n          <label for="specialty_Oral-Surgeon" class="form-element__checkbox">\r\n            <input id="specialty_Oral-Surgeon" type="checkbox" name="specialty" value="Oral Surgeon">Oral Surgeon\r\n          </label>\r\n\r\n          <label for="specialty_Orthodontist" class="form-element__checkbox">\r\n            <input id="specialty_Orthodontist" type="checkbox" name="specialty" value="Orthodontist">Orthodontist\r\n          </label>\r\n\r\n          <label for="specialty_Pediatric-Dentist" class="form-element__checkbox">\r\n            <input id="specialty_Pediatric-Dentist" type="checkbox" name="specialty" value="Pediatric Dentist">Pediatric Dentist\r\n          </label>\r\n\r\n          <label for="specialty_Periodontist" class="form-element__checkbox">\r\n            <input id="specialty_Periodontist" type="checkbox" name="specialty" value="Periodontist">Periodontist\r\n          </label>\r\n\r\n          <label for="specialty_Prosthodontist" class="form-element__checkbox">\r\n            <input id="specialty_Prosthodontist" type="checkbox" name="specialty" value="Prosthodontist">Prosthodontist\r\n          </label>\r\n\r\n          <label for="specialty_Public-Health-Dentist" class="form-element__checkbox">\r\n            <input id="specialty_Public-Health-Dentist" type="checkbox" name="specialty" value="Public Health Dentist">Public Health Dentist\r\n          </label>\r\n\r\n          <label for="specialty_Full-Time-Faculty" class="form-element__checkbox">\r\n            <input id="specialty_Full-Time-Faculty" type="checkbox" name="specialty" value="Full-time Faculty">Full-time Faculty\r\n          </label>\r\n\r\n          <label for="specialty_Hygienist" class="form-element__checkbox">\r\n            <input id="specialty_Hygienist" type="checkbox" name="specialty" value="Hygienist">Hygienist\r\n          </label>\r\n\r\n          <label for="specialty_XR-Laboratory" class="form-element__checkbox">\r\n            <input id="specialty_XR-Laboratory" type="checkbox" name="specialty" value="XR Laboratory">XR Laboratory\r\n          </label>\r\n\r\n          <label for="specialty_Oral-Pathology" class="form-element__checkbox">\r\n            <input id="specialty_Oral-Pathology" type="checkbox" name="specialty" value="Oral Pathology">Oral Pathology\r\n          </label>\r\n        </fieldset>\r\n\r\n        <div class="form-element form-element--spacing-large">\r\n          <button class="btn--primary" type="submit">View Dentists</button>\r\n        </div>\r\n      </form>\r\n\r\n'+(null!=(r=a.if.call(s,null!=n?n.provider:n,{name:"if",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t}))?r:"")+'\r\n    </section>\r\n  </main>\r\n\r\n  <footer class="page-footer">\r\n    <a href="#go-home" class="logo">\r\n      <img src="../../images/logo-primary-alternate.png" srcset="../../images/logo-primary-alternate.svg" alt="Delta Dental Logo">\r\n\r\n    </a>\r\n\r\n    <div class="footer__feedback">\r\n      <div class="footer__feedback-button">\r\n        <button class="btn--feedback">\r\n          FEEDBACK\r\n        </button>\r\n\r\n      </div>\r\n      <div class="footer__feedback-contact">\r\n        <span>Need Help?</span>\r\n        <p><a class="phone-link">844.847.9516</a></p>\r\n      </div>\r\n    </div>\r\n    <nav class="footer-nav">\r\n      <ul class="footer-nav">\r\n        <li>\r\n          <a href="#go-somewhere">Contact Us</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Language Assistance</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Legal Notices</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Privacy</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n\r\n    <p class="copyright">© Delta Dental</p>\r\n    <p class="disclaimer">This site is the home of Delta Dental of California, Delta Dental Insurance Company, Delta Dental of Pennsylvania, Delta Dental of the District of Columbia, Delta Dental of Delaware, Delta Dental of West Virginia, their affiliated companies, and Delta\r\n      Dental of New York. For other Delta Dental Plans Association member companies, visit the Delta Dental Plans Association website.</p>\r\n    </footer>\r\n\r\n\r\n    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ&libraries=places" defer="defer"><\/script>\r\n    <script src="./jquery.min.js" defer="defer"><\/script>\r\n    <script src="./main.js" defer="defer"><\/script>\r\n\r\n  </body>\r\n  </html>\r\n'},useData:!0}),n["layouts/main"]=e({compiler:[7,">= 4.0.0"],main:function(e,n,a,l,t){var r,i;return'<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta charset="UTF-8" />\r\n    <title>Main HTML</title>\r\n    <link href="./styles/style.css" rel="stylesheet"/>\r\n  </head>\r\n  <body>\r\n  '+(null!=(i=null!=(i=a.body||(null!=n?n.body:n))?i:a.helperMissing,r="function"==typeof i?i.call(null!=n?n:{},{name:"body",hash:{},data:t}):i)?r:"")+"\r\n  </body>\r\n</html>\r\n"},useData:!0})}();
