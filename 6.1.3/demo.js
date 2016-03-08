(function() {
  function Person() {}
  Person.prototype.dance = function() {}

  function Ninja() {}

  Ninja.prototype = { dance: Person.prototype.dance };

  var ninja = new Ninja();
  assert(ninja instanceof Ninja,
        'ninja receives functionality from the Ninja prototype');
  assert(ninja instanceof Person, '... and the Person prototype');
  assert(ninja instanceof Object, '... and the Object prototype');

})();


(function() {
  function Person() {}
  Person.prototype.dance = function() {};

  function Ninja() {}

  Ninja.prototype = new Person();

  var ninja = new Ninja();
  assert(ninja instanceof Ninja,
        'ninja receives functionality from the Ninja prototype');
  assert(ninja instanceof Person, '... and the Person prototype');
  assert(ninja instanceof Object, '... and the Object prototype');
  assert(typeof ninja.dance == 'function', '... and can dance!');

})();

(function() {
  if (!Array.prototype.forEach) {

      Array.prototype.forEach = function(callback, context) {
        for (var i = 0; i < this.length; i++) {
          callback.call(context || null, this[i], i, this);
        }
      }
  }

  ['a', 'b', 'c'].forEach(function(value, index, array) {
    assert(value,
          'Is in position ' + index + ' out of ' + (array.length - 1));
  });

})()