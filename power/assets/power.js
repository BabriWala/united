$(document).ready(function () {
  var noswiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var awardSwiper = new Swiper(".awardsSwiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".awards-prev-btn",
      prevEl: ".awards-next-btn",
    },
  });
  var swiper = new Swiper(".heroSwiper", {
    spaceBetween: 30,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".banner-slide-prev-btn",
      prevEl: ".banner-slide-next-btn",
    },
  });
  $("#awards .header-highlight .navigation a.next").hover(
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
