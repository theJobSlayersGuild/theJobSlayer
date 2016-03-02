angular.module('app')
    .directive('dirGuildJobListing', function () {
            return {
                restrict: 'AE',
                templateUrl: './app/directives/guildjobs/guildjobs.dir.html',
                scope: {
                    job: '=',
                    hero: '=',
                    getQuests: '&',
                },

                controller: function ($scope, jobService, questService, ModalService, stepService, guildService) {

                    $scope.id = $scope.hero._id

                    $scope.jobIds = [];
                    $scope.guildIds = [];


                    $scope.getPrivateAndPublic = function() {
                        jobService.getPrivateAndPublic($scope.guildIds, $scope.id)
                            .then(function(response) {
                                console.log("pandB" + response);
                            })
                    }


                    $scope.getguild = function () {
                        guildService.getGuildsByMember($scope.id)
                            .then(function (response) {
                                $scope.guilds = response;
                                console.log(response);

                                for (var i = 0; i < $scope.guilds.length; i++) {
                                    $scope.guildIds.push($scope.guilds._id);

                                    if ($scope.guilds[i].jobs > 0) {
                                        for (var j = 0; j < $scope.guilds.jobs[i].length; j++) {
                                            $scope.realGuildJobs.push($scope.guilds.jobs[i]);
                                            console.log($scope.realGuildJobs);
                                        }
                                    }

                                }
                                $scope.getPrivateAndPublic()

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
                        jobService.deleteJob(jobId)
                        $scope.getJobsByGuild();
                    }

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