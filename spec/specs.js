describe("Pizza", function() {
  it("will take in user's choices to return all pizza properties", function() {
    var testPizza = new Pizza("Small", "Veggissimo", "olives", "tempeh");
    expect(testPizza.pizzaSize).to.equal("Small");
    expect(testPizza.pizzaStyle).to.equal("Veggissimo");
    expect(testPizza.twoDollarTopping).to.equal("olives");
    expect(testPizza.threeDollarTopping).to.equal("tempeh");
    expect(testPizza.pizzaPrice).to.eql([]);
  });

  it("will return the price for the pizza based on selected items", function() {
    var testPizza = new Pizza("Large", "Veganississimo", "olives", "tempeh");
    expect(testPizza.price()).to.eq(30);
  });
});
