const Comments = require("../model/comments.model.js");
const Pictures = require("../model/pictures.model.js");


// Create and Save a new Comment
exports.create = (req, res) => {
    
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      const comment = new Comments({
        commentId : req.body.commentId,
        pictureId : req.body.pictureId,
        comment : req.body.comment,
        countLikecomment : req.body.countLikecomment,
        userId : req.body.userId,
        userName: req.body.userName,
        photoUrl: req.body.photoUrl,
      });
    
      // Save Comment in the database
      Comments.create(comment, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Comment."
          });
        else {
          res.send(data);
          Pictures.commentPicture(comment.pictureId, (err, data) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred while add comment to picture."
              });
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

// Retrieve Comment by userId.
exports.getCommentsByPictureId = (req, res) => {
    const id = req.params.id;

    Comments.getCommentsByPictureId(id, (err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Comment."
            });
        else res.send(data);
    });
};

// Delete Comment by id.
exports.delete = (req, res) => {
    Comments.delete(req.params.id, (err, data) => {
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
        } else res.send({ message: `Comment was deleted successfully!` });
      });
};

exports.getAll = (req, res) => {

    Comments.getAll((err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving comment."
            });
        else res.send(data);
    });
};