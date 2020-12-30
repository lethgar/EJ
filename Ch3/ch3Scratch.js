/*
const largerVal = function(x,y){
  return x > y;
};
console.log(largerVal(5,1));

const makeNoise = function () {
  console.log("Pling!");
};
makeNoise();
*/
const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 10));
