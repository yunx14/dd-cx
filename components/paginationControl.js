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
  render: function(baseURI, c, total) {
    var vm = [ { "text":  c+1, "url": baseURI, "active": true } ];

    if (c+2 < total) {
      baseURI = baseURI.split("&page=")[0];
      vm.push({ "text":  String(c+2), "url": baseURI + "&page=" + Number(c+1), "active": false });
    }

    if (c+4 === total) {
      baseURI = baseURI.split("&page=")[0];
      vm.push({ "text":  String(c+3), "url": baseURI + "&page=" + Number(c+2), "active": false });
      vm.push({ "text":  String(total), "url": baseURI + "&page=" + Number(total-1), "active": false });
      vm.push({ "text":  "Next", "url": baseURI + "&page=" + Number(c+1), "active": false });
      vm.unshift({ "text":  "...", "url": "", "active": false });
      vm.unshift({ "text":  "1", "url": baseURI + "&page=0", "active": false });
      vm.unshift({ "text":  "Prev", "url": baseURI + "&page=" + Number(c-1), "active": false });
      return vm;
    }

    if (c+3 === total) {
      baseURI = baseURI.split("&page=")[0];
      vm.push({ "text":  String(c+3), "url": baseURI + "&page=" + Number(c+2), "active": false });
      vm.push({ "text":  "Next", "url": baseURI + "&page=" + Number(c+1), "active": false });
      vm.unshift({ "text":  "...", "url": "", "active": false });
      vm.unshift({ "text":  "1", "url": baseURI + "&page=0", "active": false });
      vm.unshift({ "text":  "Prev", "url": baseURI + "&page=" + Number(c-1), "active": false });
      return vm;
    }

    if (c+2 === total) {
      baseURI = baseURI.split("&page=")[0];
      vm.push({ "text":  String(c+2), "url": baseURI + "&page=" + Number(c+1), "active": false });
      vm.push({ "text":  "Next", "url": baseURI + "&page=" + Number(c+1), "active": false });
      vm.unshift({ "text":  "...", "url": "", "active": false });
      vm.unshift({ "text":  "1", "url": baseURI + "&page=0", "active": false });
      vm.unshift({ "text":  "Prev", "url": baseURI + "&page=" + Number(c-1), "active": false });
      return vm;
    }

    if (c+1 === total) {
      baseURI = baseURI.split("&page=")[0];
      vm.unshift({ "text":  "...", "url": "", "active": false });
      vm.unshift({ "text":  "1", "url": baseURI + "&page=0", "active": false });
      vm.unshift({ "text":  "Prev", "url": baseURI + "&page=" + Number(c-1), "active": false });
      return vm;
    }

    if (c+3 < total) {
      baseURI = baseURI.split("&page=")[0];
      vm.push({ "text":  String(c+3), "url": baseURI + "&page=" + Number(c+2), "active": false });
      vm.push({ "text":  "...", "url": "", "active": false });
      vm.push({ "text":  String(total), "url": baseURI + "&page=" + Number(total-1), "active": false });
    }

    if (c+1 < total) {
      baseURI = baseURI.split("&page=")[0];
      vm.push({ "text":  "Next", "url": baseURI + "&page=" + Number(c+1), "active": false });
    }

    if (c === 2) {
      baseURI = baseURI.split("&page=")[0];
      vm.unshift({ "text":  String(c), "url": baseURI + "&page=" + Number(c-1), "active": false });
      vm.unshift({ "text":  "1", "url": baseURI + "&page=0", "active": false });
      vm.unshift({ "text":  "Prev", "url": baseURI + "&page=" + Number(c-1), "active": false });
      return vm;
    }

    if (c > 1) {
      baseURI = baseURI.split("&page=")[0];
      vm.unshift({ "text":  String(c), "url": baseURI + "&page=" + Number(c-1), "active": false });
      vm.unshift({ "text":  "...", "url": "", "active": false });
    }

    if (c > 0) {
      baseURI = baseURI.split("&page=")[0];
      vm.unshift({ "text":  "1", "url": baseURI + "&page=0", "active": false });
      vm.unshift({ "text":  "Prev", "url": baseURI + "&page=" + Number(c-1), "active": false });
    }

    return vm;
  }
}
