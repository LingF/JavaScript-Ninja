// 将中横线字符串转换成驼峰拼写法

//捕获匹配的字符，传入完整的字符串作为第一个参数，捕获结果为第二个参数。其他参数没有指定。
//捕获的不包含中横线，匹配的是包含的
//传入-b 和 b 、 第二次传入 -w 和 w。
//替换值返回。 -b 替换成 B，-w 替换成 W
function upper(all, letter) {
  return letter.toUpperCase();
}

assert('border-bottom-width'.replace(/-(\w)/g, upper) == 'borderBottomWidth', 'Camel cased a hyphenated string.');



function compress(source) {
  var keys = {};

  source.replace(/([^=&]+)=([^&]*)/g, function(full, key, value) {
    // console.log(full, key, value);
    keys[key] = (keys[key] ? keys[key] + ',' : '') + value;
    return '';
  });
  // console.log(keys);
  var result = [];
  for (var key in keys) {
    result.push(key + '=' + keys[key]);
  }

  return result.join('&');
}

assert(compress('foo=1&foo=2&blah=a&blah=b&foo=3') == 'foo=1,2,3&blah=a,b', 'Compression is OK!');
