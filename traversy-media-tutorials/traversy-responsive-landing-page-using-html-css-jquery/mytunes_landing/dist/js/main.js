// Responsive Nav
$(function() {
  menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    const w = $(this).width();
    if (w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function(e) {
    const w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});

// Smooth Scrolling
$('.cf a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const { hash } = this;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});
