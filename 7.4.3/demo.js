var html = '<b class="hello">Hello</b> <i>world!</i>';

var pattern = /<(\w+)([^>]*)>(.*?)<\/\1>/g;

var match = pattern.exec(html);

assert(match[0] == '<b class="hello">Hello</b>', 'The entire tag, start to finish');
assert(match[1] == 'b', 'The tag name.');
assert(match[2] == ' class="hello"', 'The tag attributes.');
assert(match[3] == 'Hello', 'The contents of the tag.');

match = pattern.exec(html);
assert(match[0] == '<i>world!</i>', 'The entire tag, start to finish.');
assert(match[1] == 'i', 'The tag name.');
assert(match[2] == '', 'The tag attributes.');
assert(match[3] == 'world!', 'The contents of the tag.');

// 2
assert('fontFamily'.replace(/([A-Z])/g, '-$1').toLowerCase() == 'font-family', 'Convert the camelCase into dashed notation.')