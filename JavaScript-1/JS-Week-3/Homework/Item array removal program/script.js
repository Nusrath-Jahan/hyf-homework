const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Find the index of the item to remove
const index = names.indexOf(nameToRemove);
console.log(index);

// If the item is found (index is not -1), remove it
if (index !== -1) {
  names.splice(index, 1);
}

// The modified array
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
