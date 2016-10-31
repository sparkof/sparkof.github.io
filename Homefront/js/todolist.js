function Model(tasks) {
  var self = this;
  self.data = tasks;

  self.addItem = function (item) {
    if (item.text.length === 0) {
      return;
    }
    self.data.push(item);
    taskList = self.data;

    return self.data;
  };

  self.completeTask = function (id) {
    var index =_.findIndex(self.data, function (taskObj) {
      return taskObj.id == id;
    }) ;
    if (self.data[index].completed) {
      self.data[index].completed = false;
    } else {
      self.data[index].completed = true;
    }
    return self.data;
  }

  self.removeItem = function (id) {
    var removed = _.remove(self.data, function (taskObj) {
      return taskObj.id == id;
    });
    taskList = self.data;
    return self.data;
  };

  self.editItem = function (id, newVal) {
    var index =_.findIndex(self.data, function (taskObj) {
      return taskObj.id == id;
    }) ;
    self.data[index].text = newVal;
    taskList = self.data;
    return self.data;
  };

  self.save = function () {
    taskList = self.data;
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }
};


function View(model) {
  var self = this;

  self.elements = {};

  self.elements.addTask = $('.addTask');

  self.render = function (date) {

    generateDayTemplate(date);
    self.elements.edit = $('.edit');
    self.elements.remove = $('.remove');
    self.elements.compl = $('.complete');

    console.log(self.elements.edit, self.elements.remove, self.elements.compl);
  }

  self.newTask = function(isNew, id) {
    var index = _.findIndex(model.data, function (obj) {
      return obj.id == id;
    })
    var task = model.data[index];
    var modal = _.template($('#new-task').html());

    if (isNew) {
      $('body').append(modal({data:null}));
    } else {
      $('body').append(modal({data:task}));
      $('#task-text').val(task.text);
      $('#task-text').select();

      if (task.important) {
        $('#important-checkbox').prop('checked', true);
      }

      if (task.completed) {
        $('#completed-checkbox').prop('checked', true);
      }
    }

    self.elements.dayName = $('.dayName');
    self.elements.dayName.text(getDayName(displayed) + ', ' + displayed.getDate() + ' ' + getMonthName(displayed));

    self.elements.textInput = $('#task-text');
    self.elements.important = $('#important-checkbox');
    self.elements.completed = $('#completed-checkbox');
    self.elements.okBtn = $('#ok-button');
    self.elements.cancelBtn = $('#cancel-button');

    $('.overlay').hide().fadeIn();
    $('.task-window').hide().fadeIn();

  };

  self.hideEdit = function () {
    $('.task-window').remove();
  };
  self.render(displayed);
}


function Controller(model, view) {
  var self = this;
  view.elements.addTask.on('click', addItem);

  self.init = function () {
    view.elements.edit.on('click', self.editItem);
    view.elements.remove.on('click', self.removeItem);
    view.elements.compl.on('click', self.completeItem);
  }

  self.completeItem = function (e) {
    var li = e.target.parentNode.parentNode;
    var id = $(li).attr('data-id');
    model.completeTask(id);
    model.save();
    view.render(displayed);
    self.init();
  }

  function addItem() {
    view.newTask(true);
    view.elements.okBtn.one('click', saveItem);
    view.elements.cancelBtn.one('click', view.hideEdit);
  }

  self.removeItem = function (e) {
    var li = e.target.parentNode.parentNode;
    console.log(li);
    var id = $(li).attr('data-id');
    model.removeItem(id);
    model.save();
    view.render(displayed);
    self.init();
  }

  self.editItem = function (e) {
    var li = e.target.parentNode.parentNode;
    var id = $(li).attr('data-id');
    view.newTask(false, id);
    view.elements.okBtn.one('click', changeItem);
    view.elements.cancelBtn.one('click', view.hideEdit);

    function changeItem() {
      console.log(id);
      model.editItem(id, view.elements.textInput.val());
      model.save();
      view.render(displayed);
      view.hideEdit();
      self.init();
    }
  }

  function saveItem() {
    var isImportant = false,
    isCompleted = false;

    if (view.elements.important.prop('checked')) {
      isImportant = true;
    };
    if (view.elements.completed.prop('checked')) {
      isCompleted = true;
    }
    var newTask = {
      dateStamp: displayed,
      important: isImportant,
      completed: isCompleted,
      text: view.elements.textInput.val(),
      id: makeID(),
    }
    model.addItem(newTask);
    model.save();
    view.hideEdit();
    view.render(displayed);
    self.init();
    console.log(newTask);
  }


    $(document).on('keyup', function(e) {
        // if (e.keyCode === 13) {
        //   view.elements.okBtn.click();     // enter
        // }
        if (e.keyCode === 27) {
          view.elements.cancelBtn.click();   // esc
        }
      });

      self.init();
  };
