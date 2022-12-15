module.exports = app => {
    const users = require("../controlers/users.controlers.js");
  
    var router = require("express").Router();
  
    // Create a new Users
    router.post("/", users.create);

    // Set Users PhotUrl
    router.post("/photoUrl", users.setPhotoUrl);

    // Retrieve all Users
    router.get("/", users.getAll);

    // Retrieve User by id
    router.get("/:id", users.getUserById);

    // Retrieve listOfLikePost
    router.get("/likesPost/:id", users.getLikesPosts);

    // Add posts in listOfLikePost
    router.post("/likesPost", users.addLikesPost);

    // delete posts in listOfLikePost
    router.post("/dislikesPost", users.dislikesPost);

    // Retrieve listOfLikeComment
    router.get("/likesComment/:id", users.getLikesComments);

    // Add comments in listOfLikeComment
    router.post("/likesComment", users.addLikesComment);

    // delete comments in listOfLikeComment
    router.post("/dislikesComment", users.dislikesComment);
  
    // Delete a Users with id
    router.delete("/:id", users.delete);
  
    app.use('/api/users', router);
  };