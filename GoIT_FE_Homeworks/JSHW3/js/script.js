"use strict"
var hoursDOM = document.getElementsByClassName('hours')[0];
var minutesDOM = document.getElementsByClassName('minutes')[0];
var secondsDOM = document.getElementsByClassName('seconds')[0];
var millisecondsDOM = document.getElementsByClassName('milliseconds')[0];
var startButton = document.getElementsByName('start')[0];
var pauseButton = document.getElementsByName('pause')[0];
var clearButton = document.getElementsByName('clear')[0];
var timerId;
var startTime;

var pausedTime = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;

pauseButton.style.display = 'none';

var timer = {
  start: function() {
    startTime = Date.now();
    timerId = setInterval(tick, 25);
    pauseButton.style.display = 'inline-block';
    startButton.innerHTML = "Continue";
    startButton.style.display = 'none';
  },
  pause: function() {
    pausedTime += Date.now() - startTime;
    clearInterval(timerId);
    pauseButton.style.display = 'none';
    startButton.style.display = 'inline-block';
  },
  clear: function() {
    clearInterval(timerId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    pausedTime = 0;

    hoursDOM.innerHTML = '0' + hours;
    minutesDOM.innerHTML = '0' + minutes;
    secondsDOM.innerHTML = '0' + seconds;
    millisecondsDOM.innerHTML = milliseconds;

    startButton.innerHTML = "Start";
    pauseButton.style.display = 'none';
    startButton.style.display = 'inline-block';
  }
};

startButton.addEventListener('click', timer.start);
pauseButton.addEventListener('click', timer.pause);
clearButton.addEventListener('click', timer.clear);

function tick() {
  milliseconds = ( Date.now() - startTime + pausedTime) % 1000;
  millisecondsDOM.innerHTML = milliseconds;
  seconds = Math.floor(( Date.now() - startTime + pausedTime) / 1000) % 60;
  ( seconds < 10 ) ? secondsDOM.innerHTML = '0' + seconds : secondsDOM.innerHTML = seconds;
  minutes = Math.floor((( Date.now() - startTime + pausedTime) / 1000) / 60 ) % 60;
  ( minutes < 10 ) ? minutesDOM.innerHTML = '0' + minutes : minutesDOM.innerHTML = minutes;
  hours = Math.floor(((( Date.now() - startTime + pausedTime) / 1000) / 60) / 60);
  ( hours < 10 ) ? hoursDOM.innerHTML = '0' + hours : hoursDOM.innerHTML = hours;
}
