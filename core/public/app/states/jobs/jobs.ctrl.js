angular.module('app')

    .controller('jobsCtrl', function ($scope, ModalService, hero, jobService, guildService) {

        $scope.hero = hero;
        $scope.id = $scope.hero._id;

        $scope.publicJobs = [];
        $scope.privateJobs = [];
        $scope.guildJobs = [];

        $scope.getJobs = function () {
            jobService.getJobs()
                .then(function (response) {
                    $scope.jobs = response;
                    console.log(response);

                    for (var i = 0; i < $scope.jobs.length; i++) {
                        if ($scope.jobs[i].public === false){
                            $scope.privateJobs.push($scope.jobs[i]);

                        }
                        //$scope.jobs[i].public === true) &&
                        else if (($scope.jobs[i]._guild.length > 0)) {
                            $scope.guildJobs.push($scope.jobs[i]);

                        }
                        else {
                            $scope.publicJobs.push($scope.jobs[i]);

                        }

                    }
                    console.log($scope.privateJobs);
                    console.log($scope.guildJobs);
                    console.log($scope.publicJobs);
                })
        }

        $scope.getJobs();

        $scope.getJobs = function () {
            jobService.getJobs()
                .then(function (response) {
                $scope.jobs = response;
                    for (var i = 0; i < $scope.jobs.length; i++) {
                        if ($scope.jobs[i]._guild.length === 0) {
                            $scope.jobs.splice(i, 1);
                        }
                    }
                })
        }

        $scope.getJobs();


        $scope.openPostJobModal = function () {
            ModalService.showModal({
                templateUrl: "./app/modals/postjobs/postjobModal.ctrl.html",
                controller: "postjobCtrl",
                inputs: {hero: $scope.hero, guilds: $scope.guilds}
            }).then(function (modal) {
                modal.close.then(function (then) {
                    $scope.getJobs();
                });
            });
        };

    });
