module.exports.returnLatlongFormFields = function(lat, long) {
  let hiddenFields = [
    {
      field: {
        id: "latitude",
        type: "hidden",
        name: "lat",
        label: {
          text: "latitude",
          class: "hidden"
        }
      }
    },
    {
      field: {
        id: "longitude",
        type: "hidden",
        name: "long",
        label: {
          text: "longitude",
          class: "hidden"
        }
      }
    }
  ];

  if (lat && long) {
    hiddenFields[0].field.value = lat;
    hiddenFields[1].field.value = long;
  }

  return hiddenFields;
};
