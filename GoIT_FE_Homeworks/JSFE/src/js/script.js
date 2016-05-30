if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", load);
} else {
  document.attachEvent('onload', load)
};

function load() {
  sliders = new Slider;
  sliders.init();

  var msnry = new Masonry( '.grid', {
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    percentPosition: true
  });

  var form = document.querySelector('.discover__form');
  if (form.addEventListener) {
    form.addEventListener('submit', search);
  } else {
    form.attachEvent('onsubmit', search);
  };

};

function getXmlHttp(){
var xmlhttp;
try {
  xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
  try {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (E) {
    xmlhttp = false;
  }
}
if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
  xmlhttp = new XMLHttpRequest();
}
return xmlhttp;
};

function search(e) {
  e.preventDefault();
  var tag = document.getElementById('searchTag').value;

  var xmlhttp = getXmlHttp();
  xmlhttp.open('GET', 'http://api.pixplorer.co.uk/image?word='+ tag +'&amount=7&size=tb', true);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
       if(xmlhttp.status == 200) {
         pasteResult(xmlhttp.responseText);
           }
    }
  };
  xmlhttp.send(null);
};

function pasteResult(response) {
  var searchResponse = JSON.parse(response);
  console.log(searchResponse);

  var gridElements = document.querySelectorAll('.grid-item');


  for (var i = 0; i < gridElements.length; i++) {
      gridElements[i].style.background = 'url(' + searchResponse.images[i].imageurl + ') no-repeat';
      gridElements[i].style.backgroundSize = 'contain';
      gridElements[i].children[0].innerHTML = searchResponse.images[i].word;
  }
}
