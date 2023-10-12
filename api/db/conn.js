const mysql = require("mysql");

//DB connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
});

module.exports = connection;
