// Technical Requirements and Grading Rubric
//
// Use good Object Oriented code: Create a blog object, and a constructor function for array.
// Leave as little in the window (global) namespace as possible: attach functions to objects, etc.
// Create the markup for an example Article in the DOM, then use jQuery to clone that for each article.
// Your Article prototype should have a .toHtml() function that adds new data to the DOM.
// Add basic styles: a css reset, content in a single centered column, reasonable margins, etc.

$( document ).ready(function() {

  function Article(object) {
    this.title = object['title'];
    this.category = object['category'];
    this.author = object['author'];
    this.authorUrl = object['authorUrl'];
    this.publishedOn = object['publishedOn'];
    this.body = object['body'];
  }

  Article.prototype.toHtml = function() {
    htmlString = '<li class="article"><h1>';
    htmlString += this.title;
    htmlString += '</h1>';
    htmlString += '<p>By <a href="';
    htmlString += this.authorUrl;
    htmlString += '">';
    htmlString += this.author;
    htmlString += '</a> published on ';
    htmlString += this.publishedOn;
    htmlString += '</p>';
    htmlString += this.body;
    htmlString += '</li>';
    return htmlString;
  };

  function print(array){
    for (var i = 0; i < array.length; i++) {
      var article = new Article(array[i]);
      $('#blogPosts').append(article.toHtml());
    }
  };

  print(blog);
});
