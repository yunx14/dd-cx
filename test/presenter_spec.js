var Presenter = require("../views/presenter.js");
var MainPresenter = require("../views/mainPresenter.js");
var HandlebarsPresenter = require("../views/handlebarsPresenter.js");

describe("Given Presenters", function() {

  describe("Given a base Presenter", function() {
    var presenter = null;

    beforeEach(function() {
      var n = "locations";
      var vm = { "locations": [], "title": "" };
      var map = { "locations": ["SF", "LA"], "title": "Locations:" };
      presenter = new Presenter(n, vm, map);
    });

    afterEach(function() {
      presenter = null;
    });

    it("is defined", function() {
      expect(Presenter).toBeDefined();
    });

    it("can create an object", function() {
      expect(presenter).toBeDefined();
      expect(presenter.name).toEqual("locations");
      expect(presenter.viewModel).toEqual({ "locations": [], "title": "" });
      expect(presenter.propertyMap).toEqual({ "locations": ["SF", "LA"], "title": "Locations:" });
    });

    it("functions are defined", function() {
      expect(presenter.getName).toBeDefined();
      expect(presenter.setPropertyMap).toBeDefined();
      expect(presenter.mergePropertyMap).toBeDefined();
      expect(presenter.enrichData).toBeDefined();
      expect(presenter.render).toBeDefined();
    });

    it("matches typeof the object properties", function() {
      expect(typeof presenter.name).toEqual('string');
      expect(typeof presenter.viewModel).toEqual('object');
      expect(typeof presenter.propertyMap).toEqual('object');
      expect(typeof presenter.getName).toEqual('function');
      expect(typeof presenter.setPropertyMap).toEqual('function');
      expect(typeof presenter.mergePropertyMap).toEqual('function');
      expect(typeof presenter.enrichData).toEqual('function');
    });

    it("can get name", function() {
      expect(presenter.getName()).toEqual("locations");
    });

    it("can set the proprty map", function() {
      var data = presenter.propertyMap;
      presenter.setPropertyMap({"Blah": "More Blah"});
      expect(presenter.propertyMap).toEqual({"Blah": "More Blah"});
      expect(presenter.propertyMap).not.toEqual(data);
    });

    it("can merge the proprty map", function() {
      var data = presenter.propertyMap;
      presenter.mergePropertyMap({"Blah": "More Blah"});
      expect(presenter.propertyMap).toEqual({"locations": ["SF", "LA"], "title": "Locations:", "Blah": "More Blah"});
    });

    it("can enrich data", function() {
      var data = presenter.propertyMap;
      var expectedData = presenter.enrichData(data);
      expect(typeof expectedData).toEqual("object");
      expect(presenter.viewModel).toEqual(expectedData);
    });
  });

  describe("Given a HandlebarsPresenter", function() {
    var presenter = null;

    beforeEach(function() {
      var n = "locations";
      var vm = { "locations": [], "title": "" };
      var map = { "locations": ["SF", "LA"], "title": "Locations:" };
      presenter = new HandlebarsPresenter(n, vm, map);
    });

    afterEach(function() {
      presenter = null;
    });

    it("can get name", function() {
      expect(presenter.getName()).toEqual("locations");
    });

    it("is defined", function() {
      expect(HandlebarsPresenter).toBeDefined();
    });

    it("can enrich data", function() {
      var data = presenter.propertyMap;
      var expectedData = presenter.enrichData(data);
      expect(typeof expectedData).toEqual("object");
      expect(presenter.viewModel).toEqual(expectedData);
    });
  });

  describe("Given a MainPresenter", function() {
    var presenter = null;

    beforeEach(function() {
      var n = "locations";
      var vm = { "locations": [], "title": "" };
      var map = { "locations": ["SF", "LA"], "title": "Locations:" };
      presenter = new MainPresenter(n, vm, map, "main");
    });

    afterEach(function() {
      presenter = null;
    });

    it("can get name", function() {
      expect(presenter.getName()).toEqual("locations");
    });

    it("is defined", function() {
      expect(MainPresenter).toBeDefined();
    });

    it("can enrich data", function() {
      var data = presenter.propertyMap;
      var expectedData = presenter.enrichData(data);
      expect(typeof expectedData).toEqual("object");
      expect(presenter.viewModel).toEqual(expectedData);
    });
  });
});
