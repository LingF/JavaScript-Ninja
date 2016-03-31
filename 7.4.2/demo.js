var html = '<div class="test"><b>Hello</b> <i>world!</i></div>';

// 局部正则匹配
var results = html.match(/<(\/?)(\w+)([^>]*?)>/);

assert(results[0] == '<div class="test">', 'The entire match.');
assert(results[1] == '', 'The (missing) slash.');
assert(results[2] == 'div', 'The tag name.');
assert(results[3] == ' class="test"', 'The attributes.');

// 全局正则匹配
var all = html.match(/<(\/?)(\w+)([^>]*?)>/g);

assert(all[0] == '<div class="test">', 'Opening div tag.');
assert(all[1] == '<b>', 'Opening b tag.');
assert(all[2] == '</b>', 'Closing b tag.');
assert(all[3] == '<i>', 'Opening i tag.');
assert(all[4] == '</i>', 'Closing i tag.');
assert(all[5] == '</div>', 'Closing div tag.');

var tag = /<(\/?)(\w+)([^>]*?)>/g, match;
var num = 0;

while ((match = tag.exec(html)) !== null) {
  console.log(match)
  assert(match.length == 4, 'Every match finds each tag and 3 captures.');
  num++;
}

assert(num == 6, '3 opening and 3 closing tags found.');

