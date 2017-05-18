module.exports = {
  "formatQuery": function(query) {
    var formatQuery = "?", i = 0, keys = Object.keys(query), l = keys.length;
    for (i = 0; i < l; i++) {
      if (typeof query[keys[i]] !== "function" && Array.isArray(query[keys[i]])) {
        var tempVal = query[keys[i]];
        // for loop method:
        // var result = "";
        // for (var j = 0; j < tempVal.length; j++) {
        //   result = result + String(keys[i]) + "=" + tempVal[j] + "&";
        // }
        // formatQuery = formatQuery + result;

        // array.join method:
        formatQuery = formatQuery + String(keys[i]) + "=" + tempVal.join("&" + String(keys[i]) + "=") + "&";
      } else if (typeof query[keys[i]] !== "function") {
        formatQuery = formatQuery + String(keys[i]) + "=" + String(query[keys[i]]) + "&";
      }
    }
    return formatQuery.slice(0, -1);
  }
}
