var mongoose = require('mongoose');

var questSchema = mongoose.Schema({

    _hero: { type: mongoose.Schema.Types.ObjectId, ref: 'Hero', required: true }
  , _job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true }
  , progress: [{ //describes how many specific steps have been completed
      _step: { type: mongoose.Schema.Types.ObjectId, ref: 'Step', required: true } //individual step
    , completed: { type: Boolean, default: false, required: true }
    }]
  , completed: { type: Boolean, default: false, required: true }

});

module.exports = mongoose.model('Quest', questSchema);
