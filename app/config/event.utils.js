class EventsUtils {
    static sqlCreateEvent(data) {
        return `INSERT INTO Events (userId, presentationText, eventDate, dateIncrement, eventCode)
                Values (
                        "${data.userId}",
                        "${data.presentationText}",
                        "${data.eventDate}",
                        (SELECT COALESCE(MAX(dateIncrement), 0) + 1 FROM (SELECT dateIncrement FROM Events WHERE eventDate = "${data.eventDate}") AS subquery),
                        CONCAT((SELECT COALESCE(MAX(dateIncrement), 0) + 1 FROM (SELECT dateIncrement FROM Events WHERE eventDate = "${data.eventDate}") AS subquery), DATE_FORMAT("${data.eventDate}", '%d%m%y'))
                        )`
    }

    static sqlGetAllEvent() {
        return `SELECT *
                FROM Events`
    }

    static sqlGetEventById(eventId, userId) {
        return `SELECT *
                FROM Events
                WHERE eventId = ${eventId} AND (isActivate = 1 OR userId= "${userId}")`
    }

    static sqlGetEventByUserId(userId) {
        return `SELECT *
                FROM Events
                WHERE userId = "${userId}"`
    }

    static sqlGetEventByCode(code, userId) {
        return `SELECT *
                FROM Events
                WHERE eventCode = ${code} AND (isActivate = 1 OR userId= "${userId}")`
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
        return `UPDATE Menus
                SET menuCategorie      = "${data.menuCategorie}",
                    menuDescription  = "${data.menuDescription}"
                WHERE menuId = ${data.menuId}`
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

    static sqlUpdatePlanTable(data) {
        return `UPDATE PlanTables
                SET tableName      = "${data.tableName}"    
                WHERE planTableId = ${data.planTableId}`
    }

    static sqlGetPlanTable(eventId) {
        return `SELECT PlanTables.planTableId, eventId, tableName, inviteId, inviteName
                FROM PlanTables
                         LEFT JOIN Invites ON Invites.planTableId = PlanTables.planTableId
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
        return `UPDATE Invites
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