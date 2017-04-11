module.exports = function() {
  var log = function(message) {
    console.log(message);
  };

  return {
    "log": log
  };
};
