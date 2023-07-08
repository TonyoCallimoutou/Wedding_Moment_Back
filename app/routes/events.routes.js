const { checkAuthAndAdmin, checkAuth} = require("../config/auth");
const events = require("../controlers/events.controlers");
module.exports = app => {
    const events = require("../controlers/events.controlers.js");

    const router = require("express").Router();

    // Retrieve all Event
    router.get("/", events.getAllEvent);

    // Retrieve Event
    router.get("/:id", events.getEventById);

    // Create new Event
    router.post("/", checkAuth, events.createEvent);

    // Retrieve Event
    router.get("/user/:id", events.getEventByUserId);

    // Set Event
    router.put("/setEventPicture", checkAuthAndAdmin, events.updateEventPicture);

    // Set Event
    router.put("/setEventPresentation", checkAuthAndAdmin, events.updateEventPresentation);

    // Delete Event with id
    router.delete("/:id", checkAuthAndAdmin, events.deleteEvent);

    // Create new Menu
    router.post("/Menu", checkAuthAndAdmin, events.createMenu);

    // Update Menu
    router.put("/Menu", checkAuthAndAdmin, events.updateMenu);

    // Retrieve Menu
    router.get("/Menu/:id", events.getMenu);

    // Delete Menu with id
    router.delete("/Menu/:id", checkAuthAndAdmin, events.deleteMenu);

    // Create new Event
    router.post("/PlanTable", checkAuthAndAdmin, events.createPlanTable);

    // Retrieve PlanTable
    router.get("/PlanTable/:id", events.getPlanTable);

    // Delete Event with id
    router.delete("/PlanTable/:id", checkAuthAndAdmin, events.deletePlanTable);

    // Create new Invite
    router.post("/Invite", checkAuthAndAdmin, events.createInvite);

    // Set Invites
    router.put("/setInvite", checkAuthAndAdmin, events.setInvite);

    // Delete Invites with id
    router.delete("/Invite/:id", checkAuthAndAdmin, events.deleteInvite);

    app.use('/api/events', router);
};