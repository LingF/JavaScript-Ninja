function isPalindrome(text) {
  if (text.length <= 1) return true;
  if (text.charAt(0) != text.charAt(text.length - 1)) return false;
  return isPalindrome(text.substr(1, text.length - 2));
}

function chirp(n) {
  return n > 1 ? chirp(n - 1) + '-chirp' : 'chirp';
}

assert(chirp(3) === 'chirp-chirp-chirp',
      'Calling the named function comes naturally.');