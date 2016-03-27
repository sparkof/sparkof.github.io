"use strict"
var hoursDOM = document.getElementsByClassName('hours')[0];
var minutesDOM = document.getElementsByClassName('minutes')[0];
var secondsDOM = document.getElementsByClassName('seconds')[0];
var milisecondsDOM = document.getElementsByClassName('miliseconds')[0];
var startButton = document.getElementsByName('start')[0];
var pauseButton = document.getElementsByName('pause')[0];
var clearButton = document.getElementsByName('clear')[0];
var timerId;

var hours = 0;
var minutes = 0;
var seconds = 0;
var miliseconds = 0;

pauseButton.style.display = 'none';

var timer = {
  start: function() {
    timerId = setInterval(tick, 25);
    pauseButton.style.display = 'inline-block';
    startButton.innerHTML = "Continue";
    startButton.style.display = 'none';
  },
  pause: function() {
    clearInterval(timerId);
    pauseButton.style.display = 'none';
    startButton.style.display = 'inline-block';
  },
  clear: function() {
    clearInterval(timerId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    hoursDOM.innerHTML = '0' + hours;
    minutesDOM.innerHTML = '0' + minutes;
    secondsDOM.innerHTML = '0' + seconds;
    milisecondsDOM.innerHTML = miliseconds;

    startButton.innerHTML = "Start";
    pauseButton.style.display = 'none';
    startButton.style.display = 'inline-block';
  }
};

startButton.addEventListener('click', timer.start);
pauseButton.addEventListener('click', timer.pause);
clearButton.addEventListener('click', timer.clear);

function tick() {
  miliseconds += 25;
  milisecondsDOM.innerHTML = miliseconds;
  if ( miliseconds === 1000 ) {
    seconds++;
    ( seconds < 10 ) ? secondsDOM.innerHTML = '0' + seconds : secondsDOM.innerHTML = seconds;
    miliseconds = 0;
    if ( seconds === 60 ) {
      seconds = 0;
      secondsDOM.innerHTML = '0' + seconds;
      minutes++;
      ( minutes < 10 ) ? minutesDOM.innerHTML = '0' + minutes : minutesDOM.innerHTML = minutes;
      if ( minutes === 60 ) {
        minutes = 0;
        minutesDOM.innerHTML = '0' + seconds;
        hours++;
      }
      ( hours < 10 ) ? hoursDOM.innerHTML = '0' + hours : hoursDOM.innerHTML = hours;
    }
  };
}
