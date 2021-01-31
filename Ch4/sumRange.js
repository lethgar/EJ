/*
  Write a range function that takes two arguments, start and end,
  and returns an array containing all the numbers
  from start up to (and including) end.
  Will 1.27.21
    */
let range = (start, end) => {
  let numArray = [];
    for (i = start; i <= end; i++) {
    numArray.push(i);
  }
  console.log(numArray);
};
range(1, 10)

/*
   Next, write a sum function that takes an array of numbers
   and returns the sum of these numbers.
    */
let sum = (inputArray) => {
