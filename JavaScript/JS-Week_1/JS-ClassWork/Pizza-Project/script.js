console.log("I love pizza");

let pizzaName = "Kebab Pizza" ;
let pizzaPrice = 95;
console.log("New pizza order: "+pizzaName + " and " + "The price of the pizza is: "+ pizzaPrice);
console.log(`New pizza order: ${pizzaName} and The price of the pizza is ${pizzaPrice}`);
let amountOfPizza = 2 ;
let familySizepPizza =  12;


const amount = 10;
const isFamilySize = false;
const price = 50;

const totalPrice = amount * price ;

if (isFamilySize){
    totalPrice = totalPrice * 2 ;
}

console.log(`New pizza order: ${amount} is Family Size:${isFamilySize}  ${pizzaName}. Total cost for the order is: ${totalPrice}`)



// function totalPriceOfPizza(pizzaPrice, amountOfPizza){
//      let pizzaPriceTotal = pizzaPrice * amountOfPizza ;
//      return pizzaPriceTotal;
// };

//  console.log(totalPriceOfPizza(95, 3));

//  console.log("New Pizza Order: "+ )