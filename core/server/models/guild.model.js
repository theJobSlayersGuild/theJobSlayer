var mongoose = require('mongoose');

var guildSchema = mongoose.Schema({

    name: {type: String}
  , _guildMaster: {type: mongoose.Schema.Types.ObjectId, ref: 'Hero'}
  , _guildMembers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Guild'}]

});

module.exports = mongoose.model('Guild', guildSchema);
