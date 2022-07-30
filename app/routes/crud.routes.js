module.exports = app => {

    const crud = require("../controllers/crud.controller.js");

    const router = require("express").Router();

    router.post("/:document", crud.create);
    router.get("/:document", crud.findAll);
    router.get("/:document/:id", crud.findOne);
    router.put("/:document/:id", crud.update);
    router.delete("/:document/:id", crud.delete);
    router.delete("/:document", crud.deleteAll);

    app.use('/crud/', router);
};