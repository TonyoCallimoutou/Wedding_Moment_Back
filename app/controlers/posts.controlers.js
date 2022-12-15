const Posts = require("../model/posts.model.js");

// Create and Save a new Post
exports.create = (req, res) => {
    
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      const post = new Posts({
        postId: req.body.postId,
        categorieId: req.body.categorieId,
        pictureUrl: req.body.pictureUrl,
        countLike: req.body.countLike,
        countComment: req.body.countComment,
        userId: req.body.userId,
        userName: req.body.userName,
        photoUrl: req.body.photoUrl,

      });
    
      // Save Post in the database
      Posts.create(post, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Post."
          });
        else res.send(data);
      });
};

// Retrieve post by id.
exports.getPostById = (req, res) => {
    const id = req.params.id;

    Posts.getPostById(id, (err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Post."
            });
        else res.send(data);
    });
};

// Retrieve all Post
exports.getAll = (req, res) => {

    Posts.getAll((err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Post."
            });
        else res.send(data);
    });
};


// Delete Post by Id
exports.delete = (req, res) => {
    Posts.delete(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Post with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Post with id " + req.params.id
            });
          }
        } else res.send({ message: `Post was deleted successfully!` });
      });
};