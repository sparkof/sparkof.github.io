$(function () {
  var news = [
    {
      title: 'Advanced Machinery Helps Improve Quality',
      author: 'cmsmasters',
      comments: 6,
      month: 'Jan',
      date: '23',
      imgSrc: 'img/news-1.jpg',
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: 'Powerful Techniques for Advanced Service',
      author: 'cmsmasters',
      comments: 3,
      month: 'Jan',
      date: '21',
      imgSrc: 'img/news-2.jpg',
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];


  var $html = $('#news').html();
  var content = tmpl($html, {
    data: news
  });
  $('.news__list').append(content);
});
