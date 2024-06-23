const students = [
    {
        name: 'John',
        lastName: 'Doe',
        birthYear: 1990,
        getAge: function (birthYear) {
            const currentYear = new Date().getFullYear();
            const age = currentYear - this.birthYear;
            console.log(this.lastName);            
            return age;
        }
    },
    {
        name: 'Jane',
        lastName: 'Carpenter',
        birthYear: 1994,
        getAge: function () {
            const age = 30
            return age;
        }
    }
];

for ( let i = 0; i<students.length; i++){
    console.log("Student Age", students[i].getAge());
}

for ( let i = students.length - 1; i >= 0; i-- ){
    console.log("Student Age Backwards", students[i].getAge());
}
//Array

const pet = ["Dog",
    "Cat"];
    pet.push("Monkey");
    pet.unshift("Bird");
    console.log(pet);

console.log(students[0].getAge());



function findLongest(str) {



  
    var spl = str.findLongest();
    var longest = 0;
    
for (var i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length 
      }
    }
      return longest;
    
    console.log(longest);
  }

  //-------------------
  const numbers =  [20, 100, 87, 2, 1, 260, -60, 5, 4];

  function getSmallestNumber(){
     let smallestNumber = 99999;
 for (let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    if(number < smallestNumber){
        smallestNumber = number;
    }
 }
 return smallestNumber;
 
  }
  
  console.log(getSmallestNumber());
  //---------------
 

function getWordFrequency() {
    let frequencyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    frequencyText = frequencyText.replace(',','').replace(',','')
    // frequencyText = frequencyText.replace(',','');

const words = frequencyText.split(" ");
const wordFrequency = {} ;

for(let i = 0; i<words.length;i++){
    const word = words[i];

    if (!wordFrequency[word]){
        wordFrequency
    }

}


console.log(words);
}


 
 