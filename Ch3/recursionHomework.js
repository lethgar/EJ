/*
  Create function to print boolean answer to 'is integer even?'
  Will O. 1.16.21
  */

function isEven(x){
  if (x % 2 == 0){
    return 'true';
  } else if (x % 2 == 1) {
    return 'false';
  } else {
    x -2;
    isEven(x);
  }
}
console.log(isEven(10));
