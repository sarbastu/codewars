/* DESCRIPTION: */
/* ==========================================================================
Given an array of integers, remove the smallest value. Do not mutate the 
original array/list. If there are multiple elements with the same value, 
remove the one with the lowest index. If you get an empty array/list, return 
an empty array/list.

Don't change the order of the elements that are left.

Examples
Input: [1,2,3,4,5], output = [2,3,4,5]
========================================================================== */
/* My solution 
================================================ */
function removeSmallest(numbers) {
  if (numbers.length === 0) return [];

  let minNum = Math.min.apply(Math, numbers);
  let minNumIdx = numbers.indexOf(minNum);

  return numbers.filter((e, i) => i !== minNumIdx);
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
