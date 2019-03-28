import Popper from "popper.js";
require("bootstrap");

const $root = $("html, body");
const navMainHeight = $(".nav-main").outerHeight();

$("#send-id").click(function() {
  let newMessage = {
    name: $("#name").val(),
    email: $("#email").val(),
    message: $("message").val()
  };
  $.ajax({
    url: "http://please ",
    type: "POST",
    data: JSON.stringify(newMessage),
    dataType: "json",
    contentType: "application/json",
    success: function(response) {
      console.log("response", response);
    },
    error: function(xhr, status, error) {
      console.log(`
        error:${error},
        status:${status},
        xhr:${JSON.stringify(xhr)}
        `);
    }
  });
});

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
