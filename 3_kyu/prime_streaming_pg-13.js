/* DESCRIPTION: */
/* ==========================================================================
Create an endless stream that yields prime numbers. The stream must be able 
to produce a million primes in a few seconds.
========================================================================== */
/* My solution 
================================================ */
class Primes {
  static *stream() {
    yield 2;
    let primes = [];
    let num = 3;

    function isPrime(n) {
      let limit = Math.sqrt(n);
      for (const p of primes) {
        if (p > limit) break;
        if (n % p === 0) return false;
      }
      return true;
    }

    while (true) {
      if (isPrime(num)) {
        yield num;
        primes.push(num);
      }
      num += 2;
    }
  }
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
class Primes {
  static *stream() {
    const limit = 49495863;
    const sieve = new Array(limit).fill(1);
    yield 2;
    for (let i = 3; i < limit; i += 2) {
      if (sieve[i]) {
        yield i;
        for (let k = i * i; k < limit; k += i) sieve[k] = 0;
      }
    }
  }
}
