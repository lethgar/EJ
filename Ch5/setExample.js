/*
  'Set' examples for 2.9.21 call.
  The set object lets you store unique values of any type,
  primitive values or object references. Set objects are
  a collection of values that can be iterated through in
  insertion order.
  A value in the set may occur only once; it is
  unique in the set's collection.
*/
// declare binding and generate new set with 'Set ()'
const ourLibrary = new Set()
// .add method adds element to set
ourLibrary.add('Crime and Punishment')
ourLibrary.add('Blood Meridian')
ourLibrary.add(1984)
ourLibrary.add('Kafka' > 'Bukowski')
// these can be integers, objects, strings, anything we want
const Dune = {
  title: 'Dune',
  author: 'Frank Herbert',
  year: 1965
}
ourLibrary.add(Dune)
// console.log(ourLibrary);

// additional methods of note

// iterating through the set with of
// for (let item of ourLibrary) console.log(item)

//  .has - returns boolean value based on Set
//   containing a given input
// console.log("Does our library contain 1984? " + ourLibrary.has(1984))

//  .size - returns number of elements in set
// console.log(ourLibrary.size);

//  .delete - removes specified item
//ourLibrary.delete('Blood Meridian')

//  other things such as from, to convert set to array
//const libraryArray = Array.from(ourLibrary);
//console.log(libraryArray);

// removing duplicates!
//const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
//console.log([...new Set(numbers)])
