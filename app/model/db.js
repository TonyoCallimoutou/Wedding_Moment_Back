const mysql = require('mysql2');
const dbConfig = require("../config/db.config.js");


const connection = mysql.createConnection({
    host     : dbConfig.host,
    user     : dbConfig.user,
    password : dbConfig.password,
    database : dbConfig.database
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

async function query(sql, params) {
  try {  
    return await connection.execute(sql, params);
  } catch (err) {
    console.error(`Error db.js `, err.message);
    console.error(`db.js :`, sql + " + " + params);
  }
}

module.exports = {
    query
}
