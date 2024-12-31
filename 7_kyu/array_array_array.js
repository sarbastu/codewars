/* DESCRIPTION: */
/* ==========================================================================
You are given an initial 2-value array (x). You will use this to calculate 
a score.

If both values in (x) are numbers, the score is the sum of the two. If only 
one is a number, the score is that number. If neither is a number, return 
'Void!'.

Once you have your score, you must return an array of arrays. Each sub 
array will be the same as (x) and the number of sub arrays should be equal 
to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
========================================================================== */
/* My solution 
================================================ */
function explode(x) {
  let isNum0 = Number.isFinite(x[0]);
  let isNum1 = Number.isFinite(x[1]);

  if (!isNum0 && !isNum1) return 'Void!';

  let score = 0;
  if (isNum0 && isNum1) {
    score = x[0] + x[1];
  } else if (isNum0) {
    score = x[0];
  } else {
    score = x[1];
  }

  return new Array(score).fill(x);
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function explode(x) {
  let [a, b] = x;

  if (typeof a == 'number' && typeof b == 'number')
    return new Array(a + b).fill(x);
  else if (typeof a == 'number') return new Array(a).fill(x);
  else if (typeof b == 'number') return new Array(b).fill(x);

  return 'Void!';
}

const explode = ([x, y]) =>
  x + 0 != x && y + 0 != y
    ? 'Void!'
    : Array((+x || 0) + (+y || 0)).fill([x, y]);
