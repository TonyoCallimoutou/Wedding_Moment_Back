const { UserUtils } = require("../config/user.utils.js");
const sql = require("./db.js");
const userUtils = require("../config/user.utils.js");

// constructor
const User = function(user) {
  this.userId = user.userId;
  this.email = user.email;
  this.userName = user.userName;
  this.photoUrl = user.photoUrl;
  this.emailVerified = user.emailVerified;
};



User.create = (newUser, result) => {
  sql.query(userUtils.sqlCreateUser(newUser), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.getUserById = (id, result) => {
  sql.query(userUtils.sqlGetUserById(id), (err, res) => {
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

User.getAll = (result) => {
  sql.query(userUtils.sqlGetAll(), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

User.getLikesPictures = (id, result) => {
  sql.query(userUtils.sqlGetLikesPictures(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

User.addLikesPicture = (userId, pictureId, result) => {
  sql.query(userUtils.sqlAddLikesPicture(userId, pictureId), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("like picture: ", { id: res.insertId, ...pictureId });
    result(null, { id: res.insertId, ...pictureId });
  });
};

User.dislikesPicture = (userId, pictureId, result) => {
  sql.query(userUtils.sqlDislikesPicture(userId, pictureId), (err, res) => {
    if (err) {
      console.log("erreur: ", err);
      result(err, null);
      return;
    }

    console.log("like picture: ", { id: res.insertId, ...pictureId });
    result(null, { id: res.insertId, ...pictureId });
  });
};

User.getLikesComments = (id, result) => {
  sql.query(userUtils.sqlGetLikesComments(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

User.addLikesComment = (userId, commentId, result) => {
  sql.query(userUtils.sqlAddLikesComment(userId, commentId), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("like comment: ", { id: res.insertId, ...commentId });
    result(null, { id: res.insertId, ...commentId });
  });
};

User.dislikesComment = (userId, commentId, result) => {
  sql.query(userUtils.sqlDislikesComment(userId, commentId), (err, res) => {
    if (err) {
      console.log("erreur: ", err);
      result(err, null);
      return;
    }

    console.log("like comment: ", { id: res.insertId, ...commentId });
    result(null, { id: res.insertId, ...commentId });
  });
};


User.delete = (id, result) => {
  sql.query(userUtils.sqlDelete(id), (err, res) => {
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

    console.log("deleted users with id: ", id);
    result(null, res);
  });
};

module.exports = User;