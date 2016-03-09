app.controller('resourcesCtrl', function ($scope, resourceService, ModalService, hero, xpService) {

    $scope.hero = hero;

    // $scope.xpGainedNum = 0;
    // $scope.applyAnimation = false;
    //
    // var animateXp = function (resetTime, xpGainedNum) {
    //   $scope.applyAnimation = false;
    //   $scope.applyAnimation = true;
    //   $scope.xpGainedNum = xpGainedNum;
    //   setTimeout(function(){
    //     $scope.applyAnimation = false;
    //     $scope.$apply();
    //   }, resetTime);
    // };


     $scope.getResources = function () {
            resourceService.getResources().then(function(response) {
            $scope.resources = response;
          });
        };

    $scope.getResources();

     $scope.openNewResourceModal = function() {
        ModalService.showModal({
            templateUrl: "./app/modals/newResource/newResource.ctrl.html",
            controller: "newResourceCtrl",
            inputs: {hero: $scope.hero}
        }).then(function (modal) {
            modal.close.then(function (then) {
                $scope.getResources();
            });
        });
    };


});
