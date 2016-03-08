(function() {
  function Ninja() {}

  Ninja.prototype.swingSword = function() {
    return true;
  }

  var ninja1 = Ninja();
  assert(ninja1 === undefined,
        'No instance of Ninja created.');

  var ninja2 = new Ninja();
  assert(ninja2 &&
         ninja2.swingSword &&
         ninja2.swingSword(),
         'Instance exists and method is callable.');
})();

(function() {
  function Ninja() {
    this.swung = false;

    this.swingSword = function() {
      return !this.swung;
    }
  }

  Ninja.prototype.swingSword = function() {
    return this.swung;
  };

  var ninja = new Ninja();
  assert(ninja.swingSword(),
        'Called the instance method, not the prototype method.');

})();

(function() {
  function Ninja() {
    this.swung = true;
  }

  var ninja = new Ninja();

  Ninja.prototype.swingSword = function() {
    return this.swung;
  }

  assert(ninja.swingSword(),
        'Method exists, even out of order.');

})();

(function() {
  function Ninja() {
    this.swung = true;
    this.swingSword = function() {
      return !this.swung;
    }
  }

  var ninja = new Ninja();

  Ninja.prototype.swingSword = function() {
    return this.swung;
  }

  assert(ninja.swingSword(),
        'Called the instance method, not the prototype method.');
})();



