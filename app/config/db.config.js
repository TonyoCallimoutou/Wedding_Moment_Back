require('dotenv').config();

module.exports = {
    host: process.env.IP_MYSQL,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
};