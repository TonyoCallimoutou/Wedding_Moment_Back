const sql = require("./db.js");
const postUtils = require("../config/post.utils.js")

// constructor
const Post = function (post) {
    this.postId = post.postId;
    this.eventId = post.eventId;
    this.pictureUrl = post.pictureUrl;
    this.pictureRatio = post.pictureRatio;
    this.countReact = post.countReact;
    this.userId = post.userId;
    this.userName = post.userName;
    this.photoUrl = post.photoUrl;
};

// Create and Save a new Post
Post.createPost = (newPost, result) => {
    sql.query(postUtils.sqlCreatePost(newPost), (err, res) => {
        if (err) {
            console.log("error createPost: ", err);
            result(err, null);
            return;
        }

        newPost.postId = res.insertId
        result(null, newPost);
    });
};

// Retrieve all Post
Post.getAllPost = (eventId, result) => {
    sql.query(postUtils.sqlGetAllPost(eventId), (err, res) => {
        if (err) {
            console.log("error getAllPost: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    });
};


// Like Post
Post.reactPost = (id, result) => {
    sql.query(postUtils.sqlReactPost(id), (err, res) => {
        if (err) {
            console.log("error reactPost: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

// Dislike Post
Post.unReactPost = (id, result) => {
    sql.query(postUtils.sqlUnReactPost(id), (err, res) => {
        if (err) {
            console.log("error unReactPost: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Post.setPicture = (data, result) => {
    sql.query(postUtils.sqlSetPicture(data), (err, res) => {
        if (err) {
            console.log("error setPicture: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

// Delete Post by Id
Post.deletePost = (id, result) => {
    sql.query(postUtils.sqlDeletePost(id), (err, res) => {
        if (err) {
            console.log("error deletePost: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({kind: "not_found"}, null);
            return;
        }

        result(null, res);
    });
};

module.exports = Post;