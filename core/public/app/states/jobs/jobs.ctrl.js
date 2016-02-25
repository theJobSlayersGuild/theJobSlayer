angular.module('app')

    .controller('jobsCtrl', function ($scope, ModalService, hero, jobService, guildService) {

        $scope.hero = hero;

        $scope.getJobs = function () {
            jobService.getJobs()
                .then(function (response) {
                    $scope.jobs = response;
                })
        }

        $scope.getJobs();

        /*$scope.getGuilds = function(hero) {
            console.log(hero);
           $scope.guilds =  guildService.getGuilds(hero)
        }

        $scope.getGuilds();*/

        $scope.openPostJobModal = function () {
            ModalService.showModal({
                templateUrl: "./app/modals/postjobs/postjobModal.ctrl.html",
                controller: "postjobCtrl",
                inputs: {hero: $scope.hero}
            }).then(function (modal) {
                modal.close.then(function (then) {
                });
            });
        };

    });
