const users = require("../controlers/users.controlers");
module.exports = app => {
    const users = require("../controlers/users.controlers.js");

    const router = require("express").Router();

    // Create a new Users
    router.post("/", users.createUser);

    // Set Users PhotUrl
    router.put("/userVerified", users.setVerified);

    // Set Users PhotUrl
    router.put("/photoUrl", users.setPhotoUrl);

    // Set UsersName
    router.put("/userName", users.setUserName);

    // Retrieve User by id
    router.get("/:id", users.getUserById);

    // Retrieve listOfLikePost
    router.get("/reactPost/:id", users.getReactPosts);

    // Add posts in listOfLikePost
    router.post("/reactPost", users.addReactPost);

    // delete posts in listOfLikePost
    router.post("/unReactPost", users.unReactPost);

    // Retrieve Notification
    router.get("/notification", users.getNotification);

    // Delete a Users with id
    router.delete("/:id", users.deleteUser);

    app.use('/api/users', router);
};