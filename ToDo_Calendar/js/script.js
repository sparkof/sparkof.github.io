var displayedMonth = new Date().getMonth();
var displayedYears = new Date().getFullYear();

function changeDisplayedMonth(a) {
  if (a === 'next') {
    if (displayedMonth === 11) {
      displayedMonth = 0;
    } else {
      displayedMonth++;
    };
  } else if (a === 'prev') {
    if (displayedMonth === 0) {
      displayedMonth = 11;
    } else {
      displayedMonth--;
    };
  }
  return displayedMonth;
}

function getMonthName(month) {
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

  }
  return monthName;
}
