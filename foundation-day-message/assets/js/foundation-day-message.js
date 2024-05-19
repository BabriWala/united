// $(document).ready(function () {
//   console.log("i am here")

// });
const swiper = new Swiper(".swiper", {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".cheif-button-next",
    prevEl: ".cheif-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
