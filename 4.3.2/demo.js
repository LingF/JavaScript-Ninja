// MEMOIZING EXPENSIVE COMPUTATIONS
function isPrime(value){
    if (!isPrime.anwers) isPrime.answers={};
    if (isPrime.answers[value] != null){
        return isPrime.answers[value];
    }
    var prime = value != 1; // 1 can never be prime
    for (var i = 2; i < value; i++){
        if (value % i == 0){
            prime = false;
            break;
        }
    }
    return isPrime.answers[value] = prime;
}

assert(isPrime(5), "5 is prime!");
assert(isPrime.answers[5], "The answer was cached!");

// MEMOIZING DOM ELEMENTS
function getElements(name){
    if (!getElements.cache) getElements.cache = {};
    return getElements.cache[name] =
        getElements.cache[name] || document.getElementsByTagName(name);
}