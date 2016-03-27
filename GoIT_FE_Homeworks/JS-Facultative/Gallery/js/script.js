"use strict"
var largeImg = document.getElementById('large-img');
var smallList = document.getElementsByClassName('small-list')[0];
var imageArr = document.querySelectorAll('li img');
var liArr = document.querySelectorAll('li');

var nextButtonBig = document.querySelector('.large-img .next');
var prevButtonBig = document.querySelector('.large-img .prev');

var width = 316;
var count = 3;
var imageList = smallList.querySelector('ul')
var position = 0;

var nextButtonSmall = document.querySelector('.small-list-frame .next');
var prevButtonSmall = document.querySelector('.small-list-frame .prev');

nextButtonBig.addEventListener('click', next);
prevButtonBig.addEventListener('click', prev);
smallList.addEventListener('click', select);
nextButtonSmall.addEventListener('click', swipeRight);
prevButtonSmall.addEventListener('click', swipeLeft);

function select(event) {
  var target = event.target;
  while (target != this) {
    if (target.nodeName === 'LI') {
      var activeImage = document.getElementsByClassName('active-image')[0];
      activeImage.classList.remove('active-image');
      target.classList.add('active-image');
    }
    if (target.nodeName === 'A') {
      event.preventDefault();
    };
    if (target.nodeName === 'IMG') {
      largeImg.src = target.src;
    };
    target = target.parentNode;
  };
};

function next() {
  for (var i = 0; i < liArr.length; i++) {
    if ( liArr[i].classList.contains('active-image') ) {
      liArr[i].classList.remove('active-image');
      if (i === liArr.length - 1) {
        liArr[0].classList.add('active-image');
        largeImg.src = imageArr[0].src;
        position = 0;
        imageList.style.marginLeft = position + 'px';
        return;
      } else {
        liArr[i+1].classList.add('active-image');
        largeImg.src = imageArr[i+1].src;
        var _scr = (-position / width / count);
        var _curScr = Math.floor((i + 1) / count);
        if (_scr != _curScr) {
          position = Math.max(-(width * count * _curScr), -width * (liArr.length - count));
          imageList.style.marginLeft = position + 'px';
        }
        return;
      };
    };
  };
};

function prev() {
  for (var i = 0; i < liArr.length; i++) {
    if ( liArr[i].classList.contains('active-image') ) {
      liArr[i].classList.remove('active-image');
      // debugger;
      if (i === 0) {
        liArr[liArr.length - 1].classList.add('active-image');
        largeImg.src = imageArr[liArr.length - 1].src;
        position = -(width * count * Math.floor(liArr.length / count) - width * (count - 1));
        imageList.style.marginLeft = position + 'px';
        return;
      } else {
        liArr[i-1].classList.add('active-image');
        largeImg.src = imageArr[i-1].src;
        var _scr = (-position / width / count);
        var _curScr = Math.floor((i - 1) / count);
        if (_scr != _curScr) {
          position = Math.min(-(width * count * _curScr), 0);
          imageList.style.marginLeft = position + 'px';
        }
        return;
      };
    };
  };
};

function swipeLeft() {
  position = Math.min(position + width * count, 0);
  imageList.style.marginLeft = position + 'px';
}

function swipeRight() {
  position = Math.max(position - width * count, -width * (liArr.length - count));
  imageList.style.marginLeft = position + 'px';
}
