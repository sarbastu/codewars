/* DESCRIPTION: */
/* ==========================================================================
Implement a function that adds two numbers together and returns their sum in 
binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:
1, 1 --> "10" 
5, 9 --> "1110"
========================================================================== */
/* My solution 
================================================ */
function addBinary(a, b) {
  let sum = a + b;
  let bArray = [1];
  let bArraySum = 0;
  let result = [];

  let bIndex = 1;
  while (bIndex > 0) {
    if (bArray[bIndex - 1] * 2 > sum) {
      bIndex = -1;
    } else {
      bArray[bIndex] = bArray[bIndex - 1] * 2;
      bIndex++;
    }
  }
  for (let i = bArray.length - 1; i >= 0; i--) {
    if (bArray[i] + bArraySum <= sum) {
      bArraySum += bArray[i];
      result[i] = 1;
    } else {
      result[i] = 0;
    }
  }

  return result.reverse('').join('');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function addBinary(a, b) {
  return (a + b).toString(2);
}

function addBinary(a, b) {
  var sum = a + b,
    binary = '';

  while (sum > 0) {
    binary = (sum % 2) + binary;
    sum = Math.floor(sum / 2);
  }

  return binary;
}
