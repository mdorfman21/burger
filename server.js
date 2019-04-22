let express = require("express");

let PORT = process.env.PORT || 8080;

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./controllers/burger_controllers.js")(app);

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
