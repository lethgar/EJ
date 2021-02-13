/* My own version of 'photos' database practice
  Will 2.6.21
  */
require ('./photos.js')

// Filter out just png files
//console.log(PHOTOS.filter(photo => photo.format == 'png'))
// Now just print their names
// console.log(PHOTOS.filter(photo => photo.format == 'jpg').map(entry => entry.filename))

// Ok here's some things for us to work on together
// Find any entries with the keyword 'Sunny Crest', print filename & filepath
//console.log(PHOTOS.filter(photo => photo.tags.includes("Sunny Crest")).map(({filename, filepath}) => ({filename, filepath})))
// How many of the photos are in the jpg format?
// console.log(PHOTOS.reduce(acc, currentValue) => { return (currentValue.format == "jpg") ? acc++:acc },0 ))
// Replace source names of 'Brian Capouch' with 'Brian L. Capouch'


// And then some things for you to work on as homework
// 1. Add some entries with different keywords (some same) and filetypes (Shoot for 8)
// 2. Run our "in-class" examples; make sure they work

// 3. Print the names of all the different unique sources
//console.log([...new Set(PHOTOS.map(photo => photo.source))]);
// console.log([new Set(PHOTOS.map(photo => photo.source))]);

/*
The new keyword does the following things:

  Creates a blank, plain JavaScript object.
  Adds a property to the new object (__proto__) that links to the constructor function's prototype object
  Binds the newly created object instance as the this context
   (i.e. all references to this in the constructor function now refer to the object created in the first step).
  Returns this if the function doesn't return an object.
*/

// 4. Count how many images contain a given keyword
let userQuery = "Lafayette"
//console.log(PHOTOS.filter(photo => photo.tags.includes(userQuery)).length)

//1. Find all photo entries with an empty note string.
//console.log(PHOTOS.filter(photo => photo.note.includes("")))

//2. Find all photos with a 'Restaurant' tag.
console.log(PHOTOS.filter(photo => photo.tags.includes('Restaurant')))

//3. Find all Mike Tiede photos and change the tag to Merle Haggard

//1. How many of the photos have notes attached?

//2. Which image has the longest name?
//var plorp = ["bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];

/*
const longest = PHOTOS.reduce(function(a, b) {
  return a.length > b.length ? a : b
},'');
console.log(longest)
*/
