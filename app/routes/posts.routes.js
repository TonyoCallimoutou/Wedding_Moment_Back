module.exports = app => {
    const posts = require("../controlers/posts.controlers.js");
  
    var router = require("express").Router();
  
    // Create a new Posts
    router.post("/", posts.create);
  
    // Retrieve all Posts
    router.get("/", posts.getAll);

    // Retrieve Posts by id
    router.get("/:id", posts.getPostById);
  
    // Delete a Posts with id
    router.delete("/:id", posts.delete);
  
    app.use('/api/posts', router);
  };