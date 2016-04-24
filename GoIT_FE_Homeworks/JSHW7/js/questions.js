"use strict";
$(function () {
var questions = [ {
    questionID: 1,
    text: "Сколько будет 2+2 ?",
    answers: [ {
        text: "8",
        correct: false,
        value: 1
      }, {
        text: "4",
        correct: true,
        value: 2
      }, {
        text: "2",
        correct: false,
        value: 3
      }, {
        text: "24",
        correct: false,
        value: 4
      }
    ]
  }, {
    questionID: 2,
    text: "Какие числа в сумме дают 10?",
    answers: [ {
        text: "2 и 5",
        correct: false,
        value: 1
      }, {
        text: "2 и 8",
        correct: true,
        value: 2
      }, {
        text: "4 и 7",
        correct: false,
        value: 3
      }, {
        text: "4 и 6",
        correct: true,
        value: 4
      }
    ]
  }, {
    questionID: 3,
    text: "2 + 2 / 2 = ?",
    answers: [ {
        text: "3",
        correct: true,
        value: 1
      }, {
        text: "4",
        correct: false,
        value: 2
      }, {
        text: "2",
        correct: false,
        value: 3
      }, {
        text: "нет правильного ответа",
        correct: false,
        value: 4
      }
    ]
  }, {
    questionID: 4,
    text: "Сколько нужно программистов, чтобы заменить лампочку?",
    answers: [ {
        text: "Ниодного, проблема не программная",
        correct: true,
        value: 1
      }, {
        text: "1",
        correct: false,
        value: 2
      }, {
        text: "2",
        correct: false,
        value: 3
      }, {
        text: "3",
        correct: false,
        value: 4
      }
    ]
  }, {
    questionID: 5,
    text: "Какие числа в сумме дают 10?",
    answers: [ {
        text: "5 и 5",
        correct: true,
        value: 1
      }, {
        text: "2 и 9",
        correct: false,
        value: 2
      }, {
        text: "8 и 3",
        correct: false,
        value: 3
      }, {
        text: "7 и 3",
        correct: true,
        value: 4
      }
    ]
  }
];
localStorage.setItem('questions', JSON.stringify(questions));
})
