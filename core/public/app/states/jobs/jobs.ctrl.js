angular.module('app')
    .controller('jobsCtrl', function ($scope, ModalService, jobService, questService, hero) {

        $scope.hero = hero;

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


        $scope.acceptQuest = function (jobId, heroId) {
            questService.createQuest({_job: jobId, _hero: heroId})
        }

        $scope.editJob = function(jobId, heroId) {
            jobService.editJob({_job:jobId, _hero:heroId})
        }

        $scope.deleteJob = function(jobId) {
            jobService.deleteJob(jobId)
        }


    });