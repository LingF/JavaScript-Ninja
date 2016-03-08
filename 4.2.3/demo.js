;(function(){
  var ninja = {
    chirp: function(n) {
      return n > 1 ? ninja.chirp(n - 1) + '-chirp' : 'chirp';
    }
  };

  var samurai = {
    chirp: ninja.chirp
  };

  ninja = {};

  try {
    assert(samurai.chirp(3) == 'chirp-chirp-chirp',
          'Is this going to worl?');
  }
  catch (e) {
    assert(false,
          'Uh, this isn\'t good! Where\'d ninja.chirp go?');
  }
})()

;(function(){
  var ninja = {
    chirp: function(n) {
      return n > 1 ? this.chirp(n - 1) + '-chirp' : 'chirp';
    }
  };

  var samurai = {
    chirp: ninja.chirp
  };

  ninja = {};

  try {
    assert(samurai.chirp(3) == 'chirp-chirp-chirp',
          'Is this going to worl?');
  }
  catch (e) {
    assert(false,
          'Uh, this isn\'t good! Where\'d ninja.chirp go?');
  }
})()