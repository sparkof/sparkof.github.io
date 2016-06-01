function Slider() {
  var self = this;

  self.swipeLeft = function (e) {
      var currentUl = e.target.parentNode.parentNode.children[1],
          currentOffset = parseInt(currentUl.style.left),
          maximumOffset = -(self.sliderWidth * currentUl.children.length - self.sliderWidth);
      if (currentOffset === 0) {
        currentUl.style.left = maximumOffset + 'px';
      } else {
        currentOffset += self.sliderWidth;
        currentUl.style.left = currentOffset + 'px';
      };
  };

  self.swipeRight = function (e) {
      var currentUl = e.target.parentNode.parentNode.children[1],
          currentOffset = parseInt(currentUl.style.left),
          maximumOffset = -(self.sliderWidth * currentUl.children.length - self.sliderWidth);
      console.log(currentUl, currentOffset, maximumOffset);
      if (currentOffset === maximumOffset) {
        currentUl.style.left = 0;
      } else {
        currentOffset -= self.sliderWidth;
        currentUl.style.left = currentOffset + 'px';
      };
  };

  self.init = function () {
        self.sliders = document.querySelectorAll('.slider');
        self.sliderWrappers = document.querySelectorAll('.slider__wrapper');
        self.prevs = document.querySelectorAll('.slider__prev');
        self.nexts = document.querySelectorAll('.slider__next');
        self.slides = document.querySelectorAll('.slider__slide');
        self.sliderWidth = self.sliders[0].clientWidth || self.sliders[0].offsetWidth;

        for (var i = 0; i < self.sliderWrappers.length; i++) {
            self.sliderWrappers[i].style.width = (self.sliderWidth * self.sliderWrappers[i].children.length) +'px';
            self.sliderWrappers[i].style.left = 0 + 'px';
        };

        for (var i = 0; i < self.slides.length; i++) {
            self.slides[i].style.width = self.sliderWidth + 'px';
        }

        for (var i = 0; i < self.prevs.length; i++) {
          if (self.prevs[i].addEventListener) {
            self.prevs[i].addEventListener('click', self.swipeLeft);
          } else {
            self.prevs[i].attachEvent('onclick', self.swipeLeft);
          };
        };

        for (var i = 0; i < self.nexts.length; i++) {
          if (self.nexts[i].addEventListener) {
            self.nexts[i].addEventListener('click', self.swipeRight);
          } else {
            self.nexts[i].attachEvent('onclick', self.swipeRight);
          };
        };

  };
};

var sliders;

if (window.addEventListener) {
  window.addEventListener('resize', changeWidth);
} else {
  window.attachEvent('onresize', changeWidth);
};

function changeWidth(event) {
  sliders.sliderWidth = sliders.sliders[0].clientWidth || sliders.sliders[0].offsetWidth;
  for (var i = 0; i < sliders.sliderWrappers.length; i++) {
      sliders.sliderWrappers[i].style.width = (sliders.sliderWidth * sliders.sliderWrappers[i].children.length) +'px';
  };
  for (var i = 0; i < sliders.slides.length; i++) {
      sliders.slides[i].style.width = sliders.sliderWidth + 'px';
  }
  console.log('slider size = ', sliders.sliderWidth);
};
