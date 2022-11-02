module.exports = app => {
    const pictures = require("../controlers/pictures.controlers.js");
  
    var router = require("express").Router();
  
    // Create a new Pictures
    router.post("/", pictures.create);
  
    // Retrieve all Pictures
    router.get("/", pictures.getAll);

    // Retrieve Pictures by id
    router.get("/:id", pictures.getPictureById);
  
    // Delete a Pictures with id
    router.delete("/:id", pictures.delete);
  
    app.use('/api/pictures', router);
  };