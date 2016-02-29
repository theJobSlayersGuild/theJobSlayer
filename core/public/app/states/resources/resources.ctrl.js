app.controller('resourcesCtrl', function ($scope, resourceService, ModalService, hero, xpService) {

    $scope.hero = hero;


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
