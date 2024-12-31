// DESCRIPTION:
/* ==========================================================================
As the name may already reveal, it works basically like a 
Fibonacci, but summing the last 3 (instead of 2) numbers of the 
sequence to generate the next.
========================================================================== */
/* My solution 
================================================ */
function tribonacci(signature, n) {
  let sequence = [];

  for (let i = 0, m = 1; i < n; i++) {
    sequence[i - 3] === undefined
      ? sequence.push(signature[i])
      : sequence.push(sequence[i - 1] + sequence[i - 2] + sequence[i - 3]);
  }

  return sequence;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) {
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
  }
  return signature.slice(0, n);
}
