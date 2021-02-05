function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
// console.log(labels);

function greaterThan(n) {
 return m => m > n;
}
let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

const four = () => 2 * 2
// console.log(four());

/* this is our initial value i.e. the starting point*/
const initialValue = 0;

/* numbers array */
let numbers = [5, 10, 15, 20];

/* reducer method that takes in the accumulator and next item */
const reducer = (accumulator, item) => {
  return accumulator + item;
};

/* we give the reduce method our reducer function
  and our initial value */
const total = numbers.reduce(reducer, initialValue)
console.log(total);

const mapTest = numbers.map(element => element * 2)
console.log(mapTest);
