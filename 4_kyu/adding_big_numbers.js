/* DESCRIPTION: */
/* ==========================================================================
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers 
are strings and the function must return a string.

Example
add('63829983432984289347293874', '90938498237058927340892374089');
->  "91002328220491911630239667963")

Notes
the issue is that the above example returns 9.100232822049192e+28
========================================================================== */
/* My solution 
================================================ */
function add(a, b) {
  let aArray = a.split('');
  let bArray = b.split('');
  let sumArray = [];
  let carryOver = 0;
  let sum = 0;

  //normalize array length
  if (aArray.length > bArray.length) {
    bArray = Array(aArray.length - bArray.length)
      .fill(0)
      .concat(bArray);
  } else if (aArray.length < bArray.length) {
    aArray = Array(bArray.length - aArray.length)
      .fill(0)
      .concat(aArray);
  }

  for (let i = aArray.length - 1; i >= 0; i--) {
    sum = parseInt(aArray[i]) + parseInt(bArray[i]) + carryOver;
    if (i == 0) {
      sumArray[i] = sum;
    } else {
      sumArray[i] = sum % 10;
      carryOver = Math.floor(sum / 10);
    }
  }

  return sumArray.join('');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function add(a, b) {
  var res = '',
    c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = (c % 10) + res;
    c = c > 9;
  }
  return res;
}
