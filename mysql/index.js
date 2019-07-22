

/**
 * 
 *   dbName: 'rupid',
    host: "localhost",
    port: 3306,
    user: 'root',
    pwd: '!QAZ2wsx'
 */

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'rupid',
  password: '!QAZ2wsx'
});

module.exports = {
  connection
} 