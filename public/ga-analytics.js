$("form").submit(function() {
  var formName = $(this).attr("name");
  var searchParams = [];
  var $inputs = $(this).find("input");
  var obj = {};
  $.each($inputs, function(index, input) {
    obj[input.name] = input.value;
  });
  searchParams.push(obj);
  var gaSearchParams = JSON.stringify(searchParams);

  ga('send', 'event', {
    eventCategory: 'CX Provider Directory',
    eventAction: 'Submit Form',
    eventLabel: gaSearchParams
  });
});
