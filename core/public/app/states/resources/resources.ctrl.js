
app.controller('resourcesCtrl', function ($scope, resourceService, ModalService, hero) {

    $scope.hero = hero;
    console.log($scope.hero);


    $scope.getResources = function () {
        resourceService.getResources().then(function(response) {
            $scope.resources = response;
        })
    }
    
    $scope.getResources();
    
     $scope.openNewResourceModal = function() {
        ModalService.showModal({
            templateUrl: "./app/modals/newResource/newResource.ctrl.html",
            controller: "newResourceCtrl",
            inputs: {hero: hero}
         }).then(function(modal) {
      modal.close.then(function(then) {
        });
        });
    };
});