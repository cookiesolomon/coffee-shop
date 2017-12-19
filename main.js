var coffeeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  buySupplies: function (amountOfUnits) {
    var beansUnitPrice = 15;
    var total = amountOfUnits * beansUnitPrice;
    if (this.money >= total) {
      this.money = this.money - total;
      console.log('there is ' + this.money + ' left');
    } else {
      alert("there is no more cash left in the shop");
    }

  },

  makeDrink: function (drinkType) {
    if (this.drinkRequirements[drinkType] === undefined) {
      alert("Sorry, we don't make " + drinkType);
    }
    else if (this.beans < this.drinkRequirements[drinkType]) {
      alert("Sorry, we're all out of beans!");
    }
    else {
      this.beans -= this.drinkRequirements[drinkType];
      alert(this.beans);
    }
  }

};


//coffeeShop.buySupplies(1);
//coffeeShop.makeDrink("americano");
//coffeeShop.makeDrink("filtered");
//coffeeShop.makeDrink("doubleShot");
//coffeeShop.makeDrink("frenchPress");

