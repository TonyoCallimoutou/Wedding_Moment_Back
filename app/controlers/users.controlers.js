const Users = require("../model/users.model.js");
const Posts = require("../model/posts.model.js");
const Comments = require("../model/events.model.js");


// Create and Save a new User
exports.createUser = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log("createUser with email ", req.body.email);

    const user = new Users({
        userId: req.body.userId,
        email: req.body.email,
        userName: req.body.userName,
        photoUrl: req.body.photoUrl,
        emailVerified: req.body.emailVerified,
    });

    // Save User in the database
    Users.createUser(user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        else {
            res.send(data);

        }
    });
};

exports.setVerified = (req, res) => {

    console.log("setVerified with userId ", req.body.userId);

    Users.setUserVerified(req.body.userId, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while setting User's verification"
            });
        else {
            res.send(req.body)
        }
    });
}

exports.setPhotoUrl = (req, res) => {

    console.log("setPhotoUrl with userId ", req.body.userId);

    Users.setPhotoUrl(req.body.userId, req.body.photoUrl, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while setting User's Photo url"
            });
        else {
            res.send(req.body)
        }
    });

}

exports.setUserName = (req, res) => {

    const user = new Users({
        userId: req.body.userId,
        userName: req.body.userName,
    });

    console.log("setUserName with userId ", req.body.userId);

    Users.setUserName(user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while setting User's Name"
            });
        else {
            res.send(req.body)
        }
    });

}

// Retrieve user by id.
exports.getUserById = (req, res) => {
    const id = req.params.id;

    console.log("getUserById with userId ", id);

    Users.getUserById(id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving User"
            });
        else {
            res.send(data);
        }
    });
};

// Retrieve listOfLikePost
exports.getReactPosts = (req, res) => {
    const id = req.params.id;

    console.log("getReactPosts with userId ", id);

    Users.getReactPosts(id, (err, data) => {
        if (err)
            res.send([])
        else res.send(data);
    });
};

// Add posts in listOfLikePost
exports.addReactPost = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log("addReactPost with userId ", req.body.userId, " and postId ", req.body.postId);

    Users.addReactPost(req.body, (err, dataUser) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while add react on User table."
            });
        else {
            Posts.reactPost(req.body.postId, (err, dataPost) => {
                if (err)
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while add react on post table."
                    });
                else {
                    res.send(dataUser);
                }
            });
        }
    });
};

// Delete posts in listOfLikePost
exports.unReactPost = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log("unReactPost with userId ", req.body.userId, " and postId ", req.body.postId);

    Users.unReactPost(req.body.userId, req.body.postId, (err, dataUser) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while remove react on User table.."
            });
        else {
            Posts.unReactPost(req.body.postId, (err, dataPost) => {
                if (err)
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while remove react on User table.."
                    });
                else {
                    res.send(dataUser);
                }
            });
        }
    });
};

// Retrieve listOfLikePost
exports.getNotification = (req, res) => {
    const id = req.params.id;

    console.log("getNotification with userId ", id);

    Users.getNotification(id, (err, data) => {
        if (err)
            res.send([])
        else res.send(data);
    });
};

// Delete User by Id
exports.deleteUser = (req, res) => {

    console.log("deleteUser with userId ", req.params.id);

    Users.deleteUser(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete User with id " + req.params.id
                });
            }
        } else res.send({message: `User was deleted successfully!`});
    });
};