angular.module('app')
    .directive('dirJobListing', function () {

            return {
                restrict: 'AE',
                templateUrl: './app/directives/postjobs/postjobs.dir.html',
                scope: {
                    job: '=',
                    hero: '=',
                    getQuests: '&',
                    /*guilds: '='*/
                },

                controller: function ($scope, jobService, questService, ModalService, stepService, guildService) {

                    $scope.id = $scope.hero._id
                    $scope.jobIds = [];
                    $scope.guildIds = [];

                    /*$scope.getJobsByGuild = function () {
                     console.log($scope.guildIds);
                     jobService.getJobByGuild($scope.guildIds)
                     .then(function (response) {
                     $scope.guildJobs = response;
                     console.log($scope.guildJobs);
                     })
                     }*/

                    /*$scope.getJobs = function () {
                     jobService.getJobs()
                     .then(function (response) {
                     $scope.jobs = response;
                     //console.log(response);
                     for (var i = 0; i < $scope.jobs.length; i++) {
                     if ($scope.jobs[i]._guild.length !== -1 || undefined || null) {
                     $scope.jobs.splice(i, 1);
                     }
                     }
                     })
                     }

                     $scope.getJobs();*/


                    $scope.getguild = function () {
                        guildService.getGuildsByMember($scope.id)
                            .then(function (response) {
                                $scope.guilds = response;
                                console.log(response);
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

                    /*console.log("array2 test" + $scope.array2);
=======
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
                    $scope.getJobs();
                };
>>>>>>> development

                     function difference(a1, a2) {
                     console.log(a1, a2);
                     var result = [];
                     for (var i = 0; i < a1.length; i++) {
                     if (a2.indexOf(a1[i]) === -1) {
                     result.push(a1[i]);
                     }
                     }
                     return result;
                     }

                     var jobGuilds = difference($scope.array1, $scope.array2)

                     console.log(jobGuilds);*/

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

                    //$scope.deleteJob = function (jobId) {
                    //    jobService.deleteJob(jobId)
                    //    //$scope.getJobsByGuild();
                    //}
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
            }

        }
    );

