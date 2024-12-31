/* DESCRIPTION: */
/* ==========================================================================
Write a generator function that yields a stream of prime numbers. The stream 
must be able to produce 25 million primes in seconds.
========================================================================== */
/* My solution 
================================================ */
function getPrimes(limit) {
  const sieve = new Uint8Array((limit - 1) / 2);
  const limitSqrt = Math.sqrt(limit);
  const primes = [2];

  for (let i = 3; i <= limitSqrt; i += 2) {
    const index = (i - 1) / 2;
    if (!sieve[index]) {
      for (let multiple = i * i; multiple < limit; multiple += i * 2) {
        sieve[(multiple - 1) / 2] = 1;
      }
    }
  }

  for (let i = 3; i < limit; i += 2) {
    const index = (i - 1) / 2;
    if (!sieve[index]) {
      primes.push(i);
    }
  }

  return primes;
}

const primes = getPrimes(472882255);

class Primes {
  static *stream() {
    yield* primes;
  }
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
const Primes = (function () {
  const n = 5e8;
  const p = new Int8Array(n / 2);
  for (let i = 3; i * i < n; i += 2)
    if (!p[i >> 1])
      for (let j = i * i, k = i << 1; j < n; j += k) p[j >> 1] = 1;
  return {
    *stream() {
      yield 2;
      for (let i = 3; i < n; i += 2) if (!p[i >> 1]) yield i;
    },
  };
})();
