/* DESCRIPTION: */
/* ==========================================================================
Create a parser to interpret and execute the Deadfish language.

Deadfish operates on a single value in memory, which is initially set to 0.

It uses four single-character commands:

i: Increment the value
d: Decrement the value
s: Square the value
o: Output the value to a result array
All other instructions are no-ops and have no effect.

Examples
Program "iiisdoso" should return numbers [8, 64].
Program "iiisdosodddddiso" should return numbers [8, 64, 3600].
========================================================================== */
/* My solution 
================================================ */
export function parse(data: string): number[] {
  let result: number[] = []
  let currNum: number = 0

  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
      case 'i':
        currNum++
        break
      case 'd':
        currNum--
        break
      case 's':
        currNum *= currNum
        break
      case 'o':
        result.push(currNum)
        break
      default:
        break
    }
  }
  return result
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
export function parse(data: string): number[] {
  let v = 0,
    result = []
  for (let d of data.split('')) {
    switch (d) {
      case 'i':
        v++
        break
      case 'd':
        v--
        break
      case 's':
        v *= v
        break
      case 'o':
        result.push(v)
    }
  }
  return result
}
