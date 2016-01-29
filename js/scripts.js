function Pizza(pizzaSize, pizzaStyle, twoDollarTopping, threeDollarTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaStyle = pizzaStyle;
  this.twoDollarTopping = twoDollarTopping;
  this.threeDollarTopping = threeDollarTopping;
  this.pizzaPrice = [];
}

Pizza.prototype.price = function() {
  var sizePrice = {};
  sizePrice["personal"] = 9;
  sizePrice["small"] = 12;
  sizePrice["medium"] = 16;
  sizePrice["large"] = 22;

  var stylePrice = {};
  stylePrice["veggie"] = 0;
  stylePrice["vegan"] = 3;

  var twoDollarToppingPrice = {};
  twoDollarToppingPrice["pepperoncinis"] = 2;
  twoDollarToppingPrice["olives"] = 2;
  twoDollarToppingPrice["red-onion"] = 2;

  var threeDollarToppingPrice = {};
  threeDollarToppingPrice["tempeh"] = 3;
  threeDollarToppingPrice["field-roast"] = 3;
  threeDollarToppingPrice["black-tofu"] = 3;

  var total = pizzaPrice[this.pizzaSize] + stylePrice[this.pizzaStyle] + twoDollarToppingPrice[this.twoDollarTopping] + threeDollarToppingPrice[this.threeDollarTopping];
  return total;
  // console.log(pizzaSize);
  //       console.log(pizzaStyle);
  //             console.log(twoDollarTopping);
  //                   console.log(threeDollarTopping);
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

      $(".final-pizza-size").text(newPizza.pizzaSize);
      $(".final-pizza-style").text(newPizza.pizzaStyle);
      $(".final-first-topping").text(newPizza.twoDollarTopping);
      $(".final-second-topping").text(newPizza.threeDollarTopping);
      $(".final-pizza-price").text(newPizza.price());

    resetFields();
  });
});
