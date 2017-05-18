var Model = require("../models/model.js");

describe("Given a singular model", function() {
	var model = null;

	beforeEach(function() {
		model = new Model({"name": "John Smith", "id": 1});
	});

	afterEach(function() {
		model = null;
	});
	
	it("is defined", function() {
		expect(Model).toBeDefined();
	});

	it("can create an object", function() {
		expect(model).toBeDefined();
		expect(model.attributes).toEqual({"name": "John Smith", "id": 1});
	});

	it("functions are defined", function() {
		expect(model.fetch).toBeDefined();
		expect(model.toString).toBeDefined();
		expect(model.toJSON).toBeDefined();
		expect(model.get).toBeDefined();
		expect(model.set).toBeDefined();
	});

	it("matches typeof the object properties", function() {
		expect(typeof model.host).toEqual('string');
		expect(typeof model.port).toEqual('number');
		expect(typeof model.getURI).toEqual('function');
		expect(typeof model.attributes).toEqual('object');
	});

	it("matches objects with the expect key/value pairs", function() {
		expect(model).toEqual(jasmine.objectContaining({
			attributes: {"name": "John Smith", "id": 1}
		}));
		expect(model).toEqual(jasmine.objectContaining({
			query: {}
		}));
		expect(model).not.toEqual(jasmine.objectContaining({
			collection: []
		}));
	});
});

describe("As a model", function() {
	var model = null;

	beforeEach(function() {
		model = new Model({"name": "John Smith", "id": 1});
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
