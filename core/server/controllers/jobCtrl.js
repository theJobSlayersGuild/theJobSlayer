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

    readJobs: function (req, res) {
        Job.find(req.query, function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    },

    readPublicAndPrivateJobs: function (req, res) {
        var jobs = {
            private: [],
            public: []
        };

        Job.find({_author: req.query._id, public: false}).exec(function (err, privateJobs) {
            if (err) {
                res.status(500).send(err)
            }
            jobs.private = privateJobs;
            Job.find({public: true, _guild: {$size: 0}}).exec(function (err, publicJobs) {
                if (err) {
                    res.status(500).send(err)
                }

                /*var guilds = req.body.guilds;

                var results = [];*/

                // For every job
                /*for (var i = 0; i < publicJobs.length; i++) {
                    // For every Guild ID

                    var flag = false;
                    for (var j = 0; j < guilds.length; j++) {
                        // For every guild in job
                        for (var k = 0; k < publicJobs[k]._guild.length; k++) {
                            if (guilds[j] === publicJobs[i]._guild[k]) {
                                flag = true;
                            }
                        }
                    }
                    if (!flag) {
                        results.push(publicJobs[i]);
                    }
                }*/

                jobs.public = publicJobs;
                res.status(200).send(jobs)
            })
            //in guilds, not containing ids from array on req.body.guilds.
        })
    },


    updateJob: function (req, res) {
        Job.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
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
