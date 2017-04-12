var Collections = require("../collections/collection.js");

describe("Given Locations Collection", function() {
	it("is defined", function() {
		expect(Collections).toBeDefined();
	});

  it("can create an object", function() {
    var loc = new Collections();
		expect(loc).toBeDefined();
	});
});
