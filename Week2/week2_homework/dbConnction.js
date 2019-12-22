'use strict';

// require modules & packages
const mysql = require('mysql');
const util = require('util');

// db connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'userdb',
});

module.exports = { mysql, util, db };
