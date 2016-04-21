"use strict";
$(function () {
  var questions = localStorage.getItem('questions');
  questions = JSON.parse(questions);

  var $html = $('#questionnaire').html();
  var content = tmpl($html, {
    data: questions
  });
  $('body').append(content);

  var result;

  $('.questionWrapper :submit').on('click', function (e) {
    e.preventDefault();
    checkResult();
  });

  function checkResult() {
    result = 0;
    var totalCorrectAnswers = 0;

    var $questionList = $('.questionWrapper ol>li');
    $questionList.each(function (index) {
      debugger;
      for ( var i = 0; i < questions.length; i++) {
        if ( $( this ).html().indexOf(questions[i].text) + 1 ) {       //поиск нужного вопроса

          for (var j = 0; j < questions[i].answers.length; j++) {      //суммарный подсчёт правильных ответов
            if (questions[i].answers[j].correct === true) {
              totalCorrectAnswers +=1;
            }
            $( this ).find(':checked + label').each(function (index2) {
                if ( ($( this ).html().indexOf(questions[i].answers[j].text) + 1) && questions[i].answers[j].correct === true ) {
                  result +=1;
                };
              });
          };
        };
      };
    });

    console.log('Ваш результат:' + (result/totalCorrectAnswers * 100) + '% ответов правильные');

  };
});
