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

  function showTooltip() {
    var hoverText = $(this).attr("title");
    var $startPositionLeft = $(this).position().left + $(this).width();

    $(this).data('title',$(this).attr('title'));
    $(this).removeAttr('title');
    $(this).siblings("em").text(hoverText);
    $(this).siblings("em").css({left: $startPositionLeft});
    $(this).siblings("em").animate({opacity: "show", left: "+=35"}, "normal");
  }
  function hideTooltip() {
    $(this).siblings("em").animate({opacity: "hide"}, "fast");
  }
  $("input[type='text']").hover(showTooltip, hideTooltip);
})();
});
