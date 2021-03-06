const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const e = require('express');

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
    res.render('HomePage');
});

app.get('/MemberPage', (req, res) => {
    res.render('MemberPage', {message : 'Sign in successfully'});
});

app.get('/sign-up', (req, res) => {
    // console.log(req.cookies);
    let email = req.cookies.userInfo.usermail;
    let pwd = req.cookies.userInfo.userpwd;
    if (email != '' && pwd != '') {
        let sql = `SELECT * FROM assignment.user WHERE email = '${email}' AND password = ${pwd}`;
        let query = db.query(sql, (err, result) => {
            if(err) throw err;
            if (!result.length) { // 代表查不到，需要insert
                let post = {email:email, password:pwd};
                let sql = `INSERT INTO user SET ?`;
                let query = db.query(sql, post, (err, result) => {
                    if(err) throw(err);
                    console.log('Register successfully');
                    res.redirect('/MemberPage');
                });
            } else {
                res.render('HomePage', {message:'You have already been a member, please log in'});
            }   
        });
    } else {console.log('no userInfo...');} // 使用者可能什麼都沒輸入
});

app.get('/sign-in', (req, res) => {
    let email = req.cookies.userInfo.usermail;
    let pwd = req.cookies.userInfo.userpwd;
    if (email != '' && pwd != '') {
        let sql = `SELECT * FROM assignment.user WHERE email = '${email}' AND password = ${pwd}`;
        let query = db.query(sql, (err, result) => {
            if(err) throw err;
            if (!result.length) { // 代表查不到，非會員
                res.render('HomePage', {message : 'Wrong email or password, please try again or register an new account'});
            } else {
                console.log('Sign in successfully');
                res.redirect('/MemberPage');
            }   
        });
    } else {console.log('no userInfo...');} // 使用者可能什麼都沒輸入
});

app.post('/signed', (req, res) => {
    // console.log(req.body); 
    res.cookie( 'userInfo', req.body);

    if (req.body['sign-up'] === 'Register') {
        res.redirect('/sign-up');
    } else if (req.body['sign-in'] === 'Log in') {
        res.redirect('/sign-in');
    }
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});