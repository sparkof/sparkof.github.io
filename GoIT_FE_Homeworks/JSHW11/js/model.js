define(
    'model',
    ['jquery'],

    function( $ ){
      function Model(data) {
        var self = this;
        self.data = data;

        self.addItem = function (item) {
          if (item.length === 0) {
            return;
          }
          self.data.push(item);

          return self.data;
        };

        self.removeItem = function (index) {
          self.data.splice(index, 1);

          return self.data;
        };

        self.editItem = function (index, newVal) {
          self.data[index] = newVal;

          return self.data;
        };
      };

      return Model;
    }
  );
