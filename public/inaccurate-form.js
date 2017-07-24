var InaccurateForm = (function() {
  var $textarea = $("#inaccuracy"),
      $submit = $("#inaccuracy-submission"),
      originalHref = $submit.attr('href');

  function copyTextToEmailLink() {
    $textarea.change(function(){
      $submit.attr("href", originalHref+"&body="+$(this).val());
    });
  }

  return {
    change: copyTextToEmailLink
  };
})();
InaccurateForm.change();
