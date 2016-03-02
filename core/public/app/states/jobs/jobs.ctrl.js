angular.module('app')

    .controller('jobsCtrl', function ($scope, ModalService, hero, jobService, xpService, guildService) {


        $scope.hero = hero;
        $scope.id = $scope.hero._id;
        $scope.guildIds = [];
        $scope.realGuildJobs = [];


        $scope.getguild = function () {
            guildService.getGuildsByMember($scope.id)
                .then(function (response) {
                    $scope.guilds = response;
                    for (var i = 0; i < $scope.guilds.length; i++) {
                        $scope.guildIds.push($scope.guilds._id);
                    }
                    $scope.getPrivateAndPublic()
                })
        }

        $scope.getguild();

        $scope.getPrivateAndPublic = function() {
            jobService.getPubAndPrivateJobs($scope.guildIds, $scope.id)
                .then(function(response) {
                    $scope.privateJobs = response.private;
                    $scope.publicJobs = response.public;
                })
        }

        $scope.openPostJobModal = function () {
            ModalService.showModal({
                templateUrl: "./app/modals/postjobs/postjobModal.ctrl.html",
                controller: "postjobCtrl",
                inputs: {hero: $scope.hero, guilds: $scope.guilds}
            }).then(function (modal) {
                xpService.addAndUpdate($scope.hero, 10);
                modal.close.then(function (then) {
                    $scope.getguild();
                });
            });
        };

    });
