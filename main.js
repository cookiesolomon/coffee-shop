var coffeeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: {
      beanRequirment: 10,
      price: 3
    },
    americano: {
      beanRequirment: 5,
      price: 4
    },
    doubleShot: {
      beanRequirment: 15,
      price: 5
    },
    frenchPress: {
      beanRequirment: 12,
      price: 4
    }
  },

  buySupplies: function (amountOfUnits) {
    var beansUnitPrice = 15;
    var total = amountOfUnits * beansUnitPrice;

    if (total <= this.money) {
      this.beans += amountOfUnits;
      console.log('there are ' + this.beans + ' units now in the shop');
      this.money = this.money - total;
      console.log('there is $' + this.money + ' left');
    } else {
      alert("there is no more cash left in the shop");
    }

  },

  makeDrink: function (drinkType) {
    if (!this.drinkRequirements[drinkType]) {
      alert("Sorry, we don't make " + drinkType);
    }
    else if (this.beans < this.drinkRequirements[drinkType].beanRequirment) {
      alert("Sorry, we're all out of beans!");
    }
    else {

      alert("Enjoy your " + drinkType + " there are " + (this.beans -= this.drinkRequirements[drinkType].beanRequirment) + " beans left");

    }
  },
  buyDrink: function (drink) {
    if (!this.drinkRequirements[drink]) {
      alert('We dont sell that drink');
      return;
    } else
      console.log("there is $" + (this.money += this.drinkRequirements[drink].price) + " in the register");
    this.makeDrink(drink);


  }

};

coffeeShop.buyDrink('latte');



