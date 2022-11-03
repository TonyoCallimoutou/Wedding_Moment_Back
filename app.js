const express =  require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors({origin: 'http://localhost:4200'}));

app.get("/", (req, res) => {
  res.json({ message: "Test reusi app.js" });
});

require("./app/routes/users.routes.js")(app);
require("./app/routes/comments.routes.js")(app);
require("./app/routes/pictures.routes.js")(app);

module.exports = app;