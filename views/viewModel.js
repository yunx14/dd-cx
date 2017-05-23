module.exports.pages_personal-info{
  "enrolleePersonalInfo" : {
    "fieldset" : {
      "id" : "about_user"
    },
    "legend" : {
      "class" : "hidden",
      "text" : "Profile"
    }
  },
  "profileHeader" : {
    "heading": {
      "class": "header--personal-info-page",
      "text": "Profile"
    }
  },
  "personalInfoformAttribute-action": "/enroll/personal-info",
  "personalInfoformAttribute" : [
    {
      "attribute" :
        {
          "name" : "id",
          "value" : "personal_form"
        }
    },
    {
      "attribute" :
        {
          "name" : "class",
          "value" : "signup form-control personal-info-form"
        }
    },
    {
      "attribute" :
        {
          "name" : "method",
          "value" : "post"
        }
    }
  ],
  "personalInfoSecondaryAttribute" : [
    {
      "secondaryAttribute": "autocomplete"
    }
  ],
  "nameInputField" : [
    {
      "field": {
        "id": "firstName",
        "type" : "text",
        "class" : "form-input firstname",
        "name" : "firstName",
        "placeholder" : "First Name",
        "minlength" : "1",
        "maxlength" : "25",
        "value" : "",
        "valuelessAttribute" : "autofocus",
        "label": {
          "text": "First Name"
        }
      }
    },
    {
      "field": {
        "id": "middleName",
        "type" : "text",
        "class" : "form-input mi",
        "name" : "middleName",
        "placeholder" : "MI",
        "value" : "",
        "label": {
          "text": "Middle Initial (optional)"
        }
      }
    },
    {
      "field": {
        "id": "lastName",
        "type" : "text",
        "class" : "form-input lastname",
        "name" : "lastName",
        "placeholder" : "Last Name",
        "value" : "",
        "minlength" : "1",
        "maxlength" : "25",
        "label": {
          "text": "Last Name"
        }
      }
    }
  ],
  "phoneSelectMenu" : [
       {
         "field" : {
            "id" : "contactType",
            "name" : "contactType",
            "class" : "form-input phone contactType",
            "name" : "contactType",
            "placeholder" : "xxx-xxx-xxxx",
            "label" : {
              "text" : "Phone",
              "class" : ""
            }
          },
          "select" : {
            "options" : [
              {
                "option" : {
                  "value" : "Phone Type",
                  "text" : "Phone Type",
                  "valuelessAttribute" : "disabled"
                }
              },
              {
                "option" : {
                  "value" : "Cell",
                  "text" : "Cell"
                }
              },
              {
                "option" : {
                  "value" : "Home",
                  "text" : "Home"
                }
              },
              {
                "option" : {
                  "value" : "Work",
                  "text" : "Work"
                }
              }
            ]
          }
       }
     ],
     "phoneNumberField" : [
       {
         "field" : {
           "id" : "contactNumber",
           "type" : "tel",
           "class" : "form-input contactNumber",
           "name" : "contactNumber",
           "placeholder" : "xxx-xxx-xxxx",
           "value" : "",
           "label" : {
             "class" : "hidden"
           }
         }
       }
     ],
     "phoneEmailFieldErrorDiv" :
     {
       "field": {
         "class": "inline-error-container"
       }
     },
     "emailInputField" : [
        {
          "field" : {
             "id" : "email",
             "type" : "email",
             "name" : "email",
             "placeholder" : "Email Address",
             "class" : "form-input emailPersonal",
             "label" : {
               "text" : "Email Address",
               "class" : ""
             }
           },
          "inputAttribute" : [
            {
              "attributeName" : "type",
              "attributeValue": "email"
            },
            {
              "attributeName" : "class",
              "attributeValue": "form-input emailPersonal"
            },
            {
              "attributeName" : "name",
              "attributeValue": "email"
            },
            {
              "attributeName" : "placeholder",
              "attributeValue": "Email Address"
            },
            {
              "attributeName" : "value",
              "attributeValue": ""
            }
          ]
        }
      ],
     "genderSelectMenu" : [
       {
         "field" : {
           "id" : "gender",
           "label" : {
             "text" : "Gender"
            }
          },
        "select" :
          {
          "class" : "form-input gender",
          "name" : "gender",
          "options" : [
            {
              "option" : {
                "value" : "Gender",
                "text" : "Gender",
                "valuelessAttribute" : "disabled selected"
              }
            },
            {
              "option" : {
                "value" : "Male",
                "text" : "Male",
                "attributes" : [
                  {
                    "attribute" : {
                      "name" : "class",
                      "value" : "that"
                    }
                  },
                  {
                    "attribute" : {
                      "name" : "name",
                      "value" : "these"
                    }
                  }
                ]
              }
            },
            {
              "option" : {
                "value" : "Female",
                "text" : "Female"
              }
            },
            {
              "option" : {
                "value" : "Nonbinary",
                "text" : "Non Binary"
              }
            },
            {
              "option" : {
                "value" : "Other",
                "text" : "Prefer not to say"
              }
            }
          ]
        }

      }
    ],
    "birthDate" : {
        "dateTime" : {
          "fieldset" : {
            "id" : "birthdate"
          },
          "legend" : {
            "id" : "birthdate",
            "text" : "Birthdate (mm/dd/yyyy)"
          }
        },
        "dateTimeFields" : [
          {
            "field": {
              "id": "month",
              "type": "number",
              "placeholder": "mm",
              "class" : "form-input month",
              "name" : "month",
              "attributes" : [
                {
                  "attribute" :
                    {
                      "name" : "maxlength",
                      "value" : "2"
                    }
                }
              ],
              "label" : {
                "class" : "hidden"
              }
            }
          },
          {
            "field": {
              "id": "day",
              "type": "number",
              "placeholder": "dd",
              "class" : "form-input day",
              "name" : "day",
              "value": "",
              "pattern": "",
              "title": "",
              "attributes" : [
                {
                  "attribute" :
                    {
                      "name" : "maxlength",
                      "value" : "2"
                    }
                }
              ],
              "label" : {
                "class" : "hidden"
              }
            }
          },
          {
            "field": {
              "id": "year",
              "type": "number",
              "placeholder": "yyyy",
              "class" : "form-input year eighteen_year_min",
              "name" : "year",
              "value": "",
              "pattern": "",
              "title": "",
              "attributes" : [
                {
                  "attribute" :
                    {
                      "name" : "maxlength",
                      "value" : "4"
                    }
                }
              ],
              "label" : {
                "class" : "hidden"
              }
            }
          }
        ]
      },
      "birthDateFieldErrorDiv" :
      {
        "field": {
          "class": "inline-error-container"
        }
      },
      "socialSecurityAltIDField" : [
          {
            "field": {
              "id": "ssn",
              "type" : "tel",
              "class" : "form-input ssn",
              "name" : "ssn",
              "placeholder" : "xxx-xx-xxxx",
              "value" : "",
              "label": {
                "text": "Social Security Number",
                "class": "label-ssn"
              }
            }
          },
          {
            "field": {
              "id": "alt_id",
              "type" : "text",
              "class" : "form-input",
              "name" : "alt_id",
              "placeholder" : "Alternate ID",
              "value" : "",
              "label": {
                "text": "Alternate ID (optional) <a id=\"alternateTip\" href=\"#\">What is this?</a>",
                "class": "label-ssn"
              }
            },
            "showAndHide" : {
              "paragraph" : {
                "text" : "If you do not have or do not wish to provide your Social Security Number, you may choose an alternate number for identification. First enter any 9-digit number in the Social Security Number field. You can then create an alternate ID of no more than 15 characters with any numbers or letters of your choosing."
              }
            }
          }
      ],
      "contactHeader" : {
        "heading": {
          "class": "push-btm-20",
          "id": "",
          "attributes": "",
          "text": "Contact"
        }
      },
      "enrolleeHomeAddress" : {
        "fieldset" : {
          "id" : "places1_inputs"
        },
        "legend" : {
          "class" : "hidden",
          "text" : "Contact"
        }
      },
      "homeAddressInputField" : [
        {
          "field": {
            "id": "streetAddress",
            "type" : "text",
            "class" : "form-input address_item_street street",
            "name" : "streetAddress",
            "placeholder" : "Home Address",
            "value" : "",
            "label": {
              "text": "Home Address<br><p class=\"grey-tip subtext\">(Determines your plan rate and dentist locations)</p>",
              "class": "label-class"
            }
          }
        }
      ],
      "homeAddressFieldErrorDiv1" :
      {
        "field": {
          "class": "ajax-error-container"
        }
      },
      "cityInputField" : [
        {
          "field": {
            "id": "city",
            "type" : "text",
            "class" : "form-input address_item_city locality city",
            "name" : "city",
            "placeholder" : "City",
            "value" : "",
            "label": {
              "text": "City"
            }
          }
        }
      ],
      "homeAddressStateZipLabel" : {
        "class" : "inline-labels statezip",
        "id" : "statezip"
      },
      "stateLabelField" : [
        {
          "field": {
            "id" : "state",
            "label": {
              "text": "State"
            }
          }
        },
        {
          "field": {
            "id" : "zipCode",
            "label": {
              "text": "Zip Code"
            }
          }
        }
      ],
      "homeAddressStateZipInput" : {
        "id" : "statezip",
        "class" : "inline-inputs"
      },
      "stateInputField" : [
        {
          "field": {
            "id": "state",
            "type" : "text",
            "class" : "form-input address_item_state administrative_area_level_1 state",
            "name" : "state",
            "placeholder" : "State",
            "value" : ""
          }
        },
        {
          "field": {
            "id": "zipCode",
            "type" : "text",
            "class" : "form-input address_item_zip postal_code zip",
            "name" : "zipCode",
            "placeholder" : "Zip Code",
            "value" : ""
          }
        }
      ],
      "homeAddressFieldErrorDiv2" :
      {
        "field": {
          "class": "inline-error-container"
        }
      },
      "mailingAddressCheckbox" : {
        "fieldset" : {
          "class" : "checkboxes mail"
        },
        "legend" : {
          "class" : "hidden",
          "text" : "Mailing Address"
        }
      },
      "mailingCheckbox" : {
        "field" : {
            "id" : "diffmail",
          "label" : {
            "text" : "<input type=\"checkbox\" id=\"diffmail\" name=\"diffMail\" checked>My mailing address is the same as my home address.",
            "class" : "diffmail"
          }
        }
      },
      "enrolleeMailingAddress" : {
        "fieldset" : {
          "id" : "places2_inputs",
          "class" : "hidden places2"
        },
        "legend" : {
          "class" : "hidden"
        }
      },
      "mailingAddressInputField" : [
        {
          "field": {
            "id": "mailingAddress",
            "type" : "text",
            "class" : "form-input address_item_street altstreet",
            "name" : "mailingAddress",
            "placeholder" : "Street",
            "value" : "",
            "label": {
              "text": "Mailing Address",
              "class": "label-class"
            }
          }
        }
      ],
      "mailingAddressFieldErrorDiv1" :
      {
        "field": {
          "class": "ajax-error-container"
        }
      },
      "cityInputField2" : [
        {
          "field": {
            "id": "mailingCity",
            "type" : "text",
            "class" : "form-input address_item_city locality altcity",
            "name" : "city",
            "placeholder" : "City",
            "value" : "",
            "label": {
              "text": "City"
            }
          }
        }
      ],
      "mailingAddressStateZipLabel" : {
        "class" : "inline-labels statezip"
      },
      "stateLabelField2" : [
        {
          "field": {
            "id" : "mailingState",
            "label": {
              "text": "State"
            }
          }
        },
        {
          "field": {
            "id" : "mailingZipCode",
            "label": {
              "text": "Zip Code"
            }
          }
        }
      ],
      "mailingAddressStateZipInput" : {
        "id" : "diff_statezip",
        "class" : "inline-inputs"
      },
      "stateInputField2" : [
        {
          "field": {
            "id": "mailingState",
            "type" : "text",
            "class" : "form-input address_item_state administrative_area_level_1 altstate",
            "name" : "mailingState",
            "placeholder" : "State",
            "value" : ""
          }
        },
        {
          "field": {
            "id": "mailingZipCode",
            "type" : "text",
            "class" : "form-input address_item_zip postal_code altzip",
            "name" : "mailingZipCode",
            "placeholder" : "Zip Code",
            "value" : ""
          }
        }
      ],
      "mailingAddressFieldErrorDiv2" :
      {
        "field": {
          "class": "inline-error-container"
        }
      },
      "phoneEmailInputField" : {
        "fieldset" : {
          "id" : "user_contact"
        },
        "legend" : {
          "class" : "hidden",
          "text" : "Phone and Email"
        }
      },
      "communicationCheckbox" : {
        "field" : {
          "label" : "paperless",
          "id" : "paperless",
          "name" : "paperless",
          "type" : "checkbox",
          "valuelessAttribute" : "checked"
        },
        "anchorLink" : {
          "id" : "paperlessTerms",
          "href" : "#",
          "text" : "Electronic Documents Terms and Conditions."
        },
          "paragraph" : {
            "class" : "sub-text",
            "text" : "Plan documents include official correspondence only. The specific documents depend on your plan type and may include: policies, evidence of coverage, certificate of coverage, claims information, billing and invoices."
          }
      },
      "broker" : {
          "paragraph" : {
            "class" : "broker-label",
            "text" : "Are you working with an insurance agent or broker?"
          },
          "selections" : [
            {
              "field": {
                "id": "brokerYes",
                "type" : "radio",
                "name" : "yes",
                "value" : "on",
                "label" : {
                  "class" : "inline-block broker-radio",
                  "text" : "Yes"
                }
              }
            },
            {
              "field": {
                "id": "brokerNo",
                "type" : "radio",
                "name" : "no",
                "value" : "off",
                "valuelessAttribute" : "checked",
                "label" : {
                  "class" : "inline-block broker-radio",
                  "text" : "No"
                }
              }
            }
          ]
        },
        "brokerField" : {
          "legend" : {
            "text" : "Broker"
          }
        },
        "brokerFieldInput" : [
          {
            "field": {
              "id": "brokerNumber",
              "type" : "text",
              "class" : "form-input broker",
              "name" : "brokerNumber",
              "placeholder" : "Broker Number",
              "value" : "",
              "label": {
                "text": "Broker Number <a id=\"brokerTip\" href=\"#\">What is this?</a>"
              }
            },
            "showAndHide" :
              {
                "class" : "more-info-box brokerTip hidden"
              },
              "paragraph" : {
                "text" : "If you’d like your broker to get credit for helping you choose our product, please choose “yes” and enter the broker's number. If you don’t know the number, please contact your broker. Otherwise, you may choose “no” and will not need to supply a broker number."
              },
              "brokerFieldErrorDiv" : {
                  "class" : "ajax-error-container"
              },
              "brokerLabel" : {
                "field" : {
                  "id" : "brokerLabel",
                  "class" : "form-input hidden brokername",
                  "name" : "brokerName",
                  "placeholder" : "Broker Name",
                  "valuelessAttribute" : "readonly",
                  "value" : "",
                  "text" : "Broker Name",
                  "label" : {
                    "class" : "hidden",
                    "attributes" : {
                      "name" : "id",
                      "value" : "brokerName"
                    }
                  }
                }
              }
          }
        ],
        "personalInfoNextPage" : [
          {
            "anchorLink" : {
              "href" : "#",
              "id" : "backToQuote",
              "class" : "link-with-button",
              "text" : "Back to Quote"
            },
            "button" : {
              "text" : "Next",
              "class" : "btn multi-btn primary inline-block",
              "id" : "nextButton",
              "attributes" : [
                {
                  "attribute" :
                    {
                      "name" : "type",
                      "value" : "submit"
                    }
                },
                {
                  "attribute" :
                    {
                      "name" : "value",
                      "value" : "Next"
                    }
                },
                {
                  "attribute" :
                    {
                      "name" : "form",
                      "value" : "personal_form"
                    }
                }
              ]
            }
          }
        ]
}
;
module.exports.pages_template1{
  "homeIcon" : {
    "icon": {
      "class": "icon-home",
      "ariaLabel": "home icon"
    }
  },
  "logInLink": {
    "anchorLink": {
      "href": "#go-somewhere",
      "text": "Log In",
      "class" : "inverted"
    }
  },
  "page": {
    "heading": {
      "h1": "Find a dentist",
      "anchorLink": {
        "text": "Log in"
      },
      "paragraph": " to find dentists in your plan."
    }
  },
  "searchInput": {
    "field": {
      "id": "location",
      "type": "text",
      "name": "location",
      "placeholder": "Zip code, city, or address",
      "label": {
        "text": ""
      }
    }
  },
  "viewDentist": {
    "button": {
      "id": "",
      "class": "btn--primary",
      "text": "View Dentists",
      "type": "submit"
    }
  },
  "feedback": {
    "button": {
      "class": "btn--feedback",
      "text": "FEEDBACK"
    }
  },
  "footer": {
    "contact": {
      "text": "Need Help?",
      "number": "844.847.9516"
    },
    "navItem": [
      {
        "href": "#go-somewhere",
        "text": "Contact Us"
      },
      {
        "href": "#go-somewhere",
        "text": "Language Assistance"
      },
      {
        "href": "#go-somewhere",
        "text": "Legal Notices"
      },
      {
        "href": "#go-somewhere",
        "text": "Privacy"
      }
    ],
    "copyright": "© Delta Dental",
    "disclaimer": "This site is the home of Delta Dental of California, Delta Dental Insurance Company, Delta Dental of Pennsylvania, Delta Dental of the District of Columbia, Delta Dental of Delaware, Delta Dental of West Virginia, their affiliated companies, and Delta Dental of New York. For other Delta Dental Plans Association member companies, visit the Delta Dental Plans Association website."
  }
}
;
module.exports.pages_template2{
  "homeIcon" : {
    "icon": {
      "class": "icon-home",
      "ariaLabel": "home icon"
    }
  },
  "page": {
    "heading": {
      "h1": "Find a dentist",
      "anchorLink": {
        "text": "Log in"
      },
      "paragraph": " to find dentists in your plan."
    }
  },
  "searchInput": {
    "field": {
      "id": "location",
      "type": "text",
      "name": "location",
      "placeholder": "Zip code, city, or address",
      "label": {
        "text": ""
      }
    }
  },
  "refineSearch": {
    "text": "Refine Search",
    "icon": {
      "class": "icon-down-arrow icon--small",
      "ariaLabel": "down arrow"
    }
  },
  "distanceSelect": {
    "select": {
      "id": "distance",
      "class": "",
      "name": "distance",
      "options": [
        {
          "option": {
            "value": "5",
            "text": "Within 5 Miles"
          }
        },
        {
          "option": {
            "value": "10",
            "text": "Within 10 Miles"
          }
        },
        {
          "option": {
            "value": "15",
            "text": "Within 15 Miles"
          }
        },
        {
          "option": {
            "value": "25",
            "text": "Within 25 Miles"
          }
        },
        {
          "option": {
            "value": "35",
            "text": "Within 35 Miles"
          }
        },
        {
          "option": {
            "value": "60",
            "text": "Within 60 Miles",
            "valuelessAttribute": "selected"
          }
        }
      ]
    },
    "field": {
      "id": "distance",
      "label": {
        "text": "Distance"
      }
    }
  },
  "filter": {
    "specialty": "Specialty",
    "inputs": [
      {
        "field": {
          "id": "specialty_General-Dentist",
          "type": "checkbox",
          "name": "specialty",
          "value": "general",
          "label": {
            "text": "General Dentist",
            "class": "form-element__checkbox"
          }
        }
      },
      {
        "field": {
          "id": "specialty_Endodontist",
          "type": "checkbox",
          "name": "specialty",
          "value": "endodontist",
          "label": {
            "text": "Endodontist",
            "class": "form-element__checkbox"
          }
        }
      },
      {
        "field": {
          "id": "specialty_Oral-Surgeon",
          "type": "checkbox",
          "name": "specialty",
          "value": "surgeon",
          "label": {
            "text": "Oral Surgeon",
            "class": "form-element__checkbox"
          }
        }
      },
      {
        "field": {
          "id": "specialty_Orthodontist",
          "type": "checkbox",
          "name": "specialty",
          "value": "orthodontist",
          "label": {
            "text": "Orthodontist",
            "class": "form-element__checkbox"
          }
        }
      },
      {
        "field": {
          "id": "specialty_Pediatric-Dentist",
          "type": "checkbox",
          "name": "specialty",
          "value": "pediatric",
          "label": {
            "text": "Pediatric Dentist",
            "class": "form-element__checkbox"
          }
        }
      },
      {
        "field": {
          "id": "specialty_Periodontist",
          "type": "checkbox",
          "name": "specialty",
          "value": "periodontist",
          "label": {
            "text": "Periodontist",
            "class": "form-element__checkbox"
          }
        }
      },
      {
        "field": {
          "id": "specialty_Prosthodontist",
          "type": "checkbox",
          "name": "specialty",
          "value": "prosthodontist",
          "label": {
            "text": "Prosthodontist",
            "class": "form-element__checkbox"
          }
        }
      },
      {
        "field": {
          "id": "specialty_Public-Health-Dentist",
          "type": "checkbox",
          "name": "specialty",
          "value": "public",
          "label": {
            "text": "Public Health Dentist",
            "class": "form-element__checkbox"
          }
        }
      },
      {
        "field": {
          "id": "specialty_Full-Time-Faculty",
          "type": "checkbox",
          "name": "specialty",
          "value": "full-time",
          "label": {
            "text": "Full Time Faculty",
            "class": "form-element__checkbox"
          }
        }
      },
      {
        "field": {
          "id": "specialty_Hygienist",
          "type": "checkbox",
          "name": "specialty",
          "value": "hygienist",
          "label": {
            "text": "Hygienist",
            "class": "form-element__checkbox"
          }
        }
      },
      {
        "field": {
          "id": "specialty_XR-Laboratory",
          "type": "checkbox",
          "name": "specialty",
          "value": "xr",
          "label": {
            "text": "XR-Laboratory",
            "class": "form-element__checkbox"
          }
        }
      },
      {
        "field": {
          "id": "specialty_Oral-Pathology",
          "type": "checkbox",
          "name": "specialty",
          "value": "pathology",
          "label": {
            "text": "Oral Pathology",
            "class": "form-element__checkbox"
          }
        }
      }
    ]
  },
  "searchButton": {
    "icon": {
      "class": "icon icon-before icon-search-black",
      "ariaLabel": "search icon"
    }
  },
  "provider": [
    {
      "firstName": "Dr. Dentist",
      "specialty": "Pulling teeth",
      "officeName": "Dreary Office of Dread",
      "address": {
          "addressLine": "214 Ortho Way",
          "city": "San Francisco",
          "state": "CA",
          "zipcode": "94105"
      },
      "distance": "0.4 mi",
      "providerNetworks": "PPO",
      "provider-link": {
        "anchorLink": {
          "href": "#",
          "text": "View"
        },
        "icon": {
          "class": "icon-right-arrow",
          "ariaLabel": "right arrow"
        }
      }
    }
  ],
  "feedback": {
    "button": {
      "class": "btn--feedback",
      "text": "FEEDBACK"
    }
  },
  "footer": {
    "contact": {
      "text": "Need Help?",
      "number": "844.847.9516"
    },
    "navItem": [
      {
        "href": "#go-somewhere",
        "text": "Contact Us"
      },
      {
        "href": "#go-somewhere",
        "text": "Language Assistance"
      },
      {
        "href": "#go-somewhere",
        "text": "Legal Notices"
      },
      {
        "href": "#go-somewhere",
        "text": "Privacy"
      }
    ],
    "copyright": "© Delta Dental",
    "disclaimer": "This site is the home of Delta Dental of California, Delta Dental Insurance Company, Delta Dental of Pennsylvania, Delta Dental of the District of Columbia, Delta Dental of Delaware, Delta Dental of West Virginia, their affiliated companies, and Delta Dental of New York. For other Delta Dental Plans Association member companies, visit the Delta Dental Plans Association website."
  }
}
;
module.exports.pages_template3{
  "page": {
    "header": {
      "text": "Back to search results"
    }
  },
  "provider": {
    "firstName": "Dr. Dentist",
    "specialty": "Pulling teeth",
    "officeName": "Dreary Office of Dread",
    "address": {
        "addressLine": "214 Ortho Way",
        "city": "San Francisco",
        "state": "CA",
        "zipcode": "94105"
    },
    "distance": "0.4 mi",
    "providerNetworks": "PPO",
    "provider-link": {
      "anchorLink": {
        "href": "#",
        "text": "View"
      },
      "icon": {
        "class": "icon-right-arrow",
        "ariaLabel": "right arrow"
      }
    }
  },
  "feedback": {
    "button": {
      "class": "btn--feedback",
      "text": "FEEDBACK"
    }
  },
  "footer": {
    "contact": {
      "text": "Need Help?",
      "number": "844.847.9516"
    },
    "navItem": [
      {
        "href": "#go-somewhere",
        "text": "Contact Us"
      },
      {
        "href": "#go-somewhere",
        "text": "Language Assistance"
      },
      {
        "href": "#go-somewhere",
        "text": "Legal Notices"
      },
      {
        "href": "#go-somewhere",
        "text": "Privacy"
      }
    ],
    "copyright": "© Delta Dental",
    "disclaimer": "This site is the home of Delta Dental of California, Delta Dental Insurance Company, Delta Dental of Pennsylvania, Delta Dental of the District of Columbia, Delta Dental of Delaware, Delta Dental of West Virginia, their affiliated companies, and Delta Dental of New York. For other Delta Dental Plans Association member companies, visit the Delta Dental Plans Association website."
  }
}
;