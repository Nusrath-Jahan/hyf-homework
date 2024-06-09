// Peter's parameters
const peterHouseWidth = 8;  
const peterHouseHeight = 10;
const peterHouseDepth = 10;
const peterHouseGardenSize = 100;
const peterHouseRealPrice = 2500000;

// Julia's parameters
const juliaHouseWidth = 5;
const juliaHouseHeigth = 8;
const juliaHouseDepth = 11;
const juliaHouseGardenSize = 70;
const juliaHouseRealPrice = 1000000;

let peterHouseVolume =  peterHouseWidth *  peterHouseHeight *  peterHouseDepth;
let juliaHouseVolume = juliaHouseWidth * juliaHouseHeigth * juliaHouseDepth;

let peterHousePrice = peterHouseVolume * 2.5 * 1000 + peterHouseGardenSize * 300;
let juliaHousePrice = juliaHouseVolume * 2.5 * 1000 + juliaHouseGardenSize * 300;

if (peterHousePrice > peterHouseRealPrice) {
  console.log("Peter is paying too much for his house.");
} else {
  console.log("Peter is paying too little for his house");
}

if (juliaHousePrice > juliaHouseRealPrice) {
  console.log("Julia is paying too much for her house.");
} else {
  console.log("Julia is paying too little for her house.");
}