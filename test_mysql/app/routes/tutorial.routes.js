module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", tutorials.create);
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
    // Retrieve all published Tutorials
    router.get("/:title/:description", tutorials.findOne);
    // Update a Tutorial with id
    router.put("/:id/:title/:description", tutorials.update);
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);
    app.use('/api/tutorials', router);
};
