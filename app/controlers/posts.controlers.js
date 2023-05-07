const Posts = require("../model/posts.model.js");

// Create and Save a new Post
exports.createPost = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const post = new Posts({
        postId: req.body.postId,
        eventId: req.body.eventId,
        pictureUrl: req.body.pictureUrl,
        pictureRatio: req.body.pictureRatio,
        countReact: req.body.countReact,
        userId: req.body.userId,
        userName: req.body.userName,
        photoUrl: req.body.photoUrl,

    });

    // Save Post in the database
    Posts.createPost(post, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Post."
            });
        else res.send(data);
    });
};

// Retrieve all Post
exports.getAllPost = (req, res) => {
    const eventId = req.params.id;

    Posts.getAllPost(eventId, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Post."
            });
        else res.send(data);
    });
};

exports.setPictureOfPost = (req, res) => {
    Posts.setPicture(req.body, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Post."
            });
        else res.send(data);
    });
}


// Delete Post by Id
exports.deletePost = (req, res) => {
    Posts.deletePost(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Post with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Post with id " + req.params.id
                });
            }
        } else res.send({message: `Post was deleted successfully!`});
    });
};