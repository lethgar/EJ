function outer(num) {
  const inner = () => {
    console.log("where am I");
  };
  let j = 5;
  let k = 9;
  console.log(inner + num);
  return inner;
}
outer("Hello, world!", 11);
console.log(inner);
