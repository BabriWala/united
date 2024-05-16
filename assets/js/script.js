

$(document).ready(function(){
  // back to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back_to_top").css({ transform: "translateY(0)" });
    } else {
      $(".back_to_top").css({ transform: "translateY(100px)" });
    }
  });

  // mobile menu
  $(".mobile_inner_div").click(function(){
    $(this).next(".mobile_sub_list").toggleClass("display_block");
    $(this).find("i").toggleClass("rotate_180");
  });
});