
function createCookie(name, value) {
  var date = new Date();
  var expires = "";
  date.setTime(date.getTime() + (30 * 60 * 1000));
  expires = date.toUTCString();
  document.cookie = name+"="+value+"; expires="+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

$(".banner__close").click(function() {
  $(".banner-container").hide();
  createCookie("showBanner", "no");
});

$(document).ready(function() {
  var cookie = getCookie("showBanner");
  if(cookie !== "") {
    $(".banner-container").hide();
  }
});
