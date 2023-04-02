/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

// My solution
function moveZeros(arr) {
    arr.reduceRight((acc, e, i) => {
        if (e === 0) {
        arr.splice(i, 1)
        arr.push(0)
        }
    }, null)
    return arr
}

// Most voted solution
var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}