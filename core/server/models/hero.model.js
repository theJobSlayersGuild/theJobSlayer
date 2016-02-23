var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var heroSchema = mongoose.Schema({

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

heroSchema.pre('save', function(next) {
  var hero = this;
  if (!hero.isModified('password')) return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(hero.password, salt);
  hero.password = hash;
  return next(null, hero);
});

heroSchema.methods.verifyPassword = function(reqBodyPassword) {
  var hero = this;
  return bcrypt.compareSync(reqBodyPassword, hero.password);
};

module.exports = mongoose.model('Hero', heroSchema);
