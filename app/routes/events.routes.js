const events = require("../controlers/events.controlers");
const users = require("../controlers/users.controlers");
module.exports = app => {
    const events = require("../controlers/events.controlers.js");

    const router = require("express").Router();

    // Retrieve all Event
    router.get("/", events.getAllEvent);

    // Create new Event
    router.post("/", events.createEvent);

    // Delete Event with id
    router.delete("/:id", events.deleteEvent);

    // Create new Menu
    router.post("/Menu", events.createMenu);

    // Retrieve Menu
    router.get("/Menu/:id", events.getMenu);

    // Delete Menu with id
    router.delete("/Menu/:id", events.deleteMenu);

    // Create new Event
    router.post("/PlanTable", events.createPlanTable);

    // Retrieve PlanTable
    router.get("/PlanTable/:id", events.getPlanTable);

    // Delete Event with id
    router.delete("/PlanTable/:id", events.deletePlanTable);

    // Create new Event
    router.post("/Invite", events.createInvite);

    // Set Invites
    router.post("/setInvite", events.setInvite);

    // Delete Event with id
    router.delete("/Invite/:id", events.deleteInvite);

    app.use('/api/events', router);
};