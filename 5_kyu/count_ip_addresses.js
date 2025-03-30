/* DESCRIPTION: */
/* ==========================================================================
Implement a function that receives two IPv4 addresses, and returns 
the number of addresses between them (including the first one, 
excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. 
The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246
========================================================================== */
/* My solution 
================================================ */
function ipsBetween(start, end) {
  const startOctets = start.split('.').reverse();
  const endOctets = end.split('.').reverse();

  return startOctets.reduce(
    (a, e, i) => (a += (endOctets[i] - e) * 256 ** i),
    0
  );
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function ipsBetween(start, end) {
  const num = (ip) =>
    ip
      .split('.')
      .map((x) => parseInt(x))
      .reduce((acc, e) => acc * 256 + e);

  return num(end) - num(start);
}
