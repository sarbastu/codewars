/* DESCRIPTION: */
/* ==========================================================================
Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

The output expected would be:

apples, pears
grapes
bananas

The code would be called like so:

solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// "apples, pears\ngrapes\nbananas"
========================================================================== */
/* My solution 
================================================ */
function solution(text, markers) {
  return text
    .split('\n')
    .map((line) => {
      for (const marker of markers) {
        const index = line.indexOf(marker);
        if (index !== -1) line = line.slice(0, index);
      }

      return line.trimEnd();
    })
    .join('\n');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function solution(input, markers) {
  return input
    .split('\n')
    .map((str) => markers.reduce((s, m) => s.split(m)[0], str).trimEnd())
    .join('\n');
}
