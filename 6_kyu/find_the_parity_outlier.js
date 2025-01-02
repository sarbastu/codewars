/* DESCRIPTION: */
/* ==========================================================================
You are given an array (which will have a length of at least 3, but could 
be very large) containing integers. The array is either entirely comprised 
of odd integers or entirely comprised of even integers except for a single 
integer N. Write a method that takes the array as an argument and returns 
this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
========================================================================== */
/* My solution 
================================================ */
function findOutlier(integers) {
  const oddIntegers = integers.filter((e) => e % 2);
  return oddIntegers.length === 1
    ? oddIntegers[0]
    : integers.filter((e) => !(e % 2))[0];
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function findOutlier(integers) {
  var len = integers.length;
  var first = Math.abs(integers[0]) % 2,
    second = Math.abs(integers[1]) % 2,
    third = Math.abs(integers[2]) % 2,
    base = first + second + third >= 2 ? 1 : 0;

  for (var i = 0; i < len; i++) {
    if (Math.abs(integers[i] % 2) != base) {
      return integers[i];
    }
  }
}
