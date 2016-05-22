define(
    'controller',
    ['jquery'],

    function( $ ){

      function Controller(model, view) {
        var self = this;

        view.elements.addBtn.on('click', addItem);
        view.elements.listContainer.on('click', '.todoList__edit', editItem);
        view.elements.listContainer.on('click', '.todoList__remove', removeItem);
        view.elements.input.on('keypress', function (e) {
          if (e.keyCode === 13 ) {
            addItem();
          }
        });

        function addItem() {
          var newItem = view.elements.input.val();
          model.addItem(newItem);
          view.renderList(model.data);
          view.elements.input.val('');
        }

        function removeItem() {
          var index = $(this).attr('data-index');
          model.removeItem(index);
          view.renderList(model.data);
        }

        function editItem() {
          var index = $(this).attr('data-index');
          view.showEdit(model.data[index]);

          view.elements.editBtn.one('click', function () {
            var newVal = view.elements.editInput.val();
            model.editItem(index, newVal);
            view.renderList(model.data);
            view.hideEdit();
          });

          view.elements.cancelBtn.one('click', view.hideEdit);

          $(document).on('keyup', function(e) {
              if (e.keyCode === 13) {
                view.elements.editBtn.click();     // enter
                $(document).unbind();
              }
              if (e.keyCode === 27) {
                view.elements.cancelBtn.click();   // esc
                $(document).unbind();
              }
            });

        }
      }
      return Controller;
    });
