const sql = require("./db.js");
const commentUtils = require("../config/comment.utils.js")

// constructor
const Comment = function(comment) {
  this.commentId = comment.commentId;
  this.pictureId = comment.pictureId;
  this.userId = comment.userId;
  this.comment = comment.comment;
  this.countLikeComment = comment.countLikeComment;
};

Comment.create = (newComment, result) => {
  sql.query(commentUtils.sqlCreateComment(newComment), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Comment: ", { id: res.insertId, ...newComment });
    result(null, { id: res.insertId, ...newComment });

  });
};

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

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

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

    console.log("deleted comment with id: ", id);
    result(null, res);
  });
};

module.exports = Comment;