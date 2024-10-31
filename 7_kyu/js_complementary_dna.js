/* DESCRIPTION: */
/* ==========================================================================
In DNA strings, symbols "A" and "T" are complements of each other, 
as "C" and "G". Your function receives one side of the DNA; you need to 
return the other complementary side. DNA strand is never empty or there is 
no DNA at all.

Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
========================================================================== */
/* My solution 
================================================ */
function DNAStrand(dna) {
  return dna
    .split('')
    .map((e) => {
      return e == 'A' ? 'T' : e == 'T' ? 'A' : e == 'G' ? 'C' : 'G'
    })
    .join('')
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function DNAStrand(dna) {
  const DNAComplement = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'T',
  }
  return dna
    .split('')
    .map((elem) => DNAComplement[elem])
    .join('')
}
