function MyArray() {}

MyArray.prototype = new Array();

var mine = new MyArray();
mine.push(1, 2, 3);

assert(mine.length == 3, 'All the items are in our sub-classed array.');
assert(mine instanceof Array, 'Verify that we implement Array functionality.');


function YourArray() {}
YourArray.prototype.length = 0;

(function() {
  var methods = ['push', 'pop', 'shift', 'unshift', 'slice', 'splice', 'join'];
  for (var i = 0, j = methods.length; i < j; i++) (function(name) {
    YourArray.prototype[name] = function() {
      return Array.prototype[name].apply(this, arguments);
    }
  })(methods[i]);
})()

var your = new YourArray();
your.push(1, 2, 3);

assert(your.length == 3, 'All the items are in our sub-classed array.');
assert(!(your instanceof Array), "We aren't subclassing Array, though.");