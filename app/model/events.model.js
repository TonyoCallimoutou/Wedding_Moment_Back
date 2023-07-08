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
    this.eventDate = event.eventDate;
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
            console.log("error createEvent: ", err);
            result(err, null);
            return;
        }
        sql.query(eventUtils.sqlGetEventById(res.insertId, newEvent.userId), (err, res) => {
            if (err) {
                console.log("error createEvent - get event: ", err);
                result(err, null);
                return;
            }
            result(null, res[0]);
        });


    });
};

Event.getAllEvent = (result) => {
    sql.query(eventUtils.sqlGetAllEvent(), (err, res) => {
        if (err) {
            console.log("error getAllEvent: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Event.getEventById= (eventId, userId, result) => {
    sql.query(eventUtils.sqlGetEventById(eventId, userId), (err, res) => {
        if (err || res.length === 0) {
            console.log("error getEventById: ", err);
            result(err, null);
            return;
        }
        result(null, res[0]);
    })
}

Event.getEventByUserId= (userId, result) => {
    sql.query(eventUtils.sqlGetEventByUserId(userId), (err, res) => {
        if (err || res.length === 0) {
            console.log("error getEventById: ", err);
            result(err, null);
            return;
        }
        result(null, res[0]);
    })
}

Event.getEventByCode = (code, userId, result) => {
    sql.query(eventUtils.sqlGetEventByCode(code, userId), (err, res) => {
        if (err || res.length === 0) {
            console.log("error getEventById: ", err);
            result(err, null);
            return;
        }
        result(null, res[0]);
    })
}


Event.updateEventPicture = (data, result) => {
    sql.query(eventUtils.sqlUpdateEventPicture(data), (err, res) => {
        if (err) {
            console.log("error updateEventPicture: ", err);
            result(err, null);
            return;
        }
        result(null, data);
    });
};

Event.updateEventPresentation = (data, result) => {
    sql.query(eventUtils.sqlUpdateEventPresentation(data), (err, res) => {
        if (err) {
            console.log("error updateEventPresentation: ", err);
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
            console.log("error deleteEvent: ", err);
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
            console.log("error createMenu: ", err);
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
            console.log("error updateMenu: ", err);
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
            console.log("error getMenu: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Event.deleteMenu = (id, result) => {
    sql.query(eventUtils.sqlDeleteMenu(id), (err, res) => {
        if (err) {
            console.log("error deleteMenu: ", err);
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
            console.log("error createPlanTable: ", err);
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
            console.log("error getPlanTable: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Event.deletePlanTable = (id, result) => {
    sql.query(eventUtils.sqlDeletePlanTable(id), (err, res) => {
        if (err) {
            console.log("error deletePlanTable: ", err);
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
            console.log("error createInvite: ", err);
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
            console.log("error setInvite: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Event.deleteInvite = (id, result) => {
    sql.query(eventUtils.sqlDeleteInvite(id), (err, res) => {
        if (err) {
            console.log("error deleteInvite: ", err);
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