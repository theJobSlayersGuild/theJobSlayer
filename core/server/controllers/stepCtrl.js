var Step = require('../models/step.model.js');

module.exports = {

    createStep: function (req, res) {
        Step.create(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        })
    },

    readStep: function (req, res) {
        Step.find(req.query, function(err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result)
        })
    },

    updateStep: function (req, res) {
        Step.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        })
    },

    deleteStep: function (req, res) {
        Step.findByIdAndRemove(req.params.id, function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        })
    }


};
