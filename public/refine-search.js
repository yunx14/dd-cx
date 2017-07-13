$(".refine__toggle").click(function(e) {
  if($(".refine__menu").hasClass("open")) {
    $(".refine__menu").removeClass("open");
  } else {
    $(".refine__menu").addClass("open");
  }
});
