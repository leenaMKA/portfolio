import Popper from "popper.js";
require("bootstrap");

const $root = $("html, body");
const navMainHeight = $(".nav-main").outerHeight();

$('a[href^="#"]').click(function(e) {
  e.preventDefault();
  const href = $.attr(this, "href");

  $root.animate(
    {
      scrollTop: $(href).offset().top - navMainHeight
    },
    1000
  );

  return false;
});
