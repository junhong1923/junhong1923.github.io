const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser')

// Create connection
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'assignment'
});

// Connect
db.connect((err) => {
    if(err) throw err;
    console.log('MySQL Connected...');
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE assignment';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// Create table
app.get('/createtable', (err, res) => {
    let sql = 'CREATE TABLE user(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('user table created...');
    });
});

app.get('/', (req, res) => {
    console.log('welcome to page...');
    res.render('HomePage');
})

function Signed() {
    const signUp = document.querySelector('button[value="sign-in"]');
    const signIn = document.querySelector('button[value="sign-in"]');

    signUp.addEventListener('change', (event) => {
        console.log('sign up...');
    });
}

app.post('/signed', (req, res) => {
    console.log(req.body.usermail);
    // console.log(req.button.value);
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});