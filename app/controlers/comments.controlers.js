const Comments = require("../model/comments.model.js");
const Posts = require("../model/posts.model.js");


// Create and Save a new Comment
exports.create = (req, res) => {
    
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      const comment = new Comments({
        commentId : req.body.commentId,
        postId : req.body.postId,
        comment : req.body.comment,
        countLikeComment : req.body.countLikeComment,
        userId : req.body.userId,
        userName: req.body.userName,
        photoUrl: req.body.photoUrl,
      });
    
      // Save Comment in the database
      Comments.create(comment, (err, result) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Comment."
          });
        else {
          Posts.commentPost(comment.postId, (err, data) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred while add comment to post."
              });
            else {  
              res.send(result)
            }
          });
        };
      });
};

// Retrieve Comment by id.
exports.getCommentsById = (req, res) => {
    const id = req.params.id;

    Comments.getCommentById(id, (err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Comment."
            });
        else res.send(data);
    });
};

// Retrieve Comment by postId.
exports.getCommentsByPostId = (req, res) => {
    const id = req.params.id;

    Comments.getCommentsByPostId(id, (err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Comment."
            });
        else res.send(data);
    });
};

// Get all Comments
exports.getAll = (req, res) => {

  Comments.getAll((err, data) => {
      if (err)
          res.status(500).send({
          message:
              err.message || "Some error occurred while retrieving comment."
          });
      else {
        res.send(data)
      }
  });
};


// Delete Comment by id.
exports.delete = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const commentId = req.body.commentId;
  const postId = req.body.postId;


  Comments.delete(commentId, (err, result) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Comment with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Comment with id " + req.params.id
          });
        } 
      } else {
        Posts.deleteCommentPost(postId, (err, data) => {
          if (err) {
            res.status(500).send({
              message:
                err.message || "Some error occurred while add comment to post."
            });
          }
          else {
            res.send(result);
          }
        });
      }
    });
};