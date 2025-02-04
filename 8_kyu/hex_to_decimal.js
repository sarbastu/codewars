/* DESCRIPTION: */
/* ==========================================================================
Complete the function which converts hex number (given as a string) 
to a decimal number.
========================================================================== */
/* My solution 
================================================ */
function hexToDec(hexString) {
  let hexDigits = '0123456789ABCDEF';
  let sign = 1;
  let decimal = 0;
  for (const char of hexString) {
    if (char === '-') {
      sign = -1;
      continue;
    }
    const digit = hexDigits.indexOf(char.toUpperCase());
    decimal = decimal * 16 + digit;
  }
  return decimal * sign;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function hexToDec(hexString) {
  return parseInt(hexString, 16);
}
