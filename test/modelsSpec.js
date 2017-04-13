var Model = require("../models/model.js");

describe("Given a singular model", function() {
	it("is defined", function() {
		expect(Model).toBeDefined();
	});

  it("can create an object", function() {
    var model = new Model();
		expect(model).toBeDefined();
	});

	it("functions are defined", function() {
		var model = new Model();
		expect(model.toString).toBeDefined();
		expect(model.get).toBeDefined();
		expect(model.set).toBeDefined();
	});

  it("matches objects with the expect key/value pairs", function() {
		var model = new Model();
    expect(model).toEqual(jasmine.objectContaining({
      attributes: {}
    }));
  });
});

describe("As a model", function() {
  var model = null;

  beforeEach(function() {
    model = new Model();
    model.attributes = { 123: 'another param', 456: 'another param2' };
  });

  afterEach(function() {
    model = null;
  });

  it("can get data", function() {
    expect(model.get(123)).toEqual('another param');
    expect(model.get(456)).toEqual('another param2');
  });

});
