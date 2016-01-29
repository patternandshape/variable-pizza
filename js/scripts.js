function Pizza(pizzaSize, pizzaStyle, twoDollarTopping, threeDollarTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaStyle = pizzaStyle;
  this.twoDollarTopping = twoDollarTopping;
  this.threeDollarTopping = threeDollarTopping;
  this.pizzaPrice = [];
}

Pizza.prototype.price = function() {
  var sizePrice = {};
  sizePrice["Personal"] = 9;
  sizePrice["Small"] = 12;
  sizePrice["Medium"] = 16;
  sizePrice["Large"] = 22;

  var stylePrice = {};
  stylePrice["Veggissimo"] = 0;
  stylePrice["Veganississimo"] = 3;

  var twoDollarToppingPrice = {};
  twoDollarToppingPrice[""] = 0;
  twoDollarToppingPrice["pepperoncinis"] = 2;
  twoDollarToppingPrice["olives"] = 2;
  twoDollarToppingPrice["red onion"] = 2;

  var threeDollarToppingPrice = {};
  threeDollarToppingPrice[""] = 0;
  threeDollarToppingPrice["tempeh"] = 3;
  threeDollarToppingPrice["Field Roast sausage"] = 3;
  threeDollarToppingPrice["blackened tofu"] = 3;

  var total = sizePrice[this.pizzaSize] + stylePrice[this.pizzaStyle] + twoDollarToppingPrice[this.twoDollarTopping] + threeDollarToppingPrice[this.threeDollarTopping];
  return total;
}

function resetFields() {
  $("select.pizza-size").val("");
  $("select.veggie-vegan").val("");
  $("select.two-dollar-topping").val("");
  $("select.three-dollar-topping").val("");
}

$(document).ready(function() {
  $("form#pizzaSelect").submit(function() {
    event.preventDefault();

    var selectedSize = $(this).find("select.pizza-size").val();
    var selectedStyle = $(this).find("select.veggie-vegan").val();
    var selectedTwoDollarTopping = $(this).find("select.two-dollar-topping").val();
    var selectedThreeDollarTopping = $(this).find("select.three-dollar-topping").val();
    var newPizza = new Pizza(selectedSize, selectedStyle, selectedTwoDollarTopping, selectedThreeDollarTopping)

    $("#show-receipt").show();
    $(".final-pizza-size").text(newPizza.pizzaSize);
    $(".final-pizza-style").text(newPizza.pizzaStyle);
    $(".final-first-topping").text(newPizza.twoDollarTopping);
    $(".final-second-topping").text(newPizza.threeDollarTopping);
    $(".final-pizza-price").text(newPizza.price());

    resetFields();
  });
});
