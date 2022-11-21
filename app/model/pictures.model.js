const sql = require("./db.js");
const pictureUtils = require("../config/picture.utils.js")

// constructor
const Picture = function(picture) {
  this.pictureId = picture.pictureId;
  this.userId = picture.userId
  this.pictureUrl = picture.pictureUrl;
  this.countLike = picture.countLike;
  this.countComment = picture.countComment;
};

// Create and Save a new Picture
Picture.create = (newPicture, result) => {
  sql.query(pictureUtils.sqlCreatePicture(newPicture), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...newPicture });
  });
};

// Retrieve picture by id.
Picture.getPictureById = (id, result) => {
  sql.query(pictureUtils.sqlGetPictureById(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

// Retrieve all Picture
Picture.getAll = (result) => {
  sql.query(pictureUtils.sqlGetAll(), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

// Add Comment to picture
Picture.commentPicture = (id, result) => {
  sql.query(pictureUtils.sqlCommentPicture(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
}

Picture.deleteCommentPicture = (id, result) => {
  sql.query(pictureUtils.sqlDeleteCommentPicture(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
}

// Like Picture
Picture.likePicture = (id, result) => {
  sql.query(pictureUtils.sqlLikePicture(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
}

// Dislike Picture
Picture.dislikePicture = (id, result) => {
  sql.query(pictureUtils.sqlDislikePicture(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
}

// Delete Picture by Id
Picture.delete = (id, result) => {
  sql.query(pictureUtils.sqlDelete(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    result(null, res);
  });
};

module.exports = Picture;