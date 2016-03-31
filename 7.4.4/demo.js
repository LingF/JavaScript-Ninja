var pattern = /((ninja-)+)sword/;

var ninjas = 'ninja-ninja-sword'.match(pattern);

assert(ninjas.length == 3, 'Two capture was returned.');
assert(ninjas[2] == 'ninja-', 'ninjas[2] == ninja-');


var pattern2 = /((?:ninja-)+)sword/;

var ninjas2 = 'ninja-ninja-sword'.match(pattern2);

assert(ninjas2.length == 2, 'Only one capture was returned.');
assert(ninjas2[1] == 'ninja-ninja-', 'Matched both words, without any extra capture.');


// console.log(ninjas, ninjas2);