var InaccurateForm = (function() {
  var $textarea = $("#inaccuracy"),
      $submit = $("#inaccuracy-submission"),
      originalHref = $submit.attr('href');

  function copyTextToEmailLink() {
    $textarea.change(function(){
      $submit.attr("href", originalHref+"&body="+$(this).text());
    });
  }

  return {
    change: copyTextToEmailLink
  };
})();
InaccurateForm.change();
