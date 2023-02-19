module.exports = app => {
    const posts = require("../controlers/posts.controlers.js");

    const router = require("express").Router();

    // Create a new Posts
    router.post("/", posts.createPost);

    // Retrieve all Posts
    router.get("/event/:id", posts.getAllPost);

    // Change Picture of Post
    router.post("/setter", posts.setPictureOfPost)

    // Delete a Posts with id
    router.delete("/:id", posts.deletePost);

    app.use('/api/posts', router);
};