/*
  Print the integers 1-10 in the console. This is my initial test version.
  */
// declare parent function counter
function counter() {
  // initiate variable 'num' to be used in counter
  let num = 0;
  if (num == 10) {
    return 10;
  } else {
    for (i = 0; i < 10; i++){
      num += 1;
      console.log(num);
    }
  }
};
counter();
