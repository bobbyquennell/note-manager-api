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

module.exports = {
  addNote,
  getAll,
  read,
  remove
}