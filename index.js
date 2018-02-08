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
  var string = "In your cart, you have "
  if(cart.length === 0){
    return console.log("Your shopping cart is empty.");
  }else{
    for(var i = 0; i<cart.length;i++){
      var newCart = cart[i];
      var key = Object.keys(cart[i]);
      var itemCost = newCart[key];
      if(cart.length === 1){
        string = string + `${key} at $${itemCost}.`;
      }else if(cart.length === 2){
        if (i === 0 ){
          string = string + `${key} at $${itemCost} and `;
        }else{
          string = string + `${key} at $${itemCost}.`;
        }
      }else if (cart.length > 2){
        if (i < cart.length - 1){
          string = string + `${key} at $${itemCost}, `;
        }else{
          string = string + `and ${key} at $${itemCost}.`;
        }
      }
    }
    
  }
  return string;
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
