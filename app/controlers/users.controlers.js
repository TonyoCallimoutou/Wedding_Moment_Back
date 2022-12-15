const Users = require("../model/users.model.js");
const Posts = require("../model/posts.model.js");
const Comments = require("../model/comments.model.js");


// Create and Save a new User
exports.create = (req, res) => {
    
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      const user = new Users({
        userId: req.body.userId,
        roleId: req.body.roleId,
        email: req.body.email,
        userName: req.body.userName,
        photoUrl: req.body.photoUrl,
        emailVerified: req.body.emailVerified,
      });
    
      // Save User in the database
      Users.create(user, (err, data) => {
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

exports.setPhotoUrl = (req, res) => {

  Users.setPhotoUrl(req.body.userId, req.body.photoUrl, (err, data) => {
    if (err) 
      res.status(500).send({
        message:
          err.message || "Some error occurred while setting User's post"
      });
      else {
        res.send(req.body)
      }
  });

}

// Retrieve user by id.
exports.getUserById = (req, res) => {
    const id = req.params.id;

    Users.getUserById(id, (err, data) => {
        res.send(data);
    });
};

// Retrieve all Users.
exports.getAll = (req, res) => {

    Users.getAll((err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving User."
            });
        else res.send(data);
    });
};

// Retrieve listOfLikePost
exports.getLikesPosts = (req, res) => {
  const id = req.params.id;

  Users.getLikesPosts(id, (err, data) => {
      if (err)
          res.send([])
      else res.send(data);
  });
};

// Add posts in listOfLikePost
exports.addLikesPost = (req, res) => {
    
  if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    Users.addLikesPost(req.body.userId, req.body.postId, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      else {
        Posts.likePost(req.body.postId,(err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the User."
            });

          res.send(data);
          });
      }
    });
};

// Delete posts in listOfLikePost
exports.dislikesPost = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Users.dislikesPost(req.body.userId, req.body.postId, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else {
      res.send(data);
      Posts.dislikePost(req.body.postId,(err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        });
    }
  });
};

// Retrieve listOfLikeComment
exports.getLikesComments = (req, res) => {
  const id = req.params.id;

  Users.getLikesComments(id, (err, data) => {
      if (err)
        res.send([])
      else res.send(data);
  });
};

// Add Comments in listOfLikeComments
exports.addLikesComment = (req, res) => {
    
  if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    Users.addLikesComment(req.body.userId, req.body.commentId, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      else {
        res.send(data);
        Comments.likeComment(req.body.commentId,(err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the User."
            });
          });
      }
    });
};

// Delete comment in listOfLikeComment
exports.dislikesComment = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Users.dislikesComment(req.body.userId, req.body.commentId, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else {
      res.send(data);
      Comments.dislikeComment(req.body.commentId,(err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        });
    }
  });
};


// Delete User by Id
exports.delete = (req, res) => {
    Users.delete(req.params.id, (err, data) => {
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
        } else res.send({ message: `User was deleted successfully!` });
      });
};