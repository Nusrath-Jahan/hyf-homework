
const candyPrices = {
    sweet: 0.5,
    chocolate: 0.7,
    toffee: 1.1,
    'chewing-gum': 0.03
};


const boughtCandyPrices = [];


function addCandy(candyType, weight) {
  
    if (candyPrices[candyType] !== undefined) {
      
        const price = candyPrices[candyType] * weight;
        boughtCandyPrices.push(price);
    } else {
        console.log('Invalid candy type');
    }
}


function getTotalPrice() {
    let totalPrice = 0;
    for (let price of boughtCandyPrices) {
        totalPrice += price;
    }
    return totalPrice;
}


function canBuyMoreCandy() {

    const amountToSpend = Math.random() * 100;
    const totalSpent = getTotalPrice();
    return totalSpent < amountToSpend;
}





addCandy('sweet', 20);
addCandy('chocolate', 10);
addCandy('toffee', 5);
addCandy('chewing-gum', 100);

console.log(boughtCandyPrices); 
console.log(`Total price: ${getTotalPrice()}`); 


if (canBuyMoreCandy()) {
    console.log("You can buy more, so please do!");
} else {
    console.log("Enough candy for you!");
}

