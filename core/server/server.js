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
// var resourceCtrl = require('./controllers/resourceCtrl');


//ENDPOINTS
                //AUTHENTICATION
// public.post('api/hero/signUp', heroCtrl.createHero);
// public.post('api/hero/login', heroCtrl.loginHero);

                //HERO
// public.get('api/hero/:id', heroCtrl.readHero);
// public.put('api/hero/:id', heroCtrl.updateHero);
// public.delete('api/hero/:id', heroCtrl.deleteHero);

                //JOB
// public.post('api/job/new', jobCtrl.createJob);
// public.get('api/job/:id', jobCtrl.readJobs);
// public.put('api/job/:id', jobCtrl.updateJob);
// public.delete('api/job/:id', jobCtrl.deleteJob);

                //GUILD
// public.post('api/guild/new', guildCtrl.createGuild);
// public.get('api/guild/:id', guildCtrl.readGuild);
// public.put('api/guild/:id', guildCtrl.updateGuild);
// public.delete('api/guild/:id', guildCtrl.deleteGuild);

                //QUEST
// public.post('api/quest/new', questCtrl.addQuest);
// public.get('api/quest/:id', questCtrl.readQuest);
// public.put('api/quest/:id', questCtrl.updateQuest);
// public.delete('api/quest/:id', questCtrl.deleteQuest);

                //STEP
//public.post('api/step/new', stepCtrl.createStep)
// public.get('api/step/:id', stepCtrl.readStep);
// public.put('api/step/:id', stepCtrl.updateStep);
// public.delete('api/step/:id', stepCtrl.deleteStep);

                //RESOURCE
// public.post('api/resource/new', resourceCtrl.addResource);
// public.get('api/resource/:id', resourceCtrl.readResource);
// public.put('api/resource/:id', resourceCtrl.updateResource);
// public.delete('api/resource/:id', resourceCtrl.deleteResource);


var port = config.PORT;
app.listen(port, function() {
    console.log('Bracking on port ' + port);
});
