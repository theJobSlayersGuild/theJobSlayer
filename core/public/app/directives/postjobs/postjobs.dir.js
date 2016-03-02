angular.module('app')
    .directive('dirJobListing', function () {

            return {
                restrict: 'AE',
                templateUrl: './app/directives/postjobs/postjobs.dir.html',
                scope: {
                    job: '=',
                    hero: '=',
                    getQuests: '&',
                },

                controller: function ($scope, jobService, questService, ModalService, stepService, guildService) {

                    $scope.id = $scope.hero._id
                    $scope.jobIds = [];
                    $scope.guildIds = [];


                    $scope.getguild = function () {
                        guildService.getGuildsByMember($scope.id)
                            .then(function (response) {
                                $scope.guilds = response;
                                for (var i = 0; i < $scope.guilds.length; i++) {
                                    var guild = $scope.guilds[i];
                                    for (var j = 0; j < stepService.length; j++) {
                                        var obj = stepService[j];
                                    }
                                    $scope.guildIds.push(guild._id);
                                }
                            })
                    }

                    $scope.getguild();

                    $scope.getAllSteps = function () {
                        stepService.getSteps()
                            .then(function (response) {
                                $scope.stepsId = response;
                            })
                    }
                    $scope.getAllSteps();

                    $scope.acceptQuest = function (jobId, heroId, stepsId) {
                        questService.createQuest({_job: jobId, _hero: heroId, _steps: stepsId})
                            .then(function () {
                                $scope.getQuests();
                            });

                    }

                    $scope.editJob = function (jobId, heroId) {
                        jobService.editJob({_job: jobId, _hero: heroId})
                    }

                    $scope.deleteJob = function (jobId) {
                        console.log("deleting job");
                        jobService.deleteJob(jobId)
                            .then(function(response) {
                                console.log("job deleted");
                                $scope.getQuests();
                            })
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
            }

        }
    );

