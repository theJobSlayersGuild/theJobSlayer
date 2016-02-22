var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var session = require('express-session');
var passport = require('passport');
var localPassport = require('passport-local');

var app = express();
app.use(bodyParser.json());

var mongoUri = "mongodb://localhost:27017/theJobSlayer";
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log("Mongoing like a boss")
})

app.use(express.static(__dirname + '/public'));


// CONTROLLERS
var heroCtrl = require('./controllers/heroCtrl')
var jobCtrl = require('./controllers/jobCtrl')
var guildCtrl = require('./controllers/guildCtrl')
var questCtrl = require('./controllers/questCtrl')
var stepCtrl = require('./controllers/stepCtrl')
var resourceCtrl = require('./controllers/resourceCtrl')


//ENDPOINTS
                //AUTHENTICATION
app.post('api/hero/signUp', heroCtrl.createHero)
app.post('api/hero/login', heroCtrl.loginHero)

                //HERO
app.get('api/hero/:id', heroCtrl.getHero)
app.put('api/hero/:id', heroCtrl.editHero)
app.delete('api/hero/:id', heroCtrl.deleteHero)

                //JOB
app.post('api/job/new', jobCtrl.createJob)
app.get('api/job/:id', jobCtrl.getJobs)
app.put('api/job/:id', jobCtrl.editJob)
app.delete('api/job/:id', jobCtrl.deleteJob)

                //GUILD
app.post('api/guild/new', guildCtrl.createGuild)
app.get('api/guild/:id', guildCtrl.getGuild)
app.put('api/guild/:id', guildCtrl.editGuild)
app.delete('api/guild/:id', guildCtrl.deleteGuild)

                //QUEST
app.post('api/quest/new', questCtrl.addQuest)
app.get('api/quest/:id', questCtrl.getQuest)
app.put('api/quest/:id', questCtrl.updateQuest)
app.delete('api/quest/:id', questCtrl.deleteQuest)

                //STEP
//app.post('api/step/new', stepCtrl.createStep)
app.get('api/step/:id', stepCtrl.getStep)
app.put('api/step/:id', stepCtrl.editStep)
app.delete('api/step/:id', stepCtrl.deleteStep)

                //RESOURCE
app.post('api/resource/new', resourceCtrl.addResource)
app.get('api/resource/:id', resourceCtrl.getResource)
app.put('api/resource/:id', resourceCtrl.editResource)
app.delete('api/resource/:id', resourceCtrl.deleteResource)


var port = 8008;
app.listen(port, function() {
    console.log('Bracking on port ' + port)
})
