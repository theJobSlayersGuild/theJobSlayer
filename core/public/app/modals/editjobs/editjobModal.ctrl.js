angular.module("app").controller("editjobCtrl", function($scope, jobService, questService, close, hero, job) {
    $scope.close = close;

    $scope.hero = hero;
    $scope.job = job;
    //$scope.job = {
    //    companyName: null,
    //    companyUrl: null,
    //    skillsRequired: [],
    //    position: null,
    //    location: {
    //        city: null,
    //        state: null,
    //    },
    //    descriptionUrl: null,
    //    summary: null,
    //    contact: {
    //        name: null,
    //        email: null,
    //        phone: null,
    //    },
    //    salary: null,
    //    equity: null,
    //    positionType: null,
    //    public: null
    //};


    $scope.addSkill = function(skill) {
        $scope.job.skillsRequired.push(skill);
    }

    $scope.removeSkill = function(skill) {
        var skillToRemove = $scope.job.skillsRequired.indexOf(skill);
    }

    

    $scope.editJobs = function(id, job) {
        jobService.editJob(id, job)
            .then(function() {
                close();
            })
    }


});