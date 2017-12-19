var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    if(drinkType !== drinkRequirements[drinkType]){
      alert('Sorry, we dont make ' + drinkType);
    } else if (drinkType === drinkRequirements[drinkType]){
      this.beans
    }
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");



/*Only allows you make a drink if it's a drink in the drinkRequirements object. Otherwise alert: "Sorry, we don't make DRINKNAME".
If the drink is part of the drinkRequirements object, reduce the amount of beans by the number of beans required for that drink.
If there are not enough beans to make that drink, alert: "Sorry, we're all out of beans!".*/