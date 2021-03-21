const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

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
app.use(cookieParser());
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

app.get('/sign-up', (req, res) => {
    // let post = {email: req.body.usermail, password: req.body.userpwd};
    // console.log(`up: ${tempData}`);
    let sql = 'INSERT INTO user SET ?'
    // let query = db.query(sql, post, (err, result) => {
    //     if(err) throw err;
    //     console.log(result);
    //     res.send('You are member now...');
    // })
});

app.get('/sign-in', (req, res) => {
    let email = req.cookies.userEmail;
    let pwd = req.cookies.userPassword;
    if (email) { // check if is a member
        let sql = `SELECT * FROM user WHERE email = ${email} AND password = ${pwd}`;
        let query = db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
        }) 
        res.render('MemberPage');
    }
});

app.post('/signed', (req, res) => {
    console.log(req.body); 
    res.cookie( 'userEmail',  req.body.usermail, 'userPassword', req.body.userpwd);

    // return tempData
    if (req.body['sign-up'] === 'Sign up') {
        res.redirect('/sign-up');
    } else if (req.body['sign-in'] === 'Sign in') {
        res.redirect('/sign-in');
    }
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});