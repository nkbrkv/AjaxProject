const express = require('express');
const app = express();

app.use(express.static('www'));

const db = {
  'Cat': {status: 'You are Cat', pic: './img/cat.jpg'},
  'Dog':   {status: 'You are Dog',   pic: './img/dog.jpg'}
};

app.get('/www', (req, res) => {
  const allParam = Object.keys(db);
  console.log('allParam is:', allParam);
  res.send(allParam);
});

app.get('/www/:id', (req, res) => {
  const nameToLookup = req.params.id; 
  const val = db[nameToLookup];
  console.log(nameToLookup, '->', val);
  if (val) {
    res.send(val);
  } else {
    res.send({});
  }
});

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
  console.log('The site is located at http://localhost:3000/index.html');
});