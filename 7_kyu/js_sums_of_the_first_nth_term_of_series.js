/* DESCRIPTION: */
/* ==========================================================================
Your task is to write a function which returns the n-th term of the 
following series, which is the sum of the first n terms of the sequence 
(n is the input parameter).

series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + ...

You will need to figure out the rule of the series to complete this.

Rules
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return "0.00".

You will only be given Natural Numbers as arguments.

Examples (Input --> Output)
n
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
========================================================================== */
/* My solution 
================================================ */
function SeriesSum(n) {
  let count = 0;
  for (let i = 1; i < n * 3; i += 3) {
    count += 1.0 / i;
  }
  return count.toFixed(2);
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
}
