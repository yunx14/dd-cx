module.exports = {
  "ENVIRONMENT": "dev",
  "SSL_ENABLED": true,
  "EE_ABOUT": "This is the Directory Experience EndPoint.",

  "SEARCH_SERVICE_PORT": 19096,
  "SEARCH_SERVICE_HOST": "http://aw-lx0095",

  "VIEW_MODEL_COLLECTION_KEY":  "{{collection}}",
  "PUBLIC_DIRECTORY": "public",
  "ABOUT_TEMPLATE": "about",
  "DIRECTORY_SEARCH_PAGE": "/directory-search.html",
  "PROVIDER_DETAILS_PAGE": "/provider-details.html",

  "TEMPLATES": {
    "MAIN_PRESENTER_TEMPLATE": "main",
    "SEARCH_RESULTS": "pages-directorySearchResults",
    "DETAILS": "pages-providerDetails",
    "SEARCH": "pages-directorySearch"

  },
  "ERROR_INVALID_ZIP": "/errorInvalidZip.html",
  "ERROR_NO_RESULTS": "/errorNoResults.html",
  "ERROR_TIMEOUT": "/errorTimeOut.html",
  "ERROR_DOWN": "/errorDown.html",

  "dev": {
    "EE_PORT": 80,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 19096,
    "SEARCH_SERVICE_HOST": "http://aw-lx0095"
  },
  "dit": {
    "EE_PORT": 80,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 19201,
    "SEARCH_SERVICE_HOST": "http://aw-lx0195"
  },
  "mot": {
    "EE_PORT": 80,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 19096,
    "SEARCH_SERVICE_HOST": "http://aw-lx0095"
  },
  "pit": {
    "EE_PORT": 80,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 19096,
    "SEARCH_SERVICE_HOST": "http://aw-lx0095"
  },
  "prod": {
    "EE_PORT": 80,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 19096,
    "SEARCH_SERVICE_HOST": "http://aw-lx0095"
  }
};
