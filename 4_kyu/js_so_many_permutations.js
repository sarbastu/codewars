/* DESCRIPTION: */
/* ==========================================================================
In this kata, your task is to create all permutations of a non-empty input 
string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
========================================================================== */
/* My solution 
================================================ */
function permutations(string) {
  let results = new Set()
  let chars = string.split('')

  function generatePerm(remaining, current) {
    if (remaining.length == 0) {
      results.add(current)
    } else {
      for (let i = 0; i < remaining.length; i++) {
        const newRemaining = remaining
          .slice(0, i)
          .concat(remaining.slice(i + 1))
        generatePerm(newRemaining, current + remaining[i])
      }
    }
  }

  generatePerm(chars, '')
  return Array.from(results)
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function permutations(str) {
  return str.length <= 1
    ? [str]
    : Array.from(
        new Set(
          str
            .split('')
            .map((char, i) =>
              permutations(str.substr(0, i) + str.substr(i + 1)).map(
                (p) => char + p
              )
            )
            .reduce((r, x) => r.concat(x), [])
        )
      )
}
