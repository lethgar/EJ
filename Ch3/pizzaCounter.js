/* Pizza slice counter, a practice vehicle for scope and closure.
  William O. 1.08.21
*/
// create parent function to conrain pizza elements
function pizza(topping) {
  let slice = 12;
// A piece of information to greet the user
  function greetUser() {
    console.log('Hey look, a pizza!');
  }
// Insert counter to track pizza eating progress
   function eat() {
    for(i=0; i < 12; i++) {
    slice--;
    console.log(`I just ate a piece of ${topping} pizza, ${slice} slices remaining`);
    }
  }
// alert user when out of pizza
  function alert() {
    console.log(`Remaining pizza slices = ${slice}, time to call Dominos!`);
  }

  return {eat, greetUser, alert}
};

let cheese = pizza('cheese');

cheese.greetUser(),
  cheese.eat()
  cheese.alert();
