var today = new Date();
var displayed = today;
var currentMonth = today.getMonth(),
    currentYear = today.getFullYear(),
    currentDate = today.getDate();

// Получаем список задач
var taskList = localStorage.getItem('tasks');
    taskList = JSON.parse(taskList);

    if(taskList === null) {
      taskList = [
        {
          id: null,
          dateStamp: new Date(1901, 1, 1),
          important: null,
          completed: null,
          text: null
        }
      ];
    };

document.addEventListener('DOMContentLoaded', init);

function init() {
  generateMonthTemplate(today);
  // generateDayTemplate(today);

  $('.nav-next-button').click(function (e) {
    var nextMonth = new Date(displayed.getFullYear(), displayed.getMonth() + 1, 1, 12);
    generateMonthTemplate(nextMonth);
    displayed = nextMonth;
  });

  $('.nav-prev-button').click(function (e) {
    var prevMonth = new Date(displayed.getFullYear(), displayed.getMonth() - 1, 1, 12);
    generateMonthTemplate(prevMonth);
    displayed = prevMonth;
  });

  var model = new Model(taskList);
  var view = new View(model);
  var controller = new Controller(model, view);

  $('.weekgrid table').click(function (e) {

    var target = e.target;

    while (target != this) {
      if (target.tagName == 'TD' ) {
        var clickDate = $(target).attr('data-day');
        var date = new Date(clickDate);
        view.render(date);
        controller.init();
        // generateDayTemplate(date);
        return;
      };
      target = target.parentNode;
    };
  });

}


// Получаем дату первого понедельника текущей страницы
function getFirstMonday(date) {
  firstMonday = new Date(date.getFullYear(), date.getMonth(), 1, 12);
  while (firstMonday.getDay() !== 1) {
    firstMonday = new Date(firstMonday.getTime() - 24 * 60 * 60 * 1000);
  }
  return firstMonday;
}

//Получаем массив задач на указанную дату
function getTasksOfDate(date) {
  var dateTasks = [];

  for (var i = 0; i < taskList.length; i++) {
    if (date.getDate() === new Date(taskList[i].dateStamp).getDate() && date.getMonth() === new Date(taskList[i].dateStamp).getMonth() && date.getFullYear() === new Date(taskList[i].dateStamp).getFullYear()) {
      dateTasks.push(taskList[i]);
    }
  }
  return dateTasks;
}


// Генерируем месяц
function generateMonthTemplate(date) {
  $('.monthname').text(getMonthName(date) + ' ' + date.getFullYear()); //имя месяца и год над календарем

  $('.weekgrid tbody').html(''); // очищаем таблицу

  var monthTemplate = _.template($('#weeks').html());
  var firstMonday = getFirstMonday(date);
  var days = [0];

  for (var i = 0; i < 42; i++) {
    var day = new Date(firstMonday.getTime() + i * 24 * 60 * 60 * 1000);
    var tasks = getTasksOfDate(day);

    var currentClass = 'day ';
    if (day.getMonth() !== date.getMonth()) {
      currentClass += 'other-month ';
    };

    if (day.getDay() === 0 || day.getDay() === 6) {
      currentClass += 'weekend ';
    };

    if (day.getDate() === displayed.getDate() && day.getMonth() === displayed.getMonth()) {
      currentClass += 'selected '
    }

    if (day.getDate() === currentDate && day.getMonth() === currentMonth && day.getFullYear() === currentYear) {
      currentClass += 'today';
    }



    var obj = new dayObj(day, currentClass, tasks);

    days.push(obj);
  };

  $('.weekgrid tbody').append(monthTemplate({
    day: days
  }))
};

//Получение имени дня
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


// Получение имени месяца
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

// объект дня
function dayObj(day, currentClass, tasks) {
  this.fullDate = day;
  this.currentClass = currentClass;
  this.tasks = tasks;
}

dayObj.prototype.important = function () {
  var count = 0;
  for (var i = 0; i < this.tasks.length; i++) {
    if(this.tasks[i].important === true) {
      count++;
    }
  }
  return count;
};

dayObj.prototype.common = function () {
  var count = this.tasks.length;
  return count;
};

dayObj.prototype.completed = function () {
  var count = 0;
  for (var i = 0; i < this.tasks.length; i++) {
    if(this.tasks[i].completed === true) {
      count++;
    }
  }
  return count;
};

function makeID() {
  var now = Date.now();
  var id = '';
  id += (displayed.getFullYear() + '-');
  id += (displayed.getMonth() + '-');
  id += (displayed.getDate() + '-');
  id += now;
  return id;
}

function generateDayTemplate(date) {
  $('.date-name').text(getDayName(date) + ', ' + date.getDate() + ' ' + getMonthName(date));
  $('.toDoList .taskList').html(''); // очищаем список
  displayed = date;
  generateMonthTemplate(displayed);

  var tasks = getTasksOfDate(date);

  if (tasks == false) return;

  var dayTemplate = _.template($('#taskList').html());

  $('.toDoList .taskList').append(dayTemplate({
    dateTasks: tasks
  }));
}
