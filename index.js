var cart = [];

function randomNumber(){
  return Math.floor(Math.random() * 100) + 1;
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = item;
 var itemPrice = randomNumber();
 cart.push({[itemName]:itemPrice});
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if(cart.length === 0){
    return console.log("Your shopping cart is empty.");
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
