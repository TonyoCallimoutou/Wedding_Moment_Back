const Events = require("../model/events.model.js");
const sql = require("../model/db");
const postUtils = require("../config/post.utils");
const Posts = require("../model/posts.model");


// Create and Save a new Event
exports.createEvent = (req, res) => {
    
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      const event = new Events({
          eventId : req.body.eventId,
          userId : req.body.userId,
          name : req.body.name,
          menuId : req.body.menuId,
          menuCategorie : req.body.menuCategorie,
          menuDescription: req.body.menuDescription,
          planTableId: req.body.planTableId,
          tableName: req.body.tableName,
          inviteId: req.body.inviteId,
          inviteName: req.body.inviteName,
      });
    
      // Save Event in the database
      Events.createEvent(event, (err, result) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Event."
          });
        else {
            res.send(result)
        }
      });
};

exports.getAllEvent = (req, res) => {

    Events.getAllEvent((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Post."
            });
        else res.send(data);
    });
}

// Delete Event by id.
exports.deleteEvent = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const eventId = req.params.id;


    Events.deleteEvent(eventId, (err, result) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Event with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Event with id " + req.params.id
                });
            }
        } else {
            res.send(result);
        }
    });
};

// Create and Save a new Plan Table
exports.createPlanTable = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const event = new Events({
        eventId : req.body.eventId,
        userId : req.body.userId,
        name : req.body.name,
        menuId : req.body.menuId,
        menuCategorie : req.body.menuCategorie,
        menuDescription: req.body.menuDescription,
        planTableId: req.body.planTableId,
        tableName: req.body.tableName,
        inviteId: req.body.inviteId,
        inviteName: req.body.inviteName,
    });

    // Save Event in the database
    Events.createPlanTable(event, (err, result) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Event."
            });
        else {
            res.send(result)
        }
    });
};

// Delete Event by id.
exports.deletePlanTable = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const eventId = req.params.id;


    Events.deletePlanTable(eventId, (err, result) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Event with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Event with id " + req.params.id
                });
            }
        } else {
            res.send(result);
        }
    });
};

// Create and Save a new Plan Table
exports.createInvite = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const event = new Events({
        eventId : req.body.eventId,
        userId : req.body.userId,
        name : req.body.name,
        menuId : req.body.menuId,
        menuCategorie : req.body.menuCategorie,
        menuDescription: req.body.menuDescription,
        planTableId: req.body.planTableId,
        tableName: req.body.tableName,
        inviteId: req.body.inviteId,
        inviteName: req.body.inviteName,
    });

    // Save Event in the database
    Events.createInvite(event, (err, result) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Event."
            });
        else {
            res.send(result)
        }
    });
};

exports.setInvite = (req, res) => {
    Events.setInvite(req.body,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Post."
            });
        else res.send(data);
    });
}


// Delete Event by id.
exports.deleteInvite = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const eventId = req.params.id;


    Events.deleteInvite(eventId, (err, result) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Event with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Event with id " + req.params.id
                });
            }
        } else {
            res.send(result);
        }
    });
};





