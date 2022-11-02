module.exports = app => {
    const comments = require("../controlers/comments.controlers.js");
  
    var router = require("express").Router();
  
    // Create a new Comment
    router.post("/", comments.create);

    // Retrieve Comment by id
    router.get("/:id", comments.getCommentsById);

    // Retrieve Comment by Userid
    router.get("/user/:id", comments.getCommentsByUserId);

    // Retrieve All Comments
    router.get("/", comments.getAll)
  
    // Delete a Comment with id
    router.delete("/:id", comments.delete);
  
    app.use('/api/comments', router);
  };