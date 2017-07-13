
function createCookie(name, value) {
  var date = new Date();
  date.setTime(date.getTime() + (30 * 60 * 1000));
  $.cookie(name, value, { expires: date });
}

$(".banner__close").click(function() {
  $(".banner-container").hide();
  createCookie("showBanner", false);
});

$(document).ready(function() {
  var cookie = $.cookie("showBanner");
  if(cookie) {
    $(".banner-container").hide();
  }
});
