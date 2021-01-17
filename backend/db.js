const mysql = require("mysql")
const pool = mysql.createPool({
    connectionLimit:10,
    host : "localhost",
    user :"root",
    password: 7760,
    database: "docker_mysql"
});

exports.pool = pool;