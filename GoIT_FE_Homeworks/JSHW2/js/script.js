var questionWrapper;
var title;
var form;
var questionList;
var listCounter = 0;

var questionnaire = {
  create: function () {
    questionWrapper = document.createElement('div');
    questionWrapper.classList.add('questionnaire');
    document.body.appendChild(questionWrapper);
  },
  header: function(a) {
    title = document.createElement('div');
    title.classList.add('q-header');
    title.innerHTML = a;
    questionWrapper.appendChild(title);
  },
  question: function() {
    checkForm();
    listCounter++;
    var newQuestion = document.createElement('li');
    newQuestion.classList.add('q-list-item');
    newQuestion.innerHTML = arguments[0];
    questionList.appendChild(newQuestion);
    var optionList = document.createElement('ul');
    optionList.classList.add('q-option-list');
    newQuestion.appendChild(optionList);

    for (var i = 1; i < arguments.length; i++) {
      var option = document.createElement('li');
      option.classList.add('q-option-item');
      optionList.appendChild(option);
      var newCheckbox = document.createElement('input');
      newCheckbox.setAttribute('type', 'checkbox');
      newCheckbox.setAttribute('id', 'q-' + listCounter + '-' + i);
      option.appendChild(newCheckbox);
      var newLabel = document.createElement('label');
      newLabel.setAttribute('for', 'q-' + listCounter + '-' + i);
      newLabel.innerHTML = arguments[i];
      option.appendChild(newLabel);
    }
  }
}

questionnaire.create();
questionnaire.header('Тест по программированию');
questionnaire.question('Вопрос №1', 'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3');
questionnaire.question('Вопрос №2', 'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №4');
questionnaire.question('Вопрос №3', 'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №4',
 'Вариант ответа №5');

function checkForm() {
  if ( document.getElementsByClassName('q-form').length == 0 ) {
    form = document.createElement('form');
    form.classList.add('q-form');
    form.setAttribute('action', '#');
    questionWrapper.appendChild(form);

    questionList = document.createElement('ol');
    questionList.classList.add('q-list');
    questionList.setAttribute('type', '1');
    form.appendChild(questionList);

    var submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Проверить мои результаты');
    form.appendChild(submitButton);
  };
}
