/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

function rgb(r, g, b){
    function toHex(val){
        let rangeCorrectedVal = val < 0 ? 0
        : val > 255 ? 255
        : val ;
        
        let hexVal = rangeCorrectedVal.toString(16).toUpperCase()
        
        return hexVal.length === 1 ? "0" + hexVal : hexVal;
    }

    return toHex(r) + toHex(g) + toHex(b)
}

// Best practice:
// function rgb(r, g, b){
//     return [r,g,b].map(function(x) {
//         return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
//     }).join('').toUpperCase();
// }