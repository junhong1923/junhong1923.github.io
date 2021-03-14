const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'pug');

// create root route
app.get('/', (req, res) => {
  res.send('<h1>Hello, My Server!</h1>');
});

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

app.get('/myName', (req, res) => {
  let name = req.cookies.username;
  // console.log(req.body.username);
  if (name) {
    res.send(`Hi ${name}`);
  } else {
      res.render('hello');
      // res.redirect('myName');
  }
});

app.get('/trackName', (req, res) => {
  res.redirect('/myName');
});

app.post('/myName', (req, res) => {
  console.log('post request to myName');
  res.cookie('username', req.body.username);
  res.redirect('/myName');
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000.');
});
