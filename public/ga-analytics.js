$("form").submit(function() {
  var searchParams = [];
  var $inputs = $(this).find("input");
  $.each($inputs, function(index, input) {
    searchParams.push({"name": input.name, "value": input.value});
  });
  ga('send', 'event', {
    eventCategory: 'CX Provider Directory',
    eventAction: 'search directory',
    eventLabel: searchParams
  });
});
