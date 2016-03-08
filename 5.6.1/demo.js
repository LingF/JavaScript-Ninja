(function() {
  var numClick = 0;
  document.addEventListener('click', function() {
    assert(true, '即时函数1内变量：' + ++numClick);
  }, false);
})();

document.addEventListener('click', (function() {
  var numClick = 0;
  return function() {
    assert(true, '即时函数2内变量：' + ++numClick);
  }
})(), false);

(function(what) {
  assert(true, what);
})('Hi, everyone~');

(function(d, u) {
  var bColor = u;
  d.getElementsByTagName('h3')[0].addEventListener('click', function(e) {
    var color = bColor ? '#3a3a3a' : '#a3a3a3';
    e.target.style.color = color;
    assert(bColor, '标题变回原色了');
    bColor = !bColor;
  }, false);
})(document, undefined);