module.exports = app => {
    const posts = require("../controlers/posts.controlers.js");
  
    var router = require("express").Router();
  
    // Create a new Posts
    router.post("/", posts.create);
  
    // Retrieve all Posts
    router.get("/event/:id", posts.getAll);

    // Retrieve Posts by id
    router.get("/:id", posts.getPostById);

    // Change Picture of Post
    router.post("/setter", posts.setPictureOfPost)
  
    // Delete a Posts with id
    router.delete("/:id", posts.delete);
  
    app.use('/api/posts', router);
  };