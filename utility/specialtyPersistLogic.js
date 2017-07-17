module.exports.returnSpecialtyFormFields = function(specialty) {
  let specialties = {
    legend: "Specialties",
    inputs: [
      {
        field: {
          id: "specialty_General-Dentist",
          type: "checkbox",
          name: "specialty",
          value: "general",
          label: {
            text: "General Dentist",
            class: "form-element__checkbox"
          }
        }
      },
      {
        field: {
          id: "specialty_Endodontist",
          type: "checkbox",
          name: "specialty",
          value: "endodontist",
          label: {
            text: "Endodontist",
            class: "form-element__checkbox"
          }
        }
      },
      {
        field: {
          id: "specialty_Oral-Surgeon",
          type: "checkbox",
          name: "specialty",
          value: "surgeon",
          label: {
            text: "Oral Surgeon",
            class: "form-element__checkbox"
          }
        }
      },
      {
        field: {
          id: "specialty_Orthodontist",
          type: "checkbox",
          name: "specialty",
          value: "orthodontist",
          label: {
            text: "Orthodontist",
            class: "form-element__checkbox"
          }
        }
      },
      {
        field: {
          id: "specialty_Pediatric-Dentist",
          type: "checkbox",
          name: "specialty",
          value: "pediatric",
          label: {
            text: "Pediatric Dentist",
            class: "form-element__checkbox"
          }
        }
      },
      {
        field: {
          id: "specialty_Periodontist",
          type: "checkbox",
          name: "specialty",
          value: "periodontist",
          label: {
            text: "Periodontist",
            class: "form-element__checkbox"
          }
        }
      },
      {
        field: {
          id: "specialty_Prosthodontist",
          type: "checkbox",
          name: "specialty",
          value: "prosthodontist",
          label: {
            text: "Prosthodontist",
            class: "form-element__checkbox"
          }
        }
      },
      {
        field: {
          id: "specialty_Public-Health-Dentist",
          type: "checkbox",
          name: "specialty",
          value: "public",
          label: {
            text: "Public Health Dentist",
            class: "form-element__checkbox"
          }
        }
      },
      {
        field: {
          id: "specialty_Full-Time-Faculty",
          type: "checkbox",
          name: "specialty",
          value: "full-time",
          label: {
            text: "Full Time Faculty",
            class: "form-element__checkbox"
          }
        }
      },
      {
        field: {
          id: "specialty_Hygienist",
          type: "checkbox",
          name: "specialty",
          value: "hygienist",
          label: {
            text: "Hygienist",
            class: "form-element__checkbox"
          }
        }
      },
      {
        field: {
          id: "specialty_XR-Laboratory",
          type: "checkbox",
          name: "specialty",
          value: "xr",
          label: {
            text: "XR-Laboratory",
            class: "form-element__checkbox"
          }
        }
      },
      {
        field: {
          id: "specialty_Oral-Pathology",
          type: "checkbox",
          name: "specialty",
          value: "pathology",
          label: {
            text: "Oral Pathology",
            class: "form-element__checkbox"
          }
        }
      }
    ]
  };

  if (specialty) {
    if (typeof specialty === "string") {
      specialty = specialty.split(" ");
    }
    var i, l = specialty.length;

    for (i = 0; i < l; i++) {
      if (specialties.inputs[0].field.value === specialty[i]) {
        specialties.inputs[0].field.valuelessAttribute = "checked";
      }
      if (specialties.inputs[1].field.value === specialty[i]) {
        specialties.inputs[1].field.valuelessAttribute = "checked";
      }
      if (specialties.inputs[2].field.value === specialty[i]) {
        specialties.inputs[2].field.valuelessAttribute = "checked";
      }
      if (specialties.inputs[3].field.value === specialty[i]) {
        specialties.inputs[3].field.valuelessAttribute = "checked";
      }
      if (specialties.inputs[4].field.value === specialty[i]) {
        specialties.inputs[4].field.valuelessAttribute = "checked";
      }
      if (specialties.inputs[5].field.value === specialty[i]) {
        specialties.inputs[5].field.valuelessAttribute = "checked";
      }
      if (specialties.inputs[6].field.value === specialty[i]) {
        specialties.inputs[6].field.valuelessAttribute = "checked";
      }
      if (specialties.inputs[7].field.value === specialty[i]) {
        specialties.inputs[7].field.valuelessAttribute = "checked";
      }
      if (specialties.inputs[8].field.value === specialty[i]) {
        specialties.inputs[8].field.valuelessAttribute = "checked";
      }
      if (specialties.inputs[9].field.value === specialty[i]) {
        specialties.inputs[9].field.valuelessAttribute = "checked";
      }
      if (specialties.inputs[10].field.value === specialty[i]) {
        specialties.inputs[10].field.valuelessAttribute = "checked";
      }
      if (specialties.inputs[11].field.value === specialty[i]) {
        specialties.inputs[11].field.valuelessAttribute = "checked";
      }
    }
  }

  return specialties;
};
