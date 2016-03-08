;(function() {
  var divs = document.getElementsByTagName('header');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function() {
      alert('divs #' + i + 'was clicked.');
    }, false);
  }
})()

;(function() {
  var divs = document.getElementsByTagName('div');
  for (var i = 0; i < divs.length; i++) (function(n) {
    divs[n].addEventListener('click', function() {
      alert('divs #' + n + 'was clicked.');
    }, false);
  })(i)
})()

