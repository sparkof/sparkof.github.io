'use strict';

$(function () {
  var questions = localStorage.getItem('questions');
  questions = JSON.parse(questions);

  var $html = $('#questionnaire').html();
  var content = tmpl($html, {
    data: questions
  });
  $('body').append(content);

  $('.questionWrapper :submit').on('click', function (e) {
    e.preventDefault();
    showModal();
  });

  function checkResult() {
    var result = 0;
    var $questionList = $('.questionWrapper ol>li>span');

    $questionList.each(function (index) {
      var _this = this;

      var currentQuestionCorrectAnswers = 0;
      var checkedAnswers = 0;
      var checkedCorrectAnswers = 0;

      var _loop = function _loop(i) {
        if ($(_this).attr('title') == questions[i].questionID) {
          //поиск нужного вопроса
          checkedAnswers = $(_this).parent().find(':checked').length;

          var _loop2 = function _loop2(j) {
            //суммарный подсчёт правильных ответов
            if (questions[i].answers[j].correct === true) {
              currentQuestionCorrectAnswers += 1;
              // totalCorrectAnswers +=1;
            }
            $(_this).parent().find(':checked').each(function (index2) {
              if (this.value == questions[i].answers[j].value && questions[i].answers[j].correct === true) {
                checkedCorrectAnswers += 1;
              };
            });
          };

          for (var j = 0; j < questions[i].answers.length; j++) {
            _loop2(j);
          };
        };
      };

      for (var i = 0; i < questions.length; i++) {
        _loop(i);
      };
      if (checkedAnswers != 0) {
        if (checkedCorrectAnswers === checkedAnswers && checkedAnswers === currentQuestionCorrectAnswers) {
          result += 1;
        } else if (checkedCorrectAnswers === checkedAnswers) {
          result += checkedCorrectAnswers / currentQuestionCorrectAnswers;
        } else {
          result += checkedCorrectAnswers / checkedAnswers;
        }
      }
    });

    console.log('Ваш результат:' + result / $questionList.length * 100 + '% правильных ответов');
    return result / $questionList.length * 100;
  };

  var _ref = [$('<div class="overlay"></div>'), $('<button type="button" name="close">Close</button>')];
  var $overlay = _ref[0];
  var $closeButton = _ref[1];
  var $modal = _ref[2];


  function showModal() {
    $modal = $('<div class="modal">Ваш результат: ' + checkResult() + ' % ответов правильных</div>');
    $('body').append($overlay).append($modal).find($modal).hide().append($closeButton).fadeIn();
    $closeButton.one('click', hideModal);
  }
  function hideModal() {
    $modal.fadeOut().remove();
    $overlay.remove();
  }
});