const mysql = require("mysql2");
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
    const [results, ] = await connection.execute(sql, params);
    return results;
  } catch (err) {
    console.error(`Error db.js `, err.message);
  }
}

module.exports = {
    query,
    connection
}