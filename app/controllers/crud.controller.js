const db = require("../models");

exports.create = async (req, res) => {
    try {
        const data = await db[req.params.document].create(req.body);
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send({
            message: error.message,
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        const data = await db[req.params.document].findAll(req.body);
        res.send(data);
    } catch (error) {
        res.status(500).send({
            message: error.message,
        });
    }
};

exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await db[req.params.document].findByPk(id);
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find with id=${id}.`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: error.message,
        });
    }
};

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const num = await db[req.params.document].update(req.body, {
            where: { id: id },
        });
        if (num == 1) {
            res.send({
                message: "Updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update with id=${id}.`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: error.message,
        });
    }
};

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const num = await db[req.params.document].destroy({
            where: { id: id },
        });
        if (num == 1) {
            res.send({
                message: "Deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete with id=${id}.`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: error.message,
        });
    }
};

exports.deleteAll = async (req, res) => {
    try {
        const num = await db[req.params.document].destroy({
            where: {},
            truncate: false,
        });
        res.send({
            message: `${num} has been deleted.`,
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
        });
    }
};