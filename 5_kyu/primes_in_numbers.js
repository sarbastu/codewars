/* DESCRIPTION: */
/* ==========================================================================
Given a positive number n > 1 find the prime factor decomposition of n. 
The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
========================================================================== */
/* My solution 
================================================ */
function primeFactors(n) {
  let primeComposition = {};
  let count = n;

  while (count % 2 === 0) {
    count /= 2;
    primeComposition[2] = (primeComposition[2] || 0) + 1;
  }

  for (let i = 3; i * i <= count; i += 2) {
    while (count % i === 0) {
      count /= i;
      primeComposition[i] = (primeComposition[i] || 0) + 1;
    }
  }

  if (count > 1) {
    primeComposition[count] = 1;
  }

  let res = '';
  for (const [key, value] of Object.entries(primeComposition)) {
    res += value === 1 ? `(${key})` : `(${key}**${value})`;
  }

  return res;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function primeFactors(n) {
  for (var i = 2, res = '', f; i <= n; i++) {
    f = 0;
    while (n % i == 0) {
      f++;
      n /= i;
    }
    res += f ? '(' + (f > 1 ? i + '**' + f : i) + ')' : '';
  }
  return res || '(' + n + ')';
}
