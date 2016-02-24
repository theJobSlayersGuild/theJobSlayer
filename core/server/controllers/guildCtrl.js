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

    readGuild: function (req, res) {
        Guild.find(req.query)
        .populate('_guildMaster')
        .populate('_guildMembers')
        .exec(function(err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    },

    updateGuild: function (req, res) {
        Guild.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
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
