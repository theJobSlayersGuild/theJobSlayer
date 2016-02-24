
app.controller('resourcesCtrl', function ($scope, resourceService, ModalService) {

    $scope.test = 'resourcesCtrl connected'
    
    $scope.getResources = function () {
        resourceService.getResources().then(function(response) {
            $scope.resources = response;
        })
    }
    
    $scope.getResources();
    
     $scope.openNewResourceModal = function() {
        ModalService.showModal({
            templateUrl: "./app/modals/newResource/newResource.ctrl.html",
            controller: "newResourceCtrl"
         }).then(function(modal) {
      modal.close.then(function(then) {
        });
        });
    };
});