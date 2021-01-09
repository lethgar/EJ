/* Pizza slice counter, a practice vehicle for scope and closure.
  William O. 1.08.21
*/
// create parent function to conrain pizza elements
function pizza(toppingOne, toppingTwo) {
  let slice = 12;
// A piece of information to greet the user
  function greetUser() {
    console.log(`Hey look, a ${toppingOne} pizza!`);
  }
// Insert counter to track pizza eating progress
   function eat() {
    for(i=0; i < 12; i++) {
    slice--;
    console.log(`I just ate a piece of ${toppingOne}, ${slice} slices remaining`);
    }
  }
// alert user when out of pizza
  function alert() {
    console.log(`Remaining pizza slices = ${slice}, time to call Dominos and order ${toppingTwo}!`);
  }

  return {eat, greetUser, alert}
};

let cheese = pizza('cheese', 'sausage');

cheese.greetUser(),
  cheese.eat()
  cheese.alert();
