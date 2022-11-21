// const mysql = require("mysql2");
// const dbConfig = require("../config/db.config.js");


// const connection = mysql.createConnection({
//   host     : dbConfig.host,
//   user     : dbConfig.user,
//   password : dbConfig.password,
//   database : dbConfig.database
// });

// connection.connect(error => {
//   if (error) throw error;
//   console.log("Successfully connected to the database.");
// });

// async function query(sql, params) {
//   try {
//     return await connection.execute(sql, params);
//   } catch (err) {
//     console.error(`Error db.js `, err.message);
//     console.error(`db.js :`, sql + " + " + params);
//   }
// }

// module.exports = {
//     query,
//     connection
// }

const mysql = require('mysql');
const MySQLEvents = require('@rodrigogs/mysql-events');
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

const instance = new MySQLEvents(connection, {
  startAtEnd: true,
  excludedSchemas: {
    mysql: true,
  },
});

const program = async () => {
  await instance.start();

  instance.addTrigger({
    name: 'All database events for table Pictures',
    expression: '*',
    statement: MySQLEvents.STATEMENTS.ALL,
    onEvent: (event) => { // You will receive the events here
      //console.log('event = ', event);
    },
  });
  
  instance.on(MySQLEvents.EVENTS.CONNECTION_ERROR, console.error);
  instance.on(MySQLEvents.EVENTS.ZONGJI_ERROR, console.error);
};

program()
  .then(() => console.log('Waiting for database events...'))
  .catch(console.error);


async function query(sql, params) {
  try {  
    return await connection.query(sql, params);
  } catch (err) {
    console.error(`Error db.js `, err.message);
    console.error(`db.js :`, sql + " + " + params);
  }
}

module.exports = {
    query,
    instance
}
