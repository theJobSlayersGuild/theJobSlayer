var mongoose = require('mongoose');

var HeroSchema = mongoose.Schema({

    email: { type: String }
  , password: { type: String }
  , name: { type: String }
  , dateCreated: { type: Date, default: new Date() }
  , xp: { type: Number }
  , level: { type: Number }
  , equipment: {
      resume: { type: String }
    , linkedin: { type: String }
    , portfolioSite: { type: String }
    , meetups: { type: Number }
    , skills: [{ type: String }]
    , projects: [{
        name: { type: String }
      , url: { type: String }
      }]
    }
});

module.exports = mongoose.model('Hero', HeroSchema);
