$(function () {

  (function tabs() {
  $('.tabs__link').click(function (e) {
    e.preventDefault();
  })

  $tabs = $('.tabs__item');
  $content = $('.tabs__content');
  console.log($content.parent())

      $tabs.click(function (event) {
        $currentContent = $($content[$tabs.index(this)]);
        $(this).toggleClass('active');
        $(this).siblings('li').removeClass('active');
        $currentContent.addClass('active-content');
        $currentContent.siblings('div').removeClass('active-content');
        $currentContent.siblings('div').slideUp('fast');
        $currentContent.slideToggle('slow');
      });
  })();

(function tooltips() {
  $("input[type='text']").after("<em></em>");
  var animation = false

  function showTooltip() {
    $(this).data('title',$(this).attr('title'));
    $(this).removeAttr('title');

    var hoverText = $(this).data("title");
    var $startPositionLeft = $(this).position().left + $(this).width();

    $(this).siblings("em").text(hoverText);
    $(this).siblings("em").css({left: $startPositionLeft});
    $(this).siblings("em").animate({opacity: 1, left: "+=35"}, "normal");
  }
  function hideTooltip() {
    $(this).siblings("em").stop(true);
    $(this).siblings("em").animate({opacity: 0, left: "-=35"}, "fast");
  }
  $("input[type='text']").hover(showTooltip, hideTooltip);
  $('button').click(function () {
    $("input[type='text']").each(showTooltip);
  })
})();
});
