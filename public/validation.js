/* Return true or false if valid zipcode is passed to it */

var validateZip = function(zip) {
	var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);
	return isValidZip;
};

exports.validateZip = validateZip;
