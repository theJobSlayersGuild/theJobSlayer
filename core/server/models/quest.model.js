var mongoose = require('mongoose');

var questSchema = mongoose.Schema({

    _hero: {type: mongoose.Schema.Types.ObjectId, ref: 'Hero'}
  , _job: {type: mongoose.Schema.Types.ObjectId, ref: 'Job'}
  , progress: [{
      _step: {type: mongoose.Schema.Types.ObjectId, ref: 'Step'}
    , completed: {type: Boolean, default: false}
    }]
  , completed: {type: Boolean, default: false}

});

module.exports = mongoose.model('Quest', questSchema);
