function Slider() {
  var self = this;

  self.swipeLeft = function (e) {
    if (e.target.tagname == 'IMG' ) {
      var currentUl = e.target.parentNode.parentNode.childNodes[1],
          currentOffset = parseInt(currentUl.style.left),
          maximumOffset = self.sliderWidth * e.currentUl.childNodes.length - self.sliderWidth
      if ( (currentOffset === 0) {
        currentUl.style.left = maximumOffset + 'px';
      } else {
        currentOffset -= self.sliderWidth;
        currentUl.style.left = currentOffset + 'px';
      };
    };
  };

  self.swipeRight = function () {
    if (e.target.tagname == 'IMG' ) {
      var currentUl = e.target.parentNode.parentNode.childNodes[1],
          currentOffset = parseInt(currentUl.style.left),
          maximumOffset = self.sliderWidth * e.currentUl.childNodes.length - self.sliderWidth
      if ( (currentOffset === maximumOffset) {
        currentUl.style.left = 0;
      } else {
        currentOffset += self.sliderWidth;
        currentUl.style.left = currentOffset + 'px';
      };
    };
  };

  self.init = function () {
        self.sliders = document.querySelectorAll('.slider');
        self.sliderWrappers = document.querySelectorAll('.slider__wrapper');
        self.prevs = document.querySelectorAll('.slider__prev');
        self.nexts = document.querySelectorAll('.slider__next');
        self.sliderWidth = self.sliders[0].clientWidth || self.sliders[0].offsetWidth;

        sliderWrappers.forEach(function (item, i, arr) {
          item.clientWidth = self.sliderWidth * item.childNodes.length;
        });

        prevs.forEach(function (item, i, arr) {
          item.removeEventListener('click', self.swipeLeft);
          item.addEventListener('click', self.swipeLeft);
        });

        nexts.forEach(function (item, i, arr) {
          item.removeEventListener('click', self.swipeRight);
          item.addEventListener('click', self.swipeRight);
        });
  };

};

var sliders = new Slider;
    sliders.init();
