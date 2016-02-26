var mongoose = require('mongoose');

var questSchema = mongoose.Schema({

    _hero: { type: mongoose.Schema.Types.ObjectId, ref: 'Hero', required: true }
  , _job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true }
  , _steps: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Step', required: true }
  ]
  , progress: { type: Number, default: 0 }
  , completed: { type: Boolean, default: false, required: true }

});

module.exports = mongoose.model('Quest', questSchema);
