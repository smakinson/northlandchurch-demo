

;(function ($) {

  /* Top search bar */
  $('#search-bar-btn').click(() => {
    $('#search-bar').removeClass('closed');
    return false;
  });

  $('#search-bar-close-btn').click(() => {
    $('#search-bar').addClass('closed');
    return false;
  });

  /* Top nav */

  // TODO: Make sur ethis matches the CSS size var.
  var notSmallScreenMediaQuery = "(min-width: 30em)";

  function openNavMenu(menu) {
    menu.addClass('open');
  }

  function closeNavMenu(menu) {
    menu.removeClass('open');
  }

  $('.top-nav-menu-trigger').hover(function(e) {
    // No hovering on the small screen.
    if(Modernizr.mq(notSmallScreenMediaQuery)){
      //$(this).find('.top-nav-menu').addClass('open');
      openNavMenu($(this).find('.top-nav-menu'));
    }
  },function () {
    //$(this).parent().find('.top-nav-menu').removeClass('open');
    closeNavMenu($(this).parent().find('.top-nav-menu'));;
  });

  $('.top-nav-menu-trigger').click(function(e) {
    //$(this).parent().find('.top-nav-menu').addClass('open');
    //$(this).find('.top-nav-menu').addClass('open');
    openNavMenu($(this).find('.top-nav-menu'));
    return false;
  });

  $('#top-nav .top-nav-menu a').click(function(e) {
    // Make sure the menu is fully visible before allowing links to work,
    // but make sure opacity is supported first.
    if($('html').hasClass('opacity')) {
      if ($(this).parent().css('opacity') < 1) {
        alert('dsdsf');
        return false;
      }
    }
  });

  $('.top-nav-menu-close-btn').click(function(e) {
    // Close the menu
    //$(this).parent().removeClass('open');
    closeNavMenu($(this).parent());
    return false;
  });

}($));