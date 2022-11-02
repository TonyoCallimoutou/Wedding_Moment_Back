const sql = require("./db.js");

// constructor
const Comment = function(comment) {
  this.commentId = comment.commentId;
  this.pictureId = comment.pictureId;
  this.userId = comment.userId;
  this.comment = comment.comment;
};

Comment.create = (newComment, result) => {
  sql.query("INSERT INTO Comments SET ?", newComment, (err, res) => {
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
  sql.query(`SELECT * FROM Comments WHERE commentId = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found comment: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Comment.getCommentsByUserId = (id, result) => {
  sql.query(`SELECT * FROM Comments WHERE userId = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("comments: ", res);
    result(null, res);
  });
};


Comment.delete = (id, result) => {
  sql.query(`DELETE FROM Comments WHERE commentId = ${id}`, (err, res) => {
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

Comment.getAll = (result) => {
    let query = "SELECT * FROM Comments";
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("Comments: ", res);
      result(null, res);
    });
};

module.exports = Comment;