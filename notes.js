const fs = require('fs');

const addNote = (title, body) =>{
 const note = {
   title,
   body
 }
let notes =[];
 try {
  notes = JSON.parse(fs.readFileSync('notes.json'));
 } catch (error) {
   return undefined;
 }
 const duplicateNotes = notes.filter(note=>note.title === title)
 if(duplicateNotes.length === 0) {
   notes.push(note);
   fs.writeFileSync('notes.json', JSON.stringify(notes));
  }

};
const getAll = ()=>{
  console.log('Listing all notes');
}
const read = (title)=>{
  console.log('Reading note',title);
}
const remove = (title)=>{
  console.log('Removing note', title);
}

const logNote = (note)=>{
  console.log('Note:');
  console.log('------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  getAll,
  read,
  remove,
  logNote
}