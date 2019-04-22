let connection = require("./connection");

let orm = {
  selectAll: function(tableToSearch, cb) {
    let queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableToSearch], (err, ans) => {
      if (err) throw err;
      cb(ans);
    });
  },
  insertOne: function(tableToSearch, burgerName, isDevoured, cb) {
    let queryString = "INSERT INTO ?? SET ?";
    connection.query(
      queryString,
      [
        tableToSearch,
        {
          burger_name: burgerName,
          devoured: isDevoured
        }
      ],
      err => {
        if (err) throw err;
        cb(console.log(`${burgerName} created!`));
      }
    );
  },
  updateOne: function(tableToSearch, isDevoured, burgerID, cb) {
    let queryString = "UPDATE ?? SET ? WHERE ?";
    connection.query(
      queryString,
      [
        tableToSearch,
        {
          devoured: isDevoured
        },
        {
          id: burgerID
        }
      ],
      (err, ans) => {
        if (err) throw err;
        cb(ans);
      }
    );
  }
};

module.exports = orm;
