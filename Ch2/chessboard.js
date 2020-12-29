/* Final attempt at solo chessboard code
  12/29/20 */
let ROWMAX = 8;
let COLMAX = 8;
let b = '#';
let w = '-';
let stringVal = '';

for (let i = 0; i < ROWMAX; i++) {
  for (let j = stringVal; j < COLMAX; j ++) {
    if (j % 2 == 0) {
     stringVal = (w + stringVal);
   } else  {
      stringVal = (b + stringVal);
    }
  }
  console.log(stringVal);
};
