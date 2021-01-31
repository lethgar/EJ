 /* let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

  Write a function arrayToList that builds up a list structure
  like the one shown when given [1, 2, 3] as argument.
  console.log(arrayToList([10, 20]));
  {value: 10, rest: {value: 20, rest: null}}
  */
// const power = (base, exponent) => {
const arrayToList = (inputArray) => {
