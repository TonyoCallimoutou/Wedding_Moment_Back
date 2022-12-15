const sql = require("./db.js");
const postUtils = require("../config/post.utils.js")

// constructor
const Post = function(post) {
  this.postId = post.postId;
  this.categorieId = post.categorieId;
  this.pictureUrl = post.pictureUrl;
  this.countLike = post.countLike;
  this.countComment = post.countComment;
  this.userId = post.userId;
  this.userName = post.userName;
  this.photoUrl = post.photoUrl;
};

// Create and Save a new Post
Post.create = (newPost, result) => {
  sql.query(postUtils.sqlCreatePost(newPost), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    newPost.postId = res.insertId
    result(null, newPost);
  });
};

// Retrieve post by id.
Post.getPostById = (id, result) => {
  sql.query(postUtils.sqlGetPostById(id), (err, res) => {
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

// Retrieve all Post
Post.getAll = (result) => {
  sql.query(postUtils.sqlGetAll(), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

// Add Comment to post
Post.commentPost = (id, result) => {
  sql.query(postUtils.sqlCommentPost(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
}

Post.deleteCommentPost = (id, result) => {
  sql.query(postUtils.sqlDeleteCommentPost(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    
    result(null, res);
  });
}

// Like Post
Post.likePost = (id, result) => {
  sql.query(postUtils.sqlLikePost(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
}

// Dislike Post
Post.dislikePost = (id, result) => {
  sql.query(postUtils.sqlDislikePost(id), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
}

// Delete Post by Id
Post.delete = (id, result) => {
  sql.query(postUtils.sqlDelete(id), (err, res) => {
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

module.exports = Post;