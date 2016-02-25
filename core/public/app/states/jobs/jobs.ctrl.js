angular.module('app')
    .controller('jobsCtrl', function ($scope, hero) {

        $scope.hero = hero;


        $scope.test = 'jobsCtrl connected';

        /*  $scope.getJobs = function() {
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
         }*/

    });
