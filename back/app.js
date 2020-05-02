var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "sqli",
    user: "root",
    password: "",
    multipleStatements: true
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to mysql db!');
}); 

var shop = require('./routes/shop');

var app = express();

app.set('con', con);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1', shop);

module.exports = app;
