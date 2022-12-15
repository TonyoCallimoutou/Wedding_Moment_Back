module.exports = app => {
    const comments = require("../controlers/comments.controlers.js");
  
    var router = require("express").Router();
  
    // Create a new Comment
    router.post("/", comments.create);

    // Retrieve Comment by id
    router.get("/:id", comments.getCommentsById);

    // Retrieve Comment by Userid
    router.get("/post/:id", comments.getCommentsByPostId);

    // Retrieve All Comments
    router.get("/", comments.getAll)
  
    // Delete a Comment with id
    router.delete("/", comments.delete);
  
    app.use('/api/comments', router);
  };