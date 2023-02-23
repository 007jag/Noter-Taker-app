const fs = require('fs');
const path = require('path');

function updateDb(id, notesArray) {
  const deletedNoteIndex = notesArray.findIndex(note => note.id === id);
  if (deletedNoteIndex !== -1) {
    notesArray.splice(deletedNoteIndex, 1);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
  }
}

function createNewNote(body, notesArray) {
  const newNote = body;
  notesArray.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return newNote;
}

module.exports = {
  updateDb,
  createNewNote,
};
