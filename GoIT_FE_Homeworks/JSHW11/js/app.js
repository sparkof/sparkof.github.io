requirejs.config({
  shim: {
    "lodash": {
      exports: "_"
    }
  }
})
require(
  [
    'jquery',
    'model',
    'view',
    'controller'
  ],
  function ($, Model, View, Controller) {
    $(function () {
      var firstToDoList = ['This is', "My ", "MVC & RequireJS", "Application"];
      var model = new Model(firstToDoList);
      var view = new View(model);
      var controller = new Controller(model, view);
    });
  }
);
