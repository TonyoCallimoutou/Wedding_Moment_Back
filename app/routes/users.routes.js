const users = require("../controlers/users.controlers");
const {checkAuthAndAdmin} = require("../config/auth");
module.exports = app => {
    const users = require("../controlers/users.controlers.js");

    const router = require("express").Router();

    // Create a new Users
    router.post("/", users.createUser);

    // Set Users PhotUrl
    router.put("/userVerified", checkAuthAndAdmin,  users.setVerified);

    // Set Users PhotUrl
    router.put("/photoUrl", checkAuthAndAdmin, users.setPhotoUrl);

    // Set UsersName
    router.put("/userName", checkAuthAndAdmin, users.setUserName);

    // Retrieve User by id
    router.get("/:id", users.getUserById);

    // Retrieve listOfLikePost
    router.get("/reactPost/:id", checkAuthAndAdmin, users.getReactPosts);

    // Add posts in listOfLikePost
    router.post("/reactPost", checkAuthAndAdmin, users.addReactPost);

    // delete posts in listOfLikePost
    router.post("/unReactPost", checkAuthAndAdmin, users.unReactPost);

    // Retrieve Notification
    router.get("/notification", checkAuthAndAdmin, users.getNotification);

    // Delete a Users with id
    router.delete("/:id", checkAuthAndAdmin, users.deleteUser);

    app.use('/api/users', router);
};