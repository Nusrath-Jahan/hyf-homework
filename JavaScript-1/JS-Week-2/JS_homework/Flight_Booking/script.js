
const firstnameInput = document.querySelector('main input.firstname');
const lastnameInput = document.querySelector('main input.lastname');
const useFormalNameInput = document.querySelector('main input[name="use-formal-name"]');
const boardingcardButton = document.querySelector("main button");
const genderInput = document.getElementById("genderInput");
const boardingcard = document.querySelector("main div.boardingcard");
const fullnameElement = document.querySelector("main div.boardingcard .fullname");

boardingcardButton.addEventListener("click", () => {
    const firstname = firstnameInput.value;
    const lastname = lastnameInput.value;
    const useFormalName = useFormalNameInput.checked;
    const gender = genderInput.value;
    function getFullname(firstname, lastname, useFormalName, gender ){
        if (useFormalName) {
            if (gender === "female") {
                return `Lady ${firstname} ${lastname}`;
            } else {
                return `Lord ${firstname} ${lastname}`;
            }
        } else {
            return `${firstname} ${lastname}`;
        }
    }
    
    const fullname = getFullname(firstname, lastname, useFormalName, gender);
    
    fullnameElement.innerHTML = fullname;
    boardingcard.classList.remove('hidden');
});

// function getFullName(firstname, surname, useFormalName ){
   
//     if (useFormalName === true) {
//        return `Lord ${firstname} ${surname}` ;
//     }else{
//         return firstname + " " + surname ;
//     }
// }
// let fullname1 = getFullName("Shabbir" , "Ahammed", true);
// let fullname2 = getFullName("Nusrath" ,"Jahan", false);

// console.log(fullname1);
// console.log(fullname2);

