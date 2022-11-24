const sql = require("./db.js");
const commentUtils = require("../config/comment.utils.js")

// constructor
const Comment = function(comment) {
  this.commentId = comment.commentId;
  this.pictureId = comment.pictureId;
  this.userId = comment.userId;
  this.comment = comment.comment;
  this.countLikeComment = comment.countLikeComment;
  this.userName = comment.userName;
  this.photoUrl = comment.photoUrl;
};

// Create and Save a new Comment
Comment.create = (newComment, result) => {
  sql.query(commentUtils.sqlCreateComment(newComment), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    newComment.commentId = res.insertId
    result(null, newComment);

  });
};

// Retrieve Comment by id.
Comment.getCommentById = (id, result) => {
  sql.query(commentUtils.sqlGetCommentById(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    // not found User with the id
    result({ kind: "not_found" }, null);
  });
};

// Retrieve Comment by pictureId.
Comment.getCommentsByPictureId = (id, result) => {
  sql.query(commentUtils.sqlGetCommentsByPictureId(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

// Get all Comments
Comment.getAll = (result) => {
  sql.query(commentUtils.sqlGetAll(), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

// Like Comment
Comment.likeComment = (id, result) => {
  sql.query(commentUtils.sqlLikeComment(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
}

// Dislike Comment
Comment.dislikeComment = (id, result) => {
  sql.query(commentUtils.sqlDislikeComment(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
}

// Delete Comment by id.
Comment.delete = (id, result) => {
  sql.query(commentUtils.sqlDelete(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    result(null, res);
  });
};

module.exports = Comment;