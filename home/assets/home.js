$(document).ready(function () {
  var myCarouselSwiper = new Swiper(".myCarouselSwiper", {
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
    breakpoints: {
      768: {
        // This breakpoint is for screens 768px and above
        slidesPerView: 3,
      },
      0: {
        // This breakpoint is for screens less than 768px
        slidesPerView: 1,
      },
    },
  });
  var blogSwiper = new Swiper(".blogSwiper", {
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
    breakpoints: {
      768: {
        // This breakpoint is for screens 768px and above
        slidesPerView: 3,
      },
      0: {
        // This breakpoint is for screens less than 768px
        slidesPerView: 1,
      },
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
    breakpoints: {
      768: {
        // This breakpoint is for screens 768px and above
        slidesPerView: 3,
      },
      0: {
        // This breakpoint is for screens less than 768px
        slidesPerView: 1,
      },
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
  var swiper = new Swiper(".operation-slider", {
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
