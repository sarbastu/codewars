/* DESCRIPTION: */
/* ==========================================================================
You need to return a string that looks like a diamond shape when printed on 
the screen, using asterisk (*) characters. Trailing spaces should be removed, 
and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it 
is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:
 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:
  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
========================================================================== */
/* My solution 
================================================ */
function diamond(n) {
  if (n < 1 || n % 2 === 0) return null;

  let pyramid = '';

  for (let i = 1; i <= n; i += 2) {
    pyramid += ' '.repeat((n - i) / 2);
    pyramid += '*'.repeat(i);
    pyramid += '\n';
  }

  for (let i = n - 2; i > 0; i -= 2) {
    pyramid += ' '.repeat((n - i) / 2);
    pyramid += '*'.repeat(i);
    pyramid += '\n';
  }

  return pyramid;
}

function diamond(n) {
  let [stars, rows] = [1, []];
  while (stars * Math.ceil(n % 2) > 0) {
    rows.push('*'.repeat(stars).padStart((n + stars) / 2, ' '));
    stars += rows.length * 2 < n ? 2 : -2;
  }
  return [...rows, ''].join('\n') || null;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  str = '';
  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2);
    str += ' '.repeat(len);
    str += '*'.repeat(n - 2 * len);
    str += '\n';
  }
  return str;
}
