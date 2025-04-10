/* DESCRIPTION: */
/* ==========================================================================
Given the string representations of two integers, return the string 
representation of the sum of those integers.

For example:
sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides 
the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers 
(about a milion digits), converting to int will not work.
========================================================================== */
/* My solution 
================================================ */
function sumStrings(a, b) {
  return [...arguments]
    .map(BigInt)
    .reduce((a, e) => (a += e), 0n)
    .toString();
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

function sumStrings(a, b) {
  var res = '',
    c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = (c % 10) + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '');
}
