/**
* A static utility class
* @class PaginationControl
* @example var mapData = PaginationControl.render(current, total);
*/
module.exports = PaginationControl = {
  /**
  * @method render returns formatted array for atomicPower to use for pagination control
  * @param baseURI {string}
  * @param current {number}
  * @param total {number}
  * @memberof PaginationControl
  * @returns {array} web standards query string
  */
  render: function(baseURI, current, total) {



    var vm = [
     {
       "label":  "previous",
       "URI": baseURI + "page=" + current - 1,
       "current": false
     },
     {
       "label":  "1",
       "URI": "x",
       "current": false
     },
     {
       "label":  "2",
       "URI": "x",
       "current": true
     },
     {
       "label":  "3",
       "URI": "x",
       "current": false
     },
     {
       "label":  "next",
       "URI": "x",
       "current": false
     }
   ];
    return vm;
  }
}
