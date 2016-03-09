angular.module('app')

    .controller('jobsCtrl', function ($scope, ModalService, hero, jobService, xpService, guildService, questService) {


        $scope.hero = hero;
        $scope.id = $scope.hero._id;
        $scope.guildIds = [];
        $scope.realGuildJobs = [];
        $scope.privateJobs = [];
        $scope.publicJobs = [];
        $scope.publicAndPrivateJobs = [];
        $scope.allJobs = [];
        $scope.currentQuests = [];
        $scope.guildJobs = [];

        $scope.xpGainedNum = 0;
        $scope.applyAnimation = false;

        var animateXp = function (resetTime, xpGainedNum) {
          $scope.applyAnimation = false;
          $scope.applyAnimation = true;
          $scope.xpGainedNum = xpGainedNum;
          setTimeout(function(){
            $scope.applyAnimation = false;
            $scope.$apply();
          }, resetTime);
        };

        $scope.getguild = function () {
            guildService.getGuildsByMember($scope.id)
                .then(function (response) {
                    $scope.guilds = response;
                    for (var i = 0; i < $scope.guilds.length; i++) {
                        for (var j = 0; j < $scope.guilds[i].jobs.length; j++) {
                            $scope.realGuildJobs.push($scope.guilds[i].jobs[j]);
                        }
                        $scope.guildIds.push($scope.guilds._id);
                    }
                    $scope.getPrivateAndPublic();
                });
        };

        $scope.getguild();

        $scope.getPrivateAndPublic = function () {
            jobService.getPubAndPrivateJobs($scope.guildIds, $scope.id)
                .then(function (response) {
                    $scope.publicAndPrivateJobs = $scope.privateJobs.concat($scope.publicJobs);
                    $scope.privateJobs = response.private;
                    $scope.publicJobs = response.public;
                    $scope.publicAndPrivateJobs = $scope.publicJobs.concat($scope.privateJobs);
                    $scope.allJobs = $scope.publicAndPrivateJobs.concat($scope.realGuildJobs);
                    $scope.getCurrentHeroQuests();
                });
        };

        $scope.getCurrentHeroQuests = function () {
            questService.getQuests($scope.id)
                .then(function (response) {
                    $scope.currentQuests = response;
                    for (var i = 0; i < $scope.currentQuests.length; i++) {
                        for (var j = 0; j < $scope.allJobs.length; j++) {
                            if ($scope.currentQuests[i]._job._id === $scope.allJobs[j]._id) {
                                $scope.allJobs[j].accepted = true;
                            }
                        }
                    }
                });
        };


        $scope.openPostJobModal = function () {
            ModalService.showModal({
                templateUrl: "./app/modals/postjobs/postjobModal.ctrl.html",
                controller: "postjobCtrl",
                inputs: {hero: $scope.hero, guilds: $scope.guilds}
            }).then(function (modal) {
                modal.close.then(function (then) {
                    $scope.getguild();
                });
            });
        };

    });
