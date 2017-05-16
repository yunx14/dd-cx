!function(){var e=Handlebars.template,r=Handlebars.templates=Handlebars.templates||{};r.about=e({compiler:[7,">= 4.0.0"],main:function(e,r,n,a,l){var t,s=null!=r?r:{},i=n.helperMissing,o=e.escapeExpression;return"<h1>Welcome</h1>\r\n<h2>This is the Provider Directory Search <em>Experience EndPoint</em></h2>\r\n<h3>Runtime Details</h3>\r\n<p>Port: "+o((t=null!=(t=n["ee-port"]||(null!=r?r["ee-port"]:r))?t:i,"function"==typeof t?t.call(s,{name:"ee-port",hash:{},data:l}):t))+"</p>\r\n<p>Search Service: "+o((t=null!=(t=n["search-service-host"]||(null!=r?r["search-service-host"]:r))?t:i,"function"==typeof t?t.call(s,{name:"search-service-host",hash:{},data:l}):t))+"</p>\r\n"},useData:!0}),r.directorySearch=e({compiler:[7,">= 4.0.0"],main:function(e,r,n,a,l){var t;return'<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta charset="UTF-8" />\r\n  <title>'+e.escapeExpression((t=null!=(t=n.title||(null!=r?r.title:r))?t:n.helperMissing,"function"==typeof t?t.call(null!=r?r:{},{name:"title",hash:{},data:l}):t))+'</title>\r\n  <link href="./styles/style.css" rel="stylesheet"/>\r\n</head>\r\n<body>\r\n\r\n  <header class="page-header">\r\n    <a href="#go-home" class="home-icon">\r\n      <i class="icon  icon-home" aria-label="home icon"></i>\r\n    </a>\r\n\r\n    <nav class="page-nav">\r\n      <ul>\r\n        <li>\r\n          <a href="#go-somewhere" class="inverted">Log in</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n\r\n    <div class="logo-container">\r\n      <a href="#go-home" class="logo">\r\n        <img src="../../images/logo-unbounded-alternate-reversed.png" srcset="../../images/logo-unbounded-alternate-reversed.svg" alt="Delta Dental Logo" width="205px">\r\n      </a>\r\n    </div>\r\n  </header>\r\n\r\n  <main>\r\n    <section>\r\n\r\n      <header class="section-heading">\r\n        <h1>Find a Dentist</h1>\r\n        <p><a>Log in</a> to find dentists in your plan.</p>\r\n      </header>\r\n\r\n      <form action="directory-search.html" method="post" id=\'address_form\' autocomplete="off">\r\n        <div class="form-element">\r\n          <label for="location">Near</label>\r\n          <input id="location" type="text" name="location" placeholder="Zip code, city, or address">\r\n        </div>\r\n\r\n        <div class="form-element form-element--spacing-large">\r\n          <button class="btn--primary" type="submit">View Dentists</button>\r\n        </div>\r\n      </form>\r\n\r\n    </section>\r\n  </main>\r\n\r\n  <footer class="page-footer">\r\n    <a href="#go-home" class="logo">\r\n      <img src="../../images/logo-primary-alternate.png" srcset="../../images/logo-primary-alternate.svg" alt="Delta Dental Logo">\r\n\r\n    </a>\r\n\r\n    <div class="footer__feedback">\r\n      <div class="footer__feedback-button">\r\n        <button class="btn--feedback">\r\n          FEEDBACK\r\n        </button>\r\n\r\n      </div>\r\n      <div class="footer__feedback-contact">\r\n        <span>Need Help?</span>\r\n        <p><a class="phone-link">844.847.9516</a></p>\r\n      </div>\r\n    </div>\r\n    <nav class="footer-nav">\r\n      <ul class="footer-nav">\r\n        <li>\r\n          <a href="#go-somewhere">Contact Us</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Language Assistance</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Legal Notices</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Privacy</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n\r\n    <p class="copyright">© Delta Dental</p>\r\n    <p class="disclaimer">This site is the home of Delta Dental of California, Delta Dental Insurance Company, Delta Dental of Pennsylvania, Delta Dental of the District of Columbia, Delta Dental of Delaware, Delta Dental of West Virginia, their affiliated companies, and Delta\r\n      Dental of New York. For other Delta Dental Plans Association member companies, visit the Delta Dental Plans Association website.</p>\r\n    </footer>\r\n\r\n\r\n    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ&libraries=places" defer="defer"><\/script>\r\n    <script src="./jquery.min.js" defer="defer"><\/script>\r\n    <script src="./main.js" defer="defer"><\/script>\r\n\r\n  </body>\r\n  </html>\r\n'},useData:!0}),r.directorySearchResults=e({1:function(e,r,n,a,l){var t;return'      <ul class="provider-list">\r\n'+(null!=(t=n.each.call(null!=r?r:{},null!=r?r.provider:r,{name:"each",hash:{},fn:e.program(2,l,0),inverse:e.noop,data:l}))?t:"")+"      </ul>\r\n"},2:function(e,r,n,a,l){var t,s,i=null!=r?r:{},o=n.helperMissing,c="function",d=e.escapeExpression,p=e.lambda;return'        <li class="provider-listing">\r\n          <article>\r\n            <aside>\r\n\r\n              <div class="provider__distance">\r\n                <i class="icon  icon-map-marker" aria-label=""></i>\r\n                <span>'+d((s=null!=(s=n.distance||(null!=r?r.distance:r))?s:o,typeof s===c?s.call(i,{name:"distance",hash:{},data:l}):s))+'</span>\r\n              </div>\r\n\r\n              <div class="provider__link">\r\n                <a href="'+d(p((t=l&&l.root)&&t.providerDetailsPage,r))+"?providerKey="+d((s=null!=(s=n.providerKey||(null!=r?r.providerKey:r))?s:o,typeof s===c?s.call(i,{name:"providerKey",hash:{},data:l}):s))+'">View <i class="icon icon-right-arrow" aria-label="right arrow"></i></a>\r\n              </div>\r\n\r\n            </aside>\r\n\r\n            <section>\r\n\r\n              <header class="provider__name">\r\n                <h5>'+d((s=null!=(s=n.firstName||(null!=r?r.firstName:r))?s:o,typeof s===c?s.call(i,{name:"firstName",hash:{},data:l}):s))+" "+d((s=null!=(s=n.lastName||(null!=r?r.lastName:r))?s:o,typeof s===c?s.call(i,{name:"lastName",hash:{},data:l}):s))+'</h5>\r\n                <p class="provider__specialty">'+d((s=null!=(s=n.specialty||(null!=r?r.specialty:r))?s:o,typeof s===c?s.call(i,{name:"specialty",hash:{},data:l}):s))+'</p>\r\n              </header>\r\n\r\n              <div class="provider__network">\r\n                <p><i class="icon icon-info" aria-label=""></i>'+d((s=null!=(s=n.providerNetworks||(null!=r?r.providerNetworks:r))?s:o,typeof s===c?s.call(i,{name:"providerNetworks",hash:{},data:l}):s))+'</p>\r\n\r\n                <p><i class="icon icon-check-circle" aria-label=""></i> Accepting new patients</p>\r\n              </div>\r\n\r\n              <div class="provider__address-name">'+d((s=null!=(s=n.officeName||(null!=r?r.officeName:r))?s:o,typeof s===c?s.call(i,{name:"officeName",hash:{},data:l}):s))+'</div>\r\n\r\n              <div class="provider__address">'+d(p(null!=(t=null!=r?r.address:r)?t.addressLine:t,r))+", "+d(p(null!=(t=null!=r?r.address:r)?t.city:t,r))+", "+d(p(null!=(t=null!=r?r.address:r)?t.state:t,r))+" "+d(p(null!=(t=null!=r?r.address:r)?t.zipcode:t,r))+"</div>\r\n\r\n\r\n            </section>\r\n          </article>\r\n        </li>\r\n"},compiler:[7,">= 4.0.0"],main:function(e,r,n,a,l){var t,s,i=null!=r?r:{};return'<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta charset="UTF-8" />\r\n  <title>'+e.escapeExpression((s=null!=(s=n.title||(null!=r?r.title:r))?s:n.helperMissing,"function"==typeof s?s.call(i,{name:"title",hash:{},data:l}):s))+'</title>\r\n  <link href="./styles/style.css" rel="stylesheet"/>\r\n  <link href="./styles/directory.css" rel="stylesheet"/>\r\n</head>\r\n<body>\r\n\r\n  <header class="page-header">\r\n    <a href="#go-home" class="home-icon">\r\n      <i class="icon  icon-home" aria-label="home icon"></i>\r\n    </a>\r\n\r\n  </header>\r\n\r\n  <main>\r\n    <section>\r\n\r\n      <header class="section-heading">\r\n        <h1>Find a Dentist</h1>\r\n        <p><a>Log in</a> to find dentists in your plan.</p>\r\n      </header>\r\n\r\n      <form action="directory-search.html" method="post" id=\'address_form\' autocomplete="off" >\r\n        <div class="form-element form-element--location">\r\n          <label for="location">Near</label>\r\n          <input id="location" type="text" name="location" placeholder="Zip code, city, or address">\r\n        </div>\r\n\r\n        <div class="dropdown">\r\n          <button type="button" class="dropdown__toggle btn--primary inverted">Refine Search</button>\r\n\r\n          <div class="dropdown__menu">\r\n            <div class="form-element">\r\n              <label for="distance">Distance</label>\r\n              <select id="distance" name="distance">\r\n                <option value="5">Within 5 Miles</option>\r\n                <option value="10">Within 10 Miles</option>\r\n                <option value="15">Within 15 Miles</option>\r\n                <option value="25">Within 25 Miles</option>\r\n                <option value="35">Within 35 Miles</option>\r\n                <option value="60" selected="selected">Within 60 Miles</option>\r\n              </select>\r\n            </div>\r\n\r\n            <fieldset class="form-element">\r\n              <legend>Specialty</legend>\r\n              <label for="specialty_General-Dentist" class="form-element__checkbox">\r\n                <input id="specialty_General-Dentist" type="checkbox" name="specialty" value="general">General Dentist\r\n              </label>\r\n\r\n              <label for="specialty_Endodontist" class="form-element__checkbox">\r\n                <input id="specialty_Endodontist" type="checkbox" name="specialty" value="endodontist">Endodontist\r\n              </label>\r\n\r\n              <label for="specialty_Oral-Surgeon" class="form-element__checkbox">\r\n                <input id="specialty_Oral-Surgeon" type="checkbox" name="specialty" value="surgen">Oral Surgeon\r\n              </label>\r\n\r\n              <label for="specialty_Orthodontist" class="form-element__checkbox">\r\n                <input id="specialty_Orthodontist" type="checkbox" name="specialty" value="orthodontist">Orthodontist\r\n              </label>\r\n\r\n              <label for="specialty_Pediatric-Dentist" class="form-element__checkbox">\r\n                <input id="specialty_Pediatric-Dentist" type="checkbox" name="specialty" value="pediatric">Pediatric Dentist\r\n              </label>\r\n\r\n              <label for="specialty_Periodontist" class="form-element__checkbox">\r\n                <input id="specialty_Periodontist" type="checkbox" name="specialty" value="periodontist">Periodontist\r\n              </label>\r\n\r\n              <label for="specialty_Prosthodontist" class="form-element__checkbox">\r\n                <input id="specialty_Prosthodontist" type="checkbox" name="specialty" value="prosthodontist">Prosthodontist\r\n              </label>\r\n\r\n              <label for="specialty_Public-Health-Dentist" class="form-element__checkbox">\r\n                <input id="specialty_Public-Health-Dentist" type="checkbox" name="specialty" value="public">Public Health Dentist\r\n              </label>\r\n\r\n              <label for="specialty_Full-Time-Faculty" class="form-element__checkbox">\r\n                <input id="specialty_Full-Time-Faculty" type="checkbox" name="specialty" value="full-time">Full-time Faculty\r\n              </label>\r\n\r\n              <label for="specialty_Hygienist" class="form-element__checkbox">\r\n                <input id="specialty_Hygienist" type="checkbox" name="specialty" value="hygienist">Hygienist\r\n              </label>\r\n\r\n              <label for="specialty_XR-Laboratory" class="form-element__checkbox">\r\n                <input id="specialty_XR-Laboratory" type="checkbox" name="specialty" value="xr">X-RAY Laboratory\r\n              </label>\r\n\r\n              <label for="specialty_Oral-Pathology" class="form-element__checkbox">\r\n                <input id="specialty_Oral-Pathology" type="checkbox" name="specialty" value="pathology">Oral Pathology\r\n              </label>\r\n            </fieldset>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-element form-element--submit">\r\n          <button class="btn--secondary btn--icon" type="submit">\r\n            <i class="icon icon-before icon-search-black" aria-label="search icon" ></i>\r\n          </button>\r\n        </div>\r\n\r\n      </form>\r\n\r\n'+(null!=(t=n.if.call(i,null!=r?r.provider:r,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?t:"")+'\r\n    </section>\r\n  </main>\r\n\r\n  <footer class="page-footer">\r\n    <a href="#go-home" class="logo">\r\n      <img src="../../images/logo-primary-alternate.png" srcset="../../images/logo-primary-alternate.svg" alt="Delta Dental Logo">\r\n\r\n    </a>\r\n\r\n    <div class="footer__feedback">\r\n      <div class="footer__feedback-button">\r\n        <button class="btn--feedback">\r\n          FEEDBACK\r\n        </button>\r\n\r\n      </div>\r\n      <div class="footer__feedback-contact">\r\n        <span>Need Help?</span>\r\n        <p><a class="phone-link">844.847.9516</a></p>\r\n      </div>\r\n    </div>\r\n    <nav class="footer-nav">\r\n      <ul class="footer-nav">\r\n        <li>\r\n          <a href="#go-somewhere">Contact Us</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Language Assistance</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Legal Notices</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Privacy</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n\r\n    <p class="copyright">© Delta Dental</p>\r\n    <p class="disclaimer">This site is the home of Delta Dental of California, Delta Dental Insurance Company, Delta Dental of Pennsylvania, Delta Dental of the District of Columbia, Delta Dental of Delaware, Delta Dental of West Virginia, their affiliated companies, and Delta\r\n      Dental of New York. For other Delta Dental Plans Association member companies, visit the Delta Dental Plans Association website.</p>\r\n    </footer>\r\n\r\n\r\n    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ&libraries=places" defer="defer"><\/script>\r\n    <script src="./jquery.min.js" defer="defer"><\/script>\r\n    <script src="./main.js" defer="defer"><\/script>\r\n\r\n  </body>\r\n  </html>\r\n'},useData:!0}),r.errorMessage=e({compiler:[7,">= 4.0.0"],main:function(e,r,n,a,l){var t,s,i=null!=r?r:{},o=n.helperMissing,c=e.escapeExpression;return'<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta charset="UTF-8" />\r\n  <title>'+c((s=null!=(s=n.title||(null!=r?r.title:r))?s:o,"function"==typeof s?s.call(i,{name:"title",hash:{},data:l}):s))+'</title>\r\n  <link href="./styles/style.css" rel="stylesheet"/>\r\n  <link href="./styles/directory.css" rel="stylesheet"/>\r\n</head>\r\n<body>\r\n\r\n  <header class="page-header">\r\n    <a href="#go-home" class="home-icon">\r\n      <i class="icon  icon-home" aria-label="home icon"></i>\r\n    </a>\r\n  </header>\r\n\r\n  <main>\r\n    <section>\r\n\r\n      <form action="directory-search.html" method="post" id=\'address_form\' autocomplete="off" >\r\n        <div class="form-element form-element--location">\r\n          <label for="location">Near</label>\r\n          <input id="location" type="text" name="location" placeholder="Zip code, city, or address">\r\n        </div>\r\n\r\n        <div class="form-element form-element--submit">\r\n          <button class="btn--secondary btn--icon" type="submit">\r\n            <i class="icon icon-before icon-search-black" aria-label="search icon" ></i>\r\n          </button>\r\n        </div>\r\n\r\n      </form>\r\n\r\n      <div class="error-message '+c(e.lambda(null!=(t=null!=(t=null!=r?r.errorMessages:r)?t.noResults:t)?t.severity:t,r))+'">\r\n        <header>\r\n          <p class="error-message__header">'+c((s=null!=(s=n.header||(null!=r?r.header:r))?s:o,"function"==typeof s?s.call(i,{name:"header",hash:{},data:l}):s))+'</p>\r\n        </header>\r\n        <section class="error-message__body">\r\n          '+(null!=(s=null!=(s=n.body||(null!=r?r.body:r))?s:o,t="function"==typeof s?s.call(i,{name:"body",hash:{},data:l}):s)?t:"")+"\r\n        </section>\r\n      </div>\r\n\r\n    </section>\r\n  </main>\r\n\r\n</body>\r\n</html>\r\n"},useData:!0}),r.providerDetails=e({1:function(e,r,n,a,l){var t;return"              <dd>Monday: "+e.escapeExpression(e.lambda(null!=(t=null!=r?r.practiceHours:r)?t.mondayHours:t,r))+"</dd>\r\n"},3:function(e,r,n,a,l){return"              <dd>Monday: N/A</dd>\r\n"},5:function(e,r,n,a,l){var t;return"              <dd>Tuesday: "+e.escapeExpression(e.lambda(null!=(t=null!=r?r.practiceHours:r)?t.tuesdayHours:t,r))+"</dd>\r\n"},7:function(e,r,n,a,l){return"              <dd>Tuesday: N/A</dd>\r\n"},9:function(e,r,n,a,l){var t;return"              <dd>Wednesday: "+e.escapeExpression(e.lambda(null!=(t=null!=r?r.practiceHours:r)?t.wednesdayHours:t,r))+"</dd>\r\n"},11:function(e,r,n,a,l){return"              <dd>Wednesday: N/A</dd>\r\n"},13:function(e,r,n,a,l){var t;return"              <dd>Thursday: "+e.escapeExpression(e.lambda(null!=(t=null!=r?r.practiceHours:r)?t.thursdayHours:t,r))+"</dd>\r\n"},15:function(e,r,n,a,l){return"              <dd>Thursday: N/A</dd>\r\n"},17:function(e,r,n,a,l){var t;return"              <dd>Friday: "+e.escapeExpression(e.lambda(null!=(t=null!=r?r.practiceHours:r)?t.fridayHours:t,r))+"</dd>\r\n"},19:function(e,r,n,a,l){return"              <dd>Friday: N/A</dd>\r\n"},21:function(e,r,n,a,l){var t;return"              <dd>Saturday: "+e.escapeExpression(e.lambda(null!=(t=null!=r?r.practiceHours:r)?t.saturdayHours:t,r))+"</dd>\r\n"},23:function(e,r,n,a,l){return"              <dd>Saturday: N/A</dd>\r\n"},25:function(e,r,n,a,l){var t;return"              <dd>Sunday: "+e.escapeExpression(e.lambda(null!=(t=null!=r?r.practiceHours:r)?t.sundayHours:t,r))+"</dd>\r\n"},27:function(e,r,n,a,l){return"              <dd>Sunday: N/A</dd>\r\n"},29:function(e,r,n,a,l){var t;return'                <td class="data__row--cell">'+e.escapeExpression((t=null!=(t=n.institute||(null!=r?r.institute:r))?t:n.helperMissing,"function"==typeof t?t.call(null!=r?r:{},{name:"institute",hash:{},data:l}):t))+"</td>\r\n"},31:function(e,r,n,a,l){return'                <td class="data__row--cell">N/A</td>\r\n'},compiler:[7,">= 4.0.0"],main:function(e,r,n,a,l){var t,s,i=null!=r?r:{},o=n.helperMissing,c="function",d=e.escapeExpression,p=e.lambda;return'<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta charset="UTF-8" />\r\n  <title>'+d((s=null!=(s=n.title||(null!=r?r.title:r))?s:o,typeof s===c?s.call(i,{name:"title",hash:{},data:l}):s))+'</title>\r\n  <link href="./styles/style.css" rel="stylesheet"/>\r\n  <link href="./styles/directory.css" rel="stylesheet"/>\r\n</head>\r\n<body>\r\n\r\n  <header class="page-header">\r\n    <a href="#go-back" class="inverted back-link">\r\n      <span class="chevron chevron--left chevron--white"></span>\r\n      <span>Back to search results</span>\r\n    </a>\r\n\r\n  </header>\r\n\r\n  <main>\r\n    <article class="provider">\r\n      <aside class="provider__aside">\r\n        <div class="provider__distance">\r\n          <i class="icon  icon-map-marker" aria-label=""></i>\r\n\r\n          <span>'+d((s=null!=(s=n.distance||(null!=r?r.distance:r))?s:o,typeof s===c?s.call(i,{name:"distance",hash:{},data:l}):s))+' mi</span>\r\n        </div>\r\n      </aside>\r\n      <section>\r\n        <header class="provider__header">\r\n          <div class="provider__name">'+d((s=null!=(s=n.firstName||(null!=r?r.firstName:r))?s:o,typeof s===c?s.call(i,{name:"firstName",hash:{},data:l}):s))+" "+d((s=null!=(s=n.lastName||(null!=r?r.lastName:r))?s:o,typeof s===c?s.call(i,{name:"lastName",hash:{},data:l}):s))+'</div>\r\n          <div class="provider__specialty">'+d((s=null!=(s=n.specialty||(null!=r?r.specialty:r))?s:o,typeof s===c?s.call(i,{name:"specialty",hash:{},data:l}):s))+'</div>\r\n        </header>\r\n\r\n\r\n        <div class="provider__indicators">\r\n          <div class="provider__network"><i class="icon icon-info icon-default" aria-label=""></i> '+d((s=null!=(s=n.providerNetworks||(null!=r?r.providerNetworks:r))?s:o,typeof s===c?s.call(i,{name:"providerNetworks",hash:{},data:l}):s))+'\r\n          </div>\r\n          <div class="provider__availability"><i class="icon icon-check-circle icon-default" aria-label=""></i> Accepting new patients</div>\r\n        </div>\r\n\r\n        <div class="provider__map">\r\n          <div id="map" style="width: 100%; height: 100%;"></div>\r\n\r\n        </div>\r\n\r\n        <div class="provider__place" itemscope="" itemprop="place" itemtype="http://schema.org/Place">\r\n          <div class="provider__place-name" itemprop="name">'+d((s=null!=(s=n.officeName||(null!=r?r.officeName:r))?s:o,typeof s===c?s.call(i,{name:"officeName",hash:{},data:l}):s))+'</div>\r\n          <div class="provider__facility" itemprop="id">'+d((s=null!=(s=n.facilityName||(null!=r?r.facilityName:r))?s:o,typeof s===c?s.call(i,{name:"facilityName",hash:{},data:l}):s))+'</div>\r\n          <div class="provider__address" itemscope="" itemprop="address" itemtype="http://schema.org/PostalAddress">\r\n            <div class="provider__address-street" itemprop="streetAddress">'+d(p(null!=(t=null!=r?r.address:r)?t.addressLine:t,r))+'</div>\r\n            <span class="provider__address-city" itemprop="addressLocality">'+d(p(null!=(t=null!=r?r.address:r)?t.city:t,r))+'</span>,\r\n            <abbr class="provider__address-state" itemprop="addressRegion">'+d(p(null!=(t=null!=r?r.address:r)?t.state:t,r))+'</abbr>\r\n            <span class="provider__address-zip" itemprop="postalCode">'+d(p(null!=(t=null!=r?r.address:r)?t.zipcode:t,r))+'</span>\r\n            <div class="provider__phone" itemprop="telephone">'+d((s=null!=(s=n.officePhone||(null!=r?r.officePhone:r))?s:o,typeof s===c?s.call(i,{name:"officePhone",hash:{},data:l}):s))+'</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="provider__hours">\r\n          <dl>\r\n            <dt>Hours</dt>\r\n'+(null!=(t=n.if.call(i,null!=(t=null!=r?r.practiceHours:r)?t.mondayHours:t,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.program(3,l,0),data:l}))?t:"")+"\r\n"+(null!=(t=n.if.call(i,null!=(t=null!=r?r.practiceHours:r)?t.tuesdayHours:t,{name:"if",hash:{},fn:e.program(5,l,0),inverse:e.program(7,l,0),data:l}))?t:"")+"\r\n"+(null!=(t=n.if.call(i,null!=(t=null!=r?r.practiceHours:r)?t.wednesdayHours:t,{name:"if",hash:{},fn:e.program(9,l,0),inverse:e.program(11,l,0),data:l}))?t:"")+"\r\n"+(null!=(t=n.if.call(i,null!=(t=null!=r?r.practiceHours:r)?t.thursdayHours:t,{name:"if",hash:{},fn:e.program(13,l,0),inverse:e.program(15,l,0),data:l}))?t:"")+"\r\n"+(null!=(t=n.if.call(i,null!=(t=null!=r?r.practiceHours:r)?t.fridayHours:t,{name:"if",hash:{},fn:e.program(17,l,0),inverse:e.program(19,l,0),data:l}))?t:"")+"\r\n"+(null!=(t=n.if.call(i,null!=(t=null!=r?r.practiceHours:r)?t.saturdayHours:t,{name:"if",hash:{},fn:e.program(21,l,0),inverse:e.program(23,l,0),data:l}))?t:"")+"\r\n"+(null!=(t=n.if.call(i,null!=(t=null!=r?r.practiceHours:r)?t.sundayHours:t,{name:"if",hash:{},fn:e.program(25,l,0),inverse:e.program(27,l,0),data:l}))?t:"")+"            \x3c!-- <dd>Monday: "+d(p(null!=(t=null!=r?r.practiceHours:r)?t.mondayHours:t,r))+"</dd>\r\n            <dd>Tuesday: "+d(p(null!=(t=null!=r?r.practiceHours:r)?t.tuesdayHours:t,r))+"</dd>\r\n            <dd>Wednesday: "+d(p(null!=(t=null!=r?r.practiceHours:r)?t.wednesdayHours:t,r))+"</dd>\r\n            <dd>Thursday: "+d(p(null!=(t=null!=r?r.practiceHours:r)?t.thursdayHours:t,r))+"</dd>\r\n            <dd>Friday: "+d(p(null!=(t=null!=r?r.practiceHours:r)?t.fridayHours:t,r))+"</dd>\r\n            <dd>Saturday: "+d(p(null!=(t=null!=r?r.practiceHours:r)?t.saturdayHours:t,r))+"</dd>\r\n            <dd>Sunday: "+d(p(null!=(t=null!=r?r.practiceHours:r)?t.sundayHours:t,r))+'</dd> --\x3e\r\n          </dl>\r\n\r\n        </div>\r\n\r\n        <div class="provider__access">\r\n          <dl>\r\n            <dt>Office Access</dt>\r\n            <dd>Free Parking: '+d(p(null!=(t=null!=r?r.accessibility:r)?t.freeParking:t,r))+"</dd>\r\n            <dd>Wheel Chair Access: "+d(p(null!=(t=null!=r?r.accessibility:r)?t.wheelChairAccess:t,r))+"</dd>\r\n            <dd>Public Transit Access: "+d(p(null!=(t=null!=r?r.accessibility:r)?t.publicTransitAccess:t,r))+"</dd>\r\n            <dd>Internet Access: "+d(p(null!=(t=null!=r?r.accessibility:r)?t.internetAccess:t,r))+'</dd>\r\n          </dl>\r\n\r\n        </div>\r\n\r\n        <div class="provider__languages">\r\n          <dl>\r\n            <dt>Languages at this office</dt>\r\n            <dd>'+d((s=null!=(s=n.languages||(null!=r?r.languages:r))?s:o,typeof s===c?s.call(i,{name:"languages",hash:{},data:l}):s))+'</dd>\r\n          </dl>\r\n\r\n        </div>\r\n\r\n        <div class="provider__data">\r\n          <table class="data__table">\r\n            <tbody><tr class="data__row">\r\n              <th class="data__row--heading">Provider NPI</th>\r\n              <td class="data__row--cell">'+d((s=null!=(s=n.npi||(null!=r?r.npi:r))?s:o,typeof s===c?s.call(i,{name:"npi",hash:{},data:l}):s))+'</td>\r\n            </tr>\r\n            <tr class="data__row">\r\n              <th class="data__row--heading">License #</th>\r\n              <td class="data__row--cell">'+d(p(null!=(t=null!=r?r.license:r)?t.licenseNumber:t,r))+'</td>\r\n            </tr>\r\n            <tr class="data__row">\r\n              <th class="data__row--heading">License State</th>\r\n              <td class="data__row--cell">'+d(p(null!=(t=null!=r?r.license:r)?t.licenseState:t,r))+'</td>\r\n            </tr>\r\n            <tr class="data__row">\r\n              <th class="data__row--heading">Education</th>\r\n'+(null!=(t=n.each.call(i,null!=r?r.education:r,{name:"each",hash:{},fn:e.program(29,l,0),inverse:e.program(31,l,0),data:l}))?t:"")+'            </tr>\r\n            <tr class="data__row">\r\n              <th class="data__row--heading">Gender</th>\r\n              <td class="data__row--cell">'+d((s=null!=(s=n.gender||(null!=r?r.gender:r))?s:o,typeof s===c?s.call(i,{name:"gender",hash:{},data:l}):s))+'</td>\r\n            </tr>\r\n          </tbody></table>\r\n        </div>\r\n\r\n      </section>\r\n    </article>\r\n  </main>\r\n\r\n  <footer class="page-footer">\r\n    <a href="#go-home" class="logo">\r\n      <img src="../../images/logo-primary-alternate.png" srcset="../../images/logo-primary-alternate.svg" alt="Delta Dental Logo">\r\n\r\n    </a>\r\n\r\n    <div class="footer__feedback">\r\n      <div class="footer__feedback-button">\r\n        <button class="btn--feedback">\r\n          FEEDBACK\r\n        </button>\r\n\r\n      </div>\r\n      <div class="footer__feedback-contact">\r\n        <span>Need Help?</span>\r\n        <p><a class="phone-link">844.847.9516</a></p>\r\n      </div>\r\n    </div>\r\n    <nav class="footer-nav">\r\n      <ul class="footer-nav">\r\n        <li>\r\n          <a href="#go-somewhere">Contact Us</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Language Assistance</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Legal Notices</a>\r\n        </li>\r\n        <li>\r\n          <a href="#go-somewhere">Privacy</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n\r\n    <p class="copyright">© Delta Dental</p>\r\n    <p class="disclaimer">This site is the home of Delta Dental of California, Delta Dental Insurance Company, Delta Dental of Pennsylvania, Delta Dental of the District of Columbia, Delta Dental of Delaware, Delta Dental of West Virginia, their affiliated companies, and Delta\r\n      Dental of New York. For other Delta Dental Plans Association member companies, visit the Delta Dental Plans Association website.</p>\r\n  </footer>\r\n\r\n\r\n  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ&libraries=places" defer="defer"><\/script>\r\n  <script src="./jquery.min.js" defer="defer"><\/script>\r\n  <script src="./template3.js" defer="defer"><\/script>\r\n\r\n</body>\r\n</html>\r\n'},useData:!0}),r["layouts/main"]=e({compiler:[7,">= 4.0.0"],main:function(e,r,n,a,l){var t,s;return'<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta charset="UTF-8" />\r\n    <title>Main HTML</title>\r\n    <link href="./styles/style.css" rel="stylesheet"/>\r\n  </head>\r\n  <body>\r\n  '+(null!=(s=null!=(s=n.body||(null!=r?r.body:r))?s:n.helperMissing,t="function"==typeof s?s.call(null!=r?r:{},{name:"body",hash:{},data:l}):s)?t:"")+"\r\n  </body>\r\n</html>\r\n"},useData:!0})}();