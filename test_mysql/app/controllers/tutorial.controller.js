const Tutorial = require("../models/tutorial.model.js");

exports.create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    const tutorial = new Tutorial({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published || false
    });
    Tutorial.create(tutorial, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      else res.send(data);
    });
};
exports.findOne = (req, res) => {
    Tutorial.findById(req.params.title, req.params.description, (err, data) => {
      if (err == 0) {
        res.send(false);
      } else
        res.send(true);
    });
};
exports.update = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log(req.body);
    Tutorial.updateById(
      req.params.id,
      new Tutorial(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Tutorial with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Tutorial with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
};
exports.delete = (req, res) => {
    Tutorial.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Tutorial with id " + req.params.id
          });
        }
      } else res.send({ message: `Tutorial was deleted successfully!` });
    });
};
exports.deleteAll = (req, res) => {
    Tutorial.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      else res.send({ message: `All Tutorials were deleted successfully!` });
    });
};
