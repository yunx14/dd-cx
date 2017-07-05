/**
* A static utility class
* @class PaginationControl
* @example var mapData = PaginationControl.render(current, total);
*/
module.exports = PaginationControl = {
  /**
  * @method render returns formatted array for atomicPower to use for pagination control
  * @param baseURI {string} base uri for all links
  * @param c {number} current page 0 based
  * @param total {number} total number of pages
  * @param prevLabel {string} previous label
  * @param nextLabel {string} next label
  * @param pageAPI {string} property name for pagination API
  * @memberof PaginationControl
  * @returns {array} web standards query string
  * @example PaginationControl.render("www.google.com", 0, 1000, "Prev", "Next", "page")
  */
  render: function(baseURI, c, total, prevLabel, nextLabel, pageAPI) {
    var vm = [];
    // edge case when only return 1, 2, 3, 4 pages
    if (total === 1) {
      return vm;
    }

    if (total === 2) {
      baseURI = baseURI.split("&" + pageAPI + "=")[0];
      return [ { "text": 1, "url": baseURI + "&" + pageAPI + "=0", "active": (c === 0) },
               { "text": 2, "url": baseURI + "&" + pageAPI + "=1", "active": (c === 1) } ];
    }

    if (total === 3) {
      baseURI = baseURI.split("&" + pageAPI + "=")[0];
      return [ { "text": 1, "url": baseURI + "&" + pageAPI + "=0", "active": (c === 0) },
               { "text": 2, "url": baseURI + "&" + pageAPI + "=1", "active": (c === 1) },
               { "text": 3, "url": baseURI + "&" + pageAPI + "=2", "active": (c === 2) } ];
    }

    if (total === 4) {
      baseURI = baseURI.split("&" + pageAPI + "=")[0];
      return [ { "text": 1, "url": baseURI + "&" + pageAPI + "=0", "active": (c === 0) },
               { "text": 2, "url": baseURI + "&" + pageAPI + "=1", "active": (c === 1) },
               { "text": 3, "url": baseURI + "&" + pageAPI + "=2", "active": (c === 2) },
               { "text": 4, "url": baseURI + "&" + pageAPI + "=3", "active": (c === 3) } ];
    }

    // normal cases returns more than 4 pages
    vm = [ { "text":  c+1, "url": baseURI, "active": true } ];

    if (c+2 < total) {
      baseURI = baseURI.split("&" + pageAPI + "=")[0];
      vm.push({ "text":  String(c+2), "url": baseURI + "&" + pageAPI + "=" + Number(c+1), "active": false });
    }

    if (c+4 === total && total != 4) {
      baseURI = baseURI.split("&" + pageAPI + "=")[0];
      vm.push({ "text":  String(c+3), "url": baseURI + "&" + pageAPI + "=" + Number(c+2), "active": false });
      vm.push({ "text":  String(total), "url": baseURI + "&" + pageAPI + "=" + Number(total-1), "active": false });
      vm.push({ "text":  nextLabel, "url": baseURI + "&" + pageAPI + "=" + Number(c+1), "active": false, "previous": false, "next": true });
      vm.unshift({ "text":  "...", "url": "", "active": false });
      vm.unshift({ "text":  "1", "url": baseURI + "&" + pageAPI +"=0", "active": false });
      vm.unshift({ "text":  prevLabel, "url": baseURI + "&" + pageAPI + "=" + Number(c-1), "active": false, "previous": true, "next": false });
      return vm;
    }

    if (c+3 === total && total != 3) {
      baseURI = baseURI.split("&" + pageAPI + "=")[0];
      vm.push({ "text":  String(c+3), "url": baseURI + "&" + pageAPI + "=" + Number(c+2), "active": false });
      vm.push({ "text":  nextLabel, "url": baseURI + "&" + pageAPI + "=" + Number(c+1), "active": false, "previous": false, "next": true });
      vm.unshift({ "text":  String(c), "url": baseURI + "&" + pageAPI + "=" + Number(c-1), "active": false });
      vm.unshift({ "text":  "...", "url": "", "active": false });
      vm.unshift({ "text":  "1", "url": baseURI + "&" + pageAPI +"=0", "active": false });
      vm.unshift({ "text":  prevLabel, "url": baseURI + "&" + pageAPI + "=" + Number(c-1), "active": false, "previous": true, "next": false });
      return vm;
    }

    if (c+2 === total && total != 2) {
      baseURI = baseURI.split("&" + pageAPI + "=")[0];
      vm.push({ "text":  String(c+2), "url": baseURI + "&" + pageAPI + "=" + Number(c+1), "active": false });
      vm.push({ "text":  nextLabel, "url": baseURI + "&" + pageAPI + "=" + Number(c+1), "active": false, "previous": false, "next": true });
      vm.unshift({ "text":  String(c), "url": baseURI + "&" + pageAPI + "=" + Number(c-1), "active": false });
      vm.unshift({ "text":  "...", "url": "", "active": false });
      vm.unshift({ "text":  "1", "url": baseURI + "&" + pageAPI +"=0", "active": false });
      vm.unshift({ "text":  prevLabel, "url": baseURI + "&" + pageAPI + "=" + Number(c-1), "active": false, "previous": true, "next": false });
      return vm;
    }

    if (c+1 === total && total != 1) {
      baseURI = baseURI.split("&" + pageAPI + "=")[0];
      vm.unshift({ "text":  String(c), "url": baseURI + "&" + pageAPI + "=" + Number(c-1), "active": false });
      vm.unshift({ "text":  "...", "url": "", "active": false });
      vm.unshift({ "text":  "1", "url": baseURI + "&" + pageAPI +"=0", "active": false });
      vm.unshift({ "text":  prevLabel, "url": baseURI + "&" + pageAPI + "=" + Number(c-1), "active": false, "previous": true, "next": false });
      return vm;
    }

    if (c+3 < total) {
      baseURI = baseURI.split("&" + pageAPI + "=")[0];
      vm.push({ "text":  String(c+3), "url": baseURI + "&" + pageAPI + "=" + Number(c+2), "active": false });
      vm.push({ "text":  "...", "url": "", "active": false });
      vm.push({ "text":  String(total), "url": baseURI + "&" + pageAPI + "=" + Number(total-1), "active": false });
    }

    if (c+1 < total) {
      baseURI = baseURI.split("&" + pageAPI + "=")[0];
      vm.push({ "text":  nextLabel, "url": baseURI + "&" + pageAPI + "=" + Number(c+1), "active": false, "previous": false, "next": true });
    }

    if (c === 2) {
      baseURI = baseURI.split("&" + pageAPI + "=")[0];
      vm.unshift({ "text":  String(c), "url": baseURI + "&" + pageAPI + "=" + Number(c-1), "active": false });
      vm.unshift({ "text":  "1", "url": baseURI + "&" + pageAPI +"=0", "active": false });
      vm.unshift({ "text":  prevLabel, "url": baseURI + "&" + pageAPI + "=" + Number(c-1), "active": false, "previous": true, "next": false });
      return vm;
    }

    if (c > 1) {
      baseURI = baseURI.split("&" + pageAPI + "=")[0];
      vm.unshift({ "text":  String(c), "url": baseURI + "&" + pageAPI + "=" + Number(c-1), "active": false });
      vm.unshift({ "text":  "...", "url": "", "active": false });
    }

    if (c > 0) {
      baseURI = baseURI.split("&" + pageAPI + "=")[0];
      vm.unshift({ "text":  "1", "url": baseURI + "&" + pageAPI +"=0", "active": false });
      vm.unshift({ "text":  prevLabel, "url": baseURI + "&" + pageAPI + "=" + Number(c-1), "active": false, "previous": true, "next": false });
    }

    return vm;
  }
}
