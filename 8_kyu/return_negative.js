/* DESCRIPTION: */
/* ==========================================================================
In this simple assignment you are given a number and have to make it 
negative.

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
========================================================================== */
/* My solution 
================================================ */
function makeNegative(num) {
  return Number(`-${num}`) || num;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function makeNegative(num) {
  return -Math.abs(num);
}
