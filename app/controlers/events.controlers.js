const Events = require("../model/events.model.js");
const sql = require("../model/db");
const postUtils = require("../config/post.utils");
const Posts = require("../model/posts.model");
const {getUserId} = require("../config/auth");


function create(body) {
    return new Events({
        eventId: body.eventId,
        userId: body.userId,
        name: body.name,
        pictureUrl: body.pictureUrl,
        presentationText: body.presentationText,
        presentationTextSize: body.presentationTextSize,
        presentationTextAlign: body.presentationTextAlign,
        eventDate: body.eventDate,
        menuId: body.menuId,
        menuCategorie: body.menuCategorie,
        menuDescription: body.menuDescription,
        planTableId: body.planTableId,
        tableName: body.tableName,
        inviteId: body.inviteId,
        inviteName: body.inviteName,
    })
}


// Create and Save a new Event
exports.createEvent = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    getUserId(req, res).then(() => {
        const event = create(req.body);
        // Save Event in the database
        console.log("createEvent for userId ", req.body.userId);
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
    }).catch((err) => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving UserId for createEvent."
        });
    });
};

exports.getAllEvent = (req, res) => {

    console.log("getAllEvent");

    Events.getAllEvent((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Events."
            });
        else res.send(data);
    });
}

exports.getEventById = (req, res) => {


    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }


    getUserId(req, res).then(() => {
        const userId = req.body.userId;
        const eventId = req.params.id;

        console.log("getEventById for userId ", userId, " and eventId ", eventId);

        Events.getEventById(eventId, userId, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                      err.message || "Some error occurred while retrieving Event for getEventById."
                });
            else res.send(data);
        });
    }).catch((err) => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving UserId for getEventById."
        });
    });

}

exports.getEventByUserId = (req, res) => {

    const userId = req.params.id;


    console.log("getEventByUserId of UserId ", userId);

    Events.getEventByUserId(userId, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving Event by UserId."
            });
        else res.send(data);
    });

}

exports.getEventByCode = (req, res) => {

    getUserId(req, res).then(() => {
        const userId = req.body.userId;

        const code = req.params.id;

        console.log("getEventByCode for userId ", userId, " and code ", code);

        Events.getEventByCode(code, userId, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                      err.message || "Some error occurred while retrieving Event by UserId."
                });
            else res.send(data);
        });
    }).catch((err) => {
        res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving UserId for getEventByCode."
        });
    });


}


// Update Event
exports.updateEventPicture = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const event = create(req.body);

    console.log("updateEventPicture for eventId ", req.body.eventId);

    // Save Event in the database
    Events.updateEventPicture(event, (err, result) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while update the EventPicture."
            });
        else {
            res.send(result)
        }
    });
};

exports.updateEventPresentation = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const event = create(req.body);

    console.log("updateEventPresentation for eventId ", req.body.eventId)

    // Save Event in the database
    Events.updateEventPresentation(event, (err, result) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while update the EventPresentation."
            });
        else {
            res.send(result)
        }
    });
};


// Delete Event by id.
exports.deleteEvent = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const eventId = req.params.id;

    console.log("deleteEvent for eventId ", eventId);

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

// Create and Save a new Menu
exports.createMenu = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const event = create(req.body);

    console.log("createMenu for eventId ", req.body.eventId);


    // Save Event in the database
    Events.createMenu(event, (err, result) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Menu."
            });
        else {
            res.send(result)
        }
    });
};

// Update Menu
exports.updateMenu = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const event = create(req.body);

    console.log("updateMenu for eventId ", req.body.eventId);


    // Save Event in the database
    Events.updateMenu(event, (err, result) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while update the Menu"
            });
        else {
            res.send(result)
        }
    });
};

exports.getMenu = (req, res) => {

    const eventId = req.params.id;

    console.log("getMenu for eventId ", eventId);

    Events.getMenu(eventId, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Menu."
            });
        else res.send(data);
    });
}

// Delete Menu by id.
exports.deleteMenu = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const menuId = req.body.menuId;

    console.log("deleteMenu for menuId ", menuId);

    Events.deleteMenu(menuId, (err, result) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Menu with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Menu with id " + req.params.id
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

    const event = create(req.body);

    console.log("createPlanTable for eventId ", req.body.eventId);


    // Save Event in the database
    Events.createPlanTable(event, (err, result) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the PlanTable."
            });
        else {
            res.send(result)
        }
    });
};

// Update Menu
exports.updatePlanTable = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const event = create(req.body);

    console.log("updatePlanTable for eventId ", req.body.eventId);


    // Save Event in the database
    Events.updatePlanTable(event, (err, result) => {
        if (err)
            res.status(500).send({
                message:
                  err.message || "Some error occurred while update the Menu"
            });
        else {
            res.send(result)
        }
    });
};

exports.getPlanTable = (req, res) => {

    const eventId = req.params.id;

    console.log("getPlanTable for eventId ", eventId);

    Events.getPlanTable(eventId, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving PlanTable."
            });
        else res.send(data);
    });
}

// Delete Event by id.
exports.deletePlanTable = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const eventId = req.body.planTableId;

    console.log("deletePlanTable for eventId ", eventId);


    Events.deletePlanTable(eventId, (err, result) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found PlanTable with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete PlanTable with id " + req.params.id
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

    const event = create(req.body);

    console.log("createInvite for planTableId ", req.body.planTableId);


    // Save Event in the database
    Events.createInvite(event, (err, result) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Invite."
            });
        else {
            res.send(result)
        }
    });
};

exports.setInvite = (req, res) => {

    console.log("setInvite for inviteId ", req.body.inviteId);

    Events.setInvite(req.body, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while update Invite."
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

    const inviteId = req.body.inviteId;

    console.log("deleteInvite for inviteId ", inviteId);


    Events.deleteInvite(inviteId, (err, result) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Invite with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Invite with id " + req.params.id
                });
            }
        } else {
            res.send(result);
        }
    });
};





