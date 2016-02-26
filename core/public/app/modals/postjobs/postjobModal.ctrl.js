angular.module("app").controller("postjobCtrl", function ($scope, jobService, questService, close, hero, guildService, stepService) {
    $scope.close = close;

    $scope.hero = hero;
    $scope.id = hero._id;
    $scope.guildsAdded = [];

    $scope.job = {
        companyName: null,
        companyUrl: null,
        skillsRequired: [],
        position: null,
        location: {
            city: null,
            state: null,
        },
        descriptionUrl: null,
        summary: null,
        contact: {
            name: null,
            email: null,
            phone: null,
        },
        salary: null,
        equity: null,
        positionType: null,
        public: null,
        _guild: []
    };

    $scope.getguild = function () {
        guildService.getGuildsByMember($scope.id)
            .then(function (response) {
                $scope.guilds = response;
                console.log(response);
            })
    }

    $scope.getguild();

    $scope.addGuildToJobGuildArray = function(guildId, guildName) {
        console.log(guildName, guildId);
        $scope.job._guild.push(guildId);
        $scope.guildsAdded.push(guildName);
    }

    $scope.removeGuildFromJobGuildArray = function(guildId, guildName) {
        console.log(guildName, guildId);

        var guildNameToRemove = $scope.guildsAdded.indexOf(guildName);
        $scope.guildsAdded.splice(guildNameToRemove, 1);

        var guildIdToRemove = $scope.job._guild.indexOf(guildId);
        $scope.job._guild.splice(guildIdToRemove, 1);
    }


    $scope.getJobs = function () {
        jobService.getJobs()
            .then(function (response) {
                $scope.jobs = response;
            })
    }

    $scope.addSkill = function (skill) {
        $scope.job.skillsRequired.push(skill);
    }

    $scope.removeSkill = function (skill) {
        var skillToRemove = $scope.job.skillsRequired.indexOf(skill);
        console.log($scope.job.skillsRequired.splice(skillToRemove, 1));
    }

    $scope.createQuest = function (job) {
        $scope.job._author = $scope.hero._id;
        jobService.createJob(job)
        $scope.getJobs();

    }


});