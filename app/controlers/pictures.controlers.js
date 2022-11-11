const Pictures = require("../model/pictures.model.js");

// Create and Save a new Picture
exports.create = (req, res) => {
    
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      const picture = new Pictures({
        pictureId: req.body.pictureId,
        userId: req.body.userId,
        pictureUrl: req.body.pictureUrl,
        countLike: req.body.countLike,
        countComment: req.body.countComment
      });
    
      // Save Picture in the database
      Pictures.create(picture, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Picture."
          });
        else res.send(data);
      });
};

// Retrieve picture by id.
exports.getPictureById = (req, res) => {
    const id = req.params.id;

    Pictures.getPictureById(id, (err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Picture."
            });
        else res.send(data);
    });
};

// Retrieve all Tutorials from the database (with condition).
exports.getAll = (req, res) => {

    Pictures.getAll((err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Picture."
            });
        else res.send(data);
    });
};


// Delete Picture by Id
exports.delete = (req, res) => {
    Pictures.delete(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Picture with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Picture with id " + req.params.id
            });
          }
        } else res.send({ message: `Picture was deleted successfully!` });
      });
};