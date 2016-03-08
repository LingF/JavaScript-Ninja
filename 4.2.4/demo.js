var ninja = {
  chirp: function signal(n) {
    return n > 1 ? signal(n - 1) + '-chirp' : 'chirp';
  }
};

assert(ninja.chirp(3) == 'chirp-chirp-chirp', 'Works as we would expect it to!');

var samurai = {
  chirp: ninja.chirp
};

ninja = {};

assert(samurai.chirp(3) == 'chirp-chirp-chirp',
        'The method correctly calls itself.');

var ninja = function myNinja() {
  assert(ninja == myNinja, 'This function is named tow things at once');
}

ninja();

assert(typeof myNinja == 'undefined', 'But myNinja isn\'t defined outside of the function.');