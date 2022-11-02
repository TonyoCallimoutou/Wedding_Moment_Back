module.exports = app => {
    const users = require("../controlers/users.controlers.js");
  
    var router = require("express").Router();
  
    // Create a new Users
    router.post("/", users.create);
  
    // Retrieve all Users
    router.get("/", users.getAll);

    // Retrieve User by id
    router.get("/:id", users.getUserById);
  
    // Delete a Users with id
    router.delete("/:id", users.delete);
  
    app.use('/api/users', router);
  };