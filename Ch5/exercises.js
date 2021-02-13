//Flattening
//Use the reduce method in combination with the concat method to “flatten”
//an array of arrays into a single array that has all the elements
//of the original arrays.
// → [1, 2, 3, 4, 5, 6]

// easiest way with built in methods
let arrays = [[1, 2, 3], [4, 5], [6]]
console.log(arrays.flat())

// I do not understand this
function flatDeep(arrays, d = 1) {
   return d > 0 ? arrays.reduce((acc, val) =>
    acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
   : arrays.slice()
}
flatDeep(arrays, Infinity)

// closest to book intended way with concat/reduce
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(a, b) {
    return a.concat(b)
  },
  []
)

// Your own loop
// Write a higher-order function loop that provides something like
// a for loop statement. It takes a value, a test function, an update function,
// and a body function. Each iteration, it first runs the test function on
// the current loop value and stops if that returns false.
// Then it calls the body function, giving it the current value.
// Finally, it calls the update function to create a new value and
// starts from the beginning.
// When defining the function, you can use a regular loop
// to do the actual looping.

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
