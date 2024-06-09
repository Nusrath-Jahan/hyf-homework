
const dogYearOfBirth = 2019;
const dogYearFuture  = 2030;
let dogYear = dogYearFuture - dogYearOfBirth ;
const shouldShowResultInDogYears = true ;

if (shouldShowResultInDogYears) {
    
}
dogYear = dogYear * 7;

if(shouldShowResultInDogYears){
    console.log(`My dog will be ${dogYear} dog years old in ${dogYearFuture}`)
} else {
    console.log(`My dog will be ${dogYear} human years old in ${dogYearFuture}`)
}