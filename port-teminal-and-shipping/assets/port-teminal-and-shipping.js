$(document).ready(function () {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".banner-slide-prev-btn",
      prevEl: ".banner-slide-next-btn",
    },
  });
  $(
    "#image-slider .banner-slide-next-btn, #image-slider .banner-slide-prev-btn"
  ).hover(
    function () {
      // Add 'active' class to the hovered button
      $(this).addClass("active");
      // Remove 'active' class from the other button
      $(this).siblings().removeClass("active");
    },
    function () {
      // Optionally, you can remove the 'active' class when the hover ends
      // $(this).removeClass('active');
    }
  );

  $(".cta").each(function () {
    var cta = this;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            $(cta).css("visibility", "visible");
            $(cta).css("animation-name", "fadeInDown");
          } else {
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(cta);
  });
});
