module.exports.returnFreeTextInputFormFields = function(keyword) {
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

  if (keyword) {
    freeTextInput.field.value = keyword;
  }

  return freeTextInput;
};
