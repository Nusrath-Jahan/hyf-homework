
const firstWords = ["Easy", "Awesome", "Corporate", "Innovative", "Dynamic", "Creative", "Smart", "Tech", "NextGen", "Future"];
const secondWords = ["Solutions", "Corporation", "Enterprises", "Technologies", "Systems", "Developments", "Networks", "Ventures", "Innovations", "Dynamics"];

const randomNumber = Math.floor(Math.random() * 10);


const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

const numberOfCharacters = startupName.length;


console.log(`The startup: "${startupName}" contains ${numberOfCharacters} characters`);



 