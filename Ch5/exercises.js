//Flattening
//Use the reduce method in combination with the concat method to “flatten”
//an array of arrays into a single array that has all the elements
//of the original arrays.
// → [1, 2, 3, 4, 5, 6]

// easiest way with built in methods
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.flat());

// I do not understand this
function flatDeep(arrays, d = 1) {
   return d > 0 ? arrays.reduce((acc, val) =>
    acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
   : arrays.slice();
};
flatDeep(arrays, Infinity);

// closest to book intended way with concat/reduce
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(a, b) {
    return a.concat(b);
  },
  []
);
