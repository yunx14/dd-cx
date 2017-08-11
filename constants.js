module.exports = {
  "ENVIRONMENT": "dev",
  "SSL_ENABLED": true,
  "EE_ABOUT": "This is the Directory Experience EndPoint.",

  "SERVER_LOG_PATH": "/var/log/provider-directory.log",
  "PRIVATE_KEY": "/opt/docker/certs/node.key",
  "CERT": "/opt/docker/certs/node.cer",

  "VIEW_MODEL_COLLECTION_KEY":  "{{collection}}",
  "PUBLIC_DIRECTORY": "public",
  "ABOUT_TEMPLATE": "about",
  "BASE_URI": "/find-a-dentist/alpha",
  "DIRECTORY_SEARCH_PAGE": "/find-a-dentist/alpha/directory-search.html",
  "PROVIDER_DETAILS_PAGE": "/find-a-dentist/alpha/provider-details.html",
  "FACILITY_DETAILS_PAGE": "/find-a-dentist/alpha/facility-details.html",
  "INACCURATE_PAGE": "/find-a-dentist/alpha/inaccurate.html",

  "TEMPLATES": {
    "MAIN_PRESENTER_TEMPLATE": "main",
    "SEARCH_RESULTS": "pages-directorySearchResults",
    "DETAILS": "pages-providerDetails",
    "FACILITY_DETAILS": "pages-facilityDetails",
    "SEARCH": "pages-directorySearch",
    "INACCURATE": "pages-inaccurate"
  },
  "ERROR_INVALID_ZIP": "/find-a-dentist/alpha/errorInvalidZip.html",
  "ERROR_NO_RESULTS": "/find-a-dentist/alpha/errorNoResults.html",
  "ERROR_TIMEOUT": "/find-a-dentist/alpha/errorTimeOut.html",
  "ERROR_DOWN": "/find-a-dentist/alpha/errorDown.html",

  "dev": {
    "EE_PORT": 81,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 19001,
    "SEARCH_SERVICE_HOST": "http://aw-lx0095",
    "SEARCH_SERVICE_PATH": "/providers",
    "STATIC_PATH": "/find-a-dentist/alpha/",
    "OLD_DIRECTORY_HOST": "https://www.deltadentalins.com",
    "GOOGLE_AL": "UA-9398012-1",
    "GOOGLE_MAPS_API": {
      "SERVER": {
        "APIKEY": "kZiebLVaCcsqcVL-AerSL8ZX1Ic=",
        "CLIENTID": "gme-deltadentalofcalifornia"
      },
      "UI": {
        "APIKEY": "AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ",
        "CLIENTID": null
      }
    },
    "APPD": {
      "controllerHostName" : "rc-lx1281.ut.dentegra.lab",
      "controllerPort" : 9090,
      "controllerSslEnabled" : false,
      "accountName" : "DDM",
      "accountAccessKey" : "0e8ccee3-08f6-491e-a01b-25cecb9f836f",
      "applicationName" : "Customer_Experience",
      "tierName" : "CX-Node",
      "tmpDir": "AppD/logs",
      "debug": true
    }
  },
  "dit": {
    "EE_PORT": 80,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 8280,
    "SEARCH_SERVICE_HOST": "http://aw-lx0193",
    "SEARCH_SERVICE_PATH": "/api/cx/providerSearch/v1/providers",
    "STATIC_PATH": "/find-a-dentist/alpha/",
    "OLD_DIRECTORY_HOST": "https://www.deltadentalins.com",
    "GOOGLE_AL": "UA-9398012-1",
    "GOOGLE_MAPS_API": {
      "SERVER": {
        "APIKEY": "kZiebLVaCcsqcVL-AerSL8ZX1Ic=",
        "CLIENTID": "gme-deltadentalofcalifornia"
      },
      "UI": {
        "APIKEY": "AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ",
        "CLIENTID": null
      }
    },
    "APPD": {
      "controllerHostName" : "rc-lx1281.ut.dentegra.lab",
      "controllerPort" : 9090,
      "controllerSslEnabled" : false,
      "accountName" : "DDM",
      "accountAccessKey" : "0e8ccee3-08f6-491e-a01b-25cecb9f836f",
      "applicationName" : "Customer_Experience",
      "tierName" : "CX-Node",
      "tmpDir": "AppD/logs",
      "debug": true
    }
  },
  "mot": {
    "EE_PORT": 80,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 8243,
    "SEARCH_SERVICE_HOST": "https://mot-wso2vip.ut.dentegra.lab",
    "SEARCH_SERVICE_PATH": "/api/cx/providerSearch/v1/providers",
    "STATIC_PATH": "/find-a-dentist/alpha/",
    "OLD_DIRECTORY_HOST": "https://mot.deltadentalins.com",
    "GOOGLE_AL": "UA-9398012-1",
    "GOOGLE_MAPS_API": {
      "SERVER": {
        "APIKEY": "kZiebLVaCcsqcVL-AerSL8ZX1Ic=",
        "CLIENTID": "gme-deltadentalofcalifornia"
      },
      "UI": {
        "APIKEY": null,
        "CLIENTID": "gme-deltadentalofcalifornia"
      }
    },
    "APPD": {
      "controllerHostName" : "rc-lx1281.ut.dentegra.lab",
      "controllerPort" : 9090,
      "controllerSslEnabled" : false,
      "accountName" : "MOT",
      "accountAccessKey" : "0e8ccee3-08f6-491e-a01b-25cecb9f836f",
      "applicationName" : "Customer_Experience",
      "tierName" : "CX-Node",
      "tmpDir": "AppD/logs",
      "debug": false
    }
  },
  "pit": {
    "EE_PORT": 80,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 8243,
    "SEARCH_SERVICE_HOST": "https://pit-wso2vip",
    "SEARCH_SERVICE_PATH": "/api/cx/providerSearch/v1/providers",
    "STATIC_PATH": "/find-a-dentist/alpha/",
    "OLD_DIRECTORY_HOST": "https://www.deltadentalins.com",
    "GOOGLE_AL": "UA-9398012-1",
    "GOOGLE_MAPS_API": {
      "SERVER": {
        "APIKEY": "kZiebLVaCcsqcVL-AerSL8ZX1Ic=",
        "CLIENTID": "gme-deltadentalofcalifornia"
      },
      "UI": {
        "APIKEY": null,
        "CLIENTID": "gme-deltadentalofcalifornia"
      }
    },
    "APPD": {
      "controllerHostName" : "rc-lx1281.ut.dentegra.lab",
      "controllerPort" : 9090,
      "controllerSslEnabled" : false,
      "accountName" : "PIT",
      "accountAccessKey" : "0e8ccee3-08f6-491e-a01b-25cecb9f836f",
      "applicationName" : "Customer_Experience",
      "tierName" : "CX-Node",
      "tmpDir": "AppD/logs",
      "debug": false
    }
  },
  "prod": {
    "EE_PORT": 80,
    "EE_PORT_SSL": 443,
    "SEARCH_SERVICE_PORT": 8243,
    "SEARCH_SERVICE_HOST": "https://wso2vip.deltads.ent",
    "SEARCH_SERVICE_PATH": "/api/cx/providerSearch/v1/providers",
    "STATIC_PATH": "/find-a-dentist/alpha/",
    "OLD_DIRECTORY_HOST": "https://www.deltadentalins.com",
    "GOOGLE_AL": "UA-9398012-1",
    "GOOGLE_MAPS_API": {
      "SERVER": {
        "APIKEY": "kZiebLVaCcsqcVL-AerSL8ZX1Ic=",
        "CLIENTID": "gme-deltadentalofcalifornia"
      },
      "UI": {
        "APIKEY": null,
        "CLIENTID": "gme-deltadentalofcalifornia"
      }
    }
  },
  "APPD": {
    "controllerHostName" : "prodappd.deltads.ent",
    "controllerPort" : 80,
    "controllerSslEnabled" : false,
    "accountName" : "customer1",
    "accountAccessKey" : "28dba359-c994-40e0-aecd-ca6d875f2d6f",
    "applicationName" : "Customer_Experience",
    "tierName" : "CX-Node"
  }
};
