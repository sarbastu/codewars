/* DESCRIPTION: */
/* ==========================================================================
For any given linear sequence, calculate the function [f(x)] and return it 
as a string.

Assumptions for this kata are:

the sequence argument will always contain 5 values equal to f(0) - f(4).
the function will always be in the format "nx +/- m", "x +/- m", "nx', "x" 
or "m"

Examples (input -> output):
[0, 1, 2, 3, 4]   -> "f(x) = x"
[0, 3, 6, 9, 12]  -> "f(x) = 3x"
[1, 4, 7, 10, 13] -> "f(x) = 3x + 1"
========================================================================== */
/* My solution 
================================================ */
function getFunction(sequence) {
  let difference = sequence[1] - sequence[0];
  let currentDifference = 0;
  let linear = true;
  for (let i = 0; i < sequence.length - 1; i++) {
    currentDifference = sequence[i + 1] - sequence[i];
    if (currentDifference != difference) {
      linear = false;
      break;
    }
  }

  if (linear) {
    const text1 = 'f(x) = ';
    const text2 = Math.abs(difference) > 1 ? difference + 'x' : '';
    const text3 = difference === 1 ? 'x' : '';
    const text4 = difference === -1 ? '-x' : '';
    const text5 = sequence[0] < 0 ? ' - ' + -sequence[0] : '';
    const text6 = sequence[0] > 0 ? ' + ' + sequence[0] : '';
    const altText2 = sequence[0] != 0 ? sequence[0] : '';

    return difference !== 0
      ? text1 + text2 + text3 + text4 + text5 + text6
      : text1 + altText2;
  } else {
    return 'Non-linear sequence';
  }
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function getFunction(sequence) {
  var a = sequence[1] - sequence[0],
    b = sequence[0],
    i;
  for (i = 0; i < sequence.length; ++i) {
    if (i * a + b != sequence[i]) return 'Non-linear sequence';
  }

  var combinator = a != 0 && b > 0 ? ' + ' : a != 0 && b < 0 ? ' - ' : '',
    varTerm = a === 1 ? 'x' : a === -1 ? '-x' : a !== 0 ? a + 'x' : '',
    constTerm = b === 0 ? '' : Math.abs(b);

  return 'f(x) = ' + varTerm + combinator + constTerm;
}
