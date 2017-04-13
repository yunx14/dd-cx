var Model = require("../models/model.js");

describe("Given a singular model", function() {

	var name = "John Smith";
	var id = 1;

	it("is defined", function() {
		expect(Model).toBeDefined();
	});

  it("can create an object", function() {
		var model = new Model(name, id);
		expect(model).toBeDefined();
		expect(model.name).toEqual(name);
		expect(model.id).toEqual(id);
	});

	it("has all the properties of the object", function() {
		var model = new Model(name, id);
		var actualProperties = Object.keys(model).sort();
		var expectedProperties = [
			'id',
			'name',
			'host',
			'path',
			'port',
			'attributes',
			'getURI',
			'fetch',
			'toString',
			'toJSON',
			'get',
			'set'
		].sort();
		expect(actualProperties).toEqual(expectedProperties);
	});

	it("functions are defined", function() {
		var model = new Model(name, id);
		expect(model.fetch).toBeDefined();
		expect(model.toString).toBeDefined();
		expect(model.toJSON).toBeDefined();
		expect(model.get).toBeDefined();
		expect(model.set).toBeDefined();
	});

	it("matches typeof the object properties", function() {
		var model = new Model(name, id);
		expect(typeof model.host).toEqual('string');
		expect(typeof model.port).toEqual('number');
		expect(typeof model.getURI).toEqual('function');
		expect(typeof model.attributes).toEqual('object');
	});

  it("matches objects with the expect key/value pairs", function() {
		var model = new Model(name, id);
		expect(model).toEqual(jasmine.objectContaining({
      attributes: {}
    }));
		expect(model).not.toEqual(jasmine.objectContaining({
			query: {}
		}));
  });
});

describe("As a model", function() {

	var model = null;

	beforeEach(function() {
		var name = "John Smith";
		var id = 1;
		model = new Model(name, id);
	});

	afterEach(function() {
		model = null;
	});

	it("can stringify data", function() {
		var result = model.toString();
		expect(JSON.stringify(model.attributes)).toEqual(result);
	});

	it("can return JSON data", function() {
		var result = model.toJSON();
		expect(model.attributes).toEqual(result);
	});

	it("can set data", function() {
		var result = { 789: "I am the value" };
		model.set(789, "I am the value");
		expect(model.attributes[789]).toEqual("I am the value");
	});

  it("can get data", function() {
		model.attributes = { 123: 'another param', 456: 'another param2' };
    expect(model.get(123)).toEqual('another param');
    expect(model.get(456)).toEqual('another param2');
  });

});
