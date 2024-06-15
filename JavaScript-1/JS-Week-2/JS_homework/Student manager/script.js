const class07Students = [];

function addStudentToClass(studentName) {

    if (!studentName){
        console.log("Cannot add an empty string to a class");
            return;
        } 


      if(class07Students.includes(studentName)){
        console.log(`Student ${studentName} is already in the class`);
    return;
    }
    if (studentName.toLowerCase() === 'queen') {
        class07Students.push(studentName);
        return;
    }

    
  if (class07Students.length >= 6) {
    console.log(`Cannot add more students to class 07`);
    return;
  }
        
  class07Students.push(studentName) ;


}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass('Nusrath');
addStudentToClass('Shabbir');
addStudentToClass('Irrina');
addStudentToClass('Shoma');
addStudentToClass('Jack');
addStudentToClass('Tommas');

console.log(class07Students);



addStudentToClass('Jahan');

addStudentToClass('Nusrath');

addStudentToClass('Queen'); 
console.log(class07Students);
console.log(getNumberOfStudents());


