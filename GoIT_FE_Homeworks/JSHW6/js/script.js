$(function () {
  $('.myCarousel').myCarousel({
    description: true,
    easing: 'easeOutCirc',
  })

  var data = {
    name: "Кулинич Сергей",
    photoURL: "'http://sparkof.github.io/GoIT_FE_Homeworks/HW1-2/img/photo.jpg'",
    profession: "Государственный служащий",
    reason1: "Хочу изменить свою жизнь",
    reason2: "Мне это нравится",
    reason3: "Приходится работать по ночам",
    telephone: "+380994530383",
    profileURL: "http://vk.com/id11803006"
  }

  var $html = $('#test').html();
  var content = tmpl($html, data);

  $('body').append(content);

})
