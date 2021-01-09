function pizza(topping) {
  let slice = 12;

  function greetUser() {
    console.log('Hey look, a pizza!');
  }

   function eat() {
    for(i=0; i < 12; i++) {
    slice--;
    console.log(`I just ate a piece of ${topping} pizza, ${slice} slices remaining`);
    }
  }

  function alert() {
    if (slice = 0) {
      console.log(`Oh no, I'm out of ${topping}`);
    }
  }

  function descrip() {
    console.log(`remaining pizza slices = ${slice}, on my ${topping} pizza`);
  }

  return {eat, greetUser, descrip, alert}
};

let cheese = pizza('cheese');

cheese.greetUser(),
  cheese.eat()
  cheese.descrip()
  cheese.alert();
