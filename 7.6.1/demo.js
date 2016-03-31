// 从字符串中剔除空格的常见解决方案
function trim(str) {
  return (str || '').replace(/^\s+|\s+$/g, '');
}

assert(trim(' #id div.class ') == '#id div.class', 'Extra whitespace trimmed from a selector string.');

// 双重替换的修剪实现方法
function trim2(str) {
  return str.replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
}

assert(trim2(' #id div.class ') == '#id div.class', 'Extra whitespace trimmed from a selector string.');

//使用字符串的slice方法剔除字符串尾部空格的方式
function trim3(str) {
  var str = str.replace(/^\s\s*/, ''),
      ws = /\s/,
      i = str.length;
  while (ws.test(str.charAt(--i)));
  return str.slice(0, i + 1);
}

assert(trim3(' #id div.class ') == '#id div.class', 'Extra whitespace trimmed from a selector string.');