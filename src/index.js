import Popper from "popper.js";
require("bootstrap");

var $root = $("html, body");
var navMainHeight = $(".nav-main").outerHeight();

$('a[href^="#"]').click(function(e) {
  e.preventDefault();
  var href = $.attr(this, "href");

  $root.animate(
    {
      scrollTop: $(href).offset().top - navMainHeight
    },
    1000
  );

  return false;
});
