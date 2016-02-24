var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var heroSchema = mongoose.Schema({

    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, default: "the Barbarian" },
    profileImage: { type: String, default: "./assets/images/angry_unicorn.png" },
    dateCreated: { type: Date, default: new Date() },
    xp: { type: Number, default: 0 },
    level: { type: Number, default: 1 },
    equipment: {
      resume: {
        name: { type: String, default: 'Resume' },
        url: { type: String },
        done: { type: Boolean }
      },
      linkedin: {
        name: { type: String, default: 'LinkedIn' },
        url: { type: String },
        done: { type: Boolean }
      },
      portfolioSite: {
      name: { type: String, default: 'Portfolio' },
      url: { type: String },
      done: { type: Boolean }
      },
      meetups: { type: Number, default: 0 },
      skills: [{ type: String }],
      projects: [{
        name: { type: String },
        url: { type: String }
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
