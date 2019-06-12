var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
    port: 3306,
    user: "l296lmge3v161nbq",
    password: "lmwkliiumvdsz0c3",
    database: "k2j3d6wdl5v22k68"
});

// Makes the connection to MYSQL
connection.connect(function (err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export the connection for the ORM
module.exports = connection;