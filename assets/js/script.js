(function ($) {
  "use strict";

  $(document).ready(function () {
    (function () {
      const UG_APPLICATION_SUBMITS = document.querySelectorAll(
        ".ug-application-submit"
      );
      UG_APPLICATION_SUBMITS.forEach((submit) => {
        const ug_input = submit.querySelector("input");
        const ug_button = submit.querySelector("button");
        ug_button.addEventListener("click", (e) => {
          e.preventDefault();
          ug_input.click();
        });
      });
    });
    $("a[data-rel^=lightcase]").lightcase({
      maxWidth: 1920,
      maxHeight: 1080,
    });

    var wow = new WOW({
      boxClass: "wow",
      // animated element css class (default is wow)
      animateClass: "animated",
      // animation css class (default is animated)
      offset: 0,
      // distance to the element when triggering the animation (default is 0)
      mobile: true,
      // trigger animations on mobile devices (default is true)
      live: true,
      // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null, // optional scroll container selector, otherwise use window
    });
    wow.init();
    console.log("wow js");
    $(".animated-countdown").counterUp({
      delay: 10,
      time: 1000,
    });

    // Banner Hero Slider
    const hero = new Swiper(".hero--banner-slider", {
      slidesPerView: 1,
      effect: "fade",
      loop: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".banner-slide-next-btn",
        prevEl: ".banner-slide-prev-btn",
      },
    });

    // Operation Section Slider
    const operation = new Swiper(".operation-slider", {
      slidesPerView: 1,
      autoHeight: true,
      //enable auto height
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      virtualTranslate: true,
      navigation: {
        nextEl: "#operation .navigation .next",
        prevEl: "#operation .navigation .prev",
      },
    });

    // Blog Section Slider
    const blog = new Swiper(".blog-container", {
      slidesPerView: 2,
      loop: true,
      spaceBetween: 30,
      navigation: {
        nextEl: "#blog-slider .navigation .next",
        prevEl: "#blog-slider .navigation .prev",
      },
      breakpoints: {
        // when window width is >= 320px
        200: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
    });

    // Awrds Section Slider
    const awrds = new Swiper(".awards-main", {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 30,
      navigation: {
        nextEl: "#awards .navigation .next",
        prevEl: "#awards .navigation .prev",
      },
      breakpoints: {
        // when window width is >= 320px
        200: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
    awrds.pagination.destroy();
    // Image carosel Slider

    const imageCarousel = new Swiper(".myCarouselSwiper", {
      slidesPerView: "auto",
      autoplay: true,
      loop: true,
      navigation: {
        nextEl: "#carousel-image-slider .navigation .next",
        prevEl: "#carousel-image-slider .navigation .prev",
      },
    });
    const fullWidthImage = new Swiper("#full-single-image .mySwiper", {
      navigation: {
        nextEl: "#full-single-image .banner-slide-next-btn",
        prevEl: "#full-single-image .banner-slide-prev-btn",
      },
    });

    // Timeline Slder
    // For Mobile Alternative Slide Config
    var mobileLg = window.matchMedia("(max-width: 1200px)");
    if (mobileLg.matches) {
      var mswiper = new Swiper(".m-slider-archive", {
        slidesPerView: 3,
        observer: true,
        observeParents: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
      });
      mswiper.on("slideChangeTransitionStart", function (swipe) {
        //  mobile config
        mswiper.autoplay.stop(); // autoplay stop event
        var id = $(
          "#slider-archive .m-slider-archive .swiper-slide-active .item-of-year"
        ).attr("data-year");
        const itemYear = id;
        console.log("<<< item year " + itemYear);
        -slideItem(mswiper.activeIndex);
        swiper2.removeAllSlides();
        // Demo Data
        // $.ajax({
        //   method: "POST",
        //   url: urls.adminAjax,
        // dataType: "json",
        // data: {
        //   method: "POST",
        //   action: "get_slider_body",
        //   id: itemYear,
        // },
        // beforeSend: function () {},
        // success: function (res) {
        swiper2.appendSlide(`<div class="swiper-slide animated fadeInRight">
                  <div class="content-panel">
                      <div class="content">
                          <div class="row">
                              
          <p>Orange Solutions Limited and Orange IT Limited are launched</p>
                          </div>
                      </div>
                  </div>
              </div>        <div class="swiper-slide animated fadeInRight">
                  <div class="content-panel">
                      <div class="content">
                          <div class="row">
                              
          <p>Completion of construction of Leviathan Global BD Ltd. (const.)</p>
                          </div>
                      </div>
                  </div>
              </div>        <div class="swiper-slide animated fadeInRight">
                  <div class="content-panel">
                      <div class="content">
                          <div class="row">
                              
          <p>Launch of United Medical College</p>
                          </div>
                      </div>
                  </div>
              </div>        <div class="swiper-slide animated fadeInRight">
                  <div class="content-panel">
                      <div class="content">
                          <div class="row">
                              
          <p>Relocation to United House at United City, the new Corporate HQ</p>
                          </div>
                      </div>
                  </div>
              </div>        <div class="swiper-slide animated fadeInRight">
                  <div class="content-panel">
                      <div class="content">
                          <div class="row">
                              
          <p>Launching of Elevate, a premium fitness solution</p>
                          </div>
                      </div>
                  </div>
              </div>        <div class="swiper-slide animated fadeInRight">
                  <div class="content-panel">
                      <div class="content">
                          <div class="row">
                              
          <p>Launch of Chef’s Table Courtside at United City</p>
                          </div>
                      </div>
                  </div>
              </div>`);
        var item = $(".carousel_container2 .swiper-slide").length;
        console.log("slider lenth >> " + item);
        if (item == 1) {
          $("#slider-archive .navigation").css("opacity", 0);
        } else {
          $("#slider-archive .navigation").css("opacity", 1);
          // var timelineContentHeight = $(
          // 	'#slider-archive .content'
          // ).outerHeight();
          // console.log(timelineContentHeight);
          // $('#slider-archive .navigation').css(
          // 	'top',
          // 	timelineContentHeight + 40
          // );
        }
        // },

        // error: function (res) {},
        // });
        return false;
      });
      // Content Box Slide Config
      var swiper2 = new Swiper(".carousel-two", {
        effect: "slide",
        centeredSlides: true,
        simulateTouch: false,
        allowTouchMove: false,
        navigation: {
          nextEl: "#slider-archive .for-mobile .navigation .next",
          prevEl: "#slider-archive .for-mobile .navigation .prev",
        },
      });
    }

    // A $( document ).ready() block.
    $(document).ready(function () {
      // Desktop Dial Slider Config
      const mq2 = window.matchMedia("(min-width: 1200px)");
      if (mq2) {
        var swiper = new Swiper(".carousel", {
          effect: "coverflow",
          spaceBetween: 0,
          speed: 1000,
          coverflowEffect: {
            rotate: 0,
            // Slide rotate in degrees
            stretch: 0,
            // Stretch space between slides (in px)
            depth: 100,
            // Depth offset in px (slides translate in Z axis)
            modifier: 1,
            // Effect multipler
            slideShadows: false, // Enables slides shadows
          },

          direction: "vertical",
          slidesPerView: 4,
          loop: true,
          centeredSlides: true,
          slideToClickedSlide: true,
          mousewheel: {
            invert: true,
          },
          allowTouchMove: false,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            // when window width is >= 640px
          },
          on: {
            init: function (index) {
              var activeId = index.activeIndex; // autoplay stop event
              index.slideTo(activeId - 1);
            },
          },
        });
        swiper.on("slideChangeTransitionStart", function () {
          swiper.autoplay.stop(); // autoplay stop event
          var id = $(".carousel .swiper-slide-active").attr("data-year");
          const itemYear = id;
          -slideItem(swiper.activeIndex);
          console.log("<<< item year Desktop " + itemYear);
          swiper2.removeAllSlides();
          clearTimeout();
          setTimeout(function () {
            // $.ajax({
            //   method: "POST",
            //   cache: true,
            //   url: urls.adminAjax,
            // dataType: "json",
            // data: {
            //   method: "POST",
            //   action: "get_slider_body",
            //   id: itemYear,
            // },
            // beforeSend: function () {},
            // success: function (res) {
            swiper2.appendSlide(`<div class="swiper-slide animated fadeInRight">
                  <div class="content-panel">
                      <div class="content">
                          <div class="row">
                              
          <p>Orange Solutions Limited and Orange IT Limited are launched</p>
                          </div>
                      </div>
                  </div>
              </div>        <div class="swiper-slide animated fadeInRight">
                  <div class="content-panel">
                      <div class="content">
                          <div class="row">
                              
          <p>Completion of construction of Leviathan Global BD Ltd. (const.)</p>
                          </div>
                      </div>
                  </div>
              </div>        <div class="swiper-slide animated fadeInRight">
                  <div class="content-panel">
                      <div class="content">
                          <div class="row">
                              
          <p>Launch of United Medical College</p>
                          </div>
                      </div>
                  </div>
              </div>        <div class="swiper-slide animated fadeInRight">
                  <div class="content-panel">
                      <div class="content">
                          <div class="row">
                              
          <p>Relocation to United House at United City, the new Corporate HQ</p>
                          </div>
                      </div>
                  </div>
              </div>        <div class="swiper-slide animated fadeInRight">
                  <div class="content-panel">
                      <div class="content">
                          <div class="row">
                              
          <p>Launching of Elevate, a premium fitness solution</p>
                          </div>
                      </div>
                  </div>
              </div>        <div class="swiper-slide animated fadeInRight">
                  <div class="content-panel">
                      <div class="content">
                          <div class="row">
                              
          <p>Launch of Chef’s Table Courtside at United City</p>
                          </div>
                      </div>
                  </div>
              </div>`);
            var item = $(".carousel_container2 .swiper-slide").length;
            if (item == 1) {
              $("#slider-archive .navigation").css("opacity", 0);
            } else {
              $("#slider-archive .navigation").css("opacity", 1);
            }
            //   },
            //   error: function (res) {},
            // });
          }, 500);
        });
      }

      // Content Box Slide Config
      var swiper2 = new Swiper(".carousel-two", {
        effect: "slide",
        centeredSlides: true,
        simulateTouch: false,
        allowTouchMove: false,
        navigation: {
          nextEl: "#slider-archive .navigation .next",
          prevEl: "#slider-archive .navigation .prev",
        },
      });
    });

    // Check Media
    var x = window.matchMedia("(max-width: 520px)");
    if (x.matches) {
      $("br").remove();
    }

    // On hover mouse effect
    $(".life-at .prev").on("mouseover", function () {
      $(this).addClass("active");
      $(".life-at .next").removeClass("active");
    });
    $(".life-at .next").on("mouseover", function () {
      $(this).addClass("active");
      $(".life-at .prev").removeClass("active");
    });
    $(".carousel-slider-nav .prev").on("mouseover", function () {
      $(this).addClass("active");
      $(".carousel-slider-nav .next").removeClass("active");
    });
    $(".carousel-slider-nav .next").on("mouseover", function () {
      $(this).addClass("active");
      $(".carousel-slider-nav .prev").removeClass("active");
    });
    $(".operation-nav .prev").on("mouseover", function () {
      $(this).addClass("active");
      $(".operation-nav .next").removeClass("active");
    });
    $(".operation-nav .next").on("mouseover", function () {
      $(this).addClass("active");
      $(".operation-nav .prev").removeClass("active");
    });
    $(".banner-slide-prev-btn").on("mouseover", function () {
      $(this).addClass("active");
      $(".banner-slide-next-btn").removeClass("active");
    });
    $(".banner-slide-next-btn").on("mouseover", function () {
      $(this).addClass("active");
      $(".banner-slide-prev-btn").removeClass("active");
    });
    $(".with-items .prev").on("mouseover", function () {
      $(this).addClass("active");
      $(".with-items .next").removeClass("active");
    });
    $(".with-items .next").on("mouseover", function () {
      $(this).addClass("active");
      $(".with-items .prev").removeClass("active");
    });
    $(".without-items .prev").on("mouseover", function () {
      $(this).addClass("active");
      $(".without-items .next").removeClass("active");
    });
    $(".without-items .next").on("mouseover", function () {
      $(this).addClass("active");
      $(".without-items .prev").removeClass("active");
    });
    $(".carousel-two .prev").on("mouseover", function () {
      $(this).addClass("active");
      $(".carousel-two .next").removeClass("active");
    });
    $(".carousel-two .next").on("mouseover", function () {
      $(this).addClass("active");
      $(".carousel-two .prev").removeClass("active");
    });
    $("#awards .prev").on("mouseover", function () {
      $(this).addClass("active");
      $("#awards .next").removeClass("active");
    });
    $("#awards .next").on("mouseover", function () {
      $(this).addClass("active");
      $("#awards .prev").removeClass("active");
    });
    $("#slider-archive .prev").on("mouseover", function () {
      $(this).addClass("active");
      $("#slider-archive .next").removeClass("active");
    });
    $("#slider-archive .next").on("mouseover", function () {
      $(this).addClass("active");
      $("#slider-archive .prev").removeClass("active");
    });
    const mq = window.matchMedia("(min-width: 1200px)");
    if (mq.matches) {
      if ($("#operation h2").length !== 0) {
        alignOffsetLeft("#operation h2", ".operation-slider");
      }
      // if ($("#blog-slider h2").length !== 0) {
      //   alignOffsetLeft("#blog-slider h2", ".blog-container");
      // }
      if ($(".site-footer .row").length !== 0) {
        alignOffsetLeft(".site-footer .row", ".custom-container");
      }
      if ($(".site-footer .row").length !== 0) {
        alignOffsetLeft(
          ".site-footer .row",
          ".residential-project .left-part .content"
        );
      }
      if ($(".archive-year").length !== 0) {
        alignOffsetLeft(".archive-year", ".circular-image");
      }
      if ($(".site-footer .row").length !== 0) {
        alignOffsetLeft(".site-footer .row", "#generic-service .service-card");
      }
      if ($(".team h2").length !== 0) {
        alignOffsetRight(".team h2", "#slider-archive .carousel-two");
      }
    }

    // Get element postion left of body
    function alignOffsetLeft(el, p) {
      let element = $(el);
      let elpostion = element.position().left;
      // console.log(elpostion);
      $(p).css("margin-left", elpostion);
    }
    function alignOffsetRight(el, p) {
      let element = $(el);
      let elpostion = element.position().left;
      $(p).css("margin-right", elpostion);
    }
    const slideItem = (sliderIndex) => {
      let itemContainer = document.querySelectorAll(".carousel_container");
      let item = document.querySelectorAll(".carousel_slide");
      clearEffects(item);
      item.forEach((element, index) => {
        let effect1 = sliderIndex - 3;
        if (index === effect1) {
          item[effect1].classList.add("effect1");
        }
        let effect2 = sliderIndex - 2;
        if (index === effect2) {
          item[effect2].classList.add("effect2");
        }
        let effect3 = sliderIndex - 1;
        if (index === effect3) {
          item[effect3].classList.add("effect3");
        }
        let effect4 = sliderIndex;
        if (index === effect4) {
          item[effect4].classList.add("effect4");
        }
        let effect5 = sliderIndex + 1;
        if (index === effect5) {
          item[effect5].classList.add("effect5");
        }
        let effect6 = sliderIndex + 2;
        if (index === effect6) {
          item[effect6].classList.add("effect6");
        }
        let effect7 = sliderIndex + 3;
        if (index === effect7) {
          item[effect7].classList.add("effect7");
        }
      });
    };
    const clearEffects = (slides) => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove(
          "focus",
          "effect1",
          "effect2",
          "effect3",
          "effect4",
          "effect5",
          "effect6",
          "effect7",
          "effect7",
          "effect8",
          "effect9",
          "effect_hide",
          "animateTop",
          "animateBottom"
        );
      }
    };

    // Gallery Section

    // Photo Gallery
    const photogalleryNav = new Swiper(".photo-gallery-nav-mobile .swiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      slideToClickedSlide: true,
    });
    photogalleryNav.on("slideChangeTransitionStart", function () {
      // Data FEtch
      // const slug = $(".photo-gallery-nav-mobile .swiper-slide-active a").attr(
      //   "data-category"
      // );
      // $.ajax({
      //   method: "POST",
      //   url: urls.adminAjax,
      // dataType: "json",
      // data: {
      //   method: "POST",
      //   action: "get_cateogories_gallery",
      //   slug: slug,
      // },
      // beforeSend: function () {
      //   $(".gallery").html("<p> Loading ..... </p>");
      // },
      // success: function (res) {
      //   $(".gallery").html();
      // Demo Data
      $(".gallery").html(`<div class="row">
    <div class="col-lg-4 d-flex-dekstop wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
        <a href="#" class="single-gallery-item" data-id="1707">
            <div class="single-col">
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/15007347951494096133IPCO-Airport-5-Star-Hotel_e-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
            </div>
            <div class="single-col" data-total="3+">
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/15007347951494096133IPCO-Airport-Hotel-Retail-Project_e-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/1500734796149409616814920030961436615847p9-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
            </div>
            <div class="content">
                <h2>Ipco Developments</h2>
                <span>6 Photos </span>
            </div>
        </a>
    </div>
    <div class="col-lg-4 d-flex-dekstop wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
        <a href="#" class="single-gallery-item" data-id="1705">
            <div class="single-col">
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/15007339741494095738Gulshan-Center-Point_e-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
            </div>
            <div class="single-col" data-total=""></div>
            <div class="content">
                <h2>Gulshan Centre Point</h2>
                <span>1 Photos </span>
            </div>
        </a>
    </div>
    <div class="col-lg-4 d-flex-dekstop wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
        <a href="#" class="single-gallery-item" data-id="1702">
            <div class="single-col">
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/15007337441494095698United-City_e-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
            </div>
            <div class="single-col" data-total="">
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/15007337451494095697Picture1_e-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
            </div>
            <div class="content">
                <h2>Neptune Land Development Ltd</h2>
                <span>2 Photos </span>
            </div>
        </a>
    </div>
    <div class="col-lg-4 d-flex-dekstop wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
        <a href="#" class="single-gallery-item" data-id="1695">
            <div class="single-col">
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/15007336621494095562United-House_e-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
            </div>
            <div class="single-col" data-total="3+">
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/15007336641494095563United-International-University-New-Campus_e-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/15007336641494095563Neptune-Hights_e-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
            </div>
            <div class="content">
                <h2>United Property Solutions Ltd Gallery</h2>
                <span>6 Photos </span>
            </div>
        </a>
    </div>
</div>
      `);
      //   },
      //   error: function (res) {},
      // });
    });
    const mediaCat = $(".photo-gallery-nav a");
    mediaCat.on("click", function (e) {
      e.preventDefault();
      let that = $(this),
        slug = that.attr("data-category");

      // remove other item active and current item action
      that.parent("li").siblings().find("a").removeClass("active");
      that.addClass("active");

      // remove other item active and current item action
      that
        .parent(".swiper-slide")
        .siblings()
        .removeClass("swiper-slide-active");
      that.parent(".swiper-slide").addClass("swiper-slide-active");
      $(".gallery .row").remove(); // remove items

      // $.ajax({
      //   method: "POST",
      //   url: urls.adminAjax,
      // dataType: "json",
      // data: {
      //   method: "POST",
      //   action: "get_cateogories_gallery",
      //   slug: slug,
      // },
      // beforeSend: function () {
      //   $(".gallery").html("<p> Loading ..... </p>");
      // },
      // success: function (res) {
      //   $(".gallery").html();
      $(".gallery").html(`<div class="row">
    <div class="col-lg-4 d-flex-dekstop wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
        <a href="#" class="single-gallery-item" data-id="1707">
            <div class="single-col">
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/15007347951494096133IPCO-Airport-5-Star-Hotel_e-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
            </div>
            <div class="single-col" data-total="3+">
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/15007347951494096133IPCO-Airport-Hotel-Retail-Project_e-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/1500734796149409616814920030961436615847p9-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
            </div>
            <div class="content">
                <h2>Ipco Developments</h2>
                <span>6 Photos </span>
            </div>
        </a>
    </div>
    <div class="col-lg-4 d-flex-dekstop wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
        <a href="#" class="single-gallery-item" data-id="1705">
            <div class="single-col">
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/15007339741494095738Gulshan-Center-Point_e-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
            </div>
            <div class="single-col" data-total=""></div>
            <div class="content">
                <h2>Gulshan Centre Point</h2>
                <span>1 Photos </span>
            </div>
        </a>
    </div>
    <div class="col-lg-4 d-flex-dekstop wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
        <a href="#" class="single-gallery-item" data-id="1702">
            <div class="single-col">
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/15007337441494095698United-City_e-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
            </div>
            <div class="single-col" data-total="">
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/15007337451494095697Picture1_e-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
            </div>
            <div class="content">
                <h2>Neptune Land Development Ltd</h2>
                <span>2 Photos </span>
            </div>
        </a>
    </div>
    <div class="col-lg-4 d-flex-dekstop wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
        <a href="#" class="single-gallery-item" data-id="1695">
            <div class="single-col">
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/15007336621494095562United-House_e-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
            </div>
            <div class="single-col" data-total="3+">
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/15007336641494095563United-International-University-New-Campus_e-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
                <img width="150" height="150" src="https://www.united.com.bd/wp-content/uploads/2021/11/15007336641494095563Neptune-Hights_e-150x150.jpg" class="attachment-thumbnail size-thumbnail" alt="" decoding="async" loading="lazy"/>
            </div>
            <div class="content">
                <h2>United Property Solutions Ltd Gallery</h2>
                <span>6 Photos </span>
            </div>
        </a>
    </div>
</div>
          `);
      //   },
      //   error: function (res) {},
      // });
    });
    $(".gallery").on("click", ".single-gallery-item", function (e) {
      console.log("I am here");
      e.preventDefault();

      // Uncomment and use the AJAX call if needed
      // let that = $(this),
      // id = that.attr("data-id");
      // $.ajax({
      //   method: "POST",
      //   url: urls.adminAjax,
      //   dataType: "json",
      //   data: {
      //     action: "gallery_item",
      //     id: id,
      //   },
      //   beforeSend: function () {},
      //   success: function (res) {

      // Ensure the target element is empty before adding new content
      $("#animated-thumbnails").empty().html(`
        <a href="https://www.united.com.bd/wp-content/uploads/2021/11/15007333861481453620vlcsnap-2014-11-30-18h44m27s7_resize.jpg" data-sub-html="<h3></h3> <p></p>">
            <img src="https://www.united.com.bd/wp-content/uploads/2021/11/15007333861481453620vlcsnap-2014-11-30-18h44m27s7_resize.jpg" />
        </a>
        <a href="https://www.united.com.bd/wp-content/uploads/2021/11/15007333871481453623vlcsnap-2014-11-30-18h45m37s72_resize.jpg" data-sub-html="<h3></h3> <p></p>">
            <img src="https://www.united.com.bd/wp-content/uploads/2021/11/15007333871481453623vlcsnap-2014-11-30-18h45m37s72_resize.jpg" />
        </a>
        <a href="https://www.united.com.bd/wp-content/uploads/2021/11/15007333881481453622vlcsnap-2014-11-30-18h44m22s0_resize.jpg" data-sub-html="<h3></h3> <p></p>">
            <img src="https://www.united.com.bd/wp-content/uploads/2021/11/15007333881481453622vlcsnap-2014-11-30-18h44m22s0_resize.jpg" />
        </a>
        <a href="https://www.united.com.bd/wp-content/uploads/2021/11/15007333881481453619vlcsnap-2014-11-30-18h44m08s76_resize.jpg" data-sub-html="<h3></h3> <p></p>">
            <img src="https://www.united.com.bd/wp-content/uploads/2021/11/15007333881481453619vlcsnap-2014-11-30-18h44m08s76_resize.jpg" />
        </a>
        <a href="https://www.united.com.bd/wp-content/uploads/2021/11/15007333891481453619vlcsnap-2014-11-30-18h45m23s191_resize.jpg" data-sub-html="<h3></h3> <p></p>">
            <img src="https://www.united.com.bd/wp-content/uploads/2021/11/15007333891481453619vlcsnap-2014-11-30-18h45m23s191_resize.jpg" />
        </a>
        <a href="https://www.united.com.bd/wp-content/uploads/2021/11/15007333891481453624vlcsnap-2014-11-30-18h44m58s191_resize.jpg" data-sub-html="<h3></h3> <p></p>">
            <img src="https://www.united.com.bd/wp-content/uploads/2021/11/15007333891481453624vlcsnap-2014-11-30-18h44m58s191_resize.jpg" />
        </a>
    `);

      // Initialize lightGallery
      $("#animated-thumbnails").lightGallery({
        closable: false,
        escKey: false,
      });

      // Trigger the first image click to open the gallery
      $("#animated-thumbnails a").first().trigger("click");

      // Destroy lightGallery instance when the close button is clicked
      $(".lg-close").on("click", function (e) {
        $("#animated-thumbnails").data("lightGallery").destroy(true);
      });
      //   },
      //   error: function (res) {},
      // });
    });

    $("#animated-thumbnails").on("lgBeforeClose", function () {
      console.log("close");
    });

    // Research & investor Cateories Tab
    $(".research-nav-mobile").on("click", "a", function (e) {
      e.preventDefault();
      console.log("event");
    });
    const researchMobileNav = new Swiper(".research-nav-mobile .swiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      slideToClickedSlide: true,
    });
    researchMobileNav.on("slideChangeTransitionStart", function () {
      const activeItem = $(".research-nav-mobile .swiper-slide-active a").attr(
        "data-target"
      );
      $(".accordion-item").each(function (index) {
        var that = $(this);
        var allIitem = that.attr("data-target");
        if (activeItem !== allIitem) {
          that.css("display", "none");
        } else {
          that.css("display", "block");
        }
      });
    });
    const ResearchCat = $(".research-nav-menu a");
    ResearchCat.on("click", function (e) {
      e.preventDefault();
      let that = $(this),
        activeItem = that.attr("data-target");
      $(".accordion-item").each(function () {
        var that = $(this);
        var allIitem = that.attr("data-target");
        if (activeItem !== allIitem) {
          that.css("display", "none");
        } else {
          that.css("display", "block");
        }
      });

      // remove other item active and current item action
      that.parent("li").siblings().find("a").removeClass("active");
      that.addClass("active");
    });

    // Accordion research investor

    var activeItem = $(".research-nav-menu a.active").attr("data-target");
    $(".accordion-item").each(function (index) {
      var that = $(this);
      var allIitem = that.attr("data-target");
      if (activeItem !== allIitem) {
        that.css("display", "none");
      }
    });
    $("#research-accordion").on(
      "click",
      ".accordion-item button",
      function (e) {
        e.preventDefault();
        console.log("event fire");
        let that = $(this),
          parent = that.parents(".accordion-item"),
          button = parent.find(".accordion-button"),
          collapse = parent.find(".accordion-collapse"),
          accordionBody = parent.find(".accordion-body");
        console.log({
          parent,
        });

        // Siblings
        parent.siblings().find(".accordion-button").addClass("collapsed");
        parent.siblings().find(".accordion-collapse").removeClass("show");
        parent
          .siblings()
          .find(".accordion-body")
          .removeClass("animated fadeIn");
        if (button.hasClass("collapsed") && collapse.not(".show")) {
          button.removeClass("collapsed");
          collapse.addClass("show");
          accordionBody.addClass("animated fadeIn");
        } else {
          button.addClass("collapsed");
          collapse.removeClass("show");
          accordionBody.addClass("animated fadeIn");
        }
      }
    );

    // Cheif

    const cheif = new Swiper(".cheif-message-archive", {
      slidesPerView: 1,
      loop: true,
      grabCursor: true,
      paginationClickable: true,
      slideToClickedSlide: true,
      spaceBetween: 30,
      breakpoints: {
        // when window width is >= 640px
        1200: {
          slidesPerView: 1,
          spaceBetween: 60,
        },
      },
      navigation: {
        nextEl: ".cheif-button-next",
        prevEl: ".cheif-button-prev",
      },
    });

    // Service Slider
    const genericSlider = new Swiper(".service-card", {
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: "#generic-service .icon-group .icon-next",
        prevEl: "#generic-service .icon-group .icon-prev",
      },
    });
    const cheif_content = new Swiper(".cheif-message-content", {
      effect: "fade",
      simulateTouch: false,
      allowTouchMove: false,
      autoHeight: true,
      fadeEffect: {
        crossFade: true,
      },
      on: {
        init: function (el) {
          const id = $(".cheif-message-archive .swiper-slide-active").attr(
            "data-year"
          );
          const realIndex = $(
            ".cheif-message-content .swiper-slide[data-target=" + id + "]"
          ).index();
          el.slideTo(realIndex);
        },
      },
    });
    cheif.on("slideChangeTransitionStart", function () {
      const id = $(".cheif-message-archive .swiper-slide-active").attr(
        "data-year"
      );
      const realIndex = $(
        ".cheif-message-content .swiper-slide[data-target=" + id + "]"
      ).index();
      cheif_content.slideTo(realIndex);
    });

    // fixed menu
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 500) {
        $(".to-top").addClass("fixed-totop");
      } else {
        $(".to-top").removeClass("fixed-totop");
      }
    });

    // Image Slider
    const IdSlider = $("#image-slider");
    const isLoop = IdSlider.attr("data-loop");
    var settingsImageSlider = {
      // autoplay: {
      // 	delay: 5000,
      // },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      slidesPerView: 1,
      speed: 1000,
      navigation: {
        nextEl: "#image-slider .banner-slide-next-btn",
        prevEl: "#image-slider .banner-slide-prev-btn",
      },
    };
    if (isLoop == "true") {
      settingsImageSlider["loop"] = true;
      settingsImageSlider["autoplay"] = {
        autoplay: 5000,
      };
    }
    console.log(settingsImageSlider);
    const imageSlider = new Swiper(
      "#image-slider .mySwiper",
      settingsImageSlider
    );
    const foundationDay = new Swiper(".foundation__day .mySwiper", {
      slidesPerView: 1,
      effect: "fade",
      loop: true,
      navigation: {
        nextEl: ".banner-slide-next-btn",
        prevEl: ".banner-slide-prev-btn",
      },
    });
    // Project Slider
    const projectSlider = new Swiper(".residential-project .mySwiper", {
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      loop: false,
      navigation: {
        nextEl: ".residential-project .next",
        prevEl: ".residential-project .prev",
      },
      breakpoints: {
        // when window width is >= 640px
        1200: {
          autoHeight: true,
        },
      },
    });
    var container = $(".container").css("max-width");
    if ($(".swiper-pagination-progressbar").length !== 0) {
      $(".swiper-pagination-progressbar").css("max-width", container);
    }

    // Mobile Menu Dropdown

    const mobileMenuContainer = $(".mobile-menu .nav-menu li");
    mobileMenuContainer.on("click", function (e) {
      var that = $(this);
      that
        .children("ul")
        .stop()
        .slideToggle("slow", function () {
          that.toggleClass("toogle-open", $(this).is(":visible"));
        });
    });
    const hamBurger = $(".menu-bar");
    hamBurger.on("click", function (e) {
      e.preventDefault();
      $("body").addClass("open-mobile-menu");
      $(".concerns .grid .column .thumb h4").css("zIndex", 9);
      $(".concerns .grid .column .thumb a.learn-more").css("zIndex", 9);
    });
    const closehamBurger = $(".close-menu");
    closehamBurger.on("click", function (e) {
      e.preventDefault();
      $("body").removeClass("open-mobile-menu");
      $(".concerns .grid .column .thumb h4").css("zIndex", 9999);
      $(".concerns .grid .column .thumb a.learn-more").css("zIndex", 9999);
    });

    // Career
    const selectDepartment = $("#select-department");
    selectDepartment.on("change", findingDepartment);
    const searchJob = $("#find-job");
    searchJob.on("keyup", findingSearch);
    function findingDepartment() {
      $(".search-bar").attr("data-slug", $(this).val());
      findingQuery();
    }
    function findingSearch() {
      $(".search-bar").attr("data-keyword", $(this).val());
      findingQuery();
    }
    function findingQuery() {
      let slug = $(".search-bar").attr("data-slug");
      let keyword = $(".search-bar").attr("data-keyword");
      $.ajax({
        method: "POST",
        url: urls.adminAjax,
        data: {
          method: "POST",
          action: "get_job_item",
          slug: slug,
          keyword: keyword,
        },
        beforeSend: function () {},
        success: function (res) {
          $(".job-post").html(res);
        },
        error: function (res) {
          alert("Something went wrong!");
        },
      });
    }

    // Carrer
    // Step 1
    const verifyEmail = $("#verify-email-btn");
    verifyEmail.on("click", function (e) {
      e.preventDefault();
      const email = $("#Email").val();
      const job_title = $("#job_title").val();
      if (validateEmail(email) === false) {
        $(".alert").addClass("alert-warning").html("Invalid Email Address.");
        return false;
      }
      if (email == "") {
        $(".alert")
          .addClass("alert-warning")
          .html("Fill out the form correctly.");
        return false;
      }
      $(".alert").removeClass("alert-warning").html("");
      $.ajax({
        method: "POST",
        url: urls.adminAjax,
        data: {
          method: "POST",
          email,
          submission_submit: true,
          job_title,
          action: "verify_email_handle_form",
        },
        beforeSend: function () {},
        success: function (res) {
          // console.log(res);
          if (res.status === 0) {
            $(".alert").addClass("alert-warning").html(res.message);
          }
          if (res.status === 1) {
            $(".alert").addClass("alert-success").html(res.message);
            $("#applicate-form-resume").removeClass("disible");
            $("#Email").attr("disabled", "disabled");
            $("#applicate-form-resume")
              .find("input, select")
              .removeAttr("disabled");
            $("#applicate-form-resume")
              .find("input[type='text'], select")
              .attr("required", "required");
          }
        },
        error: function (res) {},
      });
    });
    // Step 2
    const verify_sent_resume = $(".verify_sent_resume");
    verify_sent_resume.on("click", function (e) {
      e.preventDefault();
      const nonce = $("#cpt_nonce_field").val();
      const verifyCode = $("#verifyCode").val();
      const name = $("#Name").val();
      const email = $("#Email").val();
      const phone = $("#Phone").val();
      const interestDepartment = $("#interestDepartment").val();
      const currentCompany = $("#currentCompany").val();
      const job_title = $("#job_title").val();
      var fd = new FormData();
      const files = $("#pdf_file")[0].files[0];

      // Check empty wheather
      var fieldsObj = {
        verifyCode: "Verification code is required",
        Name: "Name is required",
        Phone: "Phone is required",
        Division: "Division is required",
        interestDepartment: "Interest department is required",
        currentCompany: "Current Company is required",
      };
      console.log(fieldsObj);
      VaildationInput(fieldsObj);
      console.log(files);
      if (files === undefined) {
        console.log("empty files");
        $(".alert").removeClass("alert-warning").html("");
        $(".alert").addClass("alert-warning").html(`File is required fields!`);
        return false;
      }
      fd.append("resume", files);
      fd.append("verification_code", verifyCode);
      fd.append("name", name);
      fd.append("email", email);
      fd.append("phone", phone);
      fd.append("interest_department", interestDepartment);
      fd.append("current_company", currentCompany);
      fd.append("cpt_nonce_field", nonce);
      fd.append("submit", true);
      fd.append("action", "verify_email_handle_form");
      fd.append("job_title", job_title);
      $.ajax({
        method: "POST",
        url: urls.adminAjax,
        type: "post",
        data: fd,
        contentType: false,
        processData: false,
        beforeSend: function () {},
        success: function (res) {
          if (res.status === 0) {
            $(".alert").removeClass("alert-success");
            $(".alert").addClass("alert-warning").html(res.message);
          }
          if (res.status === 1) {
            $(".alert").removeClass("alert-warning");
            $(".alert").addClass("alert-success").html(res.message);
            $("#submit").attr("disabled", "disabled");
          }
        },
        error: function (res) {},
      });
    });
    const validateEmail = (email) => {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    /*
     * Input vaildation function
     */
    const VaildationInput = (Input) => {
      $.each(Input, (index, value) => {
        console.log(index);
        console.log(value);
        let inputVal = $(`#${index}`).val();
        console.log(inputVal);
        console.log(`Vaildation callded`);
        if (inputVal == "") {
          console.log("has error");
          $(".alert").removeClass("alert-warning").html("");
          $(".alert").addClass("alert-warning").html(`${value}`);
          return false;
        }
        return true;
      });
      // return true;
    };
    // Add File name
    $("#pdf_file").on("change", function (e) {
      const files = $("#pdf_file")[0].files[0];
      $(".filename").html(files.name);
    });

    // Team Modal
    // MModal Close

    const TeamModalClose = $(".close-modal");
    TeamModalClose.on("click", function (e) {
      e.preventDefault();
      $(".custom-modal").removeClass("slideInDown");
      $(".custom-modal").addClass("fadeOutUp");
      setTimeout(() => {
        $(".custom-modal").removeClass("open");
        $(".custom-modal").removeClass("fadeOutUp");
        $("body").css("overflow-y", "auto");
        $("body").removeClass("modal-open-window");
      }, 1000);
    });

    // Moodal Open
    $(".member").on("click", ".modal-learn-more", function (e) {
      e.preventDefault();
      // var that = $(this),
      //   prentdiv = that.parents(".member");
      $(".custom-modal").addClass("open slideInDown");
      // prentdiv.find(".modal").addClass("open slideInDown");
      $("body").css("overflow-y", "hidden");
      $("body").addClass("modal-open-window");
      // const modalText = window.matchMedia("(max-width: 960px)");
      // if (modalText.matches) {
      //   var windowHeight = $(window).height();
      //   console.log(windowHeight);
      //   var imageHeight = $(
      //     ".team .modal.open .modal-dialog .modal-content .custom-row .left"
      //   ).innerHeight();
      //   var calcHeight = windowHeight - imageHeight;
      //   $(".modal-content .overview").css("max-height", calcHeight + 40);
      // }
      // console.log(calcHeight);
    });

    // About
    $(".tilter").on("click", function (e) {
      e.preventDefault();
    });

    // sticky Nav
    $(document).ready(function () {
      var previousScroll = 0,
        headerOrgOffset = $(".main-menu-area").offset().top;
      $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > headerOrgOffset) {
          if (currentScroll > previousScroll) {
            $(".main-menu-area").fadeOut();
          } else {
            $(".main-menu-area").fadeIn();
            $(".main-menu-area").addClass("fixed-menu");
          }
        } else {
          $(".main-menu-area").removeClass("fixed-menu");
        }
        previousScroll = currentScroll;
      });
    });

    $("body")
      .find(".cta")
      .on("click", function () {
        $(this).children()[0].click();
      });
    const appHeight = () => {
      const doc = document.documentElement;
      console.log(window.innerHeight);
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", appHeight);
    appHeight();
  });
})(jQuery);

//# sourceURL=webpack://united-group/./src/scripts/theme.js?
