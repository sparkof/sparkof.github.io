"use strict"
$(function () {
  $('.slider__list').slick({
    dots: true
  });

  var $accordion = $('.banners__panel');
  $accordion.on('click', function (event) {
    var $this = $(this);
    $this.toggleClass('active');

    if ($this.hasClass('active')) {
      $this.find('.banners__toggle').html('-');
    } else {
      $this.find('.banners__toggle').html('+');
    }
    $this.find('.banners__text').slideToggle();
  })
})
