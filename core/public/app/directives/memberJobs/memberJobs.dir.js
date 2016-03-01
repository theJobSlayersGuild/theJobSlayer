angular.module('app')
    .directive('dirMemberJobListing', function () {
        return {
            restrict: 'AE',
            templateUrl: './app/directives/memberJobs/memberJobs.dir.html',
            scope: {
                job: '=',
                hero: '=',
                getQuests: '&'
            },

            controller: function ($scope, jobService, questService, ModalService, stepService, guildService) {

                $scope.getAllSteps = function () {
                    stepService.getSteps()
                        .then(function (response) {
                            $scope.stepsId = response;
                        });
                };
                $scope.getAllSteps();

                $scope.acceptQuest = function (jobId, heroId, stepsId) {
                    questService.createQuest({_job: jobId, _hero: heroId, _steps: stepsId})
                    .then(function() {
                      $scope.getQuests();
                    });
                };

                $scope.editJob = function (jobId, heroId) {
                    jobService.editJob({_job: jobId, _hero: heroId});
                };

                $scope.deleteJob = function (jobId) {
                    jobService.deleteJob(jobId);
                    $scope.getJobs();
                };

                $scope.openEditJobModal = function (job) {
                    ModalService.showModal({
                        templateUrl: "./app/modals/editjobs/editjobModal.ctrl.html",
                        controller: "editjobCtrl",
                        inputs: {hero: $scope.hero, job: job}
                    }).then(function (modal) {
                        modal.close.then(function (then) {
                        });
                    });
                };
            }
        };
    });
