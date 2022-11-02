const express =  require('express');

const app = express();

app.use(express.json());


app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Test reusi app.js" });
});

require("./app/routes/users.routes.js")(app);
require("./app/routes/comments.routes.js")(app);
require("./app/routes/pictures.routes.js")(app);

module.exports = app;