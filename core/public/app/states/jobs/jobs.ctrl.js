angular.module('app')

    .controller('jobsCtrl', function ($scope, ModalService, hero, jobService, xpService, guildService) {


        $scope.hero = hero;
        $scope.id = $scope.hero._id;
        $scope.guildIds = [];
        $scope.publicJobs = [];
        $scope.privateJobs = [];
        $scope.guildJobs = [];
        $scope.realGuildJobs = [];

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


        $scope.getPrivateAndPublic = function() {
            console.log("Pub and Private Jobs");
            jobService.getPrivateAndPublic($scope.guildIds, $scope.id)
                .then(function(response) {
                    console.log("pandB" + response);
                })
        }


        /*$scope.getJobs = function () {
            jobService.getJobs()

                .then(function (response) {
                    $scope.jobs = response;

                    for (var i = 0; i < $scope.jobs.length; i++) {
                        if (($scope.jobs[i].public === false) && ($scope.id === $scope.jobs[i]._author)) {
                            $scope.privateJobs.push($scope.jobs[i]);

                        } else if (($scope.jobs[i].public === false) && ($scope.id !== $scope.jobs[i]._author)) {
                            $scope.jobs.splice(i, 1);
                        }

                        else if (($scope.jobs[i]._guild.length > 0)) {
                            $scope.guildJobs.push($scope.jobs[i]);

                        }
                        else {
                            $scope.publicJobs.push($scope.jobs[i]);

                        }

                    }
                    //console.log($scope.privateJobs);
                    //console.log($scope.guildJobs);
                    //console.log($scope.publicJobs);
                })
        }

        $scope.getJobs();*/


        $scope.openPostJobModal = function () {
            ModalService.showModal({
                templateUrl: "./app/modals/postjobs/postjobModal.ctrl.html",
                controller: "postjobCtrl",
                inputs: {hero: $scope.hero, guilds: $scope.guilds}
            }).then(function (modal) {
                xpService.addAndUpdate($scope.hero, 10);
                modal.close.then(function (then) {
                    $scope.getJobs();
                });
            });
        };

    });
