$(function() {
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


    $('#select').chosen({disable_search_threshold: 10, width: "95%"})

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

    $('menu ul').css('list-style', 'none');
    $('.main__item').css({
      float: 'left',
      width: '100px',
      position: 'relative'
    });

    $('.submenu').css({
      width: '100px',
    }).hide();

    console.log($('.submenu').parent().height());

    $('.main__item').hover(function () {
      $(this).children('.submenu').slideDown()
    }, function () {
      $(this).children('.submenu').stop(true,true).fadeOut()
    });


    $('.submenu__item').hover(function () {
        $(this).css('position', 'relative').children('.submenu')
        .css({
          position: 'absolute',
          left: '100px',
          top: '0px'
        })
        .fadeIn()
    } , function () {
        $(this).children('.submenu').fadeOut()
    })









});
