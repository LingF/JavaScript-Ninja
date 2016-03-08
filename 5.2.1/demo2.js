var sValue1 = 'ling1';
function Ninja() {
  var slices = 0;
  this.getSlices = function() {
    console.log('get', sValue1, sValue2, sValue3, sValue4, sValue5);
    return slices;
  }
  this.slice = function() {
    console.log('slice', sValue1, sValue2, sValue3, sValue4, sValue5);
    slices++;
  }
}

var sValue2 = 'ling2';

var ninja = new Ninja();

var sValue3 = 'ling3';

ninja.slice();

var sValue4 = 'ling4';

assert(ninja.getSlices() == 1,
    "We're able to access the internal slice data.");

var sValue5 = 'ling5';

assert(ninja.slices == undefined,
    "And the private data is inaccessible to us.");