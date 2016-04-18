$(function() {
// КАРУСЕЛЬ
    $('.jcarousel')
    .jcarousel({
        animation: 'slow',
        wrap: 'circular',
    })
    .jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true
    });

    $('.jcarousel-prev').click(function() {
      $('.jcarousel').jcarousel('scroll', '-=1');
      event.preventDefault();
    });

    $('.jcarousel-next').click(function() {
      $('.jcarousel').jcarousel('scroll', '+=1');
      event.preventDefault();
    });

// СЕЛЕКТ
    $('#select').chosen({disable_search_threshold: 10, width: "95%"})
// ЧЕКБОКСЫ
    $('.jquery-checkbox :checkbox').rcSwitcher({
                                // Default value            // info

        theme: 'light',          // light                    select theme between 'flat, light, dark, modern'
        width: 60,              // 56  in 'px'
        height: 20,             // 22
        blobOffset: 0,          // 2
        reverse: true,          // false                    reverse on off order
        onText: 'ON',          // 'ON'                     text displayed on ON state
        offText: 'OFF',          // 'OFF'                    text displayed on OFF state
        inputs: true,           // false                    show corresponding  inputs
        autoFontSize: true,     // false                    auto fit text size with respect to switch height
        autoStick: true         // false                    auto stick switch to its parent side
    });

// МЕНЮ

    $('.submenu').hide();
    $('.main__item').hover(function () {
      $(this).children('.submenu').slideDown();
    }, function () {
      $(this).children('.submenu').stop(true,true).fadeOut();
    });

    $('.submenu__item').hover(function () {
        $(this).css('position', 'relative').children('.submenu')
        .css({
          position: 'absolute',
          left: '150px',
          top: '0px',
        })
        .fadeIn()
    } , function () {
        $(this).children('.submenu').fadeOut()
    })

var bgcol = $('menu li').css('backgroundColor');

    $('menu li').hover(function () {
      $(this).animate({
        duration: '550',
        backgroundColor: "#0bd"
      });
    }, function () {
        $(this).stop(true,true).animate({
          duration: '550',
          backgroundColor: bgcol
        });
    });

  $('menu li').has('.submenu').addClass('has-submenu');





});
