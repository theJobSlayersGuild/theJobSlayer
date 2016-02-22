var mongoose = require('mongoose');

var stepSchema = mongoose.Schema({

    description: {type: String}
  , order: {type: String}

});

module.exports = mongoose.model('Step', stepSchema);
