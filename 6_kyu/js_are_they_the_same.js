/* DESCRIPTION: */
/* ==========================================================================
Given two arrays a and b write a function comp(a, b) (or compSame(a, b)) that 
checks whether the two arrays have the "same" elements, with the same 
multiplicities (the multiplicity of a member is the number of times it 
appears). "Same" means, here, that the elements in b are the elements in a 
squared, regardless of the order.
========================================================================== */
/* My solution 
================================================ */
function comp(array1, array2) {
  if (array1?.length !== array2?.length) return false

  return (
    array1.filter((e) => {
      let index = array2.indexOf(e ** 2)
      return index < 0 ? true : array2.splice(index, 1) === false
    }).length === 0
  )
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function comp(a, b) {
  return (
    !!a &&
    !!b &&
    a
      .map((x) => x * x)
      .sort()
      .join() == b.sort().join()
  )
}

function comp(a, b) {
  try {
    var a1 = a.map((x) => x * x).sort()
    b.sort()
  } catch (err) {
    return false
  }

  return a1.toString() == b.toString() ? true : false
}
