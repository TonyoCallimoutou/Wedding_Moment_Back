class EventsUtils {
    static sqlCreateEvent(data) {
        return `INSERT INTO Events (userId, name)
                Values ('${data.userId}', "${data.name}")`
    }

    static sqlGetAllEvent() {
        return `SELECT *
                FROM Events`
    }

    static sqlGetEventById(eventId) {
        return `SELECT *
                FROM Events
                WHERE eventId = ${eventId}`
    }

    static sqlUpdateEventPicture(data) {
        return `UPDATE Events
                SET pictureUrl = "${data.pictureUrl}"
                WHERE eventId = ${data.eventId}`
    }

    static sqlUpdateEventPresentation(data) {
        return `UPDATE Events
                SET presentationText = "${data.presentationText}" ,
                    presentationTextSize = ${data.presentationTextSize} ,
                    presentationTextAlign = "${data.presentationTextAlign}"
                WHERE eventId = ${data.eventId}`
    }

    static sqlDeleteEvent(eventId) {
        return `DELETE
                FROM Events
                WHERE eventId = ${eventId}`
    }

    static sqlCreateMenu(data) {
        return `INSERT INTO Menus (eventId, menuCategorie, menuDescription)
                VALUES (${data.eventId}, "${data.menuCategorie}", "${data.menuDescription}")`
    }

    static sqlUpdateMenu(data) {
        return `REPLACE INTO Menus (menuId, eventId, menuCategorie, menuDescription)
                VALUES (${data.menuId}, ${data.eventId}, "${data.menuCategorie}", "${data.menuDescription}")`
    }

    static sqlGetMenu(eventId) {
        return `SELECT *
                FROM Menus
                WHERE eventId = ${eventId}`
    }

    static sqlDeleteMenu(menuId) {
        return `DELETE
                FROM Menus
                WHERE menuId = ${menuId}`
    }

    static sqlCreatePlanTable(data) {
        return `INSERT INTO PlanTables (tableName, eventId)
                VALUES ("${data.tableName}", ${data.eventId})`
    }

    static sqlGetPlanTable(eventId) {
        return `SELECT PlanTables.planTableId, eventId, tableName, inviteId, inviteName
                FROM PlanTables
                         LEFT JOIN invites ON invites.planTableId = PlanTables.planTableId
                WHERE eventId = ${eventId}`
    }

    static sqlDeletePlanTable(planTableId) {
        return `DELETE
                FROM PlanTables
                WHERE planTableId = ${planTableId}`
    }

    static sqlCreateInvite(data) {
        return `INSERT INTO Invites (planTableId, inviteName)
                VALUES (${data.planTableId}, "${data.inviteName}")`
    }

    static sqlSetInvite(data) {
        return `UPDATE invites
                SET planTableId = ${data.planTableId}
                WHERE inviteId = ${data.inviteId}`
    }

    static sqlDeleteInvite(inviteId) {
        return `DELETE
                FROM Invites
                WHERE inviteId = ${inviteId}`
    }
}

module.exports = EventsUtils;