var Collection = require("./collection.js");

var PaginatedCollection = function(name) {
  this.name = name;
  // Apply BaseController constructor (i.e. call super())
  Collection.apply(this, arguments);
};

PaginatedCollection.prototype = new Collection();
PaginatedCollection.prototype.create = function() {};

/**
 * Paginated Collection Class - A Collection that handles pagination from client or server-side
 * @constructor PaginatedCollection
 * @extends Collection
 */

 /**
  * name of the collection
  * @property name
  * @memberof PaginatedCollection
  * @private
  */
 PaginatedCollection.prototype.name = "";
/**
 * Configuration for the pagination
 * @property paginationConfiguration
 * @memberof PaginatedCollection
 * @private
 */
PaginatedCollection.prototype.paginationConfiguration = {
  currentPageParam: "page",
  pageSizeParam: "per_page"
};
/**
 *  total for the collection
 * @property total
 * @memberof PaginatedCollection
 * @private
 */
PaginatedCollection.prototype.total = 0;
/**
 * Page Size for the collection
 * @property pageSize
 * @memberof PaginatedCollection
 * @private
 */
PaginatedCollection.prototype.pageSize = 10;
/**
 * Current page for the collection
 * @property currentPage
 * @memberof PaginatedCollection
 */
PaginatedCollection.prototype.currentPage = 1;
/**
 * Total pages for the collection
 * @property totalPages
 * @memberof PaginatedCollection
 */
PaginatedCollection.prototype.totalPages = 1;
/**
 * Sets the number of items in a page
 * @method setPageSize
 * @memberof PaginatedCollection
 * @param {number} size Number of items in each page
 */
PaginatedCollection.prototype.setPageSize = function(size) {
  if (size) {
    this.pageSize = size;
  }
  this.refresh();
};
/**
 * Sets the current page
 * @method setCurrentPage
 * @memberof PaginatedCollection
 * @param {number} page Current page in collection
 */
PaginatedCollection.prototype.setCurrentPage = function(page) {
  if (!page) {
    page = 1;
  }
  this.currentPage = page;
  this.refresh();
};
/**
 * Sets pagination configuration
 * @method setPaginationConfiguration
 * @memberof PaginatedCollection
 * @param {object} config pagination configuration
 * @private
 */
PaginatedCollection.prototype.setPaginationConfiguration = function(config) {
  this.paginationConfiguration = config;
};
/**
 * fetch - rewritten fetch method from Collection.fetch
 * @method fetch
 * @memberof PaginatedCollection
 * @borrows Collection.fetch
 */
PaginatedCollection.prototype.fetch = function(options, success, error) {
  options = (options) ? options : {};
  var data = (options.data || {});
  var p = this.paginationConfiguration;
  var d = {};
  d[p.currentPageParam] = this.currentPage;
  d[p.pageSizeParam] = this.pageSize;

  options.data = d;

  return Collection.prototype.fetch.call(this, options, success, error);
};
/**
 * Moves to the next page
 * @method nextPage
 * @memberof PaginatedCollection
 */
PaginatedCollection.prototype.nextPage = function() {
  if (this.currentPage < this.totalPages) {
    this.currentPage = this.currentPage + 1;
    this.refresh();
  }
};
/**
 * Moves to the previous page
 * @method previousPage
 * @memberof PaginatedCollection
 */
PaginatedCollection.prototype.previousPage = function() {
  if (this.currentPage > 0) {
    this.currentPage = this.currentPage - 1;
    this.refresh();
  }
};
/**
 * Goes to page
 * @method goToPage
 * @memberof PaginatedCollection
 * @param {number} page Page to go to
 */
PaginatedCollection.prototype.goToPage = function(page) {
  if ((page) && (page < this.totalPages) && (page > 0)) {
    this.currentPage = page;
    this.refresh();
  }
};
/**
 * Moves to the first page
 * @method firstPage
 * @memberof PaginatedCollection
 */
PaginatedCollection.prototype.firstPage = function() {
  this.currentPage = 1;
  this.refresh();
};
/**
 * Moves to the last page
 * @method lastPage
 * @memberof PaginatedCollection
 */
PaginatedCollection.prototype.lastPage = function() {
  this.currentPage = this.totalPages;
  this.refresh();
};
/**
 * Refreshes the collection
 * @method refresh
 * @memberof PaginatedCollection
 */
PaginatedCollection.prototype.refresh = function() {
  this.fetch();
};

module.exports = PaginatedCollection;
