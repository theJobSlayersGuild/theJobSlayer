angular.module("app").controller("postjobCtrl", function($scope, jobService, questService, close, hero) {
    $scope.close = close;

    $scope.hero = hero;

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
        public: null
    };
    $scope.getJobs = function () {
        jobService.getJobs()
            .then(function (response) {
                $scope.jobs = response;
            })
    }

    $scope.addSkill = function(skill) {
        $scope.job.skillsRequired.push(skill);
    }

    $scope.removeSkill = function(skill) {
        var skillToRemove = $scope.job.skillsRequired.indexOf(skill);
        console.log($scope.job.skillsRequired.splice(skillToRemove,1));
    }

    $scope.createQuest = function(job) {
        $scope.job._author = $scope.hero._id;
        jobService.createJob(job)
        $scope.getJobs();
    }


});