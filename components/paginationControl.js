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
    var vm = [ { "text":  current, "url": baseURI + "page=" + current, "active": true } ];

    if (current > 2) {
      vm = vm.unshift({ "text":  "...", "url": "", "active": false });
    }

    if (current > 1) {
      vm = vm.unshift({ "text":  "previous", "url": baseURI + "page=" + current - 1, "active": false });
    }

    if (current + 1 < total) {
      vm.push({ "text":  String(current + 1), "url": baseURI + "page=" + current + 1, "active": false });
    }

    if (current + 2 < total) {
      vm.push({ "text":  String(current + 2), "url": baseURI + "page=" + current + 2, "active": false });
    }

    if (current + 3 < total && (current + 3 !== total)) {
      vm.push({ "text":  "...", "url": "", "active": false });
    }

    if (total !== current && !(current < (total + 1)) && !(current < (total + 2))) {
      vm.push( { "text":  String(total), "url": baseURI + "page=" + total, "active": false } );
    }

    if (current < (total)) {
      vm.push({ "text":  "Next", "url": baseURI + "page=" + current + 1, "active": false });
    }

    return vm;
  }
}
