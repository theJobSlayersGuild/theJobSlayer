angular.module('app')

    .controller('jobsCtrl', function ($scope, ModalService, hero, jobService, xpService) {

        $scope.hero = hero;
        $scope.id = $scope.hero._id;


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
