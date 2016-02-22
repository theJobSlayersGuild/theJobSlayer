var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var session = require('express-session');
var passport = require('passport');
var localPassport = require('passport-local');
var config = require('./config');

var app = express();
app.use(bodyParser.json());

var mongoUri = config.MONGO_URI;
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log("Mongoing like a boss");
});

app.use(express.static(__dirname + './../public'));


// CONTROLLERS
var heroCtrl = require('./controllers/heroCtrl');
var jobCtrl = require('./controllers/jobCtrl');
var guildCtrl = require('./controllers/guildCtrl');
var questCtrl = require('./controllers/questCtrl');
var stepCtrl = require('./controllers/stepCtrl');
// var resourceCtrl = require('./controllers/resourceCtrl')



//ENDPOINTS
                //AUTHENTICATION
// public.post('api/hero/signUp', heroCtrl.createHero);
// public.post('api/hero/login', heroCtrl.loginHero);

                //HERO
app.get('api/hero', heroCtrl.readHero);
app.put('api/hero/:id', heroCtrl.updateHero);
app.delete('api/hero/:id', heroCtrl.deleteHero);

                //JOB
app.post('/api/job', jobCtrl.createJob);
app.get('/api/job', jobCtrl.readJobs);
app.put('/api/job/:id', jobCtrl.updateJob);
app.delete('/api/job/:id', jobCtrl.deleteJob);

                //GUILD
app.post('/api/guild', guildCtrl.createGuild);
app.get('/api/guild', guildCtrl.readGuild);
app.put('/api/guild/:id', guildCtrl.updateGuild);
app.delete('/api/guild/:id', guildCtrl.deleteGuild);

                //QUEST
app.post('/api/quest', questCtrl.createQuest);
app.get('/api/quest', questCtrl.readQuests);
app.put('/api/quest/:id', questCtrl.updateQuest);
app.delete('/api/quest/:id', questCtrl.deleteQuest);

                //STEP
app.post('/api/step', stepCtrl.createStep);
app.get('/api/step', stepCtrl.readStep);
app.put('/api/step/:id', stepCtrl.updateStep);
app.delete('/api/step/:id', stepCtrl.deleteStep);

                //RESOURCE
// app.post('api/resource', resourceCtrl.addResource);
// app.get('api/resource', resourceCtrl.readResources);
// app.put('api/resource/:id', resourceCtrl.updateResource);
// app.delete('api/resource/:id', resourceCtrl.deleteResource);



var port = config.PORT;
app.listen(port, function() {
    console.log('Bracking on port ' + port);
});
