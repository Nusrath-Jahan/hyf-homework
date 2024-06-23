const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

function getNote(id) {
  if (typeof id !== "number") {
    console.error("Error: The id should be a number");
    return;
  }

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }

  console.error(`Error: Note with id ${id} not found`);
}
console.log(getNote(2));

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(`Id: ${notes[i].id}, Note: ${notes[i].content}`);
  }
}

saveNote("Make Food", 3);
saveNote("clean up", 4);

console.log(notes);

const firstNote = getNote(1);
console.log(firstNote);

logOutNotesFormatted();
