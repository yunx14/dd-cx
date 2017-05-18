var SolrCollection = require("../collections/solrCollection.js");
var PaginatedCollection = require("../collections/paginatedCollection.js");

describe("Given a Solr Collection", function() {
	var collection = null;

	beforeEach(function() {
		collection = new SolrCollection("Bob");
	});

	afterEach(function() {
		collection = null;
	});

	it("is defined", function() {
		expect(SolrCollection).toBeDefined();
	});

	it("can create an object", function() {
		expect(collection).toBeDefined();
	});

	it("is an instance of paginated collection", function() {
		expect(collection instanceof PaginatedCollection).toBeTruthy();
	});

	it("can set the name", function() {
		expect(collection.name).toEqual("Bob");
	});
	
	it("can check current page", function() {
		expect(collection.currentPage).toEqual(1);
	});

	it("has all the properties of the object", function() {
		const props = {"bubba": "My Name is bubba!"};
		collection.reset(props);
		expect(collection.toJSON()).toEqual(props);
	});

});
