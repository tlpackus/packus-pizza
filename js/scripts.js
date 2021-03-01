function Pizza (topping, size) {
  this.topping = topping;  
  this.size = size;  
  this.price = 3; 
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


$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    let gName = $("input#name").val()
    let toppingSelected = $("input:checkbox[name=topping]:checked").map(function() {
      return this.value;
    }).get();
    let sizeSelected = $("input:radio[name=size]:checked").val();
    let guestPizza = new Pizza(toppingSelected, sizeSelected);
    $("#guestName").text(gName);
    $("#pizzaTopping").text(guestPizza.topping);
    $("#pizzaSize").text(guestPizza.size);
    $("#totalPrice").text(guestPizza.calcCost());
  });
});