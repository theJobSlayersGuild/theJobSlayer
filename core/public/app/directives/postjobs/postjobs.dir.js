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
                        console.log('fired');
                        $scope.job.archived = true;
                        jobService.editJob(jobId, $scope.job)
                            .then(function(response) {
                                $scope.getQuests();
                                console.log(response);
                            })
                    };

                    $scope.openEditJobModal = function (job) {
                        ModalService.showModal({
                            templateUrl: "./app/modals/editjobs/editjobModal.ctrl.html",
                            controller: "editjobCtrl",
                            inputs: {hero: $scope.hero, job: job}
                        }).then(function (modal) {
                            modal.close.then(function (then) {
                                $scope.getQuests();
                            });
                        });
                    };
                }
            }

        }
    );

