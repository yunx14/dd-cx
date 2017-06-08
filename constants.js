module.exports = {
  "ENVIRONMENT": "dev",
  "SSL_ENABLED": true,
  "EE_ABOUT": "This is the Directory Experience EndPoint.",

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
    "EE_PORT": 81,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 19001,
    "SEARCH_SERVICE_HOST": "http://aw-lx0095",
    "SEARCH_SERVICE_PATH": "/providers"
  },
  "dit": {
    "EE_PORT": 80,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 19001,
    "SEARCH_SERVICE_HOST": "http://aw-lx0095",
    "SEARCH_SERVICE_PATH": "/providers"
  },
  "mot": {
    "EE_PORT": 80,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 8243,
    "SEARCH_SERVICE_HOST": "https://mot-wso2vip.ut.dentegra.lab",
    "SEARCH_SERVICE_PATH": "/api/cx/providerDirectory/v1/providers"
  },
  "pit": {
    "EE_PORT": 80,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 19096,
    "SEARCH_SERVICE_HOST": "http://aw-lx0095",
    "SEARCH_SERVICE_PATH": "/providers"
  },
  "prod": {
    "EE_PORT": 80,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 19096,
    "SEARCH_SERVICE_HOST": "http://aw-lx0095",
    "SEARCH_SERVICE_PATH": "/providers"
  }
};
