module.exports.returnFreeTextInputFormFields = function(freeTextInput) {
  let freeTextInput = {
    field: {
      id: "keyword",
      type: "text",
      name: "keyword",
      placeholder: "Dentist, practice or keyword",
      label: {
        text: "Search"
      }
    }
  };

  if (freeTextInput) {
    freeTextInput.field.value = freeTextInput;
  }

  return freeTextInput;
};
