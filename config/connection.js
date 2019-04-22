let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(err => {
  if (err) {
    console.log(`there was an error connecting ${err.stack}`);
    return;
  }
  console.log(`connected as ${connection.threadId} on http://localhost:3306`);
});

module.exports = connection;
