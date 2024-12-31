/* DESCRIPTION: */
/* ==========================================================================
In this Kata, you will be given a expression string and your task will be to 
remove all braces as follows:

solve("x-(y+z)") = "x-y-z"
solve("x-(y-z)") = "x-y+z"
solve("u-(v-w-(x+y))-z") = "u-v+w+x+y-z"
solve("x-(-y-z)") = "x+y+z"

There are no spaces in the expression. Only two operators are given: "+" or 
"-".

More examples in test cases.

Good luck!
========================================================================== */
/* My solution 
================================================ */
function solve(s) {
  let [res, opp] = [[], [false]];

  for (const c of s) {
    if (c === '(') opp.push(res.slice(-1)[0] === '-');
    else if (c === ')') opp.pop();
    else if (c.match(/[+-]/) && opp.slice(-1)[0])
      res.push(c === '-' ? '+' : '-');
    else res.push(c);
  }

  return res
    .filter((e, i) => !(e.match(/\W/) && res[i + 1].match(/\W/)))
    .join('')
    .replace(/^\+/, '');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function solve(s) {
  while (/[()]/.test(s)) {
    s = s.replace(/([+-]?)\([^()]*\)/, (m, x) =>
      m.slice(x.length + 1, -1).replace(/[a-z]/g, (m) => x + m)
    );
  }
  while (/[^a-z]{2}/.test(s)) {
    s = s
      .replace(/-\+|\+-/, '-')
      .replace(/--/g, '+')
      .replace(/\++/g, '+');
  }
  return s.replace(/^\+/, '');
}
