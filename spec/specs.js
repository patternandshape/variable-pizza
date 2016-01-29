describe("Pizza", function(){
  it("will take in user's choices to return all pizza properties", function(){
    var testPizza = new Pizza("small", "veggie", "olives", "tempeh");
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.pizzaStyle).to.equal("veggie");
    expect(testPizza.twoDollarTopping).to.equal("olives");
    expect(testPizza.threeDollarTopping).to.equal("tempeh");
    expect(testPizza.pizzaPrice).to.eql([]);
  });

  it("will return the price for the pizza based on selected items", function(){
    var testPizza = new Pizza("large", "vegan", "olives", "tempeh");
    expect(testPizza.price()).to.eq(30);
  });
});
