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
    checkResult();
  });

  function checkResult() {
    var result = 0;
    // var totalCorrectAnswers = 0;
    var $questionList = $('.questionWrapper ol>li');
    $questionList.each(function (index) {
          debugger;
      var currentQuestionCorrectAnswers = 0;
      var checkedAnswers = 0;
      var checkedCorrectAnswers = 0;

      for ( var i = 0; i < questions.length; i++) {
        if ( $( this ).html().indexOf(questions[i].text) + 1 ) {       //поиск нужного вопроса
          checkedAnswers = $( this ).find(':checked + label').length;

          for (var j = 0; j < questions[i].answers.length; j++) {      //суммарный подсчёт правильных ответов
            if (questions[i].answers[j].correct === true) {
              currentQuestionCorrectAnswers += 1;
              // totalCorrectAnswers +=1;
            }
            $( this ).find(':checked + label').each(function (index2) {
                if ( ($( this ).html().indexOf(questions[i].answers[j].text) + 1) && questions[i].answers[j].correct === true ) {
                  checkedCorrectAnswers +=1;
                };
              });
          };
        };
      };
      result += checkedCorrectAnswers / checkedAnswers / currentQuestionCorrectAnswers;
    });

    console.log('Ваш результат:' + (result / $questionList.length * 100) + '% правильных ответов');
    // return result / questionList.length * 100;
  };
});
