var Locations = require("../locations.js");

describe("Given Locations Collection", function() {
	it("is defined", function() {
		expect(Locations).toBeDefined();
	});

  it("can create an object", function() {
    var loc = new Locations();
		expect(loc).toBeDefined();
	});
});
