const {checkAuth, checkAuthAndAdmin} = require("../config/auth");
module.exports = app => {
    const posts = require("../controlers/posts.controlers.js");

    const router = require("express").Router();

    // Create a new Posts
    router.post("/", checkAuth, posts.createPost);

    // Retrieve all Posts
    router.post("/event/:id", checkAuth, posts.getAllPost);

    // Change Picture of Post
    router.post("/setter", checkAuthAndAdmin, posts.setPictureOfPost)

    //reported post
    router.post("/report", checkAuth, posts.reportedPost)

    // Delete a Posts with id
    router.put("/Delete-Post/:id", checkAuthAndAdmin, posts.deletePost);

    app.use('/api/posts', router);
};