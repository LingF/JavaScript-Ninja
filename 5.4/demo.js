Function.prototype.curry = function() {
  var fn = this
    , args = Array.prototype.slice.call(arguments);
  return function() {
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
  }
}

// String.prototype.csv = String.prototype.split.curry(/,\s*/);

// var results = ('zhang, ling, fain').csv();
// console.log(results)
// assert(results[0] == 'zhang' && results[1] == 'ling' && results[2] == 'fain', 'The text values were split properly');


var fAsc = function(x, y) {
  return x - y;
}

Array.prototype.asc = Array.prototype.sort.curry(fAsc);
var results = [1, 57, 0, 27, 31, 88, 55, 9].asc();
assert(results[0] == 0, results);



// 不希望参数一开始就传
Function.prototype.partial = function() {
  var fn = this
    , args = Array.prototype.slice.call(arguments);
  return function() {
    var arg = 0;
    for (var i = 0, j = args.length; i < j && arg < arguments.length; i++) {
      if (args[i] === undefined) {
        args[i] = arguments[arg++];
      }
    }
    return fn.apply(this, args);
  }
}


var delay = setTimeout.partial(undefined, 1000);

delay(function(){
  console.log('过了1秒我出现了');
})