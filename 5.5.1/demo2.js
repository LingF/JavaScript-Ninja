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

var fAdd = (function ( x, y, z ){
    return y + z;
}).memoize();

assert(fAdd('add', 2, 3), '相加结果是几');
assert(fAdd('add') == 5, '结果有存吗');
assert(fAdd('cut') == 5, '结果有存吗');