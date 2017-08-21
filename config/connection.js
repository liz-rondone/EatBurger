// set up mysql connection
var mysql = require('mysql');
var keys = require('./keys.js');
var pswd = keys.mysqlKey.mysqlPassword;

var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: pswd,
    database: 'cupcake_db'
});

// make connection
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadID);
});

// edport connection for ORM
module.exports = connection;