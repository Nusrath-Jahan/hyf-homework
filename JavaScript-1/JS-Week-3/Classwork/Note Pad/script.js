const students = [
  {
    name: "John",
    age: 10,
    subjects: ["math", "science", "art"],
  },
  {
    name: "Paul",
    age: 12,
    subjects: ["math", "sport", "art", "literature"],
  },
  {
    name: "Anthony",
    age: 12,
    subjects: ["nature", "art"],
  },
];
// const olderStudents = students.filter((students) => students.age > 10);
// console.log(olderStudents);

function getOlderStudents(students) {
  const olderStudents = [];
  for (let i = 0; i < students.length; i++) {
    const student = students[i];

    if (student.age > 10) {
      olderStudents.push(student);
    }
  }
  return olderStudents;
}
console.log(getOlderStudents(students));
