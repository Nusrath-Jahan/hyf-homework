// avg.js
if (process.argv.length <= 2) {
    console.log("Please provide numbers as arguments.");
    process.exit(1);
}

let numbers = process.argv.slice(2).map(Number);
let sum = numbers.reduce((acc, val) => acc + val, 0);
let avg = sum / numbers.length;

console.log(`The average is: ${avg}`);
