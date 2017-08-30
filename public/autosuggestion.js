function getSuggestion(keyword) {
    var endpoint = "//aw-lx0095:19001/providers/suggestion?freeText="+keyword;

    var jqxhr = $.getJSON(endpoint)
        .done(function(data){
          //compile Handlebars with the data
          console.log(data);
        })
        .fail(function() {
          // fail siliently
          console.log("shit something went wrong");
        })
}

// $("#keyword").keyup(function() {
//   if (this.value && this.value.length > 2) {
//     getSuggestion(this.value);
//   }
// })
