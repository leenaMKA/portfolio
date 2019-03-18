import Popper from "popper.js";
require("bootstrap");

const $root = $("html, body");
const navMainHeight = $(".nav-main").outerHeight();

$('a[href^="#"]').click(function(e) {
  e.preventDefault();
  console.log($.attr(this, "href"));
  const href = $.attr(this, "href");

  $root.animate(
    {
      scrollTop: $(href).offset().top - navMainHeight
    },
    1000
  );

  return false;
});

//create the box, make it width 100, easy to click on
// create the angle itself
// when click on the angle, jump to the first next section
