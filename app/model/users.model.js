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
  sql.query(`SELECT * FROM users WHERE userId = ${id}`, (err, res) => {
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
  let query = "SELECT * FROM Users";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};


User.delete = (id, result) => {
  sql.query(`DELETE FROM users WHERE userId = ${id}`, (err, res) => {
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