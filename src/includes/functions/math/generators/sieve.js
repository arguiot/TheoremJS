* sieve() {
    let n = 2;

    while (true) {
        if (this.isPrime(n)) yield n;
        n++;
    }
}
