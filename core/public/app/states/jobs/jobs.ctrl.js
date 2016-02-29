angular.module('app')

    .controller('jobsCtrl', function ($scope, ModalService, hero, jobService, guildService) {

        $scope.hero = hero;
        $scope.id = $scope.hero._id;
        $scope.guilds = [];

        $scope.getJobs = function () {
            jobService.getJobs()
                .then(function (response) {
                    $scope.jobs = response;
                })
        }

        $scope.getJobs();

        $scope.getguild = function () {
            guildService.getGuildsByMember($scope.id)
                .then(function (response) {
                    $scope.guilds = response;
                    console.log($scope.guilds);
                })
        }

        $scope.getguild();

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
