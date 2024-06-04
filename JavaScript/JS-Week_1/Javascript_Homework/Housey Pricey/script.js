// Peter's parameters
let pWidth = 8;
let pHeight = 10;
let pDepth = 10;
let pGardenSize = 100;
let pRealPrice = 2500000;

// Julia's parameters
let jWidth = 5;
let jHeigth = 8;
let jDepth = 11;
let jGardenSize = 70;
let jRealPrice = 1000000;

let peterVolume = pWidth * pHeight * pDepth;
let juliaVolume = jWidth * jHeigth * jDepth;

let peterHousePrice = peterVolume * 2.5 * 1000 + pGardenSize * 300;
let juliaHousePrice = juliaVolume * 2.5 * 1000 + jGardenSize * 300;

if (peterHousePrice > pRealPrice) {
  console.log("Peter is paying too much for his house.");
} else {
  console.log("Peter is paying too little for his house");
}

if (juliaHousePrice > jRealPrice) {
  console.log("Julia is paying too much for her house.");
} else {
  console.log("Julia is paying too little for her house.");
}