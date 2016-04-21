"use strict";
$(function () {
var questions = [ {
    text: "Вопрос №1",
    answers: [ {
        text: "Неправильный ответ",
        correct: false
      }, {
        text: "Правильный ответ",
        correct: true
      }, {
        text: "Неправильный ответ",
        correct: false
      }, {
        text: "Неправильный ответ",
        correct: false
      }
    ]
  }, {
    text: "Вопрос №2",
    answers: [ {
        text: "Неправильный ответ",
        correct: false
      }, {
        text: "Правильный ответ",
        correct: true
      }, {
        text: "Неправильный ответ",
        correct: false
      }, {
        text: "Правильный ответ",
        correct: true
      }
    ]
  }, {
    text: "Вопрос №3",
    answers: [ {
        text: "Правильный ответ",
        correct: true
      }, {
        text: "Неправильный ответ",
        correct: false
      }, {
        text: "Неправильный ответ",
        correct: false
      }, {
        text: "Неправильный ответ",
        correct: false
      }
    ]
  }, {
    text: "Вопрос №4",
    answers: [ {
        text: "Правильный ответ",
        correct: true
      }, {
        text: "Неправильный ответ",
        correct: false
      }, {
        text: "Неправильный ответ",
        correct: false
      }, {
        text: "Неправильный ответ",
        correct: false
      }
    ]
  }, {
    text: "Вопрос №5",
    answers: [ {
        text: "Правильный ответ",
        correct: true
      }, {
        text: "Неправильный ответ",
        correct: false
      }, {
        text: "Неправильный ответ",
        correct: false
      }, {
        text: "Правильный ответ",
        correct: true
      }
    ]
  }
];
localStorage.setItem('questions', JSON.stringify(questions));
})
