/* DESCRIPTION: */
/* ==========================================================================
Complete the function which converts a binary number (given as a string) 
to a decimal number.
========================================================================== */
/* My solution 
================================================ */
function binToDec(bin) {
  return parseInt(bin, 2);
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function binToDec(bin) {
  return bin
    .split('')
    .reverse()
    .map(function (a, b) {
      return Number(a) * Math.pow(2, b);
    })
    .reduce(function (a, b) {
      return a + b;
    });
}

binToDec = (s) => '0b' + s - 0;

const binToDec = (bin) => [...bin].reduce((dec, bit) => (dec << 1) | bit, 0);
