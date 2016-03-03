var mongoose = require('mongoose');

var guildSchema = mongoose.Schema({

    name: {type: String, required: true}
    , _guildMaster: {type: mongoose.Schema.Types.ObjectId, ref: 'Hero', required: true}
    , _guildMembers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Hero'}]
    , jobs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Job'}]
});

module.exports = mongoose.model('Guild', guildSchema);
