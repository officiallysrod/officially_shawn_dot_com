$(window).resize(function() {
  var more = document.getElementById("js-navigation-more");
  if ($(more).length > 0) {
    var windowWidth = $(window).width();
    var moreLeftSideToPageLeftSide = $(more).offset().left;
    var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

    if (moreLeftSideToPageRightSide < 330) {
      $("#js-navigation-more .submenu .submenu").removeClass("fly-out-right");
      $("#js-navigation-more .submenu .submenu").addClass("fly-out-left");
    }

    if (moreLeftSideToPageRightSide > 330) {
      $("#js-navigation-more .submenu .submenu").removeClass("fly-out-left");
      $("#js-navigation-more .submenu .submenu").addClass("fly-out-right");
    }
  }
});

$(document).ready(function() {
  var menuToggle = $("#js-mobile-menu").unbind();
  $("#js-navigation-menu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();
    $("#js-navigation-menu").slideToggle(function(){
      if($("#js-navigation-menu").is(":hidden")) {
        $("#js-navigation-menu").removeAttr("style");
      }
    });
  });

  var previous = 0;
  var $window = $(window);
  var $navbar = $('.navigation');
  var navbarHeight = $navbar.height();
  var heroUnitHeight = $('.hero-container').height();

  $window.on('scroll', function(){
    var scrollTop = $window.scrollTop();
    if (scrollTop > (navbarHeight / 2)) {
      $navbar.toggleClass('hidden', scrollTop > previous);
      previous = scrollTop;
    }
    if (scrollTop > (heroUnitHeight / 2)) {
      $navbar.addClass('light-background');
    } else {
      $navbar.removeClass('light-background');
    }
  });
});
