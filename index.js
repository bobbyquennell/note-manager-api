const yargs = require('yargs'); 
const note = require('./notes');

let cmd = yargs.argv._[0];
const argv = yargs.argv;
console.log('Yargs',argv);
console.log(cmd);

if(cmd === 'add'){
  var note = note.addNote(argv.title, argv.body);
  if(note){
    console.log('Note Created');
    note.logNote(note);

  }
} else if (cmd === 'list'){
  note.getAll();
} else if (cmd ==='read'){
  note.read(argv.title)
} else if (cmd ==='remove'){
  note.remove(argv.title);
}
else {
  console.log('unrecognized command!');
}