var PaginatedCollection = require("./paginatedCollection.js");

var SolrCollection = function() {
  // Apply BaseController constructor (i.e. call super())
  PaginatedCollection.apply(this, arguments);
};

SolrCollection.prototype = new PaginatedCollection();
SolrCollection.prototype.create = function() {};

/**
 * Solr Collection Class - A Collection that handles pagination from client or server-side
 * @constructor SolrCollection
 * @extends PaginatedCollection
 */

/**
 * Configuration for the pagination
 * @property paginationConfiguration
 * @memberof SolrCollection
 * @private
 */
SolrCollection.prototype.paginationConfiguration = {
  currentPageParam: "page",
  pageSizeParam: "per_page"
};
/**
 * fetch - rewritten fetch method from Collection.fetch
 * @method fetch
 * @memberof SolrCollection
 * @borrows Collection.fetch
 */
SolrCollection.prototype.fetch = function(options, success, error) {
  options = (options) ? options : {};
  var data = (options.data || {});
  var p = this.paginationConfiguration;
  var d = {};
  d[p.currentPageParam] = this.currentPage;
  d[p.pageSizeParam] = this.pageSize;

  options.data = d;
  var that = this;

  var realSuccess = function(code, data) {
    var mappedData = data;
    if (data) {
      that.total = data.total;
      that.totalPages = data.numberOfPages;
      that.pageSize = data.perPage;
      that.currentPage = data.currentPage;
      that.reset(data[that.name]);
      mappedData = that.toJSON();
    }
    success(code, mappedData);
  };
  return PaginatedCollection.prototype.fetch.call(this, options, realSuccess, error);
};

module.exports = SolrCollection;
