const express = require("express");
 const hbs = require('hbs');

const app = express();

// express template view engine: https://expressjs.com/en/guide/using-template-engines.html
app.set('view engine', 'hbs');


// allow the express server serve static files like html, js, images, or many other file types in a directory
app.use(express.static(__dirname + '/public'));

app.get('/', (req, resp)=>{
  resp.send({
    title: 'bobby\'s note',
    body: 'this is a body',
    likes: [
      'food',
      'travel'
    ]
  });
});

app.get('/about', (req, resp)=>{
  resp.render('about.hbs', 
  { title: 'about', 
    body: 'this is a body to about page', 
    currentYear: new Date().getFullYear()
  });
})

app.get('/bad', (req, resp)=>{
  resp.send({
    errorMessage:'error details'
  });
})

app.listen(3000, ()=>{
  console.log( 'app server started at port: 3000');
});


