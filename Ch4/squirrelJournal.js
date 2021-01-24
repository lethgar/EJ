/* Replicate the functionality of the Lycanthrope's log in EJ Ch4.
  Program to determine the correlation between life events
    and turning into a squirrel.
    Will 1.23.21
      */

// include external journal entries library
require('./journal.js')

// Define master journal array variable
  // forms body of journal
let journal = [];

// function to initialize new journal entires
function addEntry(events, squirrel) {
  journal.push({events, squirrel});
};

// function holding the algorithm 'phi'
  // for measuring correlation
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
};

// generate table, pass in events and journal entires
function tableFor(event, journal) {
  /*
   0 equals neither event nor sqrl
   1 = event no sqrl
   2 = sqrl no event
   3 = both event and sqrl
   each entry will add count to only
   1 element of table array
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
};
// declare function 
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
};

for (let event of journalEvents(JOURNAL)) {
  // console.log(event + ":", phi(tableFor(event, JOURNAL)));
};
for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    // console.log(event + ":", correlation);
  }
};
for (let entry of JOURNAL) {
  if (entry.events.includes("peanuts") &&
     !entry.events.includes("brushed teeth")) {
    entry.events.push("peanut teeth");
  }
};
console.log(phi(tableFor("peanut teeth", JOURNAL)));
