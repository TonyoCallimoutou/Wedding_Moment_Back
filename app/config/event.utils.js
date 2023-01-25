class EventsUtils {
    static sqlCreateEvent(data) {
        return `INSERT INTO Events (userId, name)
                Values ('${data.userId}', "${data.name}")`
    }

    static sqlGetAllEvent() {
        return `SELECT * FROM Events`
    }

    static sqlDeleteEvent(eventId) {
        return `DELETE FROM Events
                WHERE eventId = ${eventId}`
    }

    static sqlCreatePlanTable(data) {
        return `INSERT INTO PlanTables (tableName, eventId)
                VALUES ("${data.tableName}", ${data.eventId})`
    }

    static sqlDeletePlanTable(planeTableId) {
        return `DELETE FROM PlanTables
                WHERE planeTableId = ${planeTableId}`
    }

    static sqlCreateInvite(data) {
        return `INSERT INTO Invites
                VALUES (${data.planTableId}, "${data.inviteName}")`
    }

    static sqlSetInvite(data) {
        return `UPDATE invites
                SET planTableId = ${data.planTableId}
                WHERE inviteId = ${data.inviteId}`
    }

    static sqlDeleteInvite(inviteId) {
        return `DELETE FROM Invites
                WHERE inviteId = ${inviteId}`
    }
}

module.exports = EventsUtils;