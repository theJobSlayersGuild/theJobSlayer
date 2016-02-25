angular.module('app')
    .directive('dirJobListing', function () {
        return {
            restrict: 'AE',
            templateUrl: './app/directives/postjobs/postjobs.dir.html',
            controller: function ($scope, jobService, questService) {

                $scope.getJobs = function () {
                    jobService.getJobs()
                        .then(function (response) {
                            $scope.jobs = response;
                        })
                }

                $scope.getJobs();

                $scope.acceptQuest = function (jobId, heroId) {
                    questService.createQuest({_job: jobId, _hero: heroId})
                }

                $scope.editJob = function (jobId, heroId) {
                    jobService.editJob({_job: jobId, _hero: heroId})
                }

                $scope.deleteJob = function (jobId) {
                    console.log(jobId);
                    jobService.deleteJob(jobId)
                    $scope.getJobs();
                }
            }
        }
    });
