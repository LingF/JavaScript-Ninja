;(function() {
  var outerValue = 'ninja';
  function outerFunction(){
      assert(outerValue == 'ninja', "I can see the ninja")
  }
  outerFunction();
})()

;(function() {
  var outerValue = 'ninja';
  var later;

  function outerFunction(){
      var innerValue = 'samurai';

      function innerFunction(){
          assert(outerValue, "I can see the ninja");
          assert(innerValue, "I can see the samurai");
      }

      later = innerFunction;
  }

  outerFunction();
  later();
})()

;(function() {
  var outerValue = 'ninja';
  var later;

  function outerFunction()
  {
      var innerValue = 'samuai';

      function innerFunction(paramValue)
      {
          assert(outerValue, "Inner can see the ninja");
          assert(innerValue, "Inner can see the samurai");
          assert(paramValue, "Inner can see the wakizashi");
          assert(tooLate, "Inner can see the ronin");
      }

      later = innerFunction;
  }

  assert(!tooLate, "Outer can't see the ronin");

  var tooLate = 'ronin';

  outerFunction();
  later('wakizashi');
})()