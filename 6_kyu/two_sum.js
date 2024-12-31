/* DESCRIPTION: */
/* ==========================================================================
Write a function that takes an array of numbers (integers for the tests) and 
a target number. It should find two different items in the array that, when 
added together, give the target value. The indices of these items should 
then be returned in a tuple / list (depending on your language) like so: 
(index1, index2).

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]
========================================================================== */
/* My solution 
================================================ */
function twoSum(numbers, target) {
  let sumIndexes = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let x = i + 1; x < numbers.length; x++) {
      if (numbers[i] + numbers[x] == target) {
        sumIndexes = [i, x];
      }
    }
  }
  return sumIndexes;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function twoSum(numbers, target) {
  let seen = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let x = numbers[i],
      y = target - x;
    if (seen.has(y)) return [seen.get(y), i];
    seen.set(x, i);
  }
}
