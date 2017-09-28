module.exports.returnBoardCertFormFields = function(boardCert) {
  let boardCerts = {
    field: {
      id: "boardCertified",
      type: "checkbox",
      name: "boardCertified",
      value: "",
      label: {
        text: "Board Certified"
      }
    }
  };

  if (boardCert) {
    boardCerts.field.valuelessAttribute = "checked";
  }

  return boardCerts;
};
