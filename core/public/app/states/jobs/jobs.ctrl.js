angular.module('app')

    .controller('jobsCtrl', function ($scope, ModalService, hero, jobService, guildService, stepService) {

        $scope.hero = hero;
        $scope.id = $scope.hero._id;
        //console.log($scope.id);
        //
        //console.log(hero, $scope.hero);

        /*$scope.getStepped = function() {
            stepService.getSteps()
                .then(function(response) {
                    $scope.steps = response;
                    console.log(steps);
                })
        }
        
        $scope.getStepped();*/
        /*$scope.getAllSteps = function() {
            stepService.getSteps()
                .then(function(response) {
                    $scope.step = response;
                    console.log(response);
                })
        }
        $scope.getAllSteps();*/

       /* $scope.getGuilds = function(id) {
            //console.log(heroes);
            guildService.getGuilds(id)
                .then(function(response) {
                    $scope.guilds = response;
                    console.log("guilds: " + response);
                    console.log("guilds: " + $scope.guilds);
                })
        }

        $scope.getGuilds();*/
        
        $scope.getJobs = function () {
            jobService.getJobs()
                .then(function (response) {
                    $scope.jobs = response;
                })
        }

        $scope.getJobs();


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
