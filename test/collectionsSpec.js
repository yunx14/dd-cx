var Collection = require("../collections/collection.js");

describe("Given Locations Collection", function() {
	it("is defined", function() {
		expect(Collection).toBeDefined();
	});

  it("can create an object", function() {
    var collection = new Collection();
		expect(collection).toBeDefined();
	});

	it("functions are defined", function() {
		var collection = new Collection();
		expect(collection.fetch).toBeDefined();
		expect(collection.toString).toBeDefined();
		expect(collection.index).toBeDefined();
		expect(collection.toJSON).toBeDefined();
		expect(collection.set).toBeDefined();
	});

	it("matches objects with the expect key/value pairs", function() {
		var collection = new Collection();
    expect(collection).toEqual(jasmine.objectContaining({
      attributes: {}
    }));
    expect(collection).toEqual(jasmine.objectContaining({
      query: {}
    }));
  });
});

describe("As a collection", function() {
  var collection = null;
  var result = ["I am a test", 123];

  beforeEach(function() {
    collection = new Collection();
  });

	afterEach(function() {
    collection = null;
  });

  it("can set data", function() {
		collection.set(["I am a test", 123]);
    expect(collection.attributes).toEqual(result);
  });

});
