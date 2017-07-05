module.exports.returnNetworkFormFields = function(network) {
  const networks = {
  	legend: "Insurance networks",
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
  			value: "delta-care",
  			label: {
  				text: "DeltaCare USA",
  				class: "form-element__checkbox"
  			}
  		}
  	}]
  };

  if (networks.inputs[0].field.value === network) {
    networks.inputs[0].field.valuelessAttribute = "checked";
  }
  if (networks.inputs[1].field.value === network) {
    networks.inputs[1].field.valuelessAttribute = "checked";
  }
  if (networks.inputs[2].field.value === network) {
    networks.inputs[2].field.valuelessAttribute = "checked";
  }

  return networks;
};
