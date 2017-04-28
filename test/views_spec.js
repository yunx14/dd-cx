var View = require("../views/presenter.js");

describe("Given Locations View", function() {

  var n = "hey";
  var vm = { 123: "I am an onject" };
  var map = { 456: "I am also an object" };

  it("is defined", function() {
    expect(View).toBeDefined();
  });

  it("can create an object", function() {
    var view = new Presenter(n, vm, map);
    expect(view).toBeDefined();
    expect(view.viewModel).toEqual(vm);
    expect(view.propertyMap).toEqual(map);
  });

  it("functions are defined", function() {
    var view = new Presenter(n, vm, map);
    expect(view.getName).toBeDefined();
    expect(view.enrichData).toBeDefined();
  });

  it("matches typeof the object properties", function() {
    var view = new Presenter(n, vm, map);
    expect(typeof view.viewModel).toEqual('object');
    expect(typeof view.propertyMap).toEqual('object');
    expect(typeof view.getName).toEqual('function');
    expect(typeof view.enrichData).toEqual('function');
  });

  it("matches objects with the expect key/value pairs", function() {
    var view = new Presenter(n, vm, map);
    expect(view).toEqual(jasmine.objectContaining({
      collection: null
    }));
    expect(view).toEqual(jasmine.objectContaining({
      model: null
    }));
  });
});

describe("As a view", function() {
  var view = null;

  beforeEach(function() {
    var n = "locations";
    var vm = { "locations": [], "title": "" };
    var map = { "locations": ["SF", "LA"], "title": "Locations:" };
    view = new Presenter(n, vm, map);
  });

  afterEach(function() {
    view = null;
  });

  it("can get name", function() {
    expect(view.getName()).toEqual("locations");
  });

  it("can enrich data", function() {
    var data = view.propertyMap;
    var expectedData = view.enrichData(data);
    expect(typeof expectedData).toEqual("object");
    expect(view.viewModel).toEqual(expectedData);
  });

});
