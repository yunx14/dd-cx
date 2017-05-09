var Collection = require("../collections/collection.js");
var PaginatedCollection = require("../collections/paginatedCollection.js");

describe("Given Collection classes", function() {

  describe("Given a standard Collection", function() {
  	it("is defined", function() {
  		expect(Collection).toBeDefined();
  	});

  	it("can create an object", function() {
  		var collection = new Collection();
  		expect(collection).toBeDefined();
  	});

  	it("has all the properties of the object", function() {
  		var collection = new Collection();
      const props = {"bubba": "My Name is bubba!"};

      collection.reset(props);

  		expect(collection.toJSON()).toEqual(props);
  	});

  	it("functions are defined", function() {
  		var collection = new Collection();
  		expect(collection.fetch).toBeDefined();
  		expect(collection.toString).toBeDefined();
  		expect(collection.index).toBeDefined();
  		expect(collection.toJSON).toBeDefined();
  		expect(collection.reset).toBeDefined();
  	});

  	it("matches typeof the object properties", function() {
  		var collection = new Collection();
  		expect(typeof collection.host).toEqual('string');
  		expect(typeof collection.port).toEqual('number');
  		expect(typeof collection.getURI).toEqual('function');
  		expect(typeof collection.attributes).toEqual('object');
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

    describe("As a collection", function() {
    	var collection = null;

    	beforeEach(function() {
    		collection = new Collection();
    	});

    	afterEach(function() {
    		collection = null;
    	});

    	it("can stringify data", function() {
    		var result = collection.toString();
    		expect(JSON.stringify(collection.attributes)).toEqual(result);
    	});

      it("can return true if empty", function() {
    		var result = collection.isEmpty();
    		expect(result).toBeTruthy();
    	});

      it("can return false if not empty", function() {
        collection.reset({});
    		var result = collection.isEmpty();
    		expect(result).toBeFalsy();
    	});

    	it("can return JSON data", function() {
    		var result = collection.toJSON();
    		expect(collection.attributes).toEqual(result);
    	});

    	it("can retrieve data through index", function() {
    		var result = collection.index(1);
    		expect(collection.attributes[1]).toEqual(result);
    	});

    	it("can set data", function() {
    		var result = ["I am a test", 123];
    		collection.reset(result);
    		expect(collection.attributes).toEqual(result);
    	});
    });

  });

  describe("Given a Paginated Collection", function() {
    var collection = null;

    beforeEach(function() {
      collection = new PaginatedCollection();
    });

    afterEach(function() {
      collection = null;
    });

  	it("is defined", function() {
  		expect(PaginatedCollection).toBeDefined();
  	});

    it("can create an object", function() {
  		expect(collection).toBeDefined();
  	});

    it("is an instance of Collection", function() {
      expect(collection instanceof Collection).toBeTruthy();
    });

    it("has all the properties of the object", function() {
      const props = {"bubba": "My Name is bubba!"};

      collection.reset(props);

  		expect(collection.toJSON()).toEqual(props);
  	});

  });

});
