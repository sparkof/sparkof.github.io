var displayedMonth = new Date().getMonth();

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
