const Users = require("../model/users.model.js");

// Create and Save a new User
exports.create = (req, res) => {
    
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      const user = new Users({
        userId: req.body.userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,

      });
    
      // Save User in the database
      Users.create(user, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        else res.send(data);
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