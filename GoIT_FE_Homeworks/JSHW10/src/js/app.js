$(function () {
  let questions = localStorage.getItem('questions');
  questions = JSON.parse(questions);

  let $html = $('#questionnaire').html();
  let content = tmpl($html, {
    data: questions
  });
  $('body').append(content);

  $('.questionWrapper :submit').on('click', function (e) {
    e.preventDefault();
      showModal();
  });

  function checkResult() {
    let [result, $questionList] = [0, $('.questionWrapper ol>li>span')];
    $questionList.each(function (index) {
      let [currentQuestionCorrectAnswers, checkedAnswers, checkedCorrectAnswers] = [0, 0, 0];
      for ( let i = 0; i < questions.length; i++) {
        if ( $( this ).attr('title') == questions[i].questionID ) {       //поиск нужного вопроса
          checkedAnswers = $( this ).parent().find(':checked').length;

          for (let j = 0; j < questions[i].answers.length; j++) {      //суммарный подсчёт правильных ответов
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

  let [$overlay, $closeButton, $modal] = [$('<div class="overlay"></div>'), $('<button type="button" name="close">Close</button>'), ];

  function showModal() {
    $modal =  $(`<div class="modal">Ваш результат: ${checkResult()} % ответов правильных</div>`);
    $('body').append($overlay).append($modal).find($modal).hide().append($closeButton).fadeIn();
    $closeButton.one('click', hideModal);
  }
  function hideModal() {
    $modal.fadeOut().remove();
    $overlay.remove();
  }
});
