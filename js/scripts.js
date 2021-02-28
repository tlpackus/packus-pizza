function Pizza (name, toppings, size) {
  this.name = name;  //string
  this.topping = toppings;  //array
  this.size = size;  //string
  this.price = 3;  //value
}

Pizza.prototype.calcCost = function() {
  if (this.size === "medium") {
    this.price += 2;
  } else if (this.size === "large") {
    this.price += 7;
  } else if (this.size === "giganto") {
    this.price += 12;
  }
  for (i = 0; i < this.topping.length; i++) {
    this.price += 1;
  }
  return this.price;
};