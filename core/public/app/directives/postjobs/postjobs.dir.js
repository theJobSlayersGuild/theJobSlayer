angular.module('app')
    .directive('dirJobListing', function () {
        return {
            restrict: 'AE',
            templateUrl: './app/directives/postjobs/postjobs.dir.html',
            scope: {
                job: '=',
                hero: '=',
                guilds: '='
            },

            controller: function ($scope, jobService, questService, ModalService, stepService, guildService) {

                $scope.id = $scope.hero._id;


                console.log("array2 test" + $scope.array2);

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

                console.log(jobGuilds);


                
                $scope.getAllSteps = function () {
                    stepService.getSteps()
                        .then(function (response) {
                            $scope.stepsId = response;
                        })
                }
                $scope.getAllSteps();

                $scope.acceptQuest = function (jobId, heroId, stepsId) {
                    questService.createQuest({_job: jobId, _hero: heroId, _steps: stepsId})
                    alert("Quest Accepted");
                }

                $scope.editJob = function (jobId, heroId) {
                    jobService.editJob({_job: jobId, _hero: heroId})
                }

                $scope.deleteJob = function (jobId) {
                    jobService.deleteJob(jobId)
                    $scope.getJobs();
                }

                $scope.openEditJobModal = function (job) {
                    console.log(job, $scope.job);
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
    });

