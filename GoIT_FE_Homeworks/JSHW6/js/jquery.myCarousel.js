(function ($) {
  "use strict"
  $.fn.myCarousel = function (options) {
    var defaults = {
      imgWidth: "320px",                   //ширина картинки
      indent: "25px",                      //отступ между картинками
      hiderWidth: 3,                       //картинок в карусели видно
      swipeTime: 2000,                     //время 1 перелистывания
      swipeSize: 3,                        //размер 1 перелистывания(кол-во картинок)
      autoscroll: false,                    //автоперелистывание
      scrollInterval: 7000,                //время автоперелистывания
      easing: false,                       //сглаживание *используется модуль jquery.easing.js
      circle: true,                        //листать по кругу
      controls: true,                      //кнопки вперед/назад
      description: true,                   //описание есть/нет
    }

    var settings = $.extend(defaults, options);

    $('.myCarousel img').width(settings.imgWidth);
    $('.myCarousel').width( settings.hiderWidth * (parseInt(settings.imgWidth) + parseInt(settings.indent)) - parseInt(settings.indent));
    $('.myCarousel-element').css('margin-right', settings.indent);

    if (settings.description === false) {
      $('.myCarousel').find('p').remove()
    }

    var currentOffset = 0,
        offset = settings.swipeSize * (parseInt(settings.imgWidth) + parseInt(settings.indent)),
        maximumOffset = $('.myCarousel-element').length * (parseInt(settings.imgWidth) + parseInt(settings.indent)) - (settings.hiderWidth * (parseInt(settings.imgWidth) + parseInt(settings.indent)));

    function swipeRight() {
      if (currentOffset < maximumOffset) {
        $('.myCarousel-list').animate( {
          left: '-=' + offset + 'px'
        }, settings.swipeTime, settings.easing);
        currentOffset += offset;
      } else if (settings.circle){
        $('.myCarousel-list').animate( {
          left: '0px'
        }, settings.swipeTime, settings.easing);
        currentOffset = 0;
      }
    }

    function swipeLeft() {
      if (currentOffset > 0) {
        $('.myCarousel-list').animate( {
          left: '+=' + offset + 'px'
        }, settings.swipeTime, settings.easing);
        currentOffset -= offset;
      } else if (settings.circle) {
        $('.myCarousel-list').animate( {
          left: -maximumOffset + 'px'
        }, settings.swipeTime, settings.easing);
        currentOffset = maximumOffset;
      }
    }

    if (settings.controls) {
    $('.myCarousel-next').on('click', swipeRight);
    $('.myCarousel-prev').on('click', swipeLeft);
  } else {
    $('.myCarousel-next').remove();
    $('.myCarousel-prev').remove();
  }

    if (settings.autoscroll) {
      var timer = setInterval(swipeRight, settings.scrollInterval);
    }

    return this;
  }

})(jQuery)
