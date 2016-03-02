angular.module('app')
    .directive('dirJobListing', function () {
        return {
            restrict: 'AE',
            templateUrl: './app/directives/postjobs/postjobs.dir.html',
            scope: {
                job: '=',
                hero: '=',
                getQuests: '&'
            },

            controller: function ($scope, jobService, questService, ModalService, stepService, guildService, xpService) {

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
                      xpService.addAndUpdate($scope.hero, 10);
                      $scope.getQuests();
                    });
                };

                $scope.editJob = function (jobId, heroId) {
                    jobService.editJob({_job: jobId, _hero: heroId});
                };

                $scope.deleteJob = function (jobId) {
                    jobService.deleteJob(jobId);
                    $scope.getQuests();
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
