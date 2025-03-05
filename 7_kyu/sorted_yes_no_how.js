/* DESCRIPTION: */
/* ==========================================================================
mplete the method which accepts an array of integers, and returns 
one of the following:

- "yes, ascending" - if the numbers in the array are sorted 
  in an ascending order
- "yes, descending" - if the numbers in the array are sorted 
  in a descending order
- "no" - otherwise

You can assume the array will always be valid, and there will 
always be one correct answer.
========================================================================== */
/* My solution 
================================================ */
function isSortedAndHow(array) {
  const sortedString = [...array].sort((a, b) => a - b).join('');

  if (sortedString === array.join('')) return 'yes, ascending';
  if (sortedString === array.reverse().join('')) return 'yes, descending';
  return 'no';
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function isSortedAndHow(arr) {
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
    ? 'yes, ascending'
    : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
    ? 'yes, descending'
    : 'no';
}
