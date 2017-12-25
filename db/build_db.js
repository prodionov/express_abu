const fs = require('fs');

const dbConnection = require('./db_connection');

const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

dbConnection.query(sql, (err, res) => {
  if (err) throw err;
  console.log('users table is created with result:', res);
});
