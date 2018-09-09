// const personString = '{"name": "bobby", "age": 25}';
// const person = JSON.parse(personString);
// console.log( typeof person);
// console.log(person);

const fs = require('fs');

const note = {
  title: 'my title',
  body: 'some body'
};

fs.writeFileSync('note.json', JSON.stringify(note));
const noteObject = JSON.parse(fs.readFileSync('note.json'));

console.log(typeof noteObject);
console.log(noteObject);