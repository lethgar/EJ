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
  // parameters for events and sqrl occurance
function addEntry(events, squirrel) {
  // push new events and sqrl occur. to entries
  journal.push({events, squirrel});
};

// function holding the algorithm 'phi'
  //  measures correlation between events
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
};

/* func 'tableFor' counts occruances of journal events and log frequency
   0 equals neither event nor sqrl
   1 = event no sqrl
   2 = sqrl no event
   3 = both event and sqrl
   each entry will add count to only
   1 element of table array
   	*/

  // generate global table of events, pass in events and journal entires
function tableFor(event, journal) {
  // table array to object creation
  let table = [0, 0, 0, 0];
  // process each days data
  for (let i = 0; i < journal.length; i++) {
    // extract 1 days data, reset target element to 0
    let entry = journal[i], index = 0;
    	// determine which element needs to be incremented
    if (entry.events.includes(event)) index += 1;
    // if event occured, then index will be 1 or 3
    if (entry.squirrel) index += 2;
    // if sqrl change happened, then index 2 or 3
    table[index] += 1;
  }
  return table;
};

// function to eliminate redundant events in journal
function journalEvents(journal) {
  // create events placeholder array
  let events = [];
  // process each journal entry
  for (let entry of journal) {
    // process each event
    for (let event of entry.events) {
      // check if event has already been passed
      if (!events.includes(event)) {
        // push new event on stack if unique
        events.push(event);
      }
    }
  }
  return events;
};

  // console.log(event + ":", phi(tableFor(event, JOURNAL)));

// filter the results to show only correlations greater than 0.1 or less than -0.1.
  // process each journal event
for (let event of journalEvents(JOURNAL)) {
  /* generate correlation var to contain equation 'phi' and apply to each
     journal event
      */
  let correlation = phi(tableFor(event, JOURNAL));
  // determine if correlation meets elimination criteria
  if (correlation > 0.1 || correlation < -0.1) {
    // console.log(event + ":", correlation);
  }
};

// further narrow results based on correlation return above

  /* if entry for given day contains strongest pos. and neg.
    result, push strongest positive onto stack
      */
for (let entry of JOURNAL) {
  if (entry.events.includes("peanuts") &&
     !entry.events.includes("brushed teeth")) {
    entry.events.push("peanut teeth");
  }
};

/* log numerical correlation result from highest 'phi'
  returned value
    */
console.log(phi(tableFor("peanut teeth", JOURNAL)));
