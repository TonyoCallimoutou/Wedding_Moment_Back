const sql = require("./db.js");
const eventUtils = require("../config/event.utils.js")

// constructor
const Event = function (event) {
    this.eventId = event.eventId;
    this.userId = event.userId;
    this.name = event.name;
    this.pictureUrl = event.pictureUrl;
    this.presentationText = event.presentationText;
    this.presentationTextSize = event.presentationTextSize;
    this.presentationTextAlign = event.presentationTextAlign;
    this.menuId = event.menuId;
    this.menuCategorie = event.menuCategorie;
    this.menuDescription = event.menuDescription;
    this.planTableId = event.planTableId;
    this.tableName = event.tableName;
    this.inviteId = event.inviteId;
    this.inviteName = event.inviteName;
};

// Create and Save a new Event
Event.createEvent = (newEvent, result) => {
    sql.query(eventUtils.sqlCreateEvent(newEvent), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        newEvent.eventId = res.insertId
        result(null, newEvent);

    });
};

Event.getAllEvent = (result) => {
    sql.query(eventUtils.sqlGetAllEvent(), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Event.updateEventPicture = (data, result) => {
    sql.query(eventUtils.sqlUpdateEventPicture(data), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, data);
    });
};

Event.updateEventPresentation = (data, result) => {
    sql.query(eventUtils.sqlUpdateEventPresentation(data), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, data);
    });
};

// Delete Event by id.
Event.deleteEvent = (id, result) => {
    sql.query(eventUtils.sqlDeleteEvent(id), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Tutorial with the id
            result({kind: "not_found"}, null);
            return;
        }

        result(null, res);
    });
};

Event.createMenu = (data, result) => {
    sql.query(eventUtils.sqlCreateMenu(data), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        data.menuId = res.insertId
        result(null, data);
    });
};

Event.updateMenu = (data, result) => {
    sql.query(eventUtils.sqlUpdateMenu(data), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        data.menuId = res.insertId
        result(null, data);
    });
};

Event.getMenu = (id, result) => {
    sql.query(eventUtils.sqlGetMenu(id), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Event.deleteMenu = (id, result) => {
    sql.query(eventUtils.sqlDeleteMenu(id), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Tutorial with the id
            result({kind: "not_found"}, null);
            return;
        }

        result(null, res);
    });
};

Event.createPlanTable = (data, result) => {
    sql.query(eventUtils.sqlCreatePlanTable(data), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        data.planTableId = res.insertId
        result(null, data);

    });
};

Event.getPlanTable = (id, result) => {
    sql.query(eventUtils.sqlGetPlanTable(id), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Event.deletePlanTable = (id, result) => {
    sql.query(eventUtils.sqlDeletePlanTable(id), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Tutorial with the id
            result({kind: "not_found"}, null);
            return;
        }

        result(null, res);
    });
};

Event.createInvite = (data, result) => {
    sql.query(eventUtils.sqlCreateInvite(data), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        data.inviteId = res.insertId
        result(null, data);

    });
};

Event.setInvite = (data, result) => {
    sql.query(eventUtils.sqlSetInvite(data), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Event.deleteInvite = (id, result) => {
    sql.query(eventUtils.sqlDeleteInvite(id), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Tutorial with the id
            result({kind: "not_found"}, null);
            return;
        }

        result(null, res);
    });
};

module.exports = Event;