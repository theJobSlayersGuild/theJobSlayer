var Guild = require('../models/guild.model.js');

module.exports = {
    createGuild: function (req, res) {
        Guild.create(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    },

    readGuildMembers: function (req, res) {

        Guild.find(req.query).select('_id name _guildMaster jobs').populate('jobs', null, {archived: false}).exec(function (err, results) {
            if (err) {
                res.status(500).send(err);
            }
            Guild.find({_guildMaster: req.query._guildMembers}).select('_id name _guildMaster jobs').populate('jobs', null, {archived: false}).exec(function (err, guilds) {
                if (err) {
                    res.status(500).send(err);
                }
                /*find all members put in results array find guild masters put in results2 array combine arrays*/
                results = results.concat(guilds);

                res.status(200).send(results);
            });
        });
    },


    readGuild: function (req, res) {
        Guild.find(req.query)
            .populate('_guildMaster')
            .populate('_guildMembers')
            .exec(function (err, result) {
                if (err) {
                    res.status(500).send(err);
                }
                res.status(200).send(result);
            });
    },

    updateGuild: function (req, res) {
        Guild.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    },

    leaveGuild: function (req, res) {
      console.log(req.body);
        Guild.findByIdAndUpdate(req.query._id, {
          $pullAll: {
            _guildMembers: req.body.members
          }
        })
        .exec(function (err, result) {
          console.log(result);
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    },

    deleteGuild: function (req, res) {
        Guild.findByIdAndRemove(req.params.id, function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    }


};
