
// back to top
$(document).ready(function(){
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".back_to_top").css({ transform: "translateY(0)" });
      } else {
        $(".back_to_top").css({ transform: "translateY(100px)" });
      }
    });
});