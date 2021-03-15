const express = require('express');
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'pug');

// asignment-1
app.get('/', (req, res) => {
  res.send('<h1>Hello, My Server!</h1>');
});

// asignment-2
app.get('/data', (req, res) => {
  let num = Number(req.query.number);
  if (!req.query.number) {
    res.send('Lack of Parameter');
  } else if (Number.isInteger(num)) {
    res.send( ((1+num)*num/2).toString() );
  } else {
    res.send('Wrong Parameter');
  }
});

// asignment-4
app.get('/myName', (req, res) => {
  if (req.cookies.cookieName) { // check if cookieName in request
    res.send(`Hi ${req.cookies.cookieName}`);
  } else {
    res.render('hello');
  }
});

app.get('/trackName', (req, res) => {
  if (req.query.username) {
    console.log('catch req.body.username');
    res.cookie( 'cookieName', req.query.username ); // store cookie as cookieName
  }
  return res.redirect('/myName');
});


app.listen(3000, () => {
  console.log('The application is running on localhost:3000.');
});
