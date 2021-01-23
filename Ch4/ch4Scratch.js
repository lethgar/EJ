const noNo = 0,
  noYes = 1,
	yesNo = 2,
  yesYes = 3;

function phi(table) {
  return (table[yesYes] * table[noNo] - table[yesNo] * table[noYes]) /
    Math.sqrt((table[yesNo] + table[yesYes]) *
              (table[noNo] + table[noYes]) *
              (table[noYes] + table[yesYes]) *
              (table[noNo] + table[yesNo]));
}

console.log(phi([76, 9, 4, 1]));
// → 0.068599434

function tableFor(event, journal) {
/* same as diagram above
   0 equals neither event nor sqrl
   1 = event no sqrl
   2 = sqrl no event
   3 = both event and sqrl
   	*/
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    // process each days data
    let entry = journal[i], index = 0;
    // extract 1 days data, reset target element to 0

    	// determine which element needs to be incremented

    if (entry.events.includes(event)) index += 1;
    // if event occured, then index will be 1 or 3
    if (entry.squirrel) index += 2;
    // if sqrl change happened, then index 2 or 3
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]


let myArray = [2, 4, 6, 8];
for (let entry of myArray) {
  console.log(entry);
}
