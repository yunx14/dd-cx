module.exports.returnLocationFormFields = function(location) {
  let searchInput = {
    field: {
      id: "location",
      type: "text",
      name: "location",
      placeholder: "Zip code, city, or address",
      valuelessAttribute: "required",
      attributes: {
        oninvalid: "this.setCustomValidity('Please enter a location')",
        oninput: "this.setCustomValidity('')"
      },
      label: {
        text: "Location"
      }
    }
  };

  if (location) {
    searchInput.field.value = location;
  }

  return searchInput;
};
