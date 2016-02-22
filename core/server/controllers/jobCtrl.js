var Job = require('../models/job.model.js');

module.exports = {

    createJob: function (req, res) {
        Job.create(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        })
    },

    readJob: function (req, res) {
        Job.find(req.query, function(err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result)
        })
    },

    updateJob: function (req, res) {
        Job.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        })
    },

    deleteJob: function (req, res) {
        Job.findByIdAndRemove(req.params.id, function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        })
    }

};
