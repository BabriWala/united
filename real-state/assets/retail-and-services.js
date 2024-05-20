$(document).ready(function () {
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
