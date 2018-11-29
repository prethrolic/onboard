(function($) {
  "use strict"; // Start of use strict
  var navOffsetTop = $('.navbar').offset().top;
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 90)
        }, 1000, "easeInOutExpo");
      }
    }
  });

  $(window).resize(function() {
    $('body').removeClass('has-docked-nav');
    navOffsetTop = $('.navbar').offset().top;
    if ($(window).scrollTop() > navOffsetTop) {
        $("body").addClass('has-docked-nav');
    }
    else {
        $("body").removeClass('has-docked-nav');
    }
    }
  )

  $(window).scroll(function() {
      if ($(window).scrollTop() > navOffsetTop) {
          $("body").addClass('has-docked-nav');
          $(".navbar-list").animate({
            right: 0
          }, 1000);
      }

      else {
          $("body").removeClass('has-docked-nav');
          $(".navbar-list").removeClass('u-pull-right');
      }
  });

})(jQuery); // End of use strict
