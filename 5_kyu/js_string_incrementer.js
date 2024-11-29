/* DESCRIPTION: */
/* ==========================================================================
Your job is to write a function which increments a string, to create a new 
string.

If the string already ends with a number, the number should be incremented 
by 1.
If the string does not end with a number. the number 1 should be appended 
to the new string.

Examples:

foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be 
considered.
========================================================================== */
/* My solution 
================================================ */
function incrementString(strng) {
  let regex = /[0-9]*$/
  let num = strng.match(regex)
  num[0] ? (num = num[0].split('')) : (num = [0])
  let str = strng.replace(regex, '')

  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] < 9 || i === 0) {
      num[i]++
      break
    } else {
      num[i] = 0
    }
  }

  return str + num.join('')
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
let incrementString = (str) =>
  str.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1))
