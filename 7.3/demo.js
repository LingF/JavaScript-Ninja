//通过字面量
var re1 = /test/i;

//通过构造器
var re2 = new RegExp('test', 'i');

//--|这里之后正则表达式都处于编译后的状态
//  V

assert(re1.toString() == '/test/i', 'Verify the contents of the expression.');
assert(re1.test('TesT'), 'Yes, it\'s case-insensitive.');
assert(re2.test('TesT'), 'This one is too.');
assert(re1.toString() == re2.toString(), 'The regular expressions are equal.');
assert(re1 != re2, 'But they are different objects.');

function findClassInElements(className, type) {
  var elems = document.getElementsByTagName(type || '*');
  // 无法用正则字面量实现的实例
  // 以字符串 或 空格 开始，而后跟着指定类名，并且紧随其后的是一个 空白字符 或 结束字符串
  var regex = new RegExp('(^|\\s)' + className + '(\\s|$)');
  var results = [];
  for (var i = 0, length = elems.length; i < length; i++) {
    if (regex.test(elems[i].className)) {
      results.push(elems[i]);
    }
  }
  return results;
}

assert(findClassInElements('ninja', 'div').length == 2, 'The right amount of div ninjas was found.');
assert(findClassInElements('ninja', 'span').length == 1, 'The right span of div ninjas was found.');
assert(findClassInElements('ninja').length == 3, 'The right amount of ninjas was found.')