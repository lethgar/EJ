/*
  Print the integers 1-10 in the console. This is my initial test version.
  */
// declare function to print integers 'numPrint'
function numPrint(num, max) {
  // if statement base call to end final pass and return 10
  if(num > max) {
    return num;
  } else {
    // log current val of num and add 1 each pass
  console.log(num);
  num++;
  // recursive call to numPrint
  numPrint(num, max);
  }
};
// call numPrint - user inputs min and max vals
numPrint(0, 10);


/*
  The same in reverse

function numPrint(num, min) {
  if(num < min) {
    return num;
  } else {
  console.log(num);
  num--;
  numPrint(num, min);
  }
};
numPrint(10, 0);
*/
