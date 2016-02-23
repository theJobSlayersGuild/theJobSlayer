var Hero = require('../models/hero.model.js');

module.exports = {
    createHero: function (req, res) {
        Hero.create(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            newHero = result.toObject();
            newHero.password = null;
            res.status(200).send(newHero);
        });
    },

    me: function(req, res) {
      if (!req.user) {
        res.status(401).send('current user not defined');
      }
      req.user.password = null;
      res.status(200).json(req.user);
    },

    readHero: function (req, res) {
        Hero.find(req.query, function(err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    },

    updateHero: function (req, res) {
        Hero.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send('user updated', result);
        });
    },

    deleteHero: function (req, res) {
        Hero.findByIdAndRemove(req.params.id, function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send('user deleted', result);
        });
    }

};
