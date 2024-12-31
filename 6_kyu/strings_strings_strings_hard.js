/* DESCRIPTION: */
/* ==========================================================================
Overview
After you recovered toString() for booleans, numbers and numerical arrays 
last time, you now realise that because , you have to be able to convert 
complex arrays containing any and all data types into strings too!

Task
You have to fix and improve upon the toString() method for arrays according 
to the criteria specified below.

I. Numerical Arrays
For arrays containing numbers only, you have to convert the array to a 
string where the contents of the string resembles what an array looks like 
in Javascript code. Here are a few examples:

[].toString() === "[]"
[3.14].toString() === "[3.14]"
[1,2,3].toString() === "[1,2,3]"
========================================================================== */
/* My solution 
================================================ */
Array.prototype.toString = function () {
  const stringify = (arr) => {
    if (!Array.isArray(arr)) {
      return String(arr);
    }

    const result = [];

    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];

      if (Array.isArray(item)) {
        result.push(stringify(item));
      } else if (typeof item === 'string') {
        result.push(`'${item}'`);
      } else {
        result.push(String(item));
      }
    }

    return `[${result.join(',')}]`;
  };

  return stringify(this);
};

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
Array.prototype.toString = function () {
  return (
    '[' +
    this.map((m) =>
      typeof m === 'string' ? "'" + m.toString() + "'" : m.toString()
    ).join(',') +
    ']'
  );
};
