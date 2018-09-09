const yargs = require('yargs'); 
const note = require('./notes');

let cmd = yargs.argv._[0];
const argv = yargs.argv;
console.log('Yargs',argv);
console.log(cmd);

if(cmd === 'add'){
  note.addNote(argv.title, argv.body);
} else if (cmd === 'list'){
  note.getAll();
} else if (cmd ==='read'){
  note.read(argv.title)
} else if (cmd ==='remove'){
  note.remove(argv.title);
}
else {
  console.log('unrecognized command');
}