"use strict";
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
    // var totalCorrectAnswers = 0;
    var $questionList = $('.questionWrapper ol>li>span');
    $questionList.each(function (index) {
      // debugger;
      var currentQuestionCorrectAnswers = 0;
      var checkedAnswers = 0;
      var checkedCorrectAnswers = 0;
      for ( var i = 0; i < questions.length; i++) {
        if ( $( this ).attr('title') == questions[i].questionID ) {       //поиск нужного вопроса
          checkedAnswers = $( this ).parent().find(':checked').length;

          for (var j = 0; j < questions[i].answers.length; j++) {      //суммарный подсчёт правильных ответов
            if (questions[i].answers[j].correct === true) {
              currentQuestionCorrectAnswers += 1;
              // totalCorrectAnswers +=1;
            }
            $( this ).parent().find(':checked').each(function (index2) {
                if ( this.value == questions[i].answers[j].value && questions[i].answers[j].correct === true ) {
                  checkedCorrectAnswers +=1;
                };
              });
          };
        };
      };
      if (checkedAnswers != 0) {
        if (checkedCorrectAnswers === checkedAnswers && checkedAnswers === currentQuestionCorrectAnswers) {
          result +=1;
        } else if (checkedCorrectAnswers === checkedAnswers) {
          result += checkedCorrectAnswers / currentQuestionCorrectAnswers;
        } else {
          result += checkedCorrectAnswers / checkedAnswers;
        }
      }
    });

    console.log('Ваш результат:' + (result / $questionList.length * 100) + '% правильных ответов');
 return result / $questionList.length * 100;
  };

  var $overlay, $modal, $closeButton;

  function showModal() {
    $overlay = $('<div class="overlay"></div>');
    $modal = $('<div class="modal">Ваш результат: ' + checkResult() +'% ответов правильных </div>');
    $closeButton = $('<button type="button" name="close">Close</button>');
    $('body').append($overlay).append($modal).find($modal).hide().append($closeButton).fadeIn();
    $closeButton.one('click', hideModal);

  }
  function hideModal() {
    $modal.fadeOut();
    $overlay.remove();
    $modal.remove();
  }
});
