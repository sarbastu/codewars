/* DESCRIPTION: */
/* ==========================================================================
Write a function that takes an array of strings as an argument and returns a 
sorted array containing the same strings, ordered from shortest to longest.
========================================================================== */
/* My solution 
================================================ */
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length)
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function sortByLength(array) {
  let sorted = []

  for (let i = 0; true; i++) {
    for (let j = 0; j < array.length; j++) {
      let string = array[j]

      if (string.length === i) {
        sorted.push(string)
      }

      if (sorted.length === array.length) {
        return sorted
      }
    }
  }
}
