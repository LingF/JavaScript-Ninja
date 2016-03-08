// 1
(function() {
  var jQuery = window.jQuery = function() {
    // Initialize
  }

  // ...
})();

// 2
var jQuery = (function() {
  function jQuery() {
      // Initialize
  }

  // ...

  return jQuery;
})();