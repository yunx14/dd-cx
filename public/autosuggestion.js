function getSuggestion(keyword) {
    var endpoint = "/providers/suggestion?freeText="+keyword;

    var jqxhr = $.getJSON(endpoint)
        .done(function(data){
          //compile Handlebars with the data
          console.log(data);
        })
        .fail(function() {
          // fail siliently
        })
}

$("#keyword").keyup(function() {
  if (this.value && this.value.length > 2) {
    getSuggestion(this.value);
  }
})
