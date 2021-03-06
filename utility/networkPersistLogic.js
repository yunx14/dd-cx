module.exports.returnNetworkFormFields = function(network) {
  let networks = {
    legend: "Networks",
    inputs: [{
      field: {
        id: "network_PPO",
        type: "checkbox",
        name: "network",
        value: "ppo",
        label: {
          text: "Delta Dental PPO",
          class: "form-element__checkbox"
        }
      }
    }, {
      field: {
        id: "network_Premier",
        type: "checkbox",
        name: "network",
        value: "premier",
        label: {
          text: "Delta Dental Premier",
          class: "form-element__checkbox"
        }
      }
    }, {
      field: {
        id: "network_DeltaCare",
        type: "checkbox",
        name: "network",
        value: "deltacare",
        label: {
          text: "DeltaCare USA",
          class: "form-element__checkbox"
        }
      }
    }]
  };

  if (network) {
    if (typeof network === "string") {
      network = network.split(" ");
    }
    var i, l = network.length;

    for (i = 0; i < l; i++) {
      if (networks.inputs[0].field.value === network[i]) {
        networks.inputs[0].field.valuelessAttribute = "checked";
      }
      if (networks.inputs[1].field.value === network[i]) {
        networks.inputs[1].field.valuelessAttribute = "checked";
      }
      if (networks.inputs[2].field.value === network[i]) {
        networks.inputs[2].field.valuelessAttribute = "checked";
      }
    }
  }

  return networks;
};
