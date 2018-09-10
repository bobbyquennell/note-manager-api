const express = require("express");

const app = express();

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
  resp.send('About Page');
})

app.get('/bad', (req, resp)=>{
  resp.send({
    errorMessage:'error details'
  });
})

app.listen(3000, ()=>{
  console.log( 'app server started at port: 3000');
});


