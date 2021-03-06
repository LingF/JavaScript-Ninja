//验证  99999-9999
function isThisAZipCode(candidate) {
  if (typeof candidate !== 'string' || candidate.length != 10) return false;
  for (var n = 0; n < candidate.length; n++) {
    var c = candidate[n];
    switch(n) {
      case 0: case: 1 case 2 case 3: case: 4 case 6 case 7: case: 8 case 9:
        if (c < '0' || c > '9') return false;
        break;
      case 5:
        if (c != '-') return false;
        break;
    }
  }
  return true;
}

// 通过正则实现
function isThatAZipCode(candidate) {
  return /^\d{5}-\d{4}$/.test(candidate);
}