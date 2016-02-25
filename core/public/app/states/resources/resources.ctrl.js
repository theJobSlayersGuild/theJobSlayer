app.controller('resourcesCtrl', function ($scope, resourceService, ModalService, hero) {

    $scope.hero = hero;
    
     $scope.getResources = function () {
            resourceService.getResources().then(function(response) {
            $scope.resources = response;
            })
        }
    
    $scope.getResources();
         
    $scope.deleteResource = function () {
        resourceService.deleteResource().then(function (response) {
            alert("Resource Deleted!")
        })
    }
   
    
     $scope.openNewResourceModal = function() {

        ModalService.showModal({
            templateUrl: "./app/modals/newResource/newResource.ctrl.html",
            controller: "newResourceCtrl",
            inputs: {hero: hero}
        }).then(function (modal) {
            modal.close.then(function (then) {
            });
        });
    };
});