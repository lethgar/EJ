let ROWMAX = 8;
let COLMAX = 8;
let b = '#';
let w = '-';
let stringVal = '';

for (let i = 0; i < ROWMAX; i++) {
    //console.log("In outer for on pass " + i)
    for (let j = 0; j < COLMAX ; j ++) {
    //console.log("In inner for on pass " + j)
  if (i % 2 == 0) {
     //console.log("I am in if part of test")
    stringVal = (w + b);
     //console.log("Even building stringVal: " + stringVal)
} else {
     //console.log("I am in else part of test")
     stringVal = (b + w);
     //console.log("Odd building stringVal: " + stringVal)
   }
  }
  console.log(stringVal);
};
