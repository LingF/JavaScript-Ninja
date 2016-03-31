Object.prototype.keys = function() {
  var keys = [];
  for (var p in this) keys.push(p);
  return keys;
}

var obj = {a: 1, b: 2, c: 3};
assert(obj.keys().length == 3, 'There are three properties in this object');
assert(obj.keys().length == 4, 'There are four!')



Object.prototype.kes = function() {
  var keys = [];
  for (var p in this) {
    if (this.hasOwnProperty(p)) keys.push(p);
  }
  return keys;
}

var obj2 = {a: 1, b: 2, c: 3};
assert(obj2.kes().length == 3, 'There are three properties in this object');