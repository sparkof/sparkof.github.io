"use strict"
function GoogleCallback(data) {
  console.log(arguments);
  $('.wrapper ul').remove();
  var ul = document.createElement("ul");
    $.each(data.items, function(i, val){
            var li = document.createElement("li");
            li.innerHTML = '<a class="link" href="'+val.link+'" title="'+val.displayLink+'" target="_blank">'+val.htmlTitle+"</a><p class='url'>" + val.formattedUrl + "</p><p class='content'>" + val.htmlSnippet + "</p>";
            ul.appendChild(li);
    });
    $('.wrapper').append(ul);
}
$(function () {

  // $(document).keypress(function(e) {
  //     if(e.which == 13) {
  //         $('.searchForm form').submit();
  //     };
  // });

$('.searchForm form').submit(function (e) {
  e.preventDefault();
  var text = $('.searchForm [type="text"]').val();
  console.log(text);
  var cx = '004362905671051512275:elyp8llfgkg';

  $.ajax({
    url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyCWYVWkxLfquDZaIX0qkwWN0U6x0og9Sgo&cx='+ cx + '&q=' + text + '&callback=GoogleCallback',
    dataType: 'jsonp',
    method: 'GET'
  })

});
});
function Human() {
  this.name = 'John Doe';
  this.age = 18;
  this.sex = 'Male';
  this.height = '180cm';
  this.weight = '80kg'
}

function Worker() {
  this.company = 'Some Company';
  this.salary = 100;
  this.money = 0;
}
Worker.prototype = new Human();
Worker.prototype.work = function () {
  console.log("Hi! My name is " + this.name + ", I'm working in " + this.job + ". Working...");
  this.money += this.salary;
  console.log("I've taken my salary and now I have " + this.money + "$");
}

  function Student() {
    this.school = "Some University";
    this.scholarship = 30;
    this.favoriteSerial = 'Game of Thrones';
  }
  Student.prototype = new Human();

  Student.prototype.watchTV = function () {
    console.log("Hi! My name is " + this.name + ", I'm studing in " + this.school + ". I like to watch serials. My favorite serial is " + this.favoriteSerial + ". Watching...");
    console.log("My happiness was increased!");
  }

  var janin = {
    school: "Oxford",
    name: "Janin",
    sex: "Female",
    weight: "55kg",
    favoriteSerial: "Eureka"
  };
  janin.__proto__ = new Student();

  janin.watchTV();

  var frank = {
    name: "Frank Castle"
  }
  frank.__proto__ = new Worker();
  frank.work();

  console.log(janin, frank);
