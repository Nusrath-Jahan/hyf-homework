let name = 'nusrat';
console.log(name);
// alert("alart") ;
// document.getElementById("paragraph-1").innerHTML = "Hello from javascript";
// const person = {
//     name: Nusrat,
//     age: 30
// };
let per ="nus";
console.log(per);
const students =[
    {
    name: "Nus",
    age:30
},
{
    name: "shab",
    age:34
},
{name: "hammer",
    bang: function(){
        console.log("I am here")
    }
},

{name: "hammer",
    ang: function(material){
        console.log("I am here")
    }
}

];
const material = "wall";
console.log(students[1].name);
console.log(typeof students[1]);
console.log(students[1].name.toUpperCase());
console.log(students[2].bang());

console.log(students[3].ang(material));

let nul = 20;
let met = "30";
console.log(nul + Number(met));
//-----------------------------------------
let num = 55 * 24 ;

console.log(num);

const myName = "Nusrath";

console.log(myName.charAt(0));

let arrayString = ["sojib","rajib","Jannat",10 , 20 , 30,true, false, 2 < 2];
console.log(arrayString[3]);

console.log(myName.charAt(6));
console.log(myName.slice(-1));
console.log(myName[myName])
console.log(arrayString.push('Rimu'))
console.log(arrayString);
//------------------------------------------
           //Fix and errors

// const name = 'benjamin';
//  name = 'benjamin-better'; //(it is reserved word /eta k change kora jabe na)

// const pizzaPrice = 78;
// const pizzaPriceDiscounted = pizzaprice - 10; //(ekane pizzaprice vul)


// const users = ['peter', 'Johnny', 'Børge'];
// const lastUser = users[3];   //(ekhane to 3 e nai)

//---------------------------------------------------------