/* DESCRIPTION: */
/* ==========================================================================
The first input array is the key to the correct answers to an exam, like 
["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for 
this array of answers, giving +4 for each correct answer, -1 for each 
incorrect answer, and +0 for each blank answer, represented as an empty 
string (in C the space character is used).

If the score < 0, return 0.

For example:

    Correct answer    |    Student's answer   |   Result         
 ---------------------|-----------------------|-----------
 ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
 ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
 ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
 ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0
========================================================================== */
/* My solution 
================================================ */
function checkExam(array1, array2) {
  let res = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === '') continue;
    res += array1[i] === array2[i] ? 4 : -1;
  }
  return res < 0 ? 0 : res;
}
/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
checkExam = (arr1, arr2) =>
  Math.max(
    arr2.reduce((a, b, i) => (b == arr1[i] ? a + 4 : b ? a - 1 : a), 0),
    0
  );
