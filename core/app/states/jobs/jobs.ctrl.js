var app = angular.module('app');

app.controller('jobsCtrl', function ($scope, jobListService) {


    $scope.test = 'jobsCtrl connected';

    $scope.getJobs = function() {
        jobListService.getQuests()
            .then(function(response) {
                $scope.jobs = response;
            })
    }

    $scope.acceptJob = function(job, hero) {
        jobListService.acceptQuest({_job:job, _hero:hero})
    }

    $scope.editJob = function(job, hero) {
        jobListService
    }

});