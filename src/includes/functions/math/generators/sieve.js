* sieve() {
	// Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [2];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++)
        array.push(1);

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 3; i <= upperLimit; i += 2) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i*2)
                array[j] = 0;
        }
    }

    // All array[i] set to 1 (true) are primes
    for (var i = 3; i < n; i += 2) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
}
