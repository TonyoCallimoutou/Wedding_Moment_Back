const Users = require("../model/users.model.js");
const Pictures = require("../model/pictures.model.js");

// Create and Save a new User
exports.create = (req, res) => {
    
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      const user = new Users({
        userId: req.body.userId,
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

// Retrieve user by id.
exports.getUserById = (req, res) => {
    const id = req.params.id;

    Users.getUserById(id, (err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving User."
            });
        else res.send(data);
    });
};

// Retrieve all Tutorials from the database (with condition).
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

// Retrieve listOfLikePicture
exports.getLikesPictures = (req, res) => {
  const id = req.params.id;

  Users.getLikesPictures(id, (err, data) => {
      if (err)
          res.status(500).send({
          message:
              err.message || "Some error occurred while retrieving LikePicture."
          });
      else res.send(data);
  });
};

// Add pictures in listOfLikePicture
exports.addLikesPicture = (req, res) => {
    
  if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    Users.addLikesPicture(req.body.userId, req.body.pictureId, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      else {
        res.send(data);
        Pictures.likePicture(req.body.pictureId,(err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the User."
            });
          });
      }
    });
};

// Delete pictures in listOfLikePicture
exports.dislikesPicture = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Users.dislikesPicture(req.body.userId, req.body.pictureId, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else {
      res.send(data);
      Pictures.dislikePicture(req.body.pictureId,(err, data) => {
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