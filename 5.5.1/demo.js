;(function() {
  Function.prototype.memoized = function(key){
      this._values = this._values || {};
      return this._values[key] !== undefined ?
          this._values[key] :
          this._values[key] = this.apply(this, arguments);
  }


  function isPrime( num ){
      var prime = num != 1;
      for ( var i = 2; i < num; i++) {
          if (num % i == 0){
              prime = false;
              break;
          }
      }
      return prime;
  }
  assert(isPrime.memoized(5), "The function works; 5 is prime.");
  assert(isPrime._values[5], "The answer has been cached.");
})()


;(function() {
  Function.prototype.memoized = function(key){
      this._values = this._values || {};
      xyz = this._values;
      return this._values[key] !== undefined ?
          this._values[key] :
          this._values[key] = this.apply(this, arguments);
  }

  // 这里得memoize就是利用闭包的特性，来隐性的更改了ipPrime的行为
  Function.prototype.memoize = function(){
      var fn = this;                              //#1
      return function() {                          //#2
          return fn.memoized.apply(fn, arguments);
      }
  }

  var isPrime = (function ( num ){
      var prime = num != 1;
      for ( var i = 2; i < num; i++) {
          if (num % i == 0){
              prime = false;
              break;
          }
      }
      return prime;
  }).memoize();
})()