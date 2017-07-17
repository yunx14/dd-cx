module.exports.returnDistanceFormFields = function(distance) {
  let distanceSelects = {
    select: {
      id: "distance",
      class: "",
      name: "distance",
      options: [
        {
          option: {
            value: "5",
            text: "Within 5 Miles"
          }
        },
        {
          option: {
            value: "10",
            text: "Within 10 Miles"
          }
        },
        {
          option: {
            value: "15",
            text: "Within 15 Miles"
          }
        },
        {
          option: {
            value: "25",
            text: "Within 25 Miles"
          }
        },
        {
          option: {
            value: "35",
            text: "Within 35 Miles"
          }
        },
        {
          option: {
            value: "60",
            text: "Within 60 Miles",
            valuelessAttribute: "selected"
          }
        }
      ]
    },
    field: {
      id: "distance",
      label: {
        text: "Distance"
      }
    }
  };


  if (distance) {
    var i, l = distanceSelects.select.options.length;

    for (i = 0; i < l; i++) {
      if (distanceSelects.select.options[i].option.value === distance) {
        distanceSelects.select.options[i].option.valuelessAttribute = "selected";
      }
    }
  }

  return distanceSelects;
};
