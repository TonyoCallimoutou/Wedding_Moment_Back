const sql = require("./db.js");

// constructor
const Picture = function(picture) {
  this.pictureId = picture.pictureId;
  this.userId = picture.userId
  this.picture = picture.picture;
};

Picture.create = (newPicture, result) => {
  sql.query("INSERT INTO pictures SET ?", newPicture, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created picture: ", { id: res.insertId, ...newPicture });
    result(null, { id: res.insertId, ...newPicture });
  });
};

Picture.getPictureById = (id, result) => {
  sql.query(`SELECT * FROM pictures WHERE pictureId = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found picture: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Picture.getAll = (result) => {
  let query = "SELECT * FROM pictures";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("pictures: ", res);
    result(null, res);
  });
};


Picture.delete = (id, result) => {
  sql.query(`DELETE FROM pictures WHERE pictureId = ${id}`, (err, res) => {
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

    console.log("deleted pictures with id: ", id);
    result(null, res);
  });
};

module.exports = Picture;