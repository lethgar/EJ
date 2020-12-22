/*
const b = '#'
const w = ' '
for (i = 0; i <= 8; i++)  {
  if (i % 2 == 0) {
  console.log(b + w + '\n');
} else
  console.log(w + b + '\n');
};
*/

let b = ' # # # #'
let w = '# # # # '
let sizeMax = 8
for (i = 0; i <= sizeMax ; i++)  {
  if ((i % 2 == 0)) {
    console.log(b);
  } if ((i % 2 != 0)) {
    console.log(w);
  }
};
