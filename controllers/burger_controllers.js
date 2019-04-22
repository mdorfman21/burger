let burger = require("../models/burger");
let express = require("express");

let app = express();

module.exports = function(app) {
  app.get("/", (req, res) => {
    burger.getBurgers(function(burgers) {
      let hbsObject = {
        burgers: burgers
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  app.post("/api/new", (req, res) => {
    console.log(req.body);
    burger.insertBurger(req.body.burgerName);
  });

  app.put("/api/update/:id", (req, res) => {
    burger.updateBurger(req.params.id);
  });
};
