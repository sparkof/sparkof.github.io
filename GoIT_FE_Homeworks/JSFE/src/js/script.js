//загрузка происходит в html, обработчик события не вешался на DOMContentLoaded, в связи его кривой работой в ie8-

function load() {

  sliders = new Slider;
  sliders.init();

  var msnry = new Masonry( '.grid', {
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    percentPosition: true,
    gutter: 20
  });

  var form = document.querySelector('.discover__submit');

  if (form.addEventListener) {
    form.addEventListener('click', crossDomainAjax);
  } else {
    form.onclick = crossDomainAjax;
  };

};


function crossDomainAjax(event) {
  var tag = document.getElementById('searchTag').value;

  if ('XDomainRequest' in window && window.XDomainRequest !== null) {
    var xdr = new XDomainRequest(); // Use Microsoft XDR
        xdr.open('GET', 'http://api.pixplorer.co.uk/image?word='+ tag +'&amount=7&size=tb', true);
        xdr.onload = function () {
            pasteResult(xdr.responseText);
        };
        xdr.send();

    } else {
      var xmlhttp = getXmlHttp();
      xmlhttp.open('GET', 'http://api.pixplorer.co.uk/image?word='+ tag +'&amount=7&size=tb', true);
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
           if(xmlhttp.status == 200) {
             pasteResult(xmlhttp.responseText);
           };
        };
      };
      xmlhttp.send(null);
    };
};

function pasteResult(response) {
  var searchResponse = JSON.parse(response);
  // console.log(searchResponse);

  var gridElements = document.querySelectorAll('.grid-item');

  for (var i = 0; i < gridElements.length; i++) {
      gridElements[i].style.backgroundImage = 'url(' + searchResponse.images[i].imageurl + ')';
      gridElements[i].children[0].innerHTML = searchResponse.images[i].word;
  }
}

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


// if (document.addEventListener) {
//   document.addEventListener("DOMContentLoaded", load);
// } else {
//   document.attachEvent('onload', load)
// };
