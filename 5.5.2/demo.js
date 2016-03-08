function wrap(object, method, wrapper) {
  var fn = object[method];                //#1
  return object[method] = function() {     //#2
    return wrapper.apply(this, [fn.bind(this)].concat(
      Array.prototype.slice.call(arguments)));
  }
}

// Example adapted from Prototype
if (Prototype.Browser.Opera) {               //#3
  wrap(Element.Methods, "readAttribute",
    function(original, elem, attr) {
      return attr == 'title' ? elem.title : original(elem, attr);
    })
}

//#1 缓存原始函数
//#2 返回新的包装函数
//#3 实现函数包装