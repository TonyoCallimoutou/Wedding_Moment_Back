const { checkAuth, checkAuthAndAdminOfEvent} = require("../config/auth");
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

    // Retrieve Event
    router.get("/code/:id", events.getEventByCode);

    // Set Event
    router.put("/setEventPicture/:id", checkAuthAndAdminOfEvent, events.updateEventPicture);

    // Set Event
    router.put("/setEventPresentation/:id", checkAuthAndAdminOfEvent, events.updateEventPresentation);

    // Delete Event with id
    router.delete("/:id", checkAuthAndAdminOfEvent, events.deleteEvent);

    // Create new Menu
    router.post("/Menu/:id", checkAuthAndAdminOfEvent, events.createMenu);

    // Update Menu
    router.put("/Menu/:id", checkAuthAndAdminOfEvent, events.updateMenu);

    // Retrieve Menu
    router.get("/Menu/:id", events.getMenu);

    // Delete Menu with id
    router.put("/Delete-Menu/:id", checkAuthAndAdminOfEvent, events.deleteMenu);

    // Create new Event
    router.post("/PlanTable/:id", checkAuthAndAdminOfEvent, events.createPlanTable);

    // Update PlanTable
    router.put("/PlanTable/:id", checkAuthAndAdminOfEvent, events.updatePlanTable);

    // Retrieve PlanTable
    router.get("/PlanTable/:id", events.getPlanTable);

    // Delete Event with id
    router.put("/Delete-PlanTable/:id", checkAuthAndAdminOfEvent, events.deletePlanTable);

    // Create new Invite
    router.post("/Invite/:id", checkAuthAndAdminOfEvent, events.createInvite);

    // Set Invites
    router.put("/setInvite:/id", checkAuthAndAdminOfEvent, events.setInvite);

    // Delete Invites with id
    router.put("/Delete-Invite/:id", checkAuthAndAdminOfEvent, events.deleteInvite);

    app.use('/api/events', router);
};