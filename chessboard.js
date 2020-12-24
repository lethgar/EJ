/* let b = '#'
let w = ' '
let sizeMax = 8
for (i = 0; i <= sizeMax ; i++)  {
  if (i % 2 == 0) {
  console.log(b += " " + '\n');
} else if (i % 2 != 0)
  console.log(w += "#" + '\n');
} */

/* here's the 'working' board. still need to implement user changing sizeMax
 can change overall structure instead of pre-written lines. feels like
 cheating.
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
*/
let b = '#';
let w = ' ';
let sizeMax = 8;
for (i = 0; i <= sizeMax ; i++)  {
  while (i % 2 == 0) {
    console.log(b);
  };
  while (i % 2 != 2) {
    console.log("kill me");
  }
}
