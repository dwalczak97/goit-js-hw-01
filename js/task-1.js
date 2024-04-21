function makeTransaction(quantity, pricePerDroid) {
  console.log(
    "You ordered + `quantity` + droids worth + `totalPrice` + credits!"
  );
}
let quantity = 5;
let pricePerDroid = 3000;
const totalPrice = quantity * pricePerDroid;
console.log(makeTransaction(5, 3000));
quantity = 3;
pricePerDroid = 1000;
console.log(makeTransaction(3, 1000));
quantity = 10;
pricePerDroid = 500;
console.log(makeTransaction(10, 500));
