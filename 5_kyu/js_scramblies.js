// DESCRIPTION:
/* ==========================================================================
Complete the function scramble(str1, str2) that returns true if a portion of 
str1 characters can be rearranged to match str2, otherwise returns false.

Notes:
Only lower case letters will be used (a-z). 
No punctuation or digits will be included. 
Performance needs to be considered.
========================================================================== */
/* My solution 
================================================ */
function scramble(str1, str2) {
  let charIndex
  let charCount = {}

  for (let i = 0; i < str2.length; i++) {
    charIndex = str1.indexOf(str2[i], charCount[str2[i]])
    charCount[str2[i]] = charIndex + 1

    if (charIndex === -1) return false
  }

  return true
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function scramble(str1, str2) {
  let occurences = str1.split('').reduce((arr, cur) => {
    arr[cur] ? arr[cur]++ : (arr[cur] = 1)
    return arr
  }, {})
  return str2.split('').every((character) => --occurences[character] >= 0)
}
