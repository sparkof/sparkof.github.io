var today = new Date();
var currentMonth = today.getMonth(),
    currentYear = today.getFullYear(),
    currentDate = today.getDate();

var displayed = today;

function getFirstMondayOfList(date, bolean) {
  var week = bolean || false;
  var day;
  week ? day = date.getDate() : day = 1;

  firstMonday = new Date(date.getFullYear(), date.getMonth(), day, 12);
  while (firstMonday.getDay() !== 1) {
    firstMonday = new Date(firstMonday.getTime() - 24 * 60 * 60 * 1000);
  }
  return firstMonday;
}

function getDayName(date) {
  var dayOfWeek = date.getDay();
  switch (dayOfWeek) {
    case 0:
      dayOfWeek = 'воскресенье';
      break;
    case 1:
      dayOfWeek = 'понедельник';
      break;
    case 2:
      dayOfWeek = 'вторник';
      break;
    case 3:
      dayOfWeek = 'среда';
      break;
    case 4:
      dayOfWeek = 'четверг';
      break;
    case 5:
      dayOfWeek = 'пятница';
      break;
    case 6:
      dayOfWeek = 'суббота';
      break;
    default:
      console.log('error of dayName transormation');
  }
  return dayOfWeek;
}

function getMonthName(date) {
  var month = date.getMonth();
  var monthName;
  switch (month) {
    case 0:
      monthName = 'январь';
      break;
    case 1:
      monthName = 'февраль';
      break;
    case 2:
      monthName = 'март';
      break;
    case 3:
      monthName = 'апрель';
      break;
    case 4:
      monthName = 'май';
      break;
    case 5:
      monthName = 'июнь';
      break;
    case 6:
      monthName = 'июль';
      break;
    case 7:
      monthName = 'август';
      break;
    case 8:
      monthName = 'сентябрь';
      break;
    case 9:
      monthName = 'октябрь';
      break;
    case 10:
      monthName = 'ноябрь';
      break;
    case 11:
      monthName = 'декабрь';
      break;
    default:
      console.log('error of monthName transormation');
  };
  return monthName;
};

function updateToday(date) {
  $('.day__day-of-week').text(getDayName(date));
  $('.day__date').text(date.getDate());
  $('.day__month').text(getMonthName(date));
  $('.bottom-swipe-panel span').text(getMonthName(date));
}

function generateMonthTemplate(date) {
  var monthTemplate = _.template($('#weeks').html());
  var firstMonday = getFirstMondayOfList(date);
  var days = [0];

  for (var i = 0; i < 35; i++) {
    var day = new Date(firstMonday.getTime() + i * 24 * 60 * 60 * 1000);

    var currentClass = 'month__day ';
    if (day.getMonth() !== date.getMonth()) {
      currentClass += 'other-month ';
    };

    if ( day.getDay() === 0 || day.getDay() === 6 ) {
      currentClass += 'weekend ';
    };

    if (day.getDate() === currentDate && day.getMonth() === currentMonth && day.getFullYear() === currentYear) {
      currentClass += 'today'
    }

    var obj = {
      fullDate: day,
      currentClass: currentClass
    };
    days.push(obj);
  };


  $('.month').append(monthTemplate({
    day: days
  }))
};

$(function () {

  updateToday(today);
  generateMonthTemplate(today);

  $('.day__left-panel').click(function () {
    $('.left-sidebar').toggle('slide', {direction: 'right'}, 1000)
  });

  $('.left-sidebar .left-panel').click(function () {
    $('.current-week').toggle();
    $('.month').toggle();
    $('.bottom-swipe-panel').toggle('slide', {direction: 'up'}, 500);
  });

  $('.bottom-swipe-panel__prev').click(function () {
    $('.month__week').remove();
    displayed.setDate(1);
    displayed = new Date(displayed.getTime() - 24 * 60 * 60 * 1000);
    generateMonthTemplate(displayed);
    $('.bottom-swipe-panel span').text(getMonthName(displayed));
  });

  $('.bottom-swipe-panel__next').click(function () {
    $('.month__week').remove();
    displayed.setDate(28);

    while (displayed.getMonth() === (new Date(displayed.getTime() - 24 * 60 * 60 * 1000)).getMonth()) {
      displayed = new Date(displayed.getTime() + 24 * 60 * 60 * 1000);
    }

    generateMonthTemplate(displayed);
    $('.bottom-swipe-panel span').text(getMonthName(displayed));
  });

  $('.day__date').click(function () {
    $('.month__week').remove();
    displayed = today;
    generateMonthTemplate(displayed);
    $('.bottom-swipe-panel span').text(getMonthName(displayed));
  })

})
