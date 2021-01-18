/*
  Create function to print boolean answer to 'is integer even?'
  Will O. 1.16.21
  */

function isEven(x){
  if (x % 2 == 0){
    return x == x;
    console.log(isEven());
} else {
   console.log(x != x);
   return x / 2;
  isEven(x);
}
console.log(isEven(50));
