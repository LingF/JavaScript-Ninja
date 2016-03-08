/* test here */
function outer() {
  /* test here */
  var a = 1;
  /* test here */
  function inner() {}

  var b = 2;
  /* test here */
  if (a == 1) {
    var c = 3;
    /* test here */
  }
  /* test here */
}
/* test here */
outer();

/* test */
assert(true, "some descriptive text");
assert(typeof outer === 'function',
      "outer() is in scope");
assert(typeof inner === 'function',
      "inner() is in scope");
assert(typeof a === 'number',
      "a is in scope");
assert(typeof b === 'number',
      "b is in scope");
assert(typeof c === 'number',
      "c is in scope");