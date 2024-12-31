/* DESCRIPTION: */
/* ==========================================================================

========================================================================== */
/* My solution 
================================================ */
function pigIt(str) {
  return str
    .split(' ')
    .map((word) =>
      word.match(/[^a-z]/i) ? word : word.slice(1) + word[0] + 'ay'
    )
    .join(' ');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, '$2$1ay$3');
}

function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}
