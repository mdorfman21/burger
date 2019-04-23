let mysql = require("mysql");

const db = process.env.JAWSDB_URL || {
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
};

let connection = mysql.createConnection(db);

connection.connect(err => {
  if (err) {
    console.log(`there was an error connecting ${err.stack}`);
    return;
  }
  console.log(`connected as ${connection.threadId} on http://localhost:3306`);
});

module.exports = connection;
