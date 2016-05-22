define(
    'view',
    ['jquery', 'lodash'],

    function( $, _ ){

      function View(model) {
        var self = this;

        function init() {
          var wrapper = _.template($('#wrapper-template').html());
          $('body').append(wrapper);

          self.elements = {
            input: $('.item-value'),
            addBtn: $('.item-add'),
            listContainer: $('.todoList__list'),
          };

          self.renderList(model.data);
        };

        self.renderList = function (data) {
          var list = _.template($('#item-template').html());
          self.elements.listContainer.html(list({data: data}));
        };

        self.showEdit = function (item) {
          var modal = _.template($('#edit-template').html());
          $('body').append(modal({data:item}));
          $('.overlay').hide().fadeIn();
          $('.todoList__editWindow').hide().fadeIn();
          $('.item-newValue').val(item);
          $('.item-newValue').select();

          self.elements.editInput = $('.item-newValue');
          self.elements.editBtn = $('.item-edit');
          self.elements.cancelBtn = $('.item-cancel');

        };

        self.hideEdit = function () {
          $('.overlay').remove();
          $('.todoList__editWindow').remove();
        };

        init();
      }
    return View;
      }
    );
