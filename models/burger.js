let orm = require("../config/orm");

module.exports = {
  getBurgers: function(cb) {
    orm.selectAll("burgers", function(ans) {
      cb(ans);
    });
  },

  insertBurger: function(burgerName) {
    orm.insertOne("burgers", burgerName, 0, function() {});
  },

  updateBurger: function(burgerID) {
    orm.updateOne("burgers", 1, burgerID, function() {});
  }
};
